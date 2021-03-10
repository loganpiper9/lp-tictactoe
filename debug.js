var debugBox = document.getElementById('debug');
var debugMode = debugBox.checked;

function writeDebug() {
	if(debugMode) {
		document.getElementById('debugarea').innerHTML = "Computer View: <br>" + gameGrid[0] + " " + gameGrid[1] + " " + gameGrid[2] + "<br>" + gameGrid[3] + " " + gameGrid[4] + " " + gameGrid[5] + "<br>" + gameGrid[6] + " " + gameGrid[7] + " " + gameGrid[8];
	}
}

debugBox.addEventListener('change', function(event) {
	debugMode = event.target.checked;
	if(debugMode) {
		writeDebug();
	} else {
		document.getElementById('debugarea').innerHTML = "";
	}
});