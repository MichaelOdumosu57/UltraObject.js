
var XHR_0_i // for when extension initiates simple one time requests

function globalPromise(dev_obj){
    new Promise(dev_obj.globalResolve).then(dev_obj.globalThen)
}
var yourPort;


chrome.runtime.onConnect.addListener(function(port) {
    
    // console.log(port.name === "DBready");
    // yourPort = port
    // port.onMessage.addListener(function(msg) {
    
    //   console.log(msg)
    //   port.disconnect()
    //   debugger
      
    // });
    
    // /*  Port lifetime */
    // port.onDisconnect.addListener(function(event) {
    //     console.log('disconecct',event)
    // });
    /**/
});


chrome.runtime.onInstalled.addListener(function() {
    ultraObject.endpoint({
        instruct:'chromeExtensionOneTime',
        incomingFn:function(   dev_obj   ){
            chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
    
            })
        },
        incomingOrigin:'contentScript',
        sendingFn:function(   dev_obj   ){
            var neededTab
            chrome.tabs.query({currentWindow: false}, function(tabs) {
                  // Sort tabs according to their index in the window.
                    neededTab = tabs.reduce((x,y)=>{
                        
                        
                        if(   x.url === dev_obj.matchURL   ){
                            
                            
                            return x
                            
                            
                        }
                        
                        
                        if(   y.url === dev_obj.matchURL   ){
                            
                            
                            return y
                            
                            
                        }
                        
                        
                        return x
                        
                        
                    })
                    
                    
                    console.log(neededTab)
                    chrome.tabs.sendMessage(   neededTab.id,    dev_obj.sendingBody, function(response) {
                        console.log(response);
                    });
            });
        },
        sendingBody:{job:'send those pointValues to the db for the plotly debugger'},
        sendingOrigin:'extension'
    })
    XHR_0_i  = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
});
  

function askDB(   dev_obj   ){
    
    ultraObject.endpoint({
        xhttp:ultraObject.iterify({iterify:[new XMLHttpRequest()]}),
        instruct:'XMLHttpRequest',
        eventName:'load',
        eventHandler:()=>{
            console.log(ultraObject.XHR[ultraObject.XHR.length-1][0].response)
            ultraObject.XHR.minus({index:ultraObject.XHR.length - 1})
            ultraObject.XHR.abelast.minus({index:ultraObject.XHR.abelast.length - 1})
        },
        protocol:"POST",
        target:"http://24.189.66.225/database/query",
        asyncBool:true,
        body:dev_obj.querySQL
    })
    
    
}



chrome.runtime.onInstalled.addListener(function() {
    

    ultraObject.exp.instantiateFS = function(  dev_obj   ){
        return function (resolve,reject){
            devChosen({
                remove:'false',
                scssFn:window.jacket,
                quotaRequest:dev_obj.quotaRequest,
            //     selectRemove:{
            //             dR:'/K00MjBT5kc8BqExn',
            //             sR:''
            //         }
                upperResolve:resolve
            })
        }
    }
    ultraObject.exp.deleteFS = function(){
        devChosen({
            remove:'true',
            scssFn:window.operate,
            quotaRequest:'false',
            selectRemove:{
                    dR:'',
                    sR:''
                }
        })
    }
    ultraObject.exp.readSpot = function(   dev_obj   ){
        console.log(   fs   )
        console.log(   dev_obj  )
        local_FL1_i.args.next.file(
            (   file   )=>{
                ultraObject.exp.GSCTK = new FileReader();
                ultraObject.exp.GSCTK.onload = function(){
                    console.log(   ultraObject.exp.GSCTK.result   );


                    if(   ultraObject.exp.GSCTK.result !== ""   ){
                        
                        
                        console.log('making the request')
                        ultraObject.endpoint({
                            xhttp:ultraObject.iterify({iterify:[new XMLHttpRequest()]}),
                            instruct:'XMLHttpRequest',
                            eventName:'load',
                            eventHandler:()=>{
                                var XHR_1_i  = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                                console.log(   ultraObject.XHR[   ultraObject.scope[XHR_1_i]   ][0].response   )
                                ultraObject.XHR.minus(   {index:ultraObject.scope[XHR_1_i]}   )
                                ultraObject.XHR.abelast.minus(   {index:XHR_1_i}   )
                                ultraObject.XHR[   ultraObject.scope[XHR_0_i]   ].sending.fn({
                                    sendingBody:ultraObject.XHR[   ultraObject.scope[XHR_0_i]   ].sending.body,
                                    matchURL:"https://boards.greenhouse.io/enigmaio/jobs/1056543?gh_src=ceb603551#app"
                                })
                                
                            },
                            protocol:"POST",
                            target:"http://24.189.66.225/database/headphone",
                            asyncBool:true,
                            body:ultraObject.exp.GSCTK.result
                        })
                        
                        
                        
                        if(   local_FL1_i.args.recreate === 'nulled'   ){
                            
                            
                            //done wait for listeners now
                            
                            
                        }
                        
                        
                        else if(   local_FL1_i.args.recreate = 'satisfied'   ){
                            
                            
                            // local_FL1_i.args.next.remove(()=>{
                            //     globalPromise({
                            //         globalResolve:function(resolve,reject){
                            //             localLoops()
                            //             resolve()
                            //         },
                            //         globalThen:ultraObject.exp.deleteFS
                            //     })
                            // },
                            // (e)=>{console.log(e)})
                            
                            
                        }
                        
                        
                    }
                    
                    
                    else if(   ultraObject.exp.GSCTK.result === ""   ){
                                                
                        
                        globalPromise({
                            globalResolve:function(resolve,reject){
                                ultraObject.exp.GSCT = setInterval(()=>{
                                    
                                    
                                    if(   ultraObject.exp.GSCTK.result !== ""   ){
                                        

                                        local_FL1_i.args.next.createWriter(function(fileWriter) {
                                            
                                            
                                                var data = new Blob([ultraObject.exp.GSCTK.result], { type: "text/plain" });
                                                ultraObject.exp.GSCTK = null
                                                fileWriter.write(data)
                                                resolve()
                                                

                                        
                                        }, function(fileError) {throw(fileError)})
                                        clearInterval(   ultraObject.exp.GSCT   )
                                        
                                        
                                    }
                                    
                                    
                                    console.log('need it')
                                    
                                    
                                },1000)
                            },
                            globalThen:ultraObject.exp.readSpot
                        })
                        
                        
                    }
                    
                    
                };
            
                ultraObject.exp.GSCTK.onerror = function() {
                    console.log(reader.error);
                }
            
                ultraObject.exp.GSCTK.readAsText(file)
            },
            (e)=>{
                console.log(e)
            }
        )
    }
        
    
    
    globalPromise({
        globalResolve:ultraObject.exp.instantiateFS({quotaRequest:'false'}),
        globalThen:ultraObject.exp.readSpot
    })
    

});
  
  
