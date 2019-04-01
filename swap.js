function swap(   dev_obj   ){
    // .swapO the items that are desired to be swapped must be an iterableObject
    // .instruct expects two iterableObject why does it need the second it will provide one
    /*
        {
            0:1,
            1:0,
            2:4,
            3:2,
            4:3,
            ...
        }
    */
    //retunrs an object with the proper function
        if(   dev_obj !== undefined   ){
            
            
            if(   dev_obj.action === 'default'   ){
                
                
                var swapO_0_i = ultraObject.iterableObject()
                var swapFL_0_i =  {
                    forLoop_0_i:0,
                    forLoopLength:dev_obj.instruct.length,
                    fn:function(   dev_obj   ){
                        
                        swapO_0_i.add(  {value:dev_obj.swapO[dev_obj.instruct[swapFL_0_i.forLoop_0_i]]}   )
                    },
                    args:{
                            swapO:dev_obj.swapO,
                            instruct:dev_obj.instruct
                    }
                }
                ultraObject.forLoop(   swapFL_0_i   )
                return swapO_0_i
                
                
            }
            
        }
        
        
    }// when you need values swpped
//templates, can swap in infinite places
