let total = 0

document.querySelector('#sauce').addEventListener('click', sauceZero)
document.querySelector('#mdfry').addEventListener('click', medFry)
document.querySelector('#lgfry').addEventListener('click', largeFry)
document.querySelector('#brownie').addEventListener('click', Brownie)
document.querySelector('#regsand').addEventListener('click', regularSandwich)
document.querySelector('#eightnuggets').addEventListener('click', eightNuggets)
document.querySelector('#grilled').addEventListener('click', twelveGrilledNuggets)
document.querySelector('#mdswtea').addEventListener('click', mediumSweetTea)
document.querySelector('#frlemonade').addEventListener('click', frostedLemonade)
document.querySelector('#milkshake').addEventListener('click', cookiesAndCreamMilkShake)
document.querySelector('#spicydeluxe').addEventListener('click', spicyDeluxeSandwich)
document.querySelector('#strips').addEventListener('click', cfaStrips)
document.querySelector('#mac').addEventListener('click', macAndCheese)
document.querySelector('#icecream').addEventListener('click', iceCream)
document.querySelector('#grillsand').addEventListener('click', grilledSandwich)
document.querySelector('#coffee').addEventListener('click', Coffee)

function sauceZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function medFry() {
  total = total + 2.19
  document.querySelector('#placeToPutResult').innerText = total
}

function largeFry() {
  total = total + 2.59
  document.querySelector('#placeToPutResult').innerHTML = total
}

function Brownie() {
  total = total + 1.99
  document.querySelector('#placeToPutResult').innerHTML = total
}
function regularSandwich() {
  total = total + 4.29
  document.querySelector('#placeToPutResult').innerHTML = total
}
function eightNuggets() {
  total = total + 4.39
  document.querySelector('#placeToPutResult').innerHTML = total
}
function twelveGrilledNuggets() {
  total = total + 7.49
  document.querySelector('#placeToPutResult').innerHTML = total
}
function mediumSweetTea() {
  total = total + 1.89
  document.querySelector('#placeToPutResult').innerHTML = total
}
function frostedLemonade() {
  total = total + 3.95
  document.querySelector('#placeToPutResult').innerHTML = total
}
function cookiesAndCreamMilkShake() {
  total = total + 4.09
  document.querySelector('#placeToPutResult').innerHTML = total
}
function spicyDeluxeSandwich() {
  total = total + 5.35
  document.querySelector('#placeToPutResult').innerHTML = total
}
function cfaStrips() {
  total = total + 4.69
  document.querySelector('#placeToPutResult').innerHTML = total
}
function macAndCheese() {
  total = total + 2.85
  document.querySelector('#placeToPutResult').innerHTML = total
}
function iceCream() {
  total = total + 1.65
  document.querySelector('#placeToPutResult').innerHTML = total
}
function grilledSandwich() {
  total = total + 5.95
  document.querySelector('#placeToPutResult').innerHTML = total
}
function Coffee() {
  total = total + 2.99
  document.querySelector('#placeToPutResult').innerHTML = total
}