let way = document.querySelector(".way");
let car = document.querySelector(".car");
let gas = document.querySelector(".gas");
let tormz = document.querySelector(".tormz");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
gas.addEventListener("click", (e) => {
  e.preventDefault;
  way.classList.add("animation");
});
tormz.addEventListener("click", (e) => {
  e.preventDefault;
  way.classList.remove("animation");
});
left.addEventListener("click", (e) => {
  e.preventDefault;
  car.classList.add("turnleft");
});
right.addEventListener("click", (e) => {
  e.preventDefault;
  car.classList.remove("turnleft");
  
});
