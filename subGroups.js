function subGroups(   dev_obj   ){
    // it needs to be used when gathering path information for specifc items in a complex object, at every path open, a will be recorded here
    //.nextItem, indicates to the function that needs to find the path of the next item
    //.val a factual represenation of how to use functionality to get to the item for another complex item
    // .map a place to keep the mapping list
        //.ending, the cutoff to determine the good from the bad
        //.MB_0_i the object representing the mapping assumption
            //.groupHead index of the last head group
            // .groupHeadLength lenght to precat the children
            // .seperator, seperator to make the paths and get their lengths
    // ultraObject.subGroupsO , keeps a list of all subgroup maps
        //consider using .start and complete to make new subgroup maps in the list
    // it does this using strings
    // to provide a proper subgroup list assumptions have to be made
    // if on item map is longer than the other, the first contains the parent
    // if the items after are as long as the first, then the next item contains the parent for the next set
    //
        /*
        "0 item 0 item element " parent
        "1 item element "       children
        "2 item element "
        "1 item 0 item element " parent
        ....
        */
        //
    var subGroups_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
    
    if(   dev_obj !== undefined   ){
        
        
        var subGroupsBOOL = {0:false}
        var subGroupsSeperator = ' ' // how to seperate the items
        
        if(   dev_obj.map.MB_0_i === undefined   ){
            
            
            dev_obj.map.MB_0_i = ultraObject.iterableObject()
            dev_obj.map.MB_0_i.globalMB = ultraObject.MB_0_i.add(   {value:dev_obj.map.MB_0_i}   ) //if problem get the answer for a variable and assign it back
            dev_obj.map.MB_0_i.seperator = ' ' // how fn makes a path to a child element
            dev_obj.map.MB_0_i.groupHeadLength = ultraObject.max // for the length of the path representing the head group
            subGroupsSeperator =  dev_obj.map.MB_0_i.seperator
            
        }
        
        
        subGroupsBOOL = ultraObject.severalOr({
                compTo: dev_obj.map,
                compAgn: ultraObject.subGroupsO,
                boolean:subGroupsBOOL,
                which:0
        })
        
        
        if(   !subGroupsBOOL[0]   ){
            ultraObject.subGroupsO[ultraObject.subGroupsO.length] = dev_obj.map
            ultraObject.subGroupsO.length += 1
            subGroupsBOOL = ultraObject.severalOr({
                    compTo: dev_obj.map,
                    compAgn: ultraObject.subGroupsO,
                    boolean:subGroupsBOOL,
                    which:0
            })
            //this is done so it can add the first item
        }
        
        
        if(   dev_obj.nextItem === 'complete'   ){
            //here the map is recreated based on the assumption
            //gets rid of bad results
            
            
            console.group(   'complete'   )
                ultraObject.subGroupsO[subGroupsBOOL.spot].length = 0
                var subGroupsFL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot]   ).length,
                    fn:function(   dev_obj   ){
                        
                         
                        if(   !isNaN(Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot]   )[subGroupsFL_0_i.forLoop_0_i  ])   ){
                            
                            
                            ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                            
                            
                        }
                    },
                    args:{}
                }
                ultraObject.forLoop(   subGroupsFL_0_i   )
                dev_obj.val = ''
                var subGroupsBOOL_1_i = {0:false}
                var subGroupsFL_1_i ={
                    forLoop_0_i:0,
                    forLoopLength:Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot].ending   ).length,
                    fn:function(   dev_obj   ){
                        subGroupsBOOL_1_i = ultraObject.severalOr({
                            compTo: ultraObject.subGroupsO[subGroupsBOOL.spot].ending[subGroupsFL_1_i.forLoop_0_i],
                            compAgn: ultraObject.subGroupsO[subGroupsBOOL.spot],
                            boolean:subGroupsBOOL_1_i,
                            which:0,
                            how:function(   dev_obj   ){
                            //this removes bad list that do not lead to an element
                                
                                if(   dev_obj.compAgnI !== undefined   ){
                                    
                                                                        
                                    if(   dev_obj.compAgnI.indexOf(   dev_obj.compTo   ) === -1   ){
                                        
                                        
                                        delete ultraObject.subGroupsO[subGroupsBOOL.spot][dev_obj.index]
                                        
                                        
                                    }
                                    
                                
                                }
                                
                                
                                else if(   dev_obj.compAgnI === undefined   ){
                                    
                                    
                                    return 'premature'
                                    
                                    
                                }
                                
                            },
                            result:'true'
                        })
                    },
                    args:{}
                }
                ultraObject.forLoop(   subGroupsFL_1_i   )
                console.group(   'proper length'   )
                    ultraObject.objectLength({
                        val:ultraObject.subGroupsO[subGroupsBOOL.spot],
                        getLen:function(   dev_obj   ){
                            
                            
                            if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                        })
                console.groupEnd()
                ultraObject.objInvloved({
                            0:dev_obj.map.ending,
                            1:ultraObject.subGroupsO[subGroupsBOOL.spot],
                            2:dev_obj.map.MB_0_i
                        })
            console.groupEnd()
            
                        
        }
        
        
        else if(   subGroupsBOOL[0]   ){
            
            
            if(   ultraObject.subGroupsO[subGroupsBOOL.spot].length === 0 &&  ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] === undefined   ){
                
                
                ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
            }
            
            
            ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] += dev_obj.val + subGroupsSeperator
            //hopefully ' ' is a gr8 sepereator
            
            if(   dev_obj.nextItem === 'true'   ){


                dev_obj.map.MB_0_i.lastAddedIndex = dev_obj.map.MB_0_i.add(   {value:ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length].split(   subGroupsSeperator   )}   )
                
                
                if(   dev_obj.map.MB_0_i.groupHeadLength <=  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                    
                    dev_obj.map.MB_0_i.groupHead = dev_obj.map.MB_0_i.lastAddedIndex
                    dev_obj.map.MB_0_i.groupHeadLength = dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length
                    
                    
                }
                
                
                else if(   dev_obj.map.MB_0_i.groupHeadLength >  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                    
                    dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].unshift.apply(   dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex],dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.groupHead].slice(   0,dev_obj.map.MB_0_i.groupHeadLength -  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   )   )
                   // takes the path of coming from sub children and makes it of parents
                    
                    ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] =  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].join(   subGroupsSeperator   )
                    
                }
                ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
            }
            
                    
        }
            
        
        dev_obj.map +=  dev_obj.val.toString()
        
        
        
    }
        
        
}// returns ordering information about nested items
