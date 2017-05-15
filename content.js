let block = document.createElement("div");
let innerBlock = document.createElement("div");
block.style.position = "absolute";
block.style.textAlign = "center";
block.style.color = "white";
block.style.fontSize = "60px";
block.style.padding = "60px";
block.style.backgroundColor = "#000000";
block.style.bottom = "-" + document.body.scrollHeight + "px";
block.style.top = 0;
block.style.left = 0;
block.style.right = 0;
block.style.zIndex = 9999;
block.innerHTML = "Зарядочка!!!";

chrome.runtime.sendMessage({toBackground: true}, function (response) {
	response.turn && turnOn();
});

chrome.runtime.onMessage.addListener(
	function (request) {
		request.turn ? turnOn() : turnOff();
	}
);

function turnOn() {
	document.body.appendChild(block);
}

function turnOff() {
	document.body.removeChild(block);
}