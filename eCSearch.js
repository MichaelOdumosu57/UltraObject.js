/*
    the object handling everything with the choosing tags in addition the numberSystem
        this is responsible for setting up the numberSystem as well as the select tag object itself
*/

/*
    look at each requirement preFillForm must fill in the document by the end user
    matches with the element desired of the end user
*/

/*
    it should start with the first element if none is given
    this means the selectTag object created by selectTags has not been made
*/

/*
    where every tag is looked at in relation to the respective list
*/
/*
    if were looking at the same element
    with the same testing properties in ultraObject.misc[ultraObject.scope[dev_obj.look]] how will we know so far it always is
    key ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement helps the API skip over checking  the same DOMElemnt that moved previous digits in the NS
*/

/*
    possible places to look to fill in the element to satisfy end users query
    in the 2nd else if statement, we tried to do interrogation, but now we realize that any element can be the element were looking for
    in other words
        if the comparison from the element property actually produces a string PROBLEM, if all in dev obj look is undefined but dev-obj.all = true the element could be skipped now its not
*/

/*
    numberSystem access or creation
    key ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS, that helps the function know if the related NS is avalible
    key ltraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS  --  i do this because i need a closure so that all algorithms in the loop can access it
*/
function eCSearch(   dev_obj   ){
                    /*
                        key points
                        we are gathering information from a nS about what element to look at
                        if it does not exist in its related itO according to list, we add it to the nS or the selectTags if its missing
                        if its there we properly update nS and selectTags at that index
                    */
                    /*
                        abelasts
                        1 for select tags
                        1 for nS
                    
                    */
                    
                    // .list, desired items
                    // .look spot where to look and assert for list, if an object the items should be keys
                    // .same  indicator to look at the same set of values
                    // .order iterableObject on how to create the numbersystem
                    // .sT if in use the index to access selectTags from the self
                    // .nS if in use the index to access numberSystem from the self
                    // make eCSST an iterableObject
                    // look through innerHTML, innerText, textContext
                    // holds the found elements that meet the query in ultraObject.elementFound
                    
                    
                    /*[addding the dev_obj  to ultraObject.args ]*/ //{
                    var eCSearch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    if(   dev_obj.sT === undefined   ){
                        
                        
                        /*[the object handling everything with the choosing tags in addition the numberSystem ]*/ //{
                        // make this selectTags +scope +abelast +self
                        var eCSSelectTags_0_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                        ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[eCSSelectTags_0_i]}   )
                        // }  /**/
                        
                        
                    }
                    
                    /*[if the developer already had the function make the selectTags]*/ //{
                    //make this selectTags +scope
                    else if(    ultraObject.isInt(   {type:dev_obj.sT}   )   ){
                        
                        
                        var eCSSelectTags_0_i = ultraObject.scope.add(   {value:dev_obj.sT}   )
                        
                        
                    }
                    // }  /**/
                    
                    /* if we had the number system now we can turn this to a loop and start adding data to our database*/ //{
                    if(    ultraObject.isInt(   {type:dev_obj.nS}   ) === 'true'   ){
                        
                        
                        var eCSNS_0_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS = 'true'
                        
                        
                        
                    }
                    // }  /**/
                    
                        
                    console.group(   'items needed to search for elements based on keywords'   )
                    ultraObject.objInvloved(ultraObject.iterify({
                            iterify:[
                                ultraObject.allTags[ultraObject.scope[dev_obj.aT]],
                                ultraObject.misc[ultraObject.scope[dev_obj.list]],
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]
                            ]
                        })
                    )
                    
                    /*objIO -self -ablelast   */ //{
                    ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    // }  /**/
                    
                    console.groupEnd()
                    
                    /* look at each requirement preFillForm must fill in the document by the end user*/ //{
                    var eCSearchFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength: ultraObject.misc[ultraObject.scope[dev_obj.list]].length,
                        fn:function(   dev_obj   ){
                            
                            /*it should start with the first element if none is given*/ //{
                            if(   dev_obj.nS === undefined   ){
                                
                                
                                ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect = 0
                                
                                
                            }
                            
                            
                            else if(   dev_obj.nS !== undefined   ){
                                
                                debugger
                                ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect = ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ][0]
                                
                                
                                
                            }
                            // }  /**/
                            
                            /*at this point you need to us the nS to modify indexSelect*/ //{
                            // use propertyUndefined to see if the nS is there then receive external output of an updated nS
                            //  to properly modify indexSelect so elements are not queired again
                            eCSearchFL_1_i.forLoop_0_i = ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect
                            // }  /**/
                            
                            /* where every tag is looked at in relation to the respective list*/ //{
                            return ultraObject.forLoop(   eCSearchFL_1_i   )
                            // }  /**/
                        },
                        args:dev_obj,
                    }
                    // }  /**/
                    
                    /* where every tag is looked at in relation to the respective list*/ //{
                    var eCSearchFL_1_i = {
                        forLoop_0_i:ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect,
                        forLoopLength:ultraObject.allTags[ultraObject.scope[dev_obj.aT]].length,
                        fn:function(   dev_obj   ){
                            
                            /* if were looking at the same element*/ //{
                            if(   eCSearchFL_0_i.forLoop_0_i > 0 && ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i-1 ].eCSIndex === eCSearchFL_1_i.forLoop_0_i    ){
                                                                
                                
                                //if PROBLEM use propertyUndefined to validate the selectedTag for interragtion is there as well as its eCSIndex
                                
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement = 'true'
                                
                                
                            }
                            
                            
                            else if(   eCSearchFL_0_i.forLoop_0_i > 0 && ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i-1 ].eCSIndex !== eCSearchFL_1_i.forLoop_0_i    ){
                                                                
                                
                                //if PROBLEM use propertyUndefined to validate the selectedTag for interragtion is there as well as its eCSIndex
                                
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement = 'false'
                                
                                
                            }
                            // }  /**/
                            
                            /* possible places to look to fill in the element to satisfy end users query*/ //{
                            // PROBLEM if you have scoping problems with this fn look here
                            return ultraObject.forLoop(   eCSearchFL_2_i   )
                            // }  /**/
                        },
                        args:dev_obj,
                    }
                    // }  /**/
                    /* possible places to look to fill in the element to satisfy end users query*/ //{
                    // PROBLEM if you have scoping problems with this fn look here
                    var eCSearchFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.misc[ultraObject.scope[dev_obj.look]].length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement ==='true'   ){
                                
                                /* it better be in the scope */ //{
                                // im really counting on this to be in the proper spot in the scope if not i have to take it from the scope everytime and get it from the abelast
                                var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                                // }
                                
                                if(   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ] === undefined   ){
                                        
                                    /*creating the digits and metadata for the numberSystem*/ //{
                                    ultraObject.numberSystem({
                                        operation:'create',
                                        nS:ultraObject.scope[   eCSNS_0_i   ],
                                        nSM:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,
                                                            eCSearchFL_0_i.forLoop_0_i
                                                        ]
                                                    })
                                                ]
                                            }),
                                        digits:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                    })
                                                ]
                                            })
                                        })
                                    // }  /**/
                                                                                        
                                }
                                

                                
                                if(   ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ][   eCSearchFL_0_i.forLoop_0_i    ] === undefined   ){
                                    
                                    /*creating the ideal select tag for this function*/ //{
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ].add({
                                        value:ultraObject.iterableObject()
                                    })
                                    // }  /**/
                                    
                                }
                                
                                /*adjusting this digits itO to that of the numberSystem */ //{
                                ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ].nSM[   eCSearchFL_0_i.forLoop_0_i   ][0]   ][0] = eCSearchFL_1_i.forLoop_0_i
                                //helps change the number when the match is found so the NS doesnt take over
                                //if problems look here idk if it supposed to follow the nSM or not
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                // }  /**/
                                
                                
                                return 'premature'
                                    
                                    
                            }
                            
                            
                            else if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ] !== undefined  || dev_obj.all  === 'true'   ){
                            
                                    
                                if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ].indexOf(   ultraObject.misc[   ultraObject.scope[dev_obj.list]   ][eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1 || dev_obj.all  === 'true'  ){
                                    
                                    /*numberSystem access or creation*/ //{
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS !== 'true'   ){
                                        

                                        ultraObject.numberSystem({
                                            operation:'create',
                                            digits:ultraObject.iterify({
                                                    iterify:[
                                                        ultraObject.iterify({
                                                            iterify:[
                                                                eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                        })
                                                    ]
                                            }),
                                            nSM:ultraObject.iterify({
                                                    iterify:[
                                                        ultraObject.iterify({
                                                            iterify:[
                                                                eCSearchFL_0_i.forLoop_0_i,
                                                                eCSearchFL_0_i.forLoop_0_i
                                                            ]
                                                        })
                                                    ]
                                            })
                                        })
                                        var eCSNS_0_i = ultraObject.scope.add(   {value:ultraObject.nS.abelast[ultraObject.nS.abelast.length-1]}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS =  eCSNS_0_i
                                        // i do this because i need a closure so that all algorithms in the loop can access it
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS = 'true'
                                        
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.isInt({type:dev_obj.nS}) === 'true'   ){
                                        
                                        
                                        var eCSNS_0_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS = eCSNS_0_i
                                                                                            
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS === 'true'){
                                        
                                        
                                        var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    if(   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ] === undefined   ){
                                        
                                        /*creating the digits and metadata for the numberSystem*/ //{
                                        ultraObject.numberSystem({
                                        operation:'create',
                                        nS:ultraObject.scope[   eCSNS_0_i   ],
                                        nSM:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,
                                                            eCSearchFL_0_i.forLoop_0_i
                                                        ]
                                                    })
                                                ]
                                            }),
                                        digits:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                    })
                                                ]
                                            })
                                        })
                                        // }  /**/
                                                                                            
                                    }
                                
                                
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ][   eCSearchFL_0_i.forLoop_0_i    ] === undefined   ){
                                    
                                        /*creating the ideal select tag for this function*/ //{
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ].add({
                                            value:ultraObject.iterableObject()
                                        })
                                        // }  /**/
                                        
                                    }
                                    
                                    /*adjusting this digits itO to that of the numberSystem */ //{
                                    ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ].nSM[   eCSearchFL_0_i.forLoop_0_i   ][0]   ][0] = eCSearchFL_1_i.forLoop_0_i
                                    //helps change the number when the match is found so the NS doesnt take over
                                    //if problems look here idk if it supposed to follow the nSM or not
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                    // }  /**/
                                    return 'premature'
                                                                                    
                                }
                             
                                
                            }
                            
                            
                        },
                        args:dev_obj,
                        bubble:'true'
                    }
                    // }  /**/
                    ultraObject.forLoop(   eCSearchFL_0_i   )
                    delete ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement
                    // }  /**/
                    
                    /*selectTags -scope   */ //{
                    ultraObject.scope.minus(   {index:eCSSelectTags_0_i}   )
                    // }  /**/
                    
                    /*nS   */ //{
                    // this is a good example when an itO was never accessed by an outer function
                    // here you never need to take it out the scope it was never in the scope
                    // var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                    // ultraObject.scope.minus(   {index:eCSNS_0_i}   )
                    // }  /**/
                    
                    // find the first that matches the condition, and hold it when all four match exit, if the form doesn't like what I did each value must try everything in the allTapgs itO before telling the end user they cant figure out whats going on.grabs three and swaps one
                    
                    // so like
                    /*
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    
                    [0,0,0,0] -> [0,0,0,3] -> [0,0,1,0] -> [0,0,1,3] -> [0,0,3,3] -> [0,3,3,3]  [1,0,0,0] -> [1,0,0,3] -> [1,3,3,3] -> [3,3,3,3]
                    
                    to cover every posibility in the table
                    
                    for this we need to make a number system that allows to cover every item
                    */
                }// seaches for elements with the queried filters and does things to them