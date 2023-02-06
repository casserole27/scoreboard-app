
//! SCORE COUNT VARIABLES
let playerOneCount = 0;
let playerTwoCount = 0;
let playerThreeCount = 0;
let playerFourCount = 0;
let playerFiveCount = 0;
let playerSixCount = 0;

//! HTML <MAIN> ELEMENT FOR EVENT DELEGATION / BUBBLING
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


//! COLLAPSIBLE MENU FUNCTION THAT SHOWS SCORING RULES

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
  
    if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";   
    } 
    });
}


//! INCREMENT AND DECREMENT FUNCTIONS USING EVENT DELEGATION / BUBBLING

//TODO IDEAS FOR DRYER CODE 
//? Data points by player, function with parameters (playerNumber, points), condensing if statements

//Event Delegation Video
//(https://www.youtube.com/watch?v=oot4h8oM_hI&t=271s)

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


//! ADD BLUE BORDER TO WINNING SCORE

//TODO IDEAS FOR DRY CODE
//? loop through an array of player counts and toggling the class based on the highest one

function winningScore() {
    playerOne.classList.toggle("winner", 
        playerOneCount > playerTwoCount 
        && playerOneCount > playerThreeCount
        && playerOneCount > playerFourCount
        && playerOneCount > playerFiveCount
        && playerOneCount > playerSixCount);
    playerTwo.classList.toggle("winner", 
        playerTwoCount > playerOneCount
        && playerTwoCount > playerThreeCount
        && playerTwoCount > playerFourCount
        && playerTwoCount > playerFiveCount
        && playerTwoCount > playerSixCount);
    playerThree.classList.toggle("winner", 
        playerThreeCount > playerOneCount
        && playerThreeCount > playerTwoCount
        && playerThreeCount > playerFourCount
        && playerThreeCount > playerFiveCount
        && playerThreeCount > playerSixCount);
    playerFour.classList.toggle("winner", 
        playerFourCount > playerOneCount
        && playerFourCount > playerTwoCount
        && playerFourCount > playerThreeCount
        && playerFourCount > playerFiveCount
        && playerFourCount > playerSixCount);    
    playerFive.classList.toggle("winner", 
        playerFiveCount > playerOneCount
        && playerFiveCount > playerTwoCount
        && playerFiveCount > playerThreeCount
        && playerFiveCount > playerFourCount
        && playerFiveCount > playerSixCount);
    playerSix.classList.toggle("winner", 
        playerSixCount > playerOneCount
        && playerSixCount > playerTwoCount
        && playerSixCount > playerThreeCount
        && playerSixCount > playerFourCount
        && playerSixCount > playerFiveCount);      
    }



//! RESET FUNCTION SETTING COUNTS TO ZERO
reset.addEventListener("click", function(reset) {
    playerOne.textContent = playerOneCount= 0;
    playerTwo.textContent = playerTwoCount = 0;
    playerThree.textContent = playerThreeCount = 0;
    playerFour.textContent = playerFourCount = 0;
    playerFive.textContent = playerFiveCount = 0;
    playerSix.textContent = playerSixCount = 0; 
})




