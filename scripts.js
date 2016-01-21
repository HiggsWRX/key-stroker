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
        elder.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-elder">Buy 1</a> Friendly Elder $<span id="elder-price">' + elderCost + '</span> - You have <span id="num-elder">' + numElder + '</span>';
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
        kid.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-kid">Buy 1</a> Kid $<span id="kid-price">' + kidCost + '</span> - You have <span id="num-kid">' + numKid + '</span>';
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
        stud.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-stud">Buy 1</a> Computer Science Student $<span id="stud-price">' + studCost + '</span> - You have <span id="num-stud">' + numStud + '</span>';
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
        cont.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-cont">Buy 1</a> Outsourced Contractor $<span id="cont-price">' + contCost + '</span> - You have <span id="num-cont">' + numCont + '</span>';
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
        champ.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-champ">Buy 1</a> World Typewritting Champion $<span id="champ-price">' + champCost + '</span> - You have <span id="num-champ">' + numChamp + '</span>';
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
        rob.innerHTML = '<br><a class="btn btn-primary btn-lg" id="hire-rob">Buy 1</a> Robot 4444P $<span id="rob-price">' + robCost + '</span> - You have <span id="num-rob">' + numRob + '</span>';
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
        document.getElementById("num-elder").textContent = numElder;
        if (cash < elderCost) {
            document.getElementById("hire-elder").disabled = true;
        } else {
            document.getElementById('hire-elder').disabled = false;
        }
    }

    if (kidUnlocked) {
        document.getElementById("kid-price").textContent = kidCost;
        document.getElementById("num-kid").textContent = numKid;
        if (cash < kidCost) {
            document.getElementById("hire-kid").disabled = true;
        } else {
            document.getElementById("hire-kid").disabled = false;
        }
    }

    if (studUnlocked) {
        document.getElementById("stud-price").textContent = studCost;
        document.getElementById("num-stud").textContent = numStud;
        if (cash < studCost) {
            document.getElementById("hire-stud").disabled = true;
        } else {
            document.getElementById("hire-stud").disabled = false;
        }
    }

    if (contUnlocked) {
        document.getElementById("cont-price").textContent = contCost;
        document.getElementById("num-cont").textContent = numCont;
        if (cash < contCost) {
            document.getElementById("hire-cont").disabled = true;
        } else {
            document.getElementById("hire-cont").disabled = false;
        }
    }

    if (champUnlocked) {
        document.getElementById("champ-price").textContent = champCost;
        document.getElementById("num-champ").textContent = numChamp;
        if (cash < champCost) {
            document.getElementById("hire-champ").disabled = true;
        } else {
            document.getElementById("hire-champ").disabled = false;
        }
    }

    if (robUnlocked) {
        document.getElementById("rob-price").textContent = robCost;
        document.getElementById("num-rob").textContent = numRob;
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

cash = 100000;