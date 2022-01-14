const randomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}

let startButton = document.getElementById('start')
let dice1 = document.getElementById('dice_A')
let dice2 = document.getElementById('dice_B')

const player1 = document.getElementById('player_1');
const player2 = document.getElementById('player_2');


// version-1
startButton.onclick = () => {
let randomNumber1 = randomNum() ;
let randomNumber2 = randomNum() ;

dice1.src = `images/dice${randomNumber1}.png`;
dice2.src = `images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
  player1.setAttribute("style", "color:red; font-weight:bold");
  player2.removeAttribute("style");
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
  player2.setAttribute("style", "color:red; font-weight:bold");
  player1.removeAttribute("style");
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
  player1.removeAttribute("style");
  player2.removeAttribute("style");
}
};



// version-2
// startButton.onclick = () => {
//   let randomNumber1 = randomNum() ;
//   let randomNumber2 = randomNum() ;
  
// dice1.src = "images/dice" + randomNumber1 + ".png";
// dice2.src = "images/dice" + randomNumber2 + ".png";
  
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
//     player1.style.color = "red";
//     player1.style.fontWeight = "bold";
//     player2.style.color = "";
//     player2.style.fontWeight = "";  
//   }
//   else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
//     player2.style.color = "red";
//     player2.style.fontWeight = "bold";
//     player1.style.color = "";
//     player1.style.fontWeight = ""; 
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//     player2.style.color = "";
//     player2.style.fontWeight = "";
//     player1.style.color = "";
//     player1.style.fontWeight = ""; 
  
//   }
//   };


// version-3
// add a class that holds the styles "red" and "bold" // look at the .css file.
// startButton.onclick = () => {
//   let randomNumber1 = randomNum() ;
//   let randomNumber2 = randomNum() ;
//   //let randomImageSourse2 = "images/dice" + randomNum() + ".png";
//   //document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);  // querySelectorAll returns an array of results.
//   dice1.src = "images/dice" + randomNumber1 + ".png";
//   dice2.src = "images/dice" + randomNumber2 + ".png";
  
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
//     player1.className = 'player-win';
//     player2.className = '';
  
//   }
//   else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
//     player2.className = 'player-win';
//     player1.className = '';
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//     player1.className = '';
//     player2.className = '';
  
//   }
//   };

