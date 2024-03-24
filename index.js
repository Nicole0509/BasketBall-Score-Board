//variables
let scoreA = 0
let scoreB = 0

//Scoring DOM definition
let homeScore = document.getElementById("home")
let homes = document.getElementById("homes")

let guestScore = document.getElementById("guest")
let guests = document.getElementById("guests")

//functions for scoring
//home scoring
function home1Points(){
    scoreA +=1
    homeScore.textContent = scoreA
    homes.textContent = "Home: "+ scoreA
}

function home2Points(){
    scoreA +=2
    homeScore.textContent = scoreA
    homes.textContent = "Home: "+ scoreA
}

function home3Points(){
    scoreA +=3
    homeScore.textContent = scoreA
    homes.textContent = "Home: "+ scoreA
}

//guest scoring
function guest1Points(){
    scoreB +=1
    guestScore.textContent = scoreB
    guests.textContent = "Guest: "+ scoreB
}

function guest2Points(){
    scoreB +=2
    guestScore.textContent = scoreB
    guests.textContent = "Guest: "+ scoreB
}

function guest3Points(){
    scoreB +=3
    guestScore.textContent = scoreB
    guests.textContent = "Guest: "+ scoreB
}