

chrome.browserAction.onClicked.addListener(function(tab) {
	var active = false;
  //this looks good I don't know why its not  working
  chrome.runtime.sendMessage({active: true});

});
