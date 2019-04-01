function eCSearch(   dev_obj   ){
    // .list, desired items
    // .look spot where to look and assert for list, if an object the items should be keys
    // .same  indicator to look at the same set of values
    // .order iterableObject on how to create the numbersystem
    // make eCSST an iterableObject
    // look through innerHTML, innerText, textContext
    // holds the found elements that meet the query in ultraObject.elementFound
    
    var eCSearch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
    
    
    if(   dev_obj.sT === undefined   ){
        
        
        var eCSSelectTags_0_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS = ultraObject.iterableObject()
        ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[eCSSelectTags_0_i]}   )
        
    }
    
    
    else if(    ultraObject.isInt(   {type:dev_obj.sT}   )   ){
        
        
        var eCSSelectTags_0_i = dev_obj.sT
        
        
    }
    
        
    console.group(   'items needed to search for elements based on keywords'   )
    ultraObject.objInvloved({
        0:ultraObject.allTags[ultraObject.scope[dev_obj.aT]],
        1:ultraObject.misc[ultraObject.scope[dev_obj.list]],
        2:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]
    })
    console.groupEnd()
    var eCSearchFL_0_i = {
        forLoop_0_i:0,
        forLoopLength: ultraObject.misc[ultraObject.scope[dev_obj.list]].length,
        fn:function(   dev_obj   ){
            var indexSelect = 0
            
            
            if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]] !== undefined   ){
                
                                
                if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS !== undefined   ){
                    
                    
                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i] !== undefined   ){
                    
                    
                        if(   dev_obj.same !== 'true'   ){
                            //look at the next set of values
                            
                            if(   eCSearchFL_0_i.forLoop_0_i === 0   ){
                                ultraObject.numberSystem({
                                    digits:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]],
                                    operation:'add',
                                    amount: 1 //helps the function look at the next combination set
                                })
                            }
                            
                            
                        }
                        indexSelect = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0]
                        console.log('it tells me to start here', indexSelect)
                                   
                
                    }
                    
                    
                }
               
                    
            }
            
            
            var eCSearchFL_1_i = {
                forLoop_0_i:indexSelect,
                forLoopLength:ultraObject.allTags[ultraObject.scope[dev_obj.aT]].length,
                fn:function(   dev_obj   ){
                    var eCSearchFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.misc[ultraObject.scope[dev_obj.look]].length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]] !== undefined   ){
                                //means if the comparison from the element property actually produces a string
                                    
                                if(   ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]].indexOf(   ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1 || dev_obj.all  === 'true'  ){
                                    //this must mean it found a match
                                    
                                
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i] === undefined   ){
                                        // the start value for the number system it means a NS is not available
                                        
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.ready = 'false'
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i] = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].add(   {value:ultraObject.iterableObject()}   )
                                        var ecsNSI = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.add(   {value:ultraObject.iterableObject()}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoopLength+1}   )
                                        
                                        
                                    }
                                    
                                    
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0] = eCSearchFL_1_i.forLoop_0_i
                                    //helps change the number when the match is found so the NS doesnt take over
                                    //if problems look here idk if it supposed to follow the nSM or not
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                    
                                    
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.ready  !== 'false'   ){
                                    }
                                    
                                    
                                    return 'premature'
                                
                                
                                }
                             
                                
                            }
                            
                            
                        },
                        args:dev_obj,
                        bubble:'true'
                    }
                    return ultraObject.forLoop(   eCSearchFL_2_i   )
                },
                args:dev_obj,
            }
            return ultraObject.forLoop(   eCSearchFL_1_i   )
        },
        args:dev_obj,
    }
    ultraObject.forLoop(   eCSearchFL_0_i   )
    
    
    if(   dev_obj.order === undefined   ){
        //this makes the instructions for the number map
        
        if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.nSM === undefined   ){
            
            
            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.nSM = ultraObject.iterableObject()
            var eCSearchFL_3_i = {
                forLoop_0_i:0,
                forLoopLength:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.length,
                fn:function(   dev_obj   ){
                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.nSM.add(   {value:eCSearchFL_3_i.forLoop_0_i}   )
                },
                args:{}
            }
            ultraObject.forLoop(   eCSearchFL_3_i   )
            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.ready = 'true'
            
        }
           
        
    }
    ultraObject.numberSystem({
        digits:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]],
        operation:'print',
    })
    ultraObject.scope.minus(   {index:eCSSelectTags_0_i}   )
    // find the first that matches the condition, and hold it when all four match exit, if the form doesn't like what I did each value must try everything in the allTapgs itO before telling the end user they cant figure out whats going on.grabs three and swaps one
    
    // so like
    /*
    +---+---+---+---+
    | 0 | 1 | 2 | 3 |
    +---+---+---+---+
    | 0 | 1 | 2 | 3 |
    +---+---+---+---+
    | 0 | 1 | 3 | 3 |
    +---+---+---+---+
    | 0 | 1 | 2 | 3 |
    +---+---+---+---+
    
    [0,0,0,0] -> [0,0,0,3] -> [0,0,1,0] -> [0,0,1,3] -> [0,0,3,3] -> [0,3,3,3]  [1,0,0,0] -> [1,0,0,3] -> [1,3,3,3] -> [3,3,3,3]
    
    to cover every posibility in the table
    
    for this we need to make a number system that allows to cover every item
    */
}// seaches for elements with the queried filters and does things to them
