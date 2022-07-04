let $box = document.getElementById("js-box");

let $startButton = document.querySelector(".js-start");
let $stopButton = document.querySelector(".js-stop");

let rotateColor = [
  { backgroundColor: "#f90351", offset: 0.2 },
  { transform: "rotate(1turn)", backgroundColor: "#000" }
];

let rotateColorTiming = {
  duration: 3000,
  easing: "linear", //初期値
  iterations: Infinity
};

let boxAnimation = $box.animate(rotateColor, rotateColorTiming);

boxAnimation.pause();

$startButton.addEventListener("click", () => {
  boxAnimation.play();
});
$stopButton.addEventListener("click", () => {
  boxAnimation.pause();
});

console.log(rotateColor);
