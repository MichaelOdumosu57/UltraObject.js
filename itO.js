function iterableObject(   dev_obj   ){
    //. value the actual item your are adding to the object
    // .stop for the abelast
    
     var iterableObjectO = {
        length:0,
        
        add:function(   dev_obj   ){// returns the index that it was added to an object
                iterableObjectO[iterableObjectO.length] = dev_obj.value
                iterableObjectO.length += 1
                // iterableObjectO['q'+(iterableObjectO.length -1).toString()] = iterableObjectO.length -1
                return iterableObjectO.length -1
            },// adds a value and retuns its place in the array
        minus:function(   dev_obj   ){
            //.value value to remove
            //.index remove and index
            
            if(   dev_obj.index !== undefined   ){
                
                
                delete iterableObjectO[dev_obj.index]
                // delete iterableObjectO['q'+dev_obj.index.toString()]
                iterableObjectO.resetLength()// resets the length
                var iterableObjectFL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:iterableObjectO.length,
                    fn:function(   dev_obj   ){
                        
                        
                        if(   iterableObjectTDI <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.length  ){ // at that point something must be missing
                            
                            
                            iterableObjectO[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]
                            delete iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                            
                            
                        }
                    },
                    args:{
                        index:dev_obj.index
                        }
                }
                ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                
                
            }
            
            
            if(   dev_obj.value !== undefined   ){
                
                
                var iterableObjectO_BOOL = {0:false}
                iterableObjectO_BOOL = ultraObject.severalOr({
                            compTo: dev_obj.value,
                            compAgn: iterableObjectO,
                            boolean:iterableObjectO_BOOL,
                            which:0
                })
                
                
                if(   iterableObjectO_BOOL[0]   ){
                    
                    
                    var iterableObjectTDI = iterableObjectO_BOOL.spot // index to remove
                    delete iterableObjectO[iterableObjectTDI]
                    // delete iterableObjectO['q'+iterableObjectTDI.toString()]
                    iterableObjectO.resetLength()
                    var iterableObjectFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:iterableObjectO.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.length  ){ // at that point something must be missing
                                
                                
                                iterableObjectO[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1]
                                delete iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                                
                                
                            }
                            
                            
                        },
                        args:{}
                    }
                    ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                    
                    
                    if(    dev_obj.correct === 'false'   ){
                        
                        
                        //leave the index alone
                        
                        
                    }

                }
                
                
            }
            
            
        },// removes an item from an array if its there
        resetLength:function(   dev_obj   ){
            ultraObject.objectLength({
                    val:iterableObjectO,
                    getLen:function(   dev_obj   ){
                        
                        
                        if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                            
                            
                            return 'true'
                            
                            
                        }
                        
                        
                    },
                    result:'true'
            })
        }, //if corrputed resets the lengths
        isitO:function(   dev_obj   ){
            return 'true'
        }//confirms if its an itO, make it refuse to bind
     }
     iterableObjectO.abelast = {
        length:0,
        
        add:function(   dev_obj   ){// returns the index that it was added to an object
                iterableObjectO.abelast[iterableObjectO.abelast.length] = dev_obj.value
                iterableObjectO.abelast.length += 1
                // iterableObjectO.abelast['q'+(iterableObjectO.abelast.length -1).toString()] = iterableObjectO.abelast.length -1
                return iterableObjectO.abelast.length -1
            },// adds a value and retuns its place in the array
        minus:function(   dev_obj   ){
            //.value value to remove
            //.index remove and index
            
            if(   dev_obj.index !== undefined   ){
                
                
                delete iterableObjectO.abelast[dev_obj.index]
                // delete iterableObjectO.abelast['q'+dev_obj.index.toString()]
                iterableObjectO.abelast.resetLength()// resets the length
                var iterableObjectFL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:iterableObjectO.abelast.length,
                    fn:function(   dev_obj   ){
                        
                        
                        if(   iterableObjectTDI <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                            
                            
                            iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]
                            delete iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                            
                            
                        }
                    },
                    args:{
                        index:dev_obj.index
                        }
                }
                ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                
                
            }
            
            
            if(   dev_obj.value !== undefined   ){
                
                
                var iterableObjectO_abelast_BOOL = {0:false}
                iterableObjectO_abelast_BOOL = ultraObject.severalOr({
                            compTo: dev_obj.value,
                            compAgn: iterableObjectO.abelast,
                            boolean:iterableObjectO_abelast_BOOL,
                            which:0
                })
                
                
                if(   iterableObjectO_abelast_BOOL[0]   ){
                    
                    
                    var iterableObjectTDI = iterableObjectO_abelast_BOOL.spot // index to remove
                    delete iterableObjectO.abelast[iterableObjectTDI]
                    // delete iterableObjectO.abelast['q'+iterableObjectTDI.toString()]
                    iterableObjectO.abelast.resetLength()
                    var iterableObjectFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:iterableObjectO.abelast.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                
                                
                                iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1]
                                delete iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                                
                                
                            }
                            
                            
                        },
                        args:{}
                    }
                    ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                    
                    
                    if(    dev_obj.correct === 'false'   ){
                        
                        
                        //leave the index alone
                        
                        
                    }

                }
                
                
            }
            
            
        },// removes an item from an array if its there
        resetLength:function(   dev_obj   ){
            ultraObject.objectLength({
                    val:iterableObjectO.abelast,
                    getLen:function(   dev_obj   ){
                        
                        
                        if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                            
                            
                            return 'true'
                            
                            
                        }
                        
                        
                    },
                    result:'true'
            })
        }, //if corrputed resets the lengths
        isitO:function(   dev_obj   ){
            return 'true'
        }//confirms if its an itO, make it refuse to bind
     }  // make a deep copy if outer function do not have access to scope from the inner functions, the inner function places the required info heree
     return iterableObjectO
} //retuns or converts an object with which you can easily iterate but this is an array accroding to chrome 72
function iterify(   dev_obj   ){
    //. iterify the item to turn into an iterableObject

    if(   dev_obj !== undefined   ){
        
        
        var iterableO = ultraObject.iterableObject()
        
        
        if(   ultraObject.isArray(   {type:dev_obj.iterify}   ) || ultraObject.isNodeList(   {type:dev_obj.iterify}   )   ){
            
            
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.iterify.length,
                fn:function(   dev_obj   ){
                    iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                },
                args:{iterify:dev_obj.iterify}
            }
            ultraObject.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        else if(   ultraObject.isObject(   {type:dev_obj.iterify}   )   ){
            //places the key and value inside every index , So 0,1 represents the key and 1 the value
            
            var iterableArr = Object.entries(   dev_obj.iterify   )
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:iterableArr.length,
                fn:function(   dev_obj   ){
                    iterableO.add({
                        value:ultraObject.iterify({iterify:iterableArr[iterableFL_0_i.forLoop_0_i]})
                    })
                },
                args:{iterify:dev_obj.iterify}
            }
            ultraObject.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        else if(   ultraObject.isPrimitive(   {type:dev_obj.iterify}   )   ){
            //for strings it neatly splits it into an itO
            
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.iterify.length,
                fn:function(   dev_obj   ){
                    iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                },
                args:{iterify:dev_obj.iterify}
            }
            ultraObject.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        return iterableO
        
                        
    }
    
    
}//turns anything into an iterableObject
