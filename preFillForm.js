/*
    node mode choice thread data visualization by setInterval
    setInterval acts as an async operation, there is really no way to make it a blocker we must keep everything in the listener
*/

 function preFillForm(   dev_obj   ){
                    /*abelast
                        3 for selectTags
                        1 for nS
                    */
                    //findings
                        //i find that form items are not dependent on the number of children, the form can have children than containing the input
                        
                    var preFillForm_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   ) // decided to replace or make room on addition
                    var pFFATI_0_i = ultraObject.scope.add(   {value:ultraObject.allTags.add(   {value:ultraObject.iterify(   {iterify:dev_obj.allTags}   )}   )}   )
                    ultraObject.sort({
                        target: ultraObject.allTags[ultraObject.scope[pFFATI_0_i]],
                        algorithm:'bubble',
                        compare:function(   dev_obj   ){
                            
                            
                            if(   dev_obj.val[dev_obj.index].childElementCount < dev_obj.val[dev_obj.index+ 1].childElementCount    ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                    })
                    console.group(   'making items accessible'   )
                    ultraObject.objInvloved(
                        ultraObject.iterify({iterify:[
                            ultraObject.allTags,
                            ultraObject.scope,
                            pFFATI_0_i,
                            ultraObject.args
                        ]})
                    )

                    /*objIO -self -ablelast   */ //{
                    ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    // }  /**/
                    
                    console.groupEnd()
                    var pFFList_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:dev_obj.list}   )}   )}   )
                    var pFFLook_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:dev_obj.look}   )}   )}   )
                    ultraObject.eCSearch({
                        list:pFFList_0_i,
                        look:pFFLook_0_i,
                        aT: pFFATI_0_i,
                        all:'true'
                    })
                    console.group(   'at this point the ultraObject has meaningful values for all arguments from the init fn'   )
                    console.groupEnd()
                    
                    /*selectTags +scope  */ //{
                    var pFFST_0_i =  ultraObject.scope.add(   {value:ultraObject.selectTags.abelast[0]}   )
                    // }  /**/
                    
                    /*nS +scope  +abelast  */ //{
                    // dont delete the code in there, we might have abelast mem leak so  check here to help
                    var pFFNS_0_i =  ultraObject.scope.add(   {value:ultraObject.nS.abelast[   ultraObject.nS.abelast.length-1   ]}   )
                    // ultraObject.nS.abelast.add(   {value:ultraObject.scope[   pFFNS_0_i   ]}   )
                    // }  /**/
                    
                    ultraObject.selectTags.abelast.minus(   {index:0}   )
                    
                    ultraObject.packIt({
                        order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                        directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                        fill:'value',
                        write:'valuePhrase',
                        prevent:ultraObject.iterify({
                                    iterify:[
                                        function(   dev_obj   ){
                                            
                                            
                                            if(   dev_obj.element.type === 'file'   ){
                                                
                                                
                                                return 'cantFill'
                                                
                                                
                                            }
                                            
                                            
                                        }
                                    ]
                                })
                    })
                    debugger
                    // should also make sure value is not empty
                    ///////////////////////////////////////////////////////////////////////////
                    console.group(   'answers'   )
                    var pFFMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['tagName','className','hidden','id']}   )}   )}   );
                    var pFFMisc_1_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['input','select','textarea','option']}   )}   )}   );
                   
                     /*  the forLoop object responsible for going throught the rest of the webpage */ //{
                    var pFFFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.allTags[   ultraObject.scope[pFFATI_0_i]   ].length - 1,
                        fn:function(   dev_obj   ){
                            ultraObject.eCSearch({
                                list:pFFList_0_i,
                                look:pFFLook_0_i,
                                aT: pFFATI_0_i,
                                all:'true',
                                nS:ultraObject.scope[   pFFNS_0_i   ]
                            })
                            
                            /* filling the value for each element  */ //{
                            ultraObject.packIt({
                                order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                                directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                                fill:'value',
                                write:'valuePhrase',
                                prevent:ultraObject.iterify({
                                                        iterify:[
                                                            function(   dev_obj   ){
                                                                
                                                                
                                                                if(   dev_obj.element.type === 'file'   ){
                                                                    
                                                                    
                                                                    return 'cantFill'
                                                                    
                                                                    
                                                                }
                                                                
                                                                
                                                            }
                                                        ]
                                                    })
                                                })
                            // } /**/
                            
                            ultraObject.forLoop(   pFFFL_0_i   )
                            ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                            ultraObject.numberSystem({
                                operation:'decimal',
                                conversion:'to',
                                nS:ultraObject.scope[   pFFNS_0_i   ],
                            })
                            ultraObject.numberSystem({
                                operation:'decimal',
                                conversion:'from',
                                nS:ultraObject.scope[   pFFNS_0_i   ],
                                currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                            })
                            ultraObject.numberSystem({
                                operation:'update',
                                nS:ultraObject.scope[   pFFNS_0_i   ]
                            })
                            ultraObject.args = ultraObject.iterableObject()
                        },
                        args:dev_obj //{}
                    }
                    // } /**/
                    
                    /*  node mode choice thread data visualization by chromelistener  */ //{
                    ultraObject.selectTags.nextSet = function(   dev_obj   ){
                        ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                        ultraObject.numberSystem({
                            operation:'decimal',
                            conversion:'to',
                            nS:ultraObject.scope[   pFFNS_0_i   ],
                        })
                        ultraObject.numberSystem({
                            operation:'decimal',
                            conversion:'from',
                            nS:ultraObject.scope[   pFFNS_0_i   ],
                            currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                        })
                        ultraObject.numberSystem({
                            operation:'update',
                            nS:ultraObject.scope[   pFFNS_0_i   ]
                        })
                        ultraObject.forLoop(   pFFFL_1_i   )
                    }
                    // } /**/
                    
                    var pFFFL_0_i = {
                        //these for spots, the amount that claims the element, the objects related properties the family and the string matching all help determine where this object belongs
                        //POINT VALUE the spot where we add points
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].length,
                        fn:function(   dev_obj   ){
                            console.group(   'asking questions about the object'  )
                                /*
                                    what is the framework?
                                    turn all string into lowercase
                                */
                                
                                /* setting up needed objects for proof*/ //{
                                    //element
                                    
                                    
                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild = 'true'
                                    //parents
                                    var pFFST_1_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    
                                    // ask if they are dom elements before doing anything
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent})   ){
                                        
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent}   )
                                    
                                    
                                    }
                                    
                                    
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement})   ){
                                        
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement}   )
                                    
                                    
                                    }
                                    
                                    
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode})   ){
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode}   )
                                    
                                    
                                    }
                                    //siblings retuns HTMLCollection
                                    
                                    /*selectTags +scope + self +abelast  */ //{
                                    var pFFST_2_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[   pFFST_2_i   ]}   )
                                    // }  /**/
                                    
                                    var pFFFL_4_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[   pFFFL_4_i.forLoop_0_i   ].sameChild !== 'true'   ){
                                                
                                                
                                                ultraObject.selectTags[ultraObject.scope[pFFST_2_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[   pFFFL_4_i.forLoop_0_i   ]}   )
                                            
                                            
                                            }
                                            
                                            
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   pFFFL_4_i   )
                                    delete ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild
                                    //children retuns HTMLCollection
                                    
                                    /*selectTags +scope + self +abelast  */ //{
                                    var pFFST_3_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    ultraObject.selectTags.abelast.add(   {value:pFFST_3_i}   )
                                    // }  /**/
                                    
                                    var pFFFL_5_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children.length,
                                        fn:function(   dev_obj   ){
                                            ultraObject.selectTags[ultraObject.scope[pFFST_3_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children[   pFFFL_5_i.forLoop_0_i   ]}   )
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   pFFFL_5_i   )
                                    // accessing the qC object ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]]
                                // } /**/
                                
                                // /*  node mode choice thread production */ //{
                                
                                //         ultraObject.interrogation({
                                //             proof:[
                                //                     ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                //                     ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                //                     ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                //                     ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                //                 ],
                                //             facts:[
                                //                     ['element',
                                //                         {
                                //                         'valuePhrase':function(   dev_obj   ){
                                //                             /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                //                             if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                                
                                                                
                                //                                 if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                                    
                                                                    
                                //                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                //                                 }
                                                                
                                                                
                                //                             }
                                                            
                                                            
                                //                             else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                                
                                                                
                                //                                 if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                                    
                                                                    
                                //                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                //                                 }
                                                                
                                                                
                                //                             }
                                                            
                                                            
                                //                             ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                //                             // } /**/
                                //                         },
                                //                         'suspect':function(   dev_obj   ){
                                                            
                                //                             /*suspects to see if different values were put in the same spot*/ //{
                                //                             if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                                
                                                                
                                //                                 console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                //                                 var pFFBOOL_0_i = {0:false}
                                //                                 pFFBOOL_0_i = ultraObject.severalOr({
                                //                                     compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                //                                     compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                //                                     boolean:pFFBOOL_0_i,
                                //                                     which:0,
                                //                                     how:function(   dev_obj   ){
                                                                        
                                                                        
                                //                                         if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                                            
                                                                            
                                //                                             if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                //                                             //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                                            
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                //                                                 //see i wrote for the future here
                                                                                
                                //                                             }
                                                                            
                                                                            
                                //                                             else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                                
                                                                            
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                
                                                                                
                                //                                             }
                                            
                                            
                                //                                         }
                                                                        
                                                                        
                                //                                         console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                //                                     },
                                //                                     result:'a'
                                //                                 })
                                //                                 //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                //                                 console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                                
                                                                
                                //                             }
                                //                             // } /**/
                                                            
                                //                         },
                                //                         'tagName':  {
                                //                                         ultraObject:{
                                //                                             tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                //                                         }
                                //                                     },
                                //                         'hidden':{},
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             })
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                //                                         }
                                //                                     },
                                //                         }
                                //                     ],
                                //                     ['parents',
                                //                         {
                                //                         'exist':{},
                                //                         'tagName':{
                                //                                         ultraObject:{
                                //                                               tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                //                                             //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                         }
                                //                                     },
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                             },
                                //                         }
                                //                     ],
                                //                     ['siblings',
                                //                         {
                                //                         'tagName':{
                                //                             ultraObject:{
                                //                                   tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                //                                 //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                     }
                                //                                 }
                                //                         }
                                //                     ],
                                //                     ['children',
                                //                         {
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                             },
                                //                         }
                                //                     ]
                                //                 ],
                                //             pointValue:'v1',
                                //             debug:'true'
                                //         })
                                //         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                                //             value:ultraObject.iterify({
                                //                 iterify:[
                                //                     'total',
                                //                     [],
                                //                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                //                 ]
                                //             })
                                //         })
                                //         ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                //         console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                //         debugger
                                //         ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_3_i],
                                //             // messy:'true'
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_3_i,
                                //             // messy:'true'
                                //         })
                                //       ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_2_i],
                                //             // messy:'true'
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_2_i,
                                //             // messy:'true'
                                //         })
                                //         ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_1_i],
                                //             // messy:'true'
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_1_i,
                                //             // messy:'true'
                                //         })
                                //         // throw('e')
                                //         console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                //         // ultraObject.objInvolved(
                                //         //     ultraObject.iterify({iterify:
                                //         //         [
                                //         //             ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value,
                                //         //             ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                //         //         ]// i probably put it somewhere else
                                //         //     })
                                //         // )
                                        
                                //         console.groupEnd()
                                //     console.groupEnd()
                                                                        
                                // // } /**/
                                
                                // /*  node mode choice thread data visualization by setInterval*/ //{
                                    
                                //     function debug_0_i(response,sender,sendResponse){
                                //         console.log(   response   )
                                //         ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response = response
                                //         ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn = sendResponse
                                //         // sendResponse('abc')
                                        
                                //         return true;
                                //     }
                                //     ultraObject.endpoint({
                                //         instruct:'chromeExtensionOneTime',
                                //         incomingFn:function(   dev_obj   ){
                                //             chrome.runtime.onMessage.addListener(   debug_0_i   )
                                //         },
                                //         incomingOrigin:'extension',
                                //         sendingFn:dev_obj.endpointSendingFn,
                                //         sendingBody:{need:'make a table for me'},
                                //         sendingOrigin:'contentScript'
                                //     })
                                    
                                //     var pFFXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].incoming.fn()
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.body   )
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop = 0
                                    
                                    
                                //     var setInterval_0_i = setInterval(function(){
                                        
                                //         console.log('this is the response',ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response   )
                                //         if(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response !== undefined && ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop === 0  ){

                                    
                                //             ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop = 1
                                //             console.log('table is ready for interrogation')
                                //             ultraObject.interrogation({
                                //                 proof:[
                                //                         ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                //                         ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                //                         ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                //                         ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                //                     ],
                                //                 facts:[
                                //                         ['element',
                                //                             {
                                //                             'valuePhrase':function(   dev_obj   ){
                                //                                 /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                //                                 if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                                    
                                                                    
                                //                                     if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                                        
                                                                        
                                //                                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                        
                                     
                                //                                     }
                                                                    
                                                                    
                                //                                 }
                                                                
                                                                
                                //                                 else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                                    
                                                                    
                                //                                     if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                                        
                                                                        
                                //                                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                        
                                     
                                //                                     }
                                                                    
                                                                    
                                //                                 }
                                                                
                                                                
                                //                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                //                                 // } /**/
                                //                             },
                                //                             'suspect':function(   dev_obj   ){
                                                                
                                //                                 /*suspects to see if different values were put in the same spot*/ //{
                                //                                 if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                                    
                                                                    
                                //                                     console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                //                                     var pFFBOOL_0_i = {0:false}
                                //                                     pFFBOOL_0_i = ultraObject.severalOr({
                                //                                         compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                //                                         compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                //                                         boolean:pFFBOOL_0_i,
                                //                                         which:0,
                                //                                         how:function(   dev_obj   ){
                                                                            
                                                                            
                                //                                             if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                                                
                                                                                
                                //                                                 if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                //                                                 //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                                                
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                //                                                     //see i wrote for the future here
                                                                                    
                                //                                                 }
                                                                                
                                                                                
                                //                                                 else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                                    
                                                                                
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                    
                                                                                    
                                //                                                 }
                                                
                                                
                                //                                             }
                                                                            
                                                                            
                                //                                             console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                //                                         },
                                //                                         result:'a'
                                //                                     })
                                //                                     //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                //                                     console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                                    
                                                                    
                                //                                 }
                                //                                 // } /**/
                                                                
                                //                             },
                                //                             'tagName':  {
                                //                                             ultraObject:{
                                //                                                 tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                //                                             }
                                //                                         },
                                //                             'hidden':{},
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 })
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                //                                             }
                                //                                         },
                                //                             }
                                //                         ],
                                //                         ['parents',
                                //                             {
                                //                             'exist':{},
                                //                             'tagName':{
                                //                                             ultraObject:{
                                //                                                   tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                //                                                 //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                             }
                                //                                         },
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                 },
                                //                             }
                                //                         ],
                                //                         ['siblings',
                                //                             {
                                //                             'tagName':{
                                //                                 ultraObject:{
                                //                                       tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                //                                     //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                         }
                                //                                     }
                                //                             }
                                //                         ],
                                //                         ['children',
                                //                             {
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                 },
                                //                             }
                                //                         ]
                                //                     ],
                                //                 pointValue:'v1',
                                //                 debug:'true'
                                //             })
                                //             ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                                //                 value:ultraObject.iterify({
                                //                     iterify:[
                                //                         'total',
                                //                         [],
                                //                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                //                     ]
                                //                 })
                                //             })
                                //             ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn({
                                //                 item:'debuggerDB',
                                //                 data:ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB
                                //             })
                                //             debugger
                                //             chrome.runtime.onMessage.removeListener(   debug_0_i   )
                                //             ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                //             console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                //             ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_3_i],
                                //                 // messy:'true'
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_3_i,
                                //                 // messy:'true'
                                //             })
                                //           ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_2_i],
                                //                 // messy:'true'
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_2_i,
                                //                 // messy:'true'
                                //             })
                                //             ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_1_i],
                                //                 // messy:'true'
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_1_i,
                                //                 // messy:'true'
                                //             })
                                //             /* debug */
                                //             clearInterval(   setInterval_0_i   )
                                //             delete ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response
                                //             /**/
                                //             // throw('e')
                                //             console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                //             ultraObject.objInvolved(
                                //                 ultraObject.iterify({iterify:
                                //                     [
                                //                         ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item    .value,
                                //                         ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                //                     ]// i probably put it somewhere else
                                //                 })
                                //             )
                                        
                                            
                                //             console.groupEnd()
                                //         console.groupEnd()

                                //         }
                                        
                                        
                                //     },500)

                                // //     // just like when dealing with fs API, setInterval is a nasty little promise, id use wait but idk when the data comes from the background script
                                
                                // } /**/

                                /*  node mode choice thread data visualization by chromelistener*/ //{
                                    
                                    function debug_0_i(response,sender,sendResponse){
                                        // chrome.runtime.onMessage.removeListener(   debug_0_i   )
                                        
                                        console.log(   response   )
                                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response = response
                                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn = sendResponse
                                        console.log('table is ready for interrogation')
                                        ultraObject.interrogation({
                                            proof:[
                                                    ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                                    ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                                    ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                                    ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                                ],
                                            facts:[
                                                    ['element',
                                                        {
                                                        'valuePhrase':function(   dev_obj   ){
                                                            /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                                            if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                                
                                                                
                                                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                                    
                                                                    
                                                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                                                }
                                                                
                                                                
                                                            }
                                                            
                                                            
                                                            else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                                
                                                                
                                                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                                    
                                                                    
                                                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                                                }
                                                                
                                                                
                                                            }
                                                            
                                                            
                                                            ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                                            // } /**/
                                                        },
                                                        'suspect':function(   dev_obj   ){
                                                            
                                                            /*suspects to see if different values were put in the same spot*/ //{
                                                            if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                                
                                                                
                                                                console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                                                var pFFBOOL_0_i = {0:false}
                                                                pFFBOOL_0_i = ultraObject.severalOr({
                                                                    compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                                                    compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                                                    boolean:pFFBOOL_0_i,
                                                                    which:0,
                                                                    how:function(   dev_obj   ){
                                                                        
                                                                        
                                                                        if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                                            
                                                                            
                                                                            if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                                                            //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                                            
                                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                //see i wrote for the future here
                                                                                
                                                                            }
                                                                            
                                                                            
                                                                            else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                                
                                                                            
                                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                
                                                                                
                                                                            }
                                            
                                            
                                                                        }
                                                                        
                                                                        
                                                                        console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                                                    },
                                                                    result:'a'
                                                                })
                                                                //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                                                console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                                
                                                                
                                                            }
                                                            // } /**/
                                                            
                                                        },
                                                        'tagName':  {
                                                                        ultraObject:{
                                                                            tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                                                        }
                                                                    },
                                                        'hidden':{},
                                                        'className':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:20,
                                                                                    spaces:2,
                                                                                    gap:2,
                                                                                    trailer:20,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            })
                                                                        }
                                                                    },
                                                        'id':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:30,
                                                                                    spaces:3,
                                                                                    gap:3,
                                                                                    trailer:30,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            }),
                                                                            care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                                                        }
                                                                    },
                                                        }
                                                    ],
                                                    ['parents',
                                                        {
                                                        'exist':{},
                                                        'tagName':{
                                                                        ultraObject:{
                                                                               tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                                                            //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                                                        }
                                                                    },
                                                        'className':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:20,
                                                                                    spaces:2,
                                                                                    gap:2,
                                                                                    trailer:20,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            }),
                                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                                        }
                                                                    },
                                                        'id':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:30,
                                                                                    spaces:3,
                                                                                    gap:3,
                                                                                    trailer:30,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            }),
                                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                                        }
                                                            },
                                                        }
                                                    ],
                                                    ['siblings',
                                                        {
                                                        'tagName':{
                                                            ultraObject:{
                                                                   tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                                                //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                                                    }
                                                                }
                                                        }
                                                    ],
                                                    ['children',
                                                        {
                                                        'className':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:20,
                                                                                    spaces:2,
                                                                                    gap:2,
                                                                                    trailer:20,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            }),
                                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                                        }
                                                                    },
                                                        'id':{
                                                                        ultraObject:{
                                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                                            //FIX ME a better way to make meaninguful
                                                                            pM_0_i:ultraObject.iterify({
                                                                                iterify:{
                                                                                    range:30,
                                                                                    spaces:3,
                                                                                    gap:3,
                                                                                    trailer:30,
                                                                                    type:'string',
                                                                                    cCase:'toLowerCase'
                                                                                }
                                                                            }),
                                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                                        }
                                                            },
                                                        }
                                                    ]
                                                ],
                                            pointValue:'v1',
                                            debug:'true'
                                        })
                                        ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                                            value:ultraObject.iterify({
                                                iterify:[
                                                    'total',
                                                    [],
                                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                                ]
                                            })
                                        })
                                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn({
                                            item:'debuggerDB',
                                            data:ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB
                                        })
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                        console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                        ultraObject.selectTags.minus({
                                            index:ultraObject.scope[pFFST_3_i],
                                            // messy:'true'
                                        })
                                        ultraObject.scope.minus({
                                            index:pFFST_3_i,
                                            // messy:'true'
                                        })
                                        ultraObject.selectTags.minus({
                                            index:ultraObject.scope[pFFST_2_i],
                                            // messy:'true'
                                        })
                                        ultraObject.scope.minus({
                                            index:pFFST_2_i,
                                            // messy:'true'
                                        })
                                        ultraObject.selectTags.minus({
                                            index:ultraObject.scope[pFFST_1_i],
                                            // messy:'true'
                                        })
                                        ultraObject.scope.minus({
                                            index:pFFST_1_i,
                                            // messy:'true'
                                        })
                                        debugger
                                        delete ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response

                                        console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                        ultraObject.objInvolved(
                                            ultraObject.iterify({iterify:
                                                [
                                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item    .value,
                                                    ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                                ]// i probably put it somewhere else
                                            })
                                        )
                                    
                                        
                                        console.groupEnd()
                                    console.groupEnd()
                                    ultraObject.selectTags.nextSet()
                                    }
                                    ultraObject.endpoint({
                                        instruct:'chromeExtensionOneTime',
                                        incomingFn:function(   dev_obj   ){
                                            chrome.runtime.onMessage.addListener(   debug_0_i   )
                                        },
                                        incomingOrigin:'extension',
                                        sendingFn:dev_obj.endpointSendingFn,
                                        sendingBody:{need:'make a table for me'},
                                        sendingOrigin:'contentScript'
                                    })
                                    
                                    var pFFXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                                    ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].incoming.fn()
                                    ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.body   )
                                    
                                // } /**/
                                    



                            
                        },
                        args:{
                            /*debug*/
                            endpointSendingFn:dev_obj.endpointSendingFn
                            /**/
                        }
                    }
                    ultraObject.forLoop(   pFFFL_0_i   )
                    // debugger
                    
                   
                    
                    /*  node mode choice thread production  */ //{
                    // ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                    // ultraObject.numberSystem({
                    //     operation:'decimal',
                    //     conversion:'to',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ],
                    // })
                    // ultraObject.numberSystem({
                    //     operation:'decimal',
                    //     conversion:'from',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ],
                    //     currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                    // })
                    // ultraObject.numberSystem({
                    //     operation:'update',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ]
                    // })
                    // ultraObject.forLoop(   pFFFL_1_i   )
                    // } /**/
                    

                
                console.groupEnd()
                    ///////////////////////////////////////////////////////////////////////////
                }