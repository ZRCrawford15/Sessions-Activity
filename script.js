document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById("reset").addEventListener("click", function(event){
		let req = new XMLHttpRequest();
		let payloud = {reset: null};
		payload.reset = document.getElementById('reset').value;
		req.open('POST', 'http://flip3.engr.oregonstate.edu:23950/count', true);
		req.setRequestHeader('Content-type', 'application/json');
		req.send(JSON.stringify(payload));
		let response = JSON.parse(req.responseText);
		console.log(JSON.parse(req.responseText));

	})
}