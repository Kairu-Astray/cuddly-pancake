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
  nfObject = new Intl.NumberFormat("en-GB");
  output = nfObject.format(money);
  document.getElementById("currentMoney").innerHTML = "Money: " + output;
}
cSetInterval(displayMoney, 1);

function displayMoneyPS() {
  nfObject = new Intl.NumberFormat("en-GB");
  output = nfObject.format(moneyPS);
  document.getElementById("currentMoneyPS").innerHTML = "Money PS: " + output;
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
  document.getElementById("currentPrestige").innerHTML = "Prestige: " + output;
}
cSetInterval(displayPrestige, 1);

async function addMoney() {
  money += updateValue;
  console.log(money);
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
    alert("Failed, Too much fish!");
  } else if (money >= 10 && updateValue < 2) {
    money -= 10;
    fish += 1;
    updateValue += 1;
  } else if (money >= 10 || updateValue == 2) {
    money -= 10;
    fish += 1;
    updateValue += 2;
  }
}

function buyPrestige() {
  if (fish < 100 || money < 10000) {
    alert("Failed, You don't meet the requirements. (100 Fish, 100,000 Money)");
  } else if (fish >= 100 || money >= 100_000) {
    money = 0;
    fish = 0;
    prestige += 1;
    console.log("Prestiged!");
    updateValue = 1;
  }
}

function coinPS() {
  money += moneyPS;
}

function buyMoneyPS() {
  if (money >= price) {
    moneyPS += 0.5;
    money -= price;
    if (price >= 100) {
      price += 50;
    } else {
      price += 20;
    }
  } else {
    alert("Sorry, you don't have enough money.");
  }
  cSetInterval(coinPS, 1000);
}
