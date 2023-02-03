
//! SCORE COUNT VARIABLES
let playerOneCount = 0;
let playerTwoCount = 0;
let playerThreeCount = 0;
let playerFourCount = 0;
let playerFiveCount = 0;
let playerSixCount = 0;

//! HTML <MAIN> ELEMENT
//? .querySelector vs. getElement methods
const container = document.getElementById("container");


//! SCORE FIELD VARIABLES, HTML <P> ELEMENTS
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const playerThree = document.getElementById("player-three");
const playerFour = document.getElementById("player-four");
const playerFive = document.getElementById("player-five");
const playerSix = document.getElementById("player-six");

//! ACCORDION CLASS
const acc = document.getElementsByClassName("accordion");

//! RESET BUTTON
const reset = document.getElementById("reset-btn");



//! ACCORDION MENU FUNCTION THAT SHOWS SCORING RULES
// W3 Schools tutorial: https://www.w3schools.com/howto/howto_js_collapsible.asp
/****** Why can't I change the color of the +/- signs? *******/

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
//? IDEAS
//? for loop or .forEach()
//? classList
//? parameters

//TODO Guil sent a YouTube video: https://www.youtube.com/watch?v=oot4h8oM_hI&t=271s
//TODO Implementation of JS from Guil's code review video
/****** Can it be even DRYer since I have six datasets?*******/


container.addEventListener("click", function(e) {
    const target = e.target;
    const playerOnePts = target.dataset.onePts;
    const playerTwoPts = target.dataset.twoPts;
    const playerThreePts = target.dataset.threePts;
    const playerFourPts = target.dataset.fourPts;
    const playerFivePts = target.dataset.fivePts;
    const playerSixPts = target.dataset.sixPts;
    
    
    if (playerOnePts) {
        playerOneCount += +playerOnePts;
        playerOne.textContent = playerOneCount;
    }
    
    if (playerTwoPts) {
        playerTwoCount += +playerTwoPts;
        playerTwo.textContent = playerTwoCount;
    } 
    
    if (playerThreePts) {
        playerThreeCount += +playerThreePts;
        playerThree.textContent = playerThreeCount;
    } 
    
    if (playerFourPts) {
        playerFourCount += +playerFourPts;
        playerFour.textContent = playerFourCount;
    } 
    
    if (playerFivePts) {
        playerFiveCount += +playerFivePts;
        playerFive.textContent = playerFiveCount;
    } 
    
    if (playerSixPts) {
        playerSixCount += +playerSixPts;
        playerSix.textContent = playerSixCount;
    }
    winningScore()  
})



//! ADD BORDER TO WINNING SCORE
/****** Is there something DRY I can do for this logic that highlights the highest score? ******/
function winningScore() {
    playerOne.classList.toggle("winner", playerOneCount > playerTwoCount);
    playerTwo.classList.toggle("winner", playerTwoCount > playerOneCount);
}


//! RESET FUNCTION
reset.addEventListener("click", function(reset) {
    playerOneCount = 0;
    playerTwoCount = 0;
    playerThreeCount = 0;
    playerFourCount = 0;
    playerFiveCount = 0;
    playerSixCount = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerThree.textContent = 0;
    playerFour.textContent = 0;
    playerFive.textContent = 0;
    playerSix.textContent = 0; 
})




