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
                */
                
                /*adding the dev_obj to args*/ //{
                var endpoint_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                // }  /**/
                
                /*XHR +scope +self +abelast */ //{
                var ePXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.add(   {value:dev_obj.xhttp}   )}   )
                ultraObject.XHR.abelast.add(   {value:ultraObject.scope[ePXHR_0_i ]}   )
                // }  /**/
                
                /*XHR +scope +self +abelast */ //{
                
                    /* XMLHttpRequest*/ //{
                    // it expect an XMLHttpRequest in  index 0
                    if(   dev_obj.instruct === 'XMLHttpRequest'   ){
                        ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventName = dev_obj.eventName
                        ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventHandler = dev_obj.eventHandler
                        ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0]
                    }
                    // }  /**/
                    
                // }  /**/
                
                
            }// function handling all things endpoint