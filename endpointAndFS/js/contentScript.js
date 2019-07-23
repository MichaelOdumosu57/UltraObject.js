var port = chrome.runtime.connect({name: "DBready"});

// port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
// port.disconnect()
console.log(msg)
});