let $box = document.getElementById("js-box");

let $startButton = document.querySelector(".js-start");
let $stopButton = document.querySelector(".js-stop");
let $cancelButton = document.querySelector(".js-cancel");

let keyframes = [
  {
    backgroundColor: "#f90351",
    offset: 0.2
  },
  {
    transform: "rotate(1turn)",
    backgroundColor: "#000"
  }
];

let options = {
  duration: 3000,
  easing: "linear", //初期値
  iterations: Infinity
};

let boxAnimation = $box.animate(keyframes, options);

boxAnimation.pause();

$startButton.addEventListener("click", () => {
  boxAnimation.play();
});
$stopButton.addEventListener("click", () => {
  boxAnimation.pause();
});
$cancelButton.addEventListener("click", () => {
  boxAnimation.cancel();
});

console.log(rotateColor);
