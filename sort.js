function sort(   dev_obj   ){
    //.target, the target we are sorting
    //. algorithm the sorting alogrithm to use
        //. bubble use the bubble sort algorithm
    //.compare logic a function used to sort
        //.valu represnets target from aboue
        // .index index in the for loop
    //. result if the reutrn value from .compare  === result perform the sort operation
        
    var sortO  // soritng object that helps fn sort
    var sortFlagO = ultraObject.iterableObject()  //indicates if the sort is finished
    
    var sortFL_0_i = {
        forLoop_0_i:0,
        forLoopLength:dev_obj.target.length-1,
        fn:function(   dev_obj   ){
            
            
            if(   dev_obj !== undefined   ){
                
                
                if(   dev_obj.algorithm  === 'bubble'   ){
                    
                                        
                    if(   dev_obj.compare(   {val:dev_obj.target,   index:sortFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
                        
                            sortFlagO[sortFlagO.bubble]  = 'false'
                            sortFL_0_i.itO.swapO = sortFL_0_i.itO.add(   {value:ultraObject.iterableObject()}   )
                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
                            sortO = ultraObject.swap({
                                    swapO:sortFL_0_i.itO[sortFL_0_i.itO.swapO],
                                    instruct:sortFL_0_i.itO[sortFL_0_i.itO.instruct],
                                    action:'default'
                                })
                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
                            dev_obj.target[sortFL_0_i.forLoop_0_i] = sortO[0]
                            dev_obj.target[sortFL_0_i.forLoop_0_i+1] = sortO[1]
                            
                            
                        }
                    
                    
                }
                
                
            }
            
            
        },
        args:{
                target:dev_obj.target,
                algorithm:dev_obj.algorithm,
                compare:dev_obj.compare,
                result:dev_obj.result
            },
        itO:ultraObject.iterableObject()
    }
    
    
    if(   dev_obj.algorithm  === 'bubble'   ){
        
            sortFlagO.bubble = sortFlagO.add(   {value:'false'}   )
            sortFL_0_i.itO.instruct = sortFL_0_i.itO.add(   {value:ultraObject.iterableObject()}   )
            sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:1}   )
            sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:0}   )
            while(   sortFlagO[sortFlagO.bubble] !== 'true'){
            
                sortFlagO[sortFlagO.bubble]  = 'true'
                ultraObject.forLoop(   sortFL_0_i   )
            
            
            }
    }
    
    
    return dev_obj.target
}//you kneew uO would need this one
