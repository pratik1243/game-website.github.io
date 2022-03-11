let character = document.getElementById("character");
let block = document.getElementById("obstacle");

function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 650);
}

let s = 0;
function score() {
  if (s == 20) {
    block.style.animationDuration = "1.5s";
  }

  let score = document.getElementById("score");
  s = s + 1;
  score.innerHTML = "score:" + s;
}
setInterval(score, 1000);

let over = setInterval(function () {
  let result = document.getElementById("result");
  let again = document.getElementById("refresh");
  let charactertop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let myblock = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (myblock < 61 && charactertop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    clearInterval(score);
    result.innerHTML = "game over your score is&nbsp" + s;
    result.style.color = "white";
    result.style.fontSize = "1.3rem";
    again.style.display = "block";
    character.style.display = "none";
  }
}, 10);

function refresh() {
  window.location.reload();
}
