/*jslint plusplus: true */

// Variables to keep track of various things, such as
// ammount of cash, assets unlocked, assets cost, etc

var kps = 0;
var numKs = 0;
var cash = 0;

//assets
var elder = {id: 1, name: "Friendly Elder", num: 0, unlocked: false, cost: 15, kps: 1};
var kid = {id: 2, name: "Kid", num: 0, unlocked: false, cost: 100, kps: 5};
var student = {id: 3, name: "Computer Science Student", num: 0, unlocked: false, cost: 500, kps: 40};
var contractor = {id: 4, name: "Outsourced Contractor", num: 0, unlocked: false, cost: 3000, kps: 100};
var champion = {id: 5, name: "World Typewritting Champion", num: 0, unlocked: false, cost: 10000, kps: 400};
var robot = {id: 6, name: "Robot 4444P", num: 0, unlocked: false, cost: 40000, kps: 1000};

//Using real times
var before = new Date();

function updateAsset(asset) {
	if (!asset.unlocked && cash >= asset.cost) {
        document.getElementById('store').style.visibility = 'visible';
        
        var assetDiv = document.createElement('div');
        assetDiv.innerHTML = '<br><button class="btn btn-primary btn-lg" id="hire-'+ asset.id +'">Buy 1</button> '
        	+ asset.name + ' $<span id="'+asset.id+'-price">' + asset.cost + '</span> - You have <span id="num-'
        	+ asset.id + '">'+ asset.num + '</span>';

        document.getElementById('assets').appendChild(assetDiv);

        // when the user buys the asset, update the number owned, its new price and deduct the cash
        document.getElementById('hire-'+asset.id).addEventListener('click', function (event) {
        	if (cash >= asset.cost) {
        		asset.num++;
	            cash -= asset.cost;
	            asset.cost = Math.ceil(asset.cost * 1.1);
	            kps += asset.kps;
        	}
        });

        asset.unlocked = true;

    }

    else if (asset.unlocked) {
    	document.getElementById(asset.id+'-price').textContent = asset.cost;
        document.getElementById('num-'+asset.id).textContent = asset.num;
        document.getElementById('hire-'+asset.id).disabled = cash < asset.cost;
    }
}

// increase the number of keystrokes when user presses a key
// between a and z
document.addEventListener('keyup', function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        cash++;
    }
});

// update the UI every 10 ms
window.setInterval(function () {
	now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());

	updateAsset(elder);
	updateAsset(kid);
	updateAsset(student);
	updateAsset(contractor);
	updateAsset(champion);
	updateAsset(robot);

    document.getElementById("ks-count").textContent = kps;

    cash += (kps * elapsedTime/1000);

    document.getElementById("cash").textContent = Math.floor(cash);

    before = now;

}, 10);

cash = 0;