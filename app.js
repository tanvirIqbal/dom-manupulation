/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

/*
Math.random() generates a random value
*/
dice = Math.floor(Math.random() * ((6-1)+1)) + 1;

// Writing on the DOM element
// document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+dice+'</em>';

// Reading from the DOM
var x = document.querySelector('#score-0').textContent;
console.log(x);

//Styling the DOM element
document.querySelector('.dice').style.display = 'none';
