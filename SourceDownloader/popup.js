// this is the background code...

// alert("bye");
// var test = document;
// listen for our browerAction to be clicked
document.getElementById("downloader").addEventListener("click",function(tab){
// chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});

//credit to https://gist.github.com/danharper/8364399 for injection script