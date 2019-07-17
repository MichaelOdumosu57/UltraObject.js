function globalPromise(dev_obj){
    new Promise(dev_obj.globalResolve).then(dev_obj.globalThen)
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
                                
                                console.warn(ultraObject.XHR[0][0].response)
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
        globalResolve:ultraObject.exp.instantiateFS({quotaRequest:'true'}),
        globalThen:ultraObject.exp.readSpot
    })
    

});
  
  
  