// an endpoint here means what the selectAll is lookng for in the object

/*
    setting up functon group
        this is so selectAll can include a varity of data type endpoints from the developer
*/


 /*
    actual function used to determine data type endpoint
        I refer to this as call i will change it to calls to avoid future problems
*/

/*
     we have come to the desired target and the end of our search use subGroups to move on
        so I dont even need subGroups its just an additional tool if i want to figure out how I got to those paths
*/
function selectAll(   dev_obj   ){
            /*
                abelast : 1 for misc
                            1 for fG
            */
            // this function also returns the group ordering if looked for nested items
            //.target item to get all values from must be an itO or an object
            // .typeOnly, what specific values were looking for
            
            
                        
            if(   dev_obj !== undefined   ){
                
                
                var selectAll_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                ultraObject.args.abelast.add(   {value:selectAll_dev_obj}   )
                
                /*adding the first misc holds the function that test for the data type endpoint*/ //{
                var selectAllMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                ultraObject.misc.abelast.add(   {value:ultraObject.scope[selectAllMisc_0_i]}   )
                // }  /**/
            
                /*setting the booleans for the datatype*/ //{
                
                /*setting up functon group*/ //{
                var selectAllFG_0_i = ultraObject.scope.add(   {value:ultraObject.fG.add(   {value:ultraObject.iterableObject()}   )}   )
                ultraObject.fG.abelast.add(   {value:ultraObject.scope[selectAllFG_0_i]}   )
                // }  /**/
                
                ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ].add({
                    value:function(   dev_obj   ){
                        var selectAllFL_1_i = {
                            forLoop_0_i:0,
                            forLoopLength:dev_obj.typeOnly.length,
                            fn:function(   dev_obj   ){
                                
                                /* how subGroups should complete a group */ //{
                                ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint = dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ]
                                // }  /**/
                                
                                /* this checks for the desired data type from the developer */ //{
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'array'    ){
                                    
                                    /* this allows selectAll to test against data type endpoints same for each if statement*/ //{
                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isArray(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    // }  /**/
                                    
                                }
                                // }  /**/
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'element'    ){
                                    
                                    
                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isDOMElement(   {type:dev_obj.type}   )   ){
                                                
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'function'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isFunction(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'int'   ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isInt(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'nodelist'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isNodeList(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'object'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isObject(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'primitive'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isPrimitive(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'string'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isString(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                                
                                if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'itO'    ){


                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                        value:function(   dev_obj   ){
                                            if(   ultraObject.isitO(   {type:dev_obj.type}   )   ){
                                                return 'true'
                                                }
                                        }
                                    })
                                    
                                    
                                }
                                
                            },
                            args:dev_obj,
                            bubble:'true'
                        }
                        ultraObject.forLoop(   selectAllFL_1_i   )
                    }
                })
                ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ][0](   {typeOnly:dev_obj.typeOnly}   )
            
                /*actual function used to determine data type endpoint*/ //{
                ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls = function(   dev_obj   ){
                    var selectAllFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength: ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].length,
                        fn:function(   dev_obj   ){
                            
                            /*if it has found a data type endpoint bubble up */ //{
                            if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ][   selectAllFL_2_i.forLoop_0_i   ](   dev_obj   ) === 'true'   ){
                                
                                
                                return 'true'
                                
                                
                            }
                            // }  /**/
                            
                            
                        },
                        args:dev_obj,
                        bubble:'true'
                    }
                    return ultraObject.forLoop(   selectAllFL_2_i   )
                }
                // }  /**/
                
                // }  /**/


                
                if(   ultraObject.isObject(   {type:dev_obj.target}   ) || ultraObject.isitO(   {type:dev_obj.target}   )   ){
                    
                    
                    var selectReturn = {}
                    var selectReturnMD = {
                        length:0,
                        str:'',
                        ending:dev_obj.typeOnly
                    }
                    //selectReturnMetaData contains grouping information about the .target
                    var selectAllFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.length,
                        fn:function(   dev_obj   ){
                            // console.log(   selectAllFL_0_i.forLoop_0_i,'walk in'   )
                            // console.log(   Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   )
                            var selectCheckpoint = {}  // when it leave recurison it restore the values
                                                        
                            try{
                                
                                /*if we have an itO an Object or the data type endpoint, record its key traversing the structure*/ //{
                                if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'    ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                    //I cannot add it if its a primitive not an object or an itO
                                    //done like this because what if im looking for a string, this would evaluate to false and the subGroupMap would be improper
                                    
                                    ultraObject.subGroups({
                                        map:selectReturnMD,
                                        val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                    })
                                    
                                    
                                }
                                // }  /**/
                                
                            }
                            
                            catch(e){}
                            
                            
                            if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'   ){
                                
                                debugger
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                ultraObject.subGroups({
                                    map:selectReturnMD,
                                    val:ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint,
                                    nextItem:'true',
                                })
                                // return 'premature'
                                //this might leave some impt things behind
                                    
                                
                            }
                            
                            
                            else if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                
                                
                                // console.group('recursion')
                                    selectCheckpoint.args = selectAllFL_0_i.args
                                    selectCheckpoint.forLoop_0_i =  selectAllFL_0_i.forLoop_0_i
                                    selectCheckpoint.forLoopLength = selectAllFL_0_i.forLoopLength
                                    selectAllFL_0_i.args ={
                                        target: Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    }
                                    selectAllFL_0_i.forLoop_0_i = 0
                                    selectAllFL_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   ).length
                                    ultraObject.forLoop(   selectAllFL_0_i   )
                                // console.groupEnd()
                                selectAllFL_0_i.args = selectCheckpoint.args
                                selectAllFL_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                selectAllFL_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                selectCheckpoint = null
                                
                                
                            }
                            
                        },
                        args:{target:dev_obj.target}
                    }
                    ultraObject.forLoop(   selectAllFL_0_i   )
                    ultraObject.subGroups({
                            map:selectReturnMD,
                            nextItem:'complete',
                        })
                    console.group(   'grabbing the chosen elements from the object'   )
                        ultraObject.objInvloved({
                                0:selectReturn,
                 