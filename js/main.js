let mainLinks= Array.from(document.querySelectorAll(".main-links li"));
let menu= document.querySelector(".button-icon i");
let navbar= document.querySelector("ul");
let signUp= document.querySelector(".button-icon button");
let counter= 0;

mainLinks.forEach((link) => {
  link.addEventListener("click", (eve) =>{
    mainLinks.forEach((link) => {
      link.classList.remove("active");
    })
    eve.currentTarget.classList.add("active");
  })
})

menu.onclick= function (){
  if (counter === 0){
    navbar.style.cssText= "right: 0 ; transition: 0.4s";
    signUp.style.cssText= "right: 50px ; transition: 0.4s";
    counter= 1;
  }
  else if (counter === 1){
    navbar.style.cssText= "right: -200px ; transition: 0.4s";
    signUp.style.cssText= "right: -200px ; transition: 0.4s";
    counter= 0;
  }
}

let head= document.querySelector(".headr");
let section= document.querySelector(".about .three");
let arrOFNums= document.querySelectorAll(".box .number");
let btnUp= document.querySelector(".up");
let played= false;

window.onscroll= function (){

  if (window.scrollY >= 400){
    head.style.cssText= "position: sticky ; top: 0 ; background-color: #758b8261";
    btnUp.style.cssText= "right: 2% ; transition: 0.7s";
  }
  else {
    head.style.cssText= "position: relative ; background-color: transparent";
    btnUp.style.cssText= "right: -10% ; transition: 0.7s";
  }

  if (window.scrollY >= section.offsetTop - 100){
    if (!played){
      arrOFNums.forEach((ele) => {
        let goal= ele.dataset.goal;
        let counter2= setInterval(() => {
          ele.innerHTML++;
          if (ele.innerHTML == goal){
            clearInterval(counter2);
          }
          played= true;
        },2000 / goal);
      })
    }
  }
}

btnUp.onclick= function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}