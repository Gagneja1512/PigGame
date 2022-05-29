'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0') ;
const score1El = document.getElementById('score--1') ;
const diceEl = document.querySelector('.dice') ;
const btnNew = document.querySelector('.btn--new') ;
const btnRoll = document.querySelector('.btn--roll') ;
const btnHold = document.querySelector('.btn--hold') ;

const current0El = document.getElementById('current--0') ;
const current1El = document.getElementById('cuurent--1') ;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden') ;

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click' , function(){

    const dice = Math.trunc(Math.random()*6) + 1;
    diceEl.classList.remove('hidden') ;

    diceEl.src = `dice-${dice}.png` ;

    if(dice !== 1)
    {
        currentScore = currentScore + dice ;   
        current0El.textContent = currentScore ;  
    }
    else 
    {

    }

})
