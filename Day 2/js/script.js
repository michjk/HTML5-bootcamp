document.addEventListener("DOMContentLoaded", function(){
	var inputBox = document.getElementById("inputBox");
	var sendButton =document.getElementsByTagName('button')[0];
	var messageBox = document.querySelector("#messageBox");
	var clearButton = document.getElementById("clear");
	//console.log(inputBox, sendButton, messageBox);
	
	function addMessage() {
		var text = inputBox.value;
		var p = document.createElement('p');
		p.textContent = text;
		messageBox.appendChild(p);
		inputBox.value='';
		
	};
	
	function clearMessage() {
		while (messageBox.childNodes.length) {
			messageBox.childNodes[0].remove();
		}
	}
	
	sendButton.addEventListener('click', addMessage);
	
	clearButton.addEventListener('click', clearMessage);
	/*function () {
		while (messageBox.childNodes.length) {
			messageBox.childNodes[0].remove();
		}
	})*/
	
	inputBox.addEventListener('keyup', function(e) {
		if (e.keyCode === 13)
		{
			addMessage();
		}
	})
	
});
