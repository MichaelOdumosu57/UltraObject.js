/*
    FIX ME
    for the XMLHTTPRequest the dev should allow to add as many events before I fire it, your endpoint has to do more not less
*/
/*
    XMLHttpRequest
    // it expect an XMLHttpRequest in  index 0
*/
/*
    chromeExtensionOneTime"
    incoming
        body,fn,origin, represents everything to handle to incoming side
    sending
        body, fn, origin represents everything to handle the outbound side
    dev_obj
                                fn:dev_obj.incomingFn,
                                origin:dev_obj.incomingOrigin,
                                body:dev_obj.incomingBody
                                
                                fn:dev_obj.sendingFn,
                                body:dev_obj.sendingBody,
                                origin:dev_obj.sendingOrigin
                                
    for fn, if in incoming example
        chrome.runtime.onMessage(function(r,s,sR))}
        you must wrap it in function(dev_obj) to get all your data in there, remember when dont use methods and this
            we make functions off the ultraObject and include parent target intended objects inside the function so it cannot lose its memory address or in other words uses a memory address that is more stable
    for origin, extension for the extension itself and contentScript for the contentScript or use anything if u have a better naming convertion
*/


function endpoint(   dev_obj   ){
                    /*
                        key points
                        the developer places into XHR itO what function they will use to make the request
                        you provide functionality to help make goobly gook easier like inserting all values into a function then giving it a go
                    */
                    /* ablelasts
                        1 for XHR
                    */
                    /*
                        .xhttp:the xhr functionality the developer wants to use
                            what goes here is an itO for all the items the dev needs to get the job done
                        .instruct: telling the function how to use what in XHR[index] to get the job done
                        .eventName: in case of  XMLHttpRequest i need to a function as an event handler to make use of the responseText
                        .eventHandler:in case of  XMLHttpRequest  fn for eventName
                        .protocol :  in case of  XMLHttpRequest  HTTP methods for XHR
                        .target:  string location
                        .asyncBool: unkwown use best to leave on true
                        .body: in case of  XMLHttpRequest for certain http methods this is the important data the endpoint needs, should be a string or one object
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var endpoint_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*XHR +scope +self +abelast */ //{
                    var ePXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.add(   {value:dev_obj.xhttp}   )}   )
                    ultraObject.XHR.abelast.add(   {value:ultraObject.scope[ePXHR_0_i ]}   )
                    // }  /**/
                    
                    /*var endpoint options */ //{
                    
                        /* XMLHttpRequest*/ //{
                        if(   dev_obj.instruct === 'XMLHttpRequest'   ){
                            
                            
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventName = dev_obj.eventName
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventHandler = dev_obj.eventHandler
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorName = dev_obj.errorName
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errortHandler = dev_obj.errorHandler
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].addEventListener(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventName,ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventHandler   )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].addEventListener(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorName,ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorHandler   )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].protocol = dev_obj.protocol
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].target = dev_obj.target
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].asyncBool = dev_obj.asyncBool
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].body = dev_obj.body
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].open(
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].protocol,
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].target,
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].asyncBool
                            )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].send(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].body   )
                            
                            
                        }
                        // }  /**/
                        
                        /* chromeExtensionOneTime*/ //{
                        if(   dev_obj.instruct === "chromeExtensionOneTime"   ){
                            
                            
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ] = ultraObject.iterableObject()
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].incoming =   {
                                fn:dev_obj.incomingFn,
                                origin:dev_obj.incomingOrigin,
                                body:dev_obj.incomingBody
                            }
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].sending  = {
                                fn:dev_obj.sendingFn,
                                body:dev_obj.sendingBody,
                                origin:dev_obj.sendingOrigin
                            }
                            
                            
                        }
                        // }  /**/
                        
                        
                    // }  /**/
                    
                    /*XHR -scope */ //{
                    var ePXHR_0_i = ultraObject.scope.minus(   {index:ePXHR_0_i}   )
                    // }  /**/
                    
                }// function handling all things endpoint