let a = 0;
let b = 0;

function rock() {
  let result = document.getElementById("result");
  let result2 = document.getElementById("result2");
  let result3 = document.getElementById("result3");
  let score1 = document.getElementById("score1");
  let score2 = document.getElementById("score2");
  let random = Math.floor(Math.random() * 3);
  result.innerHTML = "rock";
  if (random == "2") {
    result2.innerHTML = "scissors";
  }
  if (random == "1") {
    result2.innerHTML = "paper";
  }
  if (random == "0") {
    result2.innerHTML = "rock";
  }
  if (result.innerHTML == result2.innerHTML) {
    result3.innerHTML = "it is tie!";
  } else {
    result3.innerHTML = "";
  }
  if (result.innerHTML == "rock" && result2.innerHTML == "paper") {
    result3.innerHTML = "computer wins!";
    b = b + 1;
    score2.innerHTML = b;
  }
  if (result.innerHTML == "rock" && result2.innerHTML == "scissors") {
    a = a + 1;
    score1.innerHTML = a;
    result3.innerHTML = "player wins!";
  }
}

function paper() {
  let result = document.getElementById("result");
  let result2 = document.getElementById("result2");
  let score1 = document.getElementById("score1");
  let score2 = document.getElementById("score2");

  result.innerHTML = "paper";
  let random = Math.floor(Math.random() * 3);
  if (random == "0") {
    result2.innerHTML = "scissors";
  }
  if (random == "1") {
    result2.innerHTML = "paper";
  }
  if (random == "2") {
    result2.innerHTML = "rock";
  }
  if (result.innerHTML == result2.innerHTML) {
    result3.innerHTML = "it is tie!";
  } else {
    result3.innerHTML = "";
  }
  if (result.innerHTML == "paper" && result2.innerHTML == "scissors") {
    result3.innerHTML = "computer wins!";
    b = b + 1;
    score2.innerHTML = b;
  }
  if (result.innerHTML == "paper" && result2.innerHTML == "rock") {
    result3.innerHTML = "player wins!";
    a = a + 1;
    score1.innerHTML = a;
  }
}

function scissors() {
  let result = document.getElementById("result");
  let result2 = document.getElementById("result2");
  let score1 = document.getElementById("score1");
  let score2 = document.getElementById("score2");

  result.innerHTML = "scissors";
  let random = Math.floor(Math.random() * 3);
  if (random == "2") {
    result2.innerHTML = "scissors";
  }
  if (random == "0") {
    result2.innerHTML = "paper";
  }
  if (random == "1") {
    result2.innerHTML = "rock";
  }
  if (result.innerHTML == result2.innerHTML) {
    result3.innerHTML = "it is tie!";
  } else {
    result3.innerHTML = "";
  }
  if (result.innerHTML == "scissors" && result2.innerHTML == "rock") {
    result3.innerHTML = "computer wins!";
    b = b + 1;
    score2.innerHTML = b;
  }
  if (result.innerHTML == "scissors" && result2.innerHTML == "paper") {
    result3.innerHTML = "player wins!";
    a = a + 1;
    score1.innerHTML = a;
  }
}
