function packIt(   dev_obj   ){
    //for the the .fill and .write it expects them to be prefined in an iterable for .fill this must be found as a property in of the items in packItSA for .write this must be fount as a property in on of the items for dev_obj.order
    /*
         .order what this fn is supposed to fill right now takes objects or itO is needs to find out what it is
         .directions, what its filling it with
            match use match map and match keys and fills values
            gather use ultraObject.selectAll to gather needed values to pack
                element, return only elements from the order
         .matchMap if .directions === match map keys and fill values
         .fill  where to place the items
         .write what to place for each fill value
    */
    var packIt_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
    
    if(   dev_obj !== undefined   ){
            
        var packItSA //for packIT selectall
        var packItFL_0_i ={
            forLoop_0_i:0,
            forLoopLength:Object.keys(   dev_obj.directions   ).length,
            fn:function(   dev_obj   ){
                
                                    
                if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'match'   ){
                    console.group(   'an attempt to fill items'   )
                        ultraObject.objInvloved({
                                0:packItSA,
                                1:dev_obj.order,
                                2:ultraObject.subGroupsO
                            })
                    console.groupEnd()
                    var packItFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:packItSA.subGroupsMap.MB_0_i.length,
                        fn:function(   dev_obj   ){
                            packItSA[packItFL_1_i.forLoop_0_i][dev_obj.fill] = dev_obj.order[packItFL_1_i.forLoop_0_i][dev_obj.write]
                            //properly writes to the item that should be filled
                            // console.log(   dev_obj.order[packItFL_1_i.forLoop_0_i][dev_obj.write]   )
                            // console.log(   packItSA[packItFL_1_i.forLoop_0_i].value   )
                        },
                        args:{
                            fill:dev_obj.fill,
                            order:dev_obj.order,
                            write:dev_obj.write
                        }
                    }
                    ultraObject.forLoop(   packItFL_1_i   )
                    
                    
                }
                
                
                if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                        
                    
                    if(    ultraObject.isObject(   {type:dev_obj.order}   )   ){
                        
                        
                        packItSA = ultraObject.selectAll({
                            target:dev_obj.order,
                            typeOnly : {0:'element'},
                            length:Object.keys(   dev_obj.order   ).length
                        })
                        
                        
                    }
                    
                    
                    else if(   ultraObject.isitO(   {type:dev_obj.order}   )     ){
                    
                        
                        packItSA = ultraObject.selectAll({
                            target:dev_obj.order,
                            typeOnly : {0:'element'},
                            length:dev_obj.order.length
                        })
                        
                        
                    }
                    
                    
                }
            
            },
            args:{
                directions:dev_obj.directions,
                order:dev_obj.order,
                fill:dev_obj.fill,
                write:dev_obj.write
            }
        }
        ultraObject.forLoop(   packItFL_0_i   )
        
    }
    
        
} //fills anything as you tell it, use pack to avoid missspelling
