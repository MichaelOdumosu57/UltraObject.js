function severalOr(   dev_obj   ){
    //.compAgn the several items to find a true value
    //.spot I should have returned an object but hopefully you get your value back else make function that returns an object
    // severalOrReturn value item
        //.spot where the function returned true
    //.how how tomake the comparison so the default is a  === its a function
        // indexOf dev_obj.compAgn[index].indexOF(dev_obj.compTo)
        // . reuslt if dev_obj.how is a function, result is optional for what ever makes it true
    // .premature ,  bool if the loop should break early

    if(   dev_obj !== undefined   ){
        
        
        if(   dev_obj.compAgn.length === undefined   ){
            
            
            dev_obj.compAgn.length = Object.keys(   dev_obj.compAgn   ).length
            
            
        }
        
        var severalOrFnAnswer // if dev_obj.how is a function this holds the return value
        var severalOrReturn = dev_obj.boolean
        var severalOrFL_O_i  = {
            forLoop_0_i:0,
            forLoopLength:dev_obj.compAgn.length,//compare Against
            fn:function(   dev_obj   ){
                
                                    
                    if(   dev_obj.how === undefined   ){
                                                            
                        
                        if(   dev_obj.compTo === dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i]   ){
                            
                            
                            dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                            severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                            severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                            return 'true'
                            
                            
                        }
                        
                        
                    }
                    
                    
                    else if(   dev_obj.how !== undefined   ){
                        
                        
                        if(   typeof(   dev_obj.how   ) === 'function'   ){
                            
                            
                            severalOrFnAnswer = dev_obj.how({
                                compAgnI:dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i],
                                compTo:dev_obj.compTo,
                                index:severalOrFL_O_i.forLoop_0_i
                            })
                            
                            
                            if(   severalOrFnAnswer === dev_obj.result   ){
                                
                                
                                dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                                severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                                severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                                return 'true'
                                
                                
                            }
                            
                            
                            else if(   severalOrFnAnswer === 'premature'   ){
                                
                                                                
                                return 'premature'
                                
                                
                            }
                    
                            
                        }
                        
                        
                    }
                    
                    

                    
                    
                },
            args:{
                    compTo: dev_obj.compTo,
                    compAgn:dev_obj.compAgn,
                    boolean:dev_obj.boolean,
                    which:dev_obj.which,
                    how:dev_obj.how,
                    result:dev_obj.result
                }
        }
        ultraObject.forLoop(   severalOrFL_O_i   )
        return severalOrReturn
    }
    
    
}// if you have several OR comparisons for the same object use it here
