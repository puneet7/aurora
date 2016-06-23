window.onload = numbersCount;	
var delay=100;//Set delay
var countStart = 0, howManyTimes = 0;
var resstart=0,domstart=0,techstart=0;
var resfinal=12,domfinal=15,techfinal=10;//Get From backEnd
howManyTimes = Math.max(resstart, domfinal, techfinal);
function numbersCount() {
	countStart++;
	resstart++;
	domstart++;
	techstart++;
	var resstring = resstart.toString();
	var domstring = domstart.toString();
	var techstring = techstart.toString();
	if(resstart<=resfinal){
		document.getElementById('resource').innerHTML=resstring;
	}
	if(domstart<=domfinal){
		document.getElementById('domain').innerHTML=domstring;
	}
	if(techstart<=techfinal){
		document.getElementById('tech').innerHTML=techstring;
	}
    if( countStart < howManyTimes ){
        setTimeout( numbersCount, delay );
    }
}
numbersCount();

