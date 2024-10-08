// let slideElements = document.querySelectorAll(".slideshow-element");
// let countElement = 1;

// console.log(slideElements)

// setInterval(() => {
//   countElement++
//   let currentElement = document.querySelector(".current");

//   currentElement.classList.remove("current");

//   if (countElement > slideElements.length) {
//     slideElements[0].classList.add("current");
//     countElement = 1;
//   } else {
//     currentElement.nextElementSibling.classList.add("current");
//   }
  
// }, 1000);

let slideElements = document.querySelectorAll(".slideshow-element");
let countElement = 0; 
setInterval(() => {
 
  slideElements[countElement].classList.remove("current");
  
  countElement = (countElement + 1) % slideElements.length;
  
  slideElements[countElement].classList.add("current");

}, 1200);
