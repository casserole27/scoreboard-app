
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
//? How to have less variables and function?
//? for loop or .forEach()
//? parameters

function playerOneInc() {
    playerOneCount += 1;
    playerOne.textContent = playerOneCount;
}

function playerOneIncTwo() {
    playerOneCount += 2;
    playerOne.textContent = playerOneCount;

}

function playerOneDec() {
    playerOneCount -= 2;
    playerOne.textContent = playerOneCount;

}

function playerTwoInc() {
    playerTwoCount += 1;
    playerTwo.textContent = playerTwoCount;

}

function playerTwoIncTwo() {
    playerTwoCount += 2;
    playerTwo.textContent = playerTwoCount;

}

function playerTwoDec() {
    playerTwoCount -= 2;
    playerTwo.textContent = playerTwoCount;

}

function playerThreeInc() {
    playerThreeCount += 1;
    playerThree.textContent = playerThreeCount;

}

function playerThreeIncTwo() {
    playerThreeCount += 2;
    playerThree.textContent = playerThreeCount;

}

function playerThreeDec() {
    playerThreeCount -= 2;
    playerThree.textContent = playerThreeCount;

}


//?ADD BORDER TO WINNING SCORE



//! RESET FUNCTION
function reset() {
    playerOneCount = 0;
    playerTwoCount = 0;
    playerThreeCount = 0;
    playerOne.textContent = playerOneCount;
    playerTwo.textContent = playerTwoCount;
    playerThree.textContent = playerThreeCount;
}



