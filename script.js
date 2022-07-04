const $box = document.getElementById("js-box");

const $startButton = document.querySelector(".js-start");
const $stopButton = document.querySelector(".js-stop");
const $cancelButton = document.querySelector(".js-cancel");
const $stateButton = document.querySelector(".js-state");

// ========================================================
// Element.animate() メソッドを使ってアニメーションを再生する
//
// ======================================================
const keyframes = [
  {
    backgroundColor: "#f90351",
    offset: 0.2
  },
  {
    transform: "rotate(1turn)",
    backgroundColor: "#000"
  }
];

const options = {
  duration: 3000,
  easing: "linear", //初期値
  iterations: Infinity
};

// const boxAnimation = $box.animate(keyframes, options);

// ========================================================
// Animationオブジェクトを使って再生する
// ======================================================

//KeyFrameEffectオブジェクトを生成
const effect = new KeyframeEffect(
  $box, //アニメーション対象要素
  keyframes, //keyframesオブジェクト
  options //オプション
);

//Animationオブジェクトを生成
const boxAnimation = new Animation(effect, document.timeline);
// boxAnimation.cancel();

$startButton.addEventListener("click", () => {
  boxAnimation.play();
});
$stopButton.addEventListener("click", () => {
  boxAnimation.pause();
});
$cancelButton.addEventListener("click", () => {
  boxAnimation.cancel();
});
$stateButton.addEventListener("click", () => {
  const playState = boxAnimation.playState;
  console.log(playState);
});
