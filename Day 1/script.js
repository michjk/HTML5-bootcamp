document.addEventListener("DOMContentLoaded", function(){
	var inputBox = document.getElementById("inputBox");
	var sendButton =document.getElementsByTagName('button')[0];
	var messageBox = document.querySelector("#messageBox");
	//console.log(inputBox, sendButton, messageBox);
	
	function addMessage() {
		var text = inputBox.value;
		var p = document.createElement('p');
		p.textContent = text;
		messageBox.appendChild(p);
		inputBox.value='';
		
	};
	
	sendButton.addEventListener('click', addMessage);
	
	inputBox.addEventListener('keyup', function(e) {
		if (e.keyCode === 13)
		{
			addMessage();
		}
	})
	
});
