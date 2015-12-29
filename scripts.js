// Variables to keep track of various things, such as
// ammount of cash, assets unlocked, assets cost, etc

var kps = 0;
var numKs = 0;
var cash = 0;
var numElder = 0;
var numKid = 0;
var elderUnlocked = false;
var kidUnlocked = false;
var elderCost = 15;
var kidCost = 100;

// increase the number of keystrokes when user presses a key
// between a and z
document.addEventListener('keyup', function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        cash++;
    }
});

// update the UI every 10 ms
window.setInterval(function () {

    if (cash >= 15 && !elderUnlocked) {
        var elder = document.createElement('div');
        elder.innerHTML = '<button id="hire-elder">Hire Elder</button><span id="elder-price">' + elderCost + '</span>';
        document.getElementById('assets').appendChild(elder);

        // when the user buys the asset, update the number owned, its new price and deduct the cash
        document.getElementById('hire-elder').addEventListener('click', function (event) {
            numElder++;
            cash -= elderCost;
            elderCost = Math.ceil(elderCost * 1.1);
            kps += 1;
        });

        elderUnlocked = true;
    }

    if (cash >= 100 && !kidUnlocked) {
        var kid = document.createElement('div');
        kid.innerHTML = '<button id="hire-kid">Hire Kid</button><span id="kid-price">' + kidCost + '</span>';
        document.getElementById('assets').appendChild(kid);

        document.getElementById('hire-kid').addEventListener('click', function (event) {
            numKid++;
            cash -= kidCost;
            kidCost = Math.ceil(kidCost * 1.2);
            kps += 5;
        });

        kidUnlocked = true;
    }

    // disable button if cash is not enough to buy the elder
    if (elderUnlocked) {
        document.getElementById("elder-price").textContent = elderCost;
        if (cash < elderCost) {
            document.getElementById("hire-elder").disabled = true;
        } else {
            document.getElementById('hire-elder').disabled = false;
        }
    }

    if (kidUnlocked) {
        document.getElementById("kid-price").textContent = kidCost;
        if (cash < kidCost) {
            document.getElementById("hire-kid").disabled = true;
        } else {
            document.getElementById("hire-kid").disabled = false;
        }
    }

    document.getElementById("ks-count").textContent = kps;

    cash += (kps * 1 / 100);

    document.getElementById("cash").textContent = Math.floor(cash);

}, 10);