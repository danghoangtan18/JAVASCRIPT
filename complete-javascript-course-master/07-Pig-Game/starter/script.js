'use strict';

// selecting elements
const score0El = document.querySelectorById('score--0');
const score1El = document.querySelectorById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 

// Rolling dice funtionality
btnRoll.addEventListener('click', function(){
  // 1. Generating a random dice roll

  // 2. Display dice

  // 3. Check for rolled 1:if true, switch to next player
})