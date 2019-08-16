    

var myPort;
// alert('content script is here')
console.log(chrome.runtime)

/* xhr for the whole content script to communicate with the backend to the database*/ //{
var ScriptXHR_0_i
 // } /**/

function uOendpointAttach(   dev_obj   ){
    ultraObject.endpoint({
        instruct:'chromeExtensionOneTime',
        incomingFn:function(   dev_obj   ){
            chrome.runtime.onMessage.addListener(   dev_obj.eventListener   )
        },
        incomingOrigin:'extension',
        // sendingFn:dev_obj.endpointSendingFn,
        sendingBody:{need:'make a table for me'},
        sendingOrigin:'contentScript'
    })
    ScriptXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
    ultraObject.XHR[   ultraObject.scope[ScriptXHR_0_i]   ].incoming.fn({
        eventListener:initalOutBound
    })
}
function initalOutBound(request, sender, sendResponse) {
    chrome.runtime.onMessage.removeListener(   initalOutBound   )
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
    // console.log(msg)
    // console.log(ultraObject)
    console.log(request)
    // debugger
    ultraObject.XHR[   ultraObject.scope[ScriptXHR_0_i]   ].sending.fn = sendResponse
    preFillForm({
        // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
        allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
        list:{
            'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
            // 'Website':'https://ualbanyasist.github.io/',
            // 'How did you hear about this job?':'Linkedin',
            // 'Phone': '$80,000',
            // 'Cover Letter':'as'
            },
        look:{ 'innerHTML':null,'innerText':null,'textContent':null},
        endpointSendingFn: sendResponse
        
    })

}

window.onload = uOendpointAttach






// chrome.runtime.onMessage.addListener(   initalOutBound   )