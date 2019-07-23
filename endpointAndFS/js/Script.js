    

var myPort;
// alert('content script is here')
console.log(chrome.runtime.onConnect)


chrome.webNavigation.onCompleted.addListener(function() {
    //   alert("This is my favorite website!");

      
var myPort;
alert('content script is here')
console.log(chrome.runtime.onConnect)
});
  
// chrome.runtime.onConnect.addListener(function(port) {
    
//     console.log(port.name == "DBready");
//     myPort = port
//     port.onMessage.addListener(function(msg) {
    
//       console.log(msg)
//       port.postMessage({stuff:'txt'})
//       port.disconnect()
//       debugger
      
//     });
    
//     /*  Port lifetime */
//     port.onDisconnect.addListener(function(event) {
//         console.log('disconecct',event)
//     });
//     /**/
// });

// myPort.onMessage.addListener(function(msg) {
//     console.log(msg)
//     console.log(ultraObject)
//     console.log(document)
//     chrome.ultraObject = ultraObject
//     myPort.postMessage({allTags:document.querySelectorAll("body *:not(script)")})
    
//     // new Promise((resolve,reject)=>{
//     //     preFillForm({
//     //         // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
//     //         allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
//     //         list:{
//     //             'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
//     //             'Website':'https://ualbanyasist.github.io/',
//     //             'How did you hear about this job?':'Linkedin',
//     //             'Phone': '$80,000',
//     //             'Cover Letter':'as'
//     //             },
//     //         look:{ 'innerHTML':null,'innerText':null,'textContent':null}
//     //     })
//     //     resolve()
//     // }).then(()=>{
//     //     port.postMessage({complete:'I ran the test look at your plotly extension for the results'})
//     // })
// });

