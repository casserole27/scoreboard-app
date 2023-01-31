

function showRules(){

    let panel = document.getElementById('panel');
    // console.log(panel);

    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
    
}



/*
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = 0;
    
}
*/



/*

//TODO
//TODO W3 Schools accordion menu tutorial: https://www.w3schools.com/howto/howto_js_accordion.asp


//TODO define accordian variable 

let acc = document.getElementsByClassName('accordion');

//TODO loop through accordion items

for (let i = 0; i < acc.length; i++) {
    console.log(acc[i]);
    acc[i].addEventListener("click", function() {
        //TODO Toggle between adding and removing the "active" class
       
    this.classList.toggle("active");
    
        //TODO Toggle between hiding and showing the active panel 
    let panel = this.nextElementSibling;
    
        console.log(panel);

    if (panel.style.display === "block") {
          panel.style.display = "none";
    } else {
          panel.style.display = "block";
    }
      });
    } 

  */  