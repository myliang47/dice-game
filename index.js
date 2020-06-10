var playImg = document.querySelector(".play-img");
var showRefreshButton = false;

function playHover() {
  playImg.style.width = "4.3rem";
  playImg.style.height = "auto";
}

function playNonHover() {
  playImg.style.width = "4rem";
  playImg.style.height = "auto";
}

playImg.addEventListener("touchstart", playHover);
playImg.addEventListener("touchend", playNonHover);
playImg.addEventListener("mouseover", playHover);
playImg.addEventListener("mouseout", playNonHover);

playImg.addEventListener("click", playClicked);

var randNum1, randNum2, newDiceImage1, newDiceImage2, dice1, dice2;
var player1Wins = false;
var player2Wins = false;
var tie = false;

function playClicked() {

  playImg.removeEventListener("touchstart", playHover);
  playImg.removeEventListener("touchend", playNonHover);
  playImg.removeEventListener("mouseover", playHover);
  playImg.removeEventListener("mouseout", playNonHover);

  randNum1 = Math.floor(Math.random() * 6) + 1;
  randNum2 = Math.floor(Math.random() * 6) + 1;

  newDiceImage1 = "images/dice" + randNum1 + ".png";
  newDiceImage2 = "images/dice" + randNum2 + ".png";

  dice1 = document.querySelector(".dice1");
  dice2 = document.querySelector(".dice2");

  dice1.setAttribute("src", newDiceImage1);
  dice2.setAttribute("src", newDiceImage2);
  dice1.setAttribute("alt", "dice-" + randNum1 + "-dot");
  dice2.setAttribute("alt", "dice-" + randNum2 + "-dot");

  if (showRefreshButton == false) {
    document.getElementById("title-game").remove();
  }

  if (randNum1 > randNum2) {
    player1Wins = true;
    document.querySelector("h1").innerText = "🔥 Player 1 Wins!";
  } else if (randNum1 < randNum2) {
    player2Wins = true;
    document.querySelector("h1").innerText = "Player 2 Wins! 🔥";
  } else {
    tie = true;
    document.querySelector("h1").innerText = "🍀 Tie! 🍀";
  }

  showRefreshButton = true;
  playImg.setAttribute("src", "images/refresh.png");

  function hover() {
    playImg.setAttribute("src", "images/refresh-hover.png");
  }

  function nonHover() {
    playImg.setAttribute("src", "images/refresh.png");
  }

  if (showRefreshButton) {
    playImg.addEventListener("touchstart", hover);
    playImg.addEventListener("touchend", nonHover);

    playImg.addEventListener("mouseover", hover);
    playImg.addEventListener("mouseout", nonHover);
  }
}
