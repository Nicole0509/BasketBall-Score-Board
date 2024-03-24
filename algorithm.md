When program starts

// Poss is set (either Team A or Team B)
// Concurently the timer and shotclock starts to countdown

while the game clock is not zero then

//if poss changes then select the team which has the ball

while shot clock not zero then

//if a Team scores then
// add 2 or 3 points according to the condition
// poss = current poss

if foul takes place then
// call FoulCount function


Functions

Possesion (){
    if TeamA = true then
        select Team A
    else 
        select Team B
}

Score1Points(){
    return Score += 1
}

Score2Points(){
    return Score += 2
}

Score3Points(){
    return Score += 3
}

foulCount (){
    if foulCount >= 0 and foulCount < 5 then
    foulCount += 1
    Foul.textContext += 1
    else
    call Bonus()
}

Bonus(){
    if score is clicked then
    Score1Points()
    poss = current poss
        if score is clicked then
        Add1Point()
        poss = current poss
    else if missed is clicked then 
    poss = opposite team
    
}