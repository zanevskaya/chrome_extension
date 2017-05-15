let status = false;
let timeFit = 90000;
let timeRest = 360000;

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		request.toBackground && sendResponse({turn: status});
	}
);

setInterval(launch, timeFit + timeRest);

function launch() {
	turn();
	setTimeout(turn, timeFit);
}

function turn() {
	status = !status;
	chrome.tabs.query({}, function (tabs) {
		for (let i = 0; i < tabs.length; i++) {
			chrome.tabs.sendMessage(tabs[i].id, {turn: status});
		}
	})
}