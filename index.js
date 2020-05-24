var randNum1, randNum2, newDice1, newDice2;

randNum1 = Math.floor(Math.random() * 6) + 1;
randNum2 = Math.floor(Math.random() * 6) + 1;

newDice1 = findNewDie(randNum1);
newDice2 = findNewDie(randNum2);

document.querySelector(".dice1").setAttribute("src", newDice1);
document.querySelector(".dice2").setAttribute("src", newDice2);

function findNewDie(randNum) {
  switch (randNum) {
    case 1:
      return "images/dice1.png";

    case 2:
      return "images/dice2.png";

    case 3:
      return "images/dice3.png";

    case 4:
      return "images/dice4.png";

    case 5:
      return "images/dice5.png";

    case 6:
      return "images/dice6.png";
  }
}

var player1Wins = false;
var player2Wins = false;
var tie = false;

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
