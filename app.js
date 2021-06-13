//Movement Animation to happen
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".cardContainer");
//Items
const title = document.querySelector(".title");
const photoContainer = document.querySelector(".photoContainer img");
const cta = document.querySelector(".cta");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
cardContainer.addEventListener("mousemove", (e) => {
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
  let xAxis = (window.innerHeight / 2 - e.pageX) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
cardContainer.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  photoContainer.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  cta.style.transform = "translateZ(75px)";
});
//Animate Out
cardContainer.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  photoContainer.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  cta.style.transform = "translateZ(0px)";
});