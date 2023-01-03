let money = 0
var updateValue = 1

function displayMoney() {
  document.getElementById("currentMoney").innerHTML = "Money: " + money
}

async function addMoney() {
  money += updateValue
  document.getElementById("currentMoney").innerHTML = "Money: " + money
  console.log(money)
}

async function printMoney() {
  console.log(money)
}

function buyFish() {
  if (updateValue >= 10) {
    console.log("Failed, Too much fish!")
  } else if (money >= 10) {
    money -= 10
    console.log("Bought Fish!")
    updateValue += 1
    displayMoney()
  } else {
    console.log("Failed, Not enough money!")
  }
  displayMoney()
}
