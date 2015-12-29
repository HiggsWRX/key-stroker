var ks_count = 0;
var cash = 0;
var hasElder = 0;
var elderCount = 0;

document.addEventListener('keyup', function(event) {

	//Check for keypresses between A and Z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    	ks_count++;
        document.getElementById("ks-count").innerHTML = ks_count;
    }

    //Start adding scripts
    if (ks_count == 10) {
    	cash+=10;
    	document.getElementById("current-cash").innerHTML = cash+" $";
    	ks_count = 0;
    	document.getElementById("ks-count").innerHTML = ks_count;
    }

    //Unlock elder
    if (cash == 20 && hasElder == 0) {
    	var elder = document.createElement("div");
		elder.innerHTML = '<a id="buy-elder" href="#">Buy Elder (5$)!</a><p>Elder count: </p><p id="elder-count">0</p> ';
		document.getElementById('assets').appendChild(elder);
		hasElder = 1;

		document.getElementById("buy-elder").addEventListener('click', function(event) {
			if (cash >= 5) {
				cash -=5;
				elderCount++;
				document.getElementById("elder-count").innerHTML = elderCount;
				document.getElementById("current-cash").innerHTML = cash+" $";
			}
		});
    }
    
});