function objectLength(   dev_obj   ){ // finds object lenghts
        //.val the object itself
        // .getLen function descrbing how to get the length
        // .result if function reutrns it equal increase the length by one
        dev_obj.val.length = 0
        var objectLengthFL_0_i = {
            forLoop_0_i:0,
            forLoopLength:Object.keys(   dev_obj.val   ).length,
            fn:function(   dev_obj   ){
                
                 
                if(   dev_obj.getLen(   {val:dev_obj.val,   index:objectLengthFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
                                        
                    
                    dev_obj.val.length += 1
                    
                    
                }
                
                
            },
            args:{
                val:dev_obj.val,
                getLen:dev_obj.getLen,
                result:dev_obj.result
                }
        }
        ultraObject.forLoop(   objectLengthFL_0_i   )
    
}