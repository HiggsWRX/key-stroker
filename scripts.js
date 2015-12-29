// Variables to keep track of various things, such as
// ammount of cash, assets unlocked, assets cost, etc

var numKs = 0;
var cash = 0;
var numElder = 0;
var elderUnlocked = false;
var elderCost = 15;

// increase the number of keystrokes when user presses a key
// between a and z
document.addEventListener('keyup', function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        numKs++;
    }
});

// update the UI every 10 ms
window.setInterval(function () {

    //Start adding scripts
    if (ks_count == 10) {
        cash+=10;
        document.getElementById("current-cash").innerHTML = cash+" $";
        ks_count = 0;
        document.getElementById("ks-count").innerHTML = ks_count;
        // when we have enough money we unlock a new asset to buy, so we show it to the user
        if (cash >= 15 && !elderUnlocked) {
            var elder = document.createElement('div');
            elder.innerHTML = '<button id="hire-elder">Hire Elder</button><span id="elder-price">' + elderCost + '<span>';
            document.getElementById('assets').appendChild(elder);

            // when the user buys the asset, update the number owned, its new price and deduct the cash
            document.getElementById('hire-elder').addEventListener('click', function (event) {
                numElder++;
                cash -= elderCost;
                elderCost  = elderCost * Math.pow(1.07, numElder);
            });

            elderUnlocked = true;
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

        // elders add 1 keystroke per second
        numKs += (numElder * 1 / 100);

        document.getElementById("ks-count").textContent = numKs;

        if (numKs >= 10) {
            cash += 1;
            numKs = 0;
        }

        document.getElementById("cash").textContent = cash;

    }, 10);
