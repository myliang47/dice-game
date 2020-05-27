
var playImg = document.querySelector( ".play-img" );
var showRefreshButton = false;

playImg.addEventListener( "mouseover", function () {
  if( showRefreshButton == false)
  {
    playImg.style.width = "3.7rem";
    playImg.style.height = "auto";
  }
});

playImg.addEventListener( "mouseout", function () {
  playImg.style.width = "3.5rem";
  playImg.style.height = "auto";
});

playImg.addEventListener( "click", playClicked );

var randNum1, randNum2, newDiceImage1, newDiceImage2, dice1, dice2;
var player1Wins = false;
var player2Wins = false;
var tie = false;

function playClicked()
{
  randNum1 = Math.floor(Math.random() * 6) + 1;
  randNum2 = Math.floor(Math.random() * 6) + 1;

  newDiceImage1 = "images/dice" + randNum1 + ".png";
  newDiceImage2 = "images/dice" + randNum2 + ".png";

  dice1 = document.querySelector(".dice1");
  dice2 = document.querySelector(".dice2");

  dice1.setAttribute("src", newDiceImage1);
  dice2.setAttribute("src", newDiceImage2);

  if( randNum1 > randNum2 )
  {
    player1Wins = true;
    document.querySelector( "h1" ).innerText = "🔥 Player 1 Wins!";
  }
  else if( randNum1 < randNum2 )
  {
    player2Wins = true;
    document.querySelector( "h1" ).innerText = "Player 2 Wins! 🔥";
  }
  else
  {
    tie = true;
    document.querySelector( "h1" ).innerText = "🍀 Tie! 🍀";
  }

  playImg.setAttribute( "src", "images/refresh.png" );
  showRefreshButton = true;

  if( showRefreshButton )
  {
    playImg.addEventListener( "mouseover", function () {
      playImg.setAttribute( "src", "images/refresh-hover.png" );
    });

    playImg.addEventListener( "mouseout", function () {
      playImg.setAttribute( "src", "images/refresh.png" );
    });
  }
}
