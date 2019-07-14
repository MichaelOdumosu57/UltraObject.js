  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      debugger
      console.log("The color is green.");
      console.log(chrome)
    });
  });
  
  
  