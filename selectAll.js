function selectAll(   dev_obj   ){
        // this function also returns the group ordering if looked for nested items
        //.target item to get all values from must be an itO or an object
        // .typeOnly, what specific values were looking for
    
        if(   dev_obj !== undefined   ){
            
            
                var selectAllBOOL = {0:false}
                selectAllBOOL = ultraObject.severalOr({
                    compTo: 'element',
                    compAgn: dev_obj.typeOnly,
                    boolean:selectAllBOOL,
                    which:0
                })
                
                
                if(   ultraObject.isObject(   {type:dev_obj.target}   ) || ultraObject.isitO(   {type:dev_obj.target}   ) && selectAllBOOL[0]   ){
                    
                    
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
                                if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ) || ultraObject.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )     ){
                                    //I cannot add it if its a primitive not an object or an itO
                                    //done like this because what if im looking for a string, this would evaluate to false and the subGroupMap would be improper
                                    
                                    ultraObject.subGroups({
                                        map:selectReturnMD,
                                        val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                    })
                                    
                                    
                                }
                            }
                            
                            catch(e){debugger}
                            
                            if(   ultraObject.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                
                                
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                ultraObject.subGroups({
                                    map:selectReturnMD,
                                    val:'element',
                                    nextItem:'true',
                                })
                                // return 'premature'
                                //this might leave some impt things behind
                                    
                                
                            }
                            
                            
                            else if(   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )    ){
                                
                                
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
                                2:selectReturnMD
                            })
                    console.groupEnd()
                    selectReturn.subGroupsMap = selectReturnMD
                    return selectReturn
                    
                }
            
            
        }
        
        
}
