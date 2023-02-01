
let playerOneCount = 0;
let playerTwoCount = 0;
let playerThreeCount = 0;

const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const playerThree = document.getElementById("player-three");
// const playerFour = document.getElementById("player-four");
// const playerFive = document.getElementById("player-five");
// const playerSix = document.getElementById("player-six");

let acc = document.getElementsByClassName("accordion");


//! ACCORDION MENU FUNCTION THAT SHOWS SCORING RULES

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
    
    let panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";   
    } 
    });
}


//! INCREMENT AND DECREMENT FUNCTIONS

function playerOneInc() {
    playerOneCount += 1;
    playerOne.textContent = playerOneCount;
    currentWinner();

}

function playerOneIncTwo() {
    playerOneCount += 2;
    playerOne.textContent = playerOneCount;
    currentWinner();

}

function playerOneDec() {
    playerOneCount -= 2;
    playerOne.textContent = playerOneCount;
    currentWinner();

}

function playerTwoInc() {
    playerTwoCount += 1;
    playerTwo.textContent = playerTwoCount;
    currentWinner();

}

function playerTwoIncTwo() {
    playerTwoCount += 2;
    playerTwo.textContent = playerTwoCount;
    currentWinner();

}

function playerTwoDec() {
    playerTwoCount -= 2;
    playerTwo.textContent = playerTwoCount;
    currentWinner();

}

function playerThreeInc() {
    playerThreeCount += 1;
    playerThree.textContent = playerThreeCount;
    currentWinner();

}

function playerThreeIncTwo() {
    playerThreeCount += 2;
    playerThree.textContent = playerThreeCount;
    currentWinner();

}

function playerThreeDec() {
    playerThreeCount -= 2;
    playerThree.textContent = playerThreeCount;
    currentWinner();

}


//!ADD BORDER TO WINNING SCORE

// function currentWinner() {
//     if(playerOneCount > playerTwoCount && playerOneCount > playerThreeCount) {
//         let element = document.getElementById("player-one");
//         element.classList.toggle("winner");
//     } else if (playerTwoCount > playerOneCount && playerTwoCount > playerThreeCount) {
//         let element = document.getElementById("player-two");
//         element.classList.toggle("winner");
//     } else if (playerThreeCount > playerOneCount && playerThreeCount > playerTwoCount) {
//         let element = document.getElementById("player-three");
//         element.classList.toggle("winner");
//     }
// }

//! RESET FUNCTION
function reset() {
    playerOneCount = 0;
    playerTwoCount = 0;
    playerThreeCount = 0;
    playerOne.textContent = playerOneCount;
    playerTwo.textContent = playerTwoCount;
    playerThree.textContent = playerThreeCount;
}



