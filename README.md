
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview

Scrimba Module 3 Solo Projoect - Scoreboard App
Settlers of Catan Scorekeeper
[Scrimba](https://scrimba.com)


### The challenge

Requirements:
- build it from "scratch"
- follow the design
- make all six buttons work

Stretch goals:
- add a "reset" button that sets scores to zero
- highlight the leader
- add a few more counters: period, fouls, timer 
- change the design

Personal stretch goals:
- add a collapsible menu for scoring rules
- add :hover states to buttons
- responsive and compact design
- DRY JavaScript code

Catan Scoring:
6 players
Settlement: 1 point
City : 2 points
Development card: 1 point
Longest road: 2 points, five or greater - can be taken
Largest army: 2 points, 3 knight cards - can be taken



 ### Screenshot
 ![Scorekeeper screenshot - desktop](/scoreboard-desktop.png)
 ![Scorekeeper screenshot - mobile](/scoreboard-mobile.png)

### Links

- Scrim: [Scrim](https://scrimba.com/scrim/coa5d4e6c91866581657681d9)
- Github: [Github](https://github.com/casserole27/scoreboard-app)
- Live Site: [Live Site](https://www.clewisdev.com/scoreboard-app/)

## My process

Create Github repository
- initialize README

Setup basic HTML file 
- insert my personal comment credit
- head tag includes stylesheet/link and fonts, double check for meta viewport tag
- initial semantic, accessible markup: placing main, heading and paragraph tags
 - commit and push

Setup basic CSS file
- insert my personal comment credit
- decide on mobile or desktop-first design based on design file examples
- set up root selector with variables: colors, border radius, and font size
- margin, padding, box-size reset, root
- decide on global styles
- commit and push

Consult Figma design files
 - use rems or ems
 - adjust text properties: size, line height, color
 - insert images and color properties
 - decide on layout tools and markup accordingly
 - add effects: borders, box shadows, etc
 - commit and push after each major change

Publish live URL

Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
 - make adjustments as necessary
 - commit and push
 - finish README


### Built with

- CSS custom properties
- CSS :after pseudo-classes
- Font Awesome icons
- Flexbox
- Responsive Web Design
- vanilla JavaScript

### What I learned

I am not a sportsing person, so I decided to turn my project into a scorekeeper for one of my favorite board games, Settlers of Catan. Little did I know that this would open up a JavaScript can of worms since I now had to listen for 18 events: three buttons each for six players.

I learned about [event delegation / event bubbling](https://www.youtube.com/watch?v=oot4h8oM_hI&t=271s)
This involves selecting a parent/ancestor container, and then listening for all events inside that container. I was able to declare a variable for my main HTML element, and then listen for the button clicks within that container. 
- declare variable for main HTML element
- add a click event listener to that element, and a function with a parameter of "e" which is the event object
- add custom HTML data attributes
- use JS .target and .dataset properties with variables to pass the button values into if statements 

```html
    <main class="container" id="container">     
        
        <header>

        <div class="info-container">

            <button class="accordion" id="accordion">Settlers of Catan scorekeeper</button>
              <div class="panel" id="panel">  
                <ul class="panel-text">
                    <li>Settlement: +1</li>
                    <li>City : +2</li>
                    <li>Development card: +1</li>
                    <li>Longest road: +2</li>
                    <li>Another player builds the longest road: -2</li>
                    <li>Largest army: 2 points</li>
                    <li>Another player builds the largest army: -2</li>
                </ul>
            </div> <!--close panel div-->

            </div> <!---close info container--> 
```

```javascript

const container = document.getElementById("container");

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
```    

### Continued development

Ideas from Paul:
Datasets by player, function with parameters in order to minimize if statements
Storing variables / data as arrays and/or objects
Continue adding to the project as I progress through the modules.
 - more JavaScript and eventually React will give me the functionality I desire

Make the winning score function logic DRYer

### Useful resources

Collapsible menu tutorial [W3 Schools](https://www.w3schools.com/howto/howto_js_collapsible.asp) 

Info from Guil:
[Code review YouTube video](https://www.youtube.com/watch?v=oot4h8oM_hI&t=271s)

Info from Paul's code review meeting:
Paul's [Basketball scoreboard project](https://scrimba.com/scrim/cob1d4fbea8427f8b3cbf448e)
How to toggle between classes [W3Schools](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
How to use Font Awesome as CSS content [W3docs](https://www.w3docs.com/snippets/css/how-to-use-font-awesome-icon-as-content-in-css.html)
Font Awesome [icon search](https://fontawesome.com/icons)
- make sure to select free icons

## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments

Thank you to Guil, Paul, and [Scrimba](https://scrimba.com)! This community is amazing and it is so helpful to be able to ask questions and get help!





