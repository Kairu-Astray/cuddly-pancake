let money = 0;
let moneyPS = 0;
let price = 10;
let fish = 0;
let prestige = 0;
var updateValue = 1;

function cSetInterval(func, time) {
  var lastTime = Date.now(),
    lastDelay = time,
    outp = {};

  function tick() {
    func();

    var now = Date.now(),
      dTime = now - lastTime;

    lastTime = now;
    lastDelay = time + lastDelay - dTime;
    outp.id = setTimeout(tick, lastDelay);
  }
  outp.id = setTimeout(tick, time);

  return outp;
}

function displayMoney() {
nfObject = new Intl.NumberFormat('en-GB');
output = nfObject.format(money);
document.getElementById("currentMoney").innerHTML = "Money: " + output
}
cSetInterval(displayMoneyPS, 1);

function displayFish() {
  nfObject = new Intl.NumberFormat("en-GB");
  output = nfObject.format(fish);
  document.getElementById("currentFish").innerHTML = "Fish: " + output;
}
cSetInterval(displayFish, 1);

function displayPrestige() {
  nfObject = new Intl.NumberFormat("en-GB");
  output = nfObject.format(prestige);
  document.getElementById("currentOrestige").innerHTML = "Prestige: " + output
}
cSetInterval(displayPrestige, 1);

async function addMoney() {
  money += updateValue
  displayMoney()
  console.log(money)
}

// async function addFish() {     --- DEV command
//   fish += 1
//   displayFish()
//   console.log(fish)
// }

async function printMoney() {
  console.log(money);
}

function buyFish() {
  if (fish >= 100) {
    console.log("Failed, Too much fish!")
  } else if (money >= 10) {
    money -= 10
    fish += 1
    console.log("Bought Fish!")
    updateValue += 1
    displayMoney()
    displayFish()
  }
  displayMoney()
  displayFish()
}

function buyPrestige() {
  if (fish < 100 || money < 10000) {
    console.log("Failed, You don't meet the requirements. (100 Fish, 10,000 Money)")
  } else if (fish >= 100 || money >= 10000) {
    money = 0
    fish = 0
    prestige += 1
    console.log("Prestiged!")
    updateValue = 1
    displayMoney()
    displayFish()
    displayPrestige()
  }
  displayMoney()
  displayFish()
}

