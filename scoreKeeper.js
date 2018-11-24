var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var reset = document.getElementById('reset')
var scoreP1 = document.getElementById('scorePlayerOne')
var scoreP2 = document.getElementById('scorePlayerTwo')
var p1Score = 0
var p2Score = 0
var gameOver = false
var batasScore = 5 //bisa berubah tergantung input
var nilaiInput = document.querySelector('input')
var batasAtasScore = document.querySelector('#batas')
p1.textContent = prompt('Write down the Player 1\'s name')
p2.textContent = prompt('Write down the Player 2\'s name')

p1.addEventListener('click', function(){
  if (gameOver === false) {
	p1Score++
	if (p1Score === batasScore) {
	  gameOver = true
	  scoreP1.classList.add('winner')
	  alert(p1.textContent + ' Won The Game!')
	}
	scoreP1.textContent = p1Score
  }
})

p2.addEventListener('click', function(){
  if (gameOver === false) {
  	p2Score++
  	if (p2Score === batasScore) {
  	  gameOver = true
  	  scoreP2.classList.add('winner')
  	  alert(p2.textContent + ' Won The Game!')
  	}
    scoreP2.textContent = p2Score
  }
})

reset.addEventListener('click', function(){
  resetAll()
})

//fungsi resetAll untuk mengembalikan kondisi seperti semula
function resetAll() {
  p1Score = 0
  p2Score = 0
  scoreP1.textContent = 0
  scoreP2.textContent = 0
  gameOver = false
  scoreP1.classList.remove('winner')
  scoreP2.classList.remove('winner')
}

nilaiInput.addEventListener('change', function(){
  batasAtasScore.textContent = nilaiInput.value
  batasScore = Number(nilaiInput.value)
  //apabila limit score diubah ketika di tengah permainan, maka score akan di-reset kembali
  resetAll()
})
