let money = 0
let fish = 1
var updateValue = 1

function displayMoney() {
nfObject = new Intl.NumberFormat('en-GB');
output = nfObject.format(money);
document.getElementById("currentMoney").innerHTML = "Money: " + output
}

function displayFish() {
  document.getElementById("currentFish").innerHTML = "Fish: " + output
}

async function addMoney() {
  money += updateValue
  displayMoney()
  console.log(money)
}

async function addFish() {
  fish += 1
  displayFish()
  console.log(fish)
}

async function printMoney() {
  console.log(money)
}

function buyFish() {
  if (updateValue >= 10) {
    console.log("Failed, Too much fish!")
  } else if (money >= 10) {
    money -= 10
    fish += 1
    console.log("Bought Fish!")
    updateValue += 1
    displayMoney()
    addFish()
  }
  displayMoney()
  displayFish()
}
