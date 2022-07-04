let rotateColor = [
  { backgroundColor: "#f90351", offset: 0.2 },
  { transform: "rotate(1turn)", backgroundColor: "#000" }
];

let rotateColorTiming = {
  duration: 3000,
  easing: "linear", //初期値
  iterations: Infinity
};

let $box = document.getElementById("js-box");

$box.animate(rotateColor, rotateColorTiming);

console.log(rotateColor);
