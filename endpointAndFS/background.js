
var bkgd_XHR_0_i  // for when extension initiates simple one time requests
// from the interrogation module
var bkgd_FL_0_i  // for pointValue data on your proofObject
var bkgd_FL_1_i  // for pointValue data from your factModule both calcuating how many points needed



function globalPromise(dev_obj){
    new Promise(dev_obj.globalResolve).then(dev_obj.globalThen)
}
var yourPort;

  
function askDB(   dev_obj   ){
    return function(   resolve,reject   ){
        ultraObject.endpoint({
            xhttp:ultraObject.iterify({iterify:[new XMLHttpRequest()]}),
            instruct:'XMLHttpRequest',
            eventName:'load',
            eventHandler:()=>{
                var bkgd_XHR_2_i  =  ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                console.log(ultraObject.XHR[   ultraObject.scope[bkgd_XHR_2_i ]   ][0].response)
                // ultraObject.XHR.minus({index:ultraObject.XHR.length - 1})
                // ultraObject.XHR.abelast.minus({index:ultraObject.XHR.abelast.length - 1})
                
                
                if(   resolve !== undefined   ){
                    
                    
                    resolve(   ultraObject.XHR[   ultraObject.scope[bkgd_XHR_2_i ]   ][0].response   )
                    
                    
                }
                
                
            },
            protocol:dev_obj.protocol,
            target:dev_obj.target,
            asyncBool:true,
            body:dev_obj.querySQL
        })
    }
    
}


function communicateDB(   dev_obj   ){
    return function(resolve,reject){
        ultraObject.XHR[   ultraObject.scope[bkgd_XHR_0_i ]   ].sending.fn({
            sendingBody:dev_obj.message,
            matchURL:dev_obj.URL,
            resolve:resolve
        })
    }
}



    

chrome.runtime.onInstalled.addListener(function() {
    ultraObject.endpoint({
        instruct:'chromeExtensionOneTime',
        incomingFn:function(   dev_obj   ){
            chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
                console.log(response)
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
                        
                        
                        if(   dev_obj.resolve !== undefined   ){
                            
                            
                            if(   response.need === "make a table for me"   ){
                                
                                
                                    globalPromise({
                                        globalResolve:askDB({
                                            querySQL:
                                            `
                                                DROP TABLE IF EXISTS  interrogation_PLOTLY;
                                                CREATE TABLE interrogation_PLOTLY (
                                                    element                     int,
                                                    element_VALUEPHRASE         int,
                                                    element_SUSPECT             int,
                                                    element_TAGNAME             int,
                                                    element_HIDDEN              int,
                                                    element_CLASSNAME           int,
                                                    element_ID                  int,
                                                    parents                     int,
                                                    parents_EXIST               int,
                                                    parents_TAGNAME             int,
                                                    parents_CLASSNAME           int,
                                                    parents_ID                  int,
                                                    siblings                    int,
                                                    siblings_TAGNAME            int,
                                                    children                    int,
                                                    children_CLASSNAME          int,
                                                    children_ID                 int,
                                                    total                       int
                                                );
                                            `,
                                            target:"http://24.189.66.225/database/query",
                                            protocol:"POST"
                                        }),
                                        globalThen:function(){
                                            dev_obj.resolve()
                                        }
                                    })


                            }
                            
                            
                            dev_obj.resolve()
                            
                            
                        }
                        

                        if(   response.item === 'debuggerDB'   ){
                            

                                ultraObject.exp.debuggerDB = {}
                                ultraObject.exp.debuggerDB.data = response.data
                                ultraObject.exp.debuggerDB.stringDB = {} // there are ticks here its a string
                                ultraObject.exp.debuggerDB.stringDB.args = ``
                                ultraObject.exp.debuggerDB.stringDB.values = ``
                                ultraObject.exp.debuggerDB.stringDB.total = `INSERT INTO interrogation_PLOTLY (\n`
                                ultraObject.exp.debuggerDB.stringDB.delimiter = ',\n'
                                bkgd_FL_0_i = {
                                    forLoop_0_i:1,
                                    forLoopLength:ultraObject.exp.debuggerDB.data.length,
                                    fn:function(   dev_obj   ){
                                       bkgd_FL_1_i.forLoopLength = ultraObject.exp.debuggerDB.data[    bkgd_FL_0_i.forLoop_0_i   ][1].length
                                       ultraObject.exp.debuggerDB.stringDB.args  += ultraObject.exp.debuggerDB.data[   bkgd_FL_0_i.forLoop_0_i   ][0] + ultraObject.exp.debuggerDB.stringDB.delimiter
                                       ultraObject.exp.debuggerDB.stringDB.values += ultraObject.exp.debuggerDB.data[   bkgd_FL_0_i.forLoop_0_i   ][2] + ultraObject.exp.debuggerDB.stringDB.delimiter
                                       
                                        
                                        if(   bkgd_FL_0_i.forLoop_0_i + 1 ===  bkgd_FL_0_i.forLoopLength && bkgd_FL_1_i.forLoopLength !== 0   ){
                                        
                                            
                                            bkgd_FL_1_i.args.end = 'true'
                                            
                                            
                                        }
                                        
                                        
                                        else if(   bkgd_FL_0_i.forLoop_0_i + 1 ===  bkgd_FL_0_i.forLoopLength && bkgd_FL_1_i.forLoopLength === 0   ){
                                        
                                            
                                            ultraObject.exp.debuggerDB.stringDB.args = ultraObject.exp.debuggerDB.stringDB.args.slice(0,-2)
                                            ultraObject.exp.debuggerDB.stringDB.values = ultraObject.exp.debuggerDB.stringDB.values.slice(0,-2)
                                            
                                            
                                        }
                                        
                                        
                                        if(   bkgd_FL_1_i.forLoopLength !== 0   ){
                                            
                                            
                                            ultraObject.forLoop(   bkgd_FL_1_i    )
                                            
                                            
                                        }
                                    },
                                    args:dev_obj //{}
                                }
                                bkgd_FL_1_i = {
                                    forLoop_0_i:0,
                                    fn:function(   dev_obj   ){
                                        ultraObject.exp.debuggerDB.stringDB.args += ultraObject.exp.debuggerDB.data[   bkgd_FL_0_i.forLoop_0_i   ][0] + "_" + ultraObject.exp.debuggerDB.data[    bkgd_FL_0_i.forLoop_0_i   ][1][    bkgd_FL_1_i.forLoop_0_i   ][0].toUpperCase() + ultraObject.exp.debuggerDB.stringDB.delimiter
                                        ultraObject.exp.debuggerDB.stringDB.values += ultraObject.exp.debuggerDB.data[    bkgd_FL_0_i.forLoop_0_i   ][1][    bkgd_FL_1_i.forLoop_0_i   ][1].toString() + ultraObject.exp.debuggerDB.stringDB.delimiter
                                        
                                        
                                        if(   bkgd_FL_1_i.args.end === 'true' && bkgd_FL_1_i.forLoop_0_i + 1 ===  bkgd_FL_1_i.forLoopLength   ){
                                            
                                            
                                            ultraObject.exp.debuggerDB.stringDB.args = ultraObject.exp.debuggerDB.stringDB.args.slice(0,-2)
                                            ultraObject.exp.debuggerDB.stringDB.values = ultraObject.exp.debuggerDB.stringDB.values.slice(0,-2)
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    args:dev_obj //{}
                                }
                                ultraObject.forLoop(   bkgd_FL_0_i    )
                                askDB({
                                    querySQL:
                                        ultraObject.exp.debuggerDB.stringDB.total + ultraObject.exp.debuggerDB.stringDB.args + "\n)\nVALUES(\n" + ultraObject.exp.debuggerDB.stringDB.values + "\n);"
                                    ,
                                    target:"http://24.189.66.225/database/query",
                                    protocol:"POST"
                                })()
                                ultraObject.XHR[   ultraObject.scope[bkgd_XHR_0_i ]   ].sending.fn({
                                    sendingBody:"nextSet",
                                    matchURL:ultraObject.XHR[   ultraObject.scope[   bkgd_XHR_0_i   ]   ].targetURL,
                                })
                                
                                
                            }
                            
                            
                    });
            });
        },
        sendingBody:{job:'gimme those pointValues so I can update plotlyDB'},
        sendingOrigin:'extension'
    })
    bkgd_XHR_0_i   = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
    ultraObject.XHR[   ultraObject.scope[   bkgd_XHR_0_i   ]   ].targetURL =  "https://ualbanyasist.github.io/"
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
                                var bkgd_XHR_1_i   = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                                console.log(   ultraObject.XHR[   ultraObject.scope[bkgd_XHR_1_i ]   ][0].response   )
                                ultraObject.XHR.minus(   {index:ultraObject.scope[bkgd_XHR_1_i ]}   )
                                ultraObject.XHR.abelast.minus(   {index:bkgd_XHR_1_i }   )
                                
                                
                                
                            
                                if(   local_FL1_i.args.recreate === 'satisfied'   ){
                                    
                                    
                                    local_FL1_i.args.next.remove(()=>{
                                        globalPromise({
                                            globalResolve:function(resolve,reject){
                                                localLoops()
                                                resolve()
                                            },
                                            globalThen:ultraObject.exp.endpointDB
                                        })
                                    },
                                    (e)=>{console.log(e)})
                                    
                                    
                                }
                                
                                
                                else if(   local_FL1_i.args.recreate === 'nulled'   ){
                                    
                                    
                                    // resolve() simple listeners now
                                    
                                    
                                }
                                    
                                    
                                
                            },
                            protocol:"POST",
                            target:"http://24.189.66.225/database/headphone",
                            asyncBool:true,
                            body:ultraObject.exp.GSCTK.result
                        })
                        
                        
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
                                                

                                        
                                        }, function(fileError) {
                                            throw(fileError)
                                            clearInterval(   ultraObject.exp.GSCT   )
                                        })
                                        clearInterval(   ultraObject.exp.GSCT   )
                                        
                                        
                                    }
                                    
                                    
                                    console.log('need it')
                                    
                                    
                                },2500)
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
    ultraObject.exp.endpointDB = function(   dev_obj   ){
        globalPromise({
            globalResolve:communicateDB({
                message:ultraObject.XHR[   ultraObject.scope[bkgd_XHR_0_i ]   ].sending.body,
                URL:ultraObject.XHR[   ultraObject.scope[   bkgd_XHR_0_i   ]   ].targetURL
            }),
            globalThen:communicateDB({
                message:{job:"made the table start sending me values"},
                URL:ultraObject.XHR[   ultraObject.scope[   bkgd_XHR_0_i   ]   ].targetURL
            })
        })
    }
    
    // globalPromise({
    //     globalResolve:ultraObject.exp.instantiateFS({quotaRequest:'true'}),
    //     globalThen:ultraObject.exp.readSpot
    // })
    
new Promise((resolve,reject)=>{
    ultraObject.a = 1
    
            var b = setInterval(()=>{
                
                
                if(   ultraObject.a === 2   ){
                    


                    clearInterval(   b   )
                    resolve()
                    
                    
                }
                
                
                console.log(`head over to `+ ultraObject.XHR[   ultraObject.scope[   bkgd_XHR_0_i   ]   ].targetURL +` in  a new tab in the same browser, open the developer tools allow for debugging then make ultraObject.a  =2
                and see the error`)
                
                
            },2000)

}).then(()=>{
     ultraObject.exp.endpointDB()
})

    

});
  
  
