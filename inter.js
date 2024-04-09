const colors = [
  "green",
  "red",
  "cyan",
  "purple",
  "orange",
  "yellow",
  "grey",
  "brown",
  "whitesmoke",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNuber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent=colors[randomNumber]
  
});

function getRandomNuber() {
  return Math.floor(Math.random()* colors.length);
  
}
