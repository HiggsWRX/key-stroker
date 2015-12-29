document.addEventListener('keydown', function(event) {
	var ks_count = document.getElementById("ks-count").innerHTML;
	var cash = parseInt(document.getElementById("current-cash").innerHTML);

	//Check for keypresses between A and Z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    	ks_count++;
        document.getElementById("ks-count").innerHTML = ks_count;
    }

    //Start adding scripts
    if (ks_count == 10) {
    	cash+=10;
    	document.getElementById("current-cash").innerHTML = cash+" $";
    	document.getElementById("ks-count").innerHTML = 0;
    }
    
});