function propertyUndefined(   dev_obj   ){
                    /* ablelasts
                        1 for objIo
                    */
                    /*
                        expected - an itO listing of the property path to the target property
                        target - the target object
                        stack - if  'true' prints out path stack to help with debugging
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var propertyUndefined_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*objIO +scope +self +abelast */ //{
                    var pUobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.objIO.abelast.add(   {value:ultraObject.scope[pUobjI_0_i]}   )
                    // }  /**/
                    
                    /*setting up the itO */ //{
                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected = dev_obj.expected
                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target = dev_obj.target
                    // }  /**/
                    
                    /*getting to the target property */ //{
                    // the target property is inferred to be the last string in dev_obj.expected
                    // two ways of doing it
                        //use function and recurse to the last index and return the propertyies off the result as you index from the beginning
                        //hold the subproperties in indexes in the itO (memory heavy)
                    
                        /* node mode choice thread subpropertyHold not anymore if you want to see the path stack */ //{
                        if(   dev_obj.stack === 'true'   ){
                        
                        
                            var pUFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected.length,
                            fn:function(   dev_obj   ){
                                
                                if(   pUFL_0_i.forLoop_0_i === 0   ){
                                    
                                    
                                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].add(   {value:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   pUFL_0_i.forLoop_0_i   ]   ]}   )
                                    
                                    
                                }
                                
                                
                                else if(   pUFL_0_i.forLoop_0_i !== 0   ){
                                    
                                    
                                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].add(   {value:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ][   pUFL_0_i.forLoop_0_i -1   ][   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   pUFL_0_i.forLoop_0_i   ]   ]}   )
                                    
                                    
                                }
                                
                                
                            },
                            args:{} //{}
                        }
                            ultraObject.forLoop(   pUFL_0_i    )
                            
                            
                        }
                        // }  /**/
                        
                        /* node mode choice thread subpropertyRecursion */ //{
                        // at .result we can try to pull out the result but object comparison is a tough cookie what does es5 have to say about it
                        ultraObject.objIO.access = function(   dev_obj   ){
                                
                                
                            if(   dev_obj.result_0_i === 1 ){
                                
                                
                                return ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i - 1   ]   ]  === undefined ? dev_obj.noVal : ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i - 1   ]   ]
             
             
                            }
                            
                            
                            else if(   dev_obj.result_0_i !== 1  ){
                                
                                                              
                                dev_obj.result_0_i -= 1
                                return ultraObject.objIO.access({
                                    result_0_i:dev_obj.result_0_i,
                                    noVal:dev_obj.noVal
                                })[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i   ]   ] === undefined ? dev_obj.noVal : ultraObject.objIO.access({
                                    result_0_i:dev_obj.result_0_i,
                                    noVal:dev_obj.noVal
                                })[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i   ]   ]

            
                            }
                                
                                
                        }
                        ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].result = ultraObject.objIO.access({
                            result_0_i:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected.length,
                            noVal:dev_obj.noVal
                        })
                        // }  /**/
                        
                    // }  /**/
                    
                    /*objIO -scope  */ //{
                    ultraObject.scope.minus(   {index:pUobjI_0_i}   )
                    // }  /**/
                    
                    
                }// in js when a function finds a property undefined when the developer expects something to be there along the bubble to the target inner property it can break the API, instead of write repeated if statements use this function to validate if the target property is availble in the data type