var port = chrome.runtime.connect({name: "DBready"});

// port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?"){
    port.postMessage({answer: "Madame... Bovary"});
  }
  else if (msg.question ==  "I don't get it."){
     /*    Port lifetime */
    port.disconnect()
    /**/
  }
  console.log(msg.question)
});