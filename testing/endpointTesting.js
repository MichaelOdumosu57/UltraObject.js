var ultraObject = ultraObjectReset()

//testing XMLHttpRequest functinality	y
ultraObject.endpoint({
    xhttp:ultraObject.iterify({iterify:[new XMLHttpRequest()]}),
    instruct:'XMLHttpRequest',
    eventName:'load',
    eventHandler:()=>{
        console.log(ultraObject.XHR[0][0].responseText)
    },
    protocol:"POST",
    target:"http://24.189.66.225/backend/linspace",
    asyncBool:true,
    body:JSON.stringify({
        'a': 0,
        'b': 1,
        'c': 8
    })
})

