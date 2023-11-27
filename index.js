// let randomnumber=parseInt(Math.random()*100+1);

// const submit=document.querySelector('#subt');
// const userinput=document.querySelector('#guessField');
// const guesslot=document.querySelector('.guesses');
// const remaining=document.querySelector('.lastResult');
// const loworhi=document.querySelector('lowOrHi');
// const startover=document.querySelector('resultParas');

// const p=document.createElement('p')

// let prevguess=[]
// let numguess=1

// let playgame=true;

// if(playgame){
//     submit.addEventListener('click',function(e){
//         e.preventDefault()   //ye value ko rokta hai 
//        const guess= parseInt(userinput.value)
//        console.log(guess);
//        validateguess(guess)
//     })
// }

// function validateguess(guess){
// //value 1 or 100 k beech me hai ki ni ye dekhega
// if(isNaN(guess)){
//     alert('please enter a valid number')
// }
// else if(guess<1){
//     alert('please enter a number more than 1')
// }
// else if(guess>100){
//     alert('please enter a number less than 100')
// }
// else{
//     prevguess.push(guess)
//     if(numguess===11){
//      displayguess(guess)
//      displaymessage(`game over.random number was ${randomnumber}`)
//      endgame()
//     }
//     else{
//         displayguess(guess)
//         checkguess(guess)
//     }
// }
// }

// function checkguess(guess){
// // kahi woh value random value ke equal to ni hai ya hai to batayega
// if(guess===randomnumber){
//     displaymessage(`you guess it right`)
//     endgame()
// }
// else if(guess<randomnumber){
//     displaymessage(`number is too low`)
// }
// else if(guess>randomnumber){
//     displaymessage(`number is too high`)
// }
// }

// function displayguess(guess){
// //value clean krega next value ke lie or update krega
// userinput.value=''
// guesslot.innerHTML+=`${guess} `
// numguess++;
// remaining.innerHTML=`${11-numguess}`
// }

// function displaymessage(message){
// //dom ke sath manipulation krege
// //meaasage print krega pass krke
// loworhi.innerHTML=`<h2>${message}</h2>`;
// }

// function endgame(){
// userinput.value=''
// userinput.setAttribute('disabled','')
// p.classList.add('button')
// p.innerHTML=`<h2 id="newgame">start new game</h2>`
// startover.appendChild(p)
// playgame=false
// newgame()
// }

// function newgame(){
//     const newgamebutton=document.querySelector('#newgame')
//     newgamebutton.addEventListener('click',function(e){
//         randomnumber=parseInt(Math.random()*100+1);
//         prevguess=[]
//         numguess=1
//         guesslot.innerHTML=''
//         remaining.innerHTML=`${11-numguess}`
//         userinput.removeAttribute('disabled')
//         startover.replaceChild(p)
//     playgame=true
//     })
// }



let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numGuess} `;
  numGuess++;
  // remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


