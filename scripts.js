/*jslint plusplus: true */

// Variables to keep track of various things, such as
// ammount of cash, assets unlocked, assets cost, etc

var kps = 0;
var numKs = 0;
var cash = 0;
var numElder = 0;
var numKid = 0;
var numStud = 0;
var numCont = 0;
var numChamp = 0;
var numRob = 0;
var elderUnlocked = false;
var kidUnlocked = false;
var studUnlocked = false;
var contUnlocked = false;
var champUnlocked = false;
var robUnlocked = false;
var elderCost = 15;
var kidCost = 100;
var studCost = 500;
var contCost = 3000;
var champCost = 10000;
var robCost = 40000;

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
        document.getElementById('store').style.visibility = 'visible';
        
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

    if (cash >= 500 && !studUnlocked) {
        var stud = document.createElement('div');
        stud.innerHTML = '<button id="hire-stud">Hire Student</button><span id="stud-price">' + studCost + '</span>';
        document.getElementById('assets').appendChild(stud);

        document.getElementById('hire-stud').addEventListener('click', function (event) {
            numStud++;
            cash -= studCost;
            studCost = Math.ceil(studCost * 1.3);
            kps += 40;
        });

        studUnlocked = true;
    }

    if (cash >= 3000 && !contUnlocked) {
        var cont = document.createElement('div');
        cont.innerHTML = '<button id="hire-cont">Hire Contractor</button><span id="cont-price">' + contCost + '</span>';
        document.getElementById('assets').appendChild(cont);

        document.getElementById('hire-cont').addEventListener('click', function (event) {
            numCont++;
            cash -= contCost;
            contCost = Math.ceil(contCost * 1.2);
            kps += 100;
        });

        contUnlocked = true;
    }

    if (cash >= 10000 && !champUnlocked) {
        var champ = document.createElement('div');
        champ.innerHTML = '<button id="hire-champ">Hire champ</button><span id="champ-price">' + champCost + '</span>';
        document.getElementById('assets').appendChild(champ);

        document.getElementById('hire-champ').addEventListener('click', function (event) {
            numChamp++;
            cash -= champCost;
            champCost = Math.ceil(champCost * 1.2);
            kps += 400;
        });

        champUnlocked = true;
    }

    if (cash >= 40000 && !robUnlocked) {
        var rob = document.createElement('div');
        rob.innerHTML = '<button id="hire-rob">Hire rob</button><span id="rob-price">' + robCost + '</span>';
        document.getElementById('assets').appendChild(rob);

        document.getElementById('hire-rob').addEventListener('click', function (event) {
            numRob++;
            cash -= robCost;
            robCost = Math.ceil(robCost * 1.2);
            kps += 1000;
        });

        robUnlocked = true;
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

    if (studUnlocked) {
        document.getElementById("stud-price").textContent = studCost;
        if (cash < studCost) {
            document.getElementById("hire-stud").disabled = true;
        } else {
            document.getElementById("hire-stud").disabled = false;
        }
    }

    if (contUnlocked) {
        document.getElementById("cont-price").textContent = contCost;
        if (cash < contCost) {
            document.getElementById("hire-cont").disabled = true;
        } else {
            document.getElementById("hire-cont").disabled = false;
        }
    }

    if (champUnlocked) {
        document.getElementById("champ-price").textContent = champCost;
        if (cash < champCost) {
            document.getElementById("hire-champ").disabled = true;
        } else {
            document.getElementById("hire-champ").disabled = false;
        }
    }

    if (robUnlocked) {
        document.getElementById("rob-price").textContent = robCost;
        if (cash < robCost) {
            document.getElementById("hire-rob").disabled = true;
        } else {
            document.getElementById("hire-rob").disabled = false;
        }
    }

    document.getElementById("ks-count").textContent = kps;

    cash += (kps * 1 / 100);

    document.getElementById("cash").textContent = Math.floor(cash);

}, 10);