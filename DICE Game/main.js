var scores, roundScore, activePlayer, gamePlaying, lastDice

const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')
const btnNew = document.querySelector('.btn-new')
const inputValue = document.querySelector('.final-score').value


function init(){
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true

    // document.querySelector('#current-0').textContent = dice
    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
    // let x = document.querySelector('#score-0').textContent
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'player 1'
    document.getElementById('name-1').textContent = 'player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')


}

init();


function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    // document.querySelector('.player-0-panel').classList.remove('active')
    // document.querySelector('.player-0-panel').classList.remove('active')

    
    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

}


btnRoll.addEventListener('click', function(){
if(gamePlaying){
    //Random number
   let dice1 = Math.floor(Math.random() * 6) + 1
   let dice2 = Math.floor(Math.random() * 6) + 1


   //Display the result
   document.getElementById('dice-1').style.display = 'block'
   document.getElementById('dice-2').style.display = 'block'
  
   document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'
   document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'


   if(dice1 !== 1 && dice2 !== 1){
    roundScore += dice1 + dice2
    document.querySelector('#current-' + activePlayer).textContent = roundScore
   }else {
    nextPlayer()
   }
/*
   //Update the round score IF the rolled number was NOT a one(1)
   if(dice === 6 && lastDice ===6){
    scores[activePlayer] = 0
    document.querySelector('#score-' + activePlayer).textContent = '0'
    nextPlayer()


   } else if(dice !== 1){
    //Add score
    roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore
   } else{
    //Next Player
    nextPlayer()
   }

 
   lastDice = dice
}*/
}  
})

btnHold.addEventListener('click', function(){
    //Add CURRENT score to GLOBAL score
    if(gamePlaying){

            scores[activePlayer] += roundScore
            //Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            if(inputValue){
               let winningScore = inputValue
            }else{
                winningScore = 100
            }
            //Check if player won the game
            if(scores[activePlayer] >= winningScore){
            
                document.getElementById('dice-1').style.display = 'none'
                document.getElementById('dice-2').style.display = 'none'
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'

                gamePlaying = false
            }else{
                //nextPlayer
            nextPlayer()
            }
    }
   
})

btnNew.addEventListener('click', function(){
    init();

})