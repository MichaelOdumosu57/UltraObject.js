    

var myPort;
// alert('content script is here')
console.log(chrome.runtime.onConnect)


// chrome.webNavigation.onCompleted.addListener(function() {
//     //   alert("This is my favorite website!");

      
// var myPort;
// alert('content script is here')
// console.log(chrome.runtime.onConnect)
// });
  
// window.addEventListener("message", function(event) {

// console.log(event)
// })




  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
    // console.log(msg)
    // console.log(ultraObject)
    console.log(request)
    // chrome.ultraObject = ultraObject
    // myPort.postMessage({allTags:document.querySelectorAll("body *:not(script)")})
    
    new Promise((resolve,reject)=>{
        preFillForm({
            // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
            allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
            list:{
                'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                'Website':'https://ualbanyasist.github.io/',
                'How did you hear about this job?':'Linkedin',
                'Phone': '$80,000',
                'Cover Letter':'as'
                },
            look:{ 'innerHTML':null,'innerText':null,'textContent':null}
        })
        resolve()
    }).then(()=>{
        sendResponse({complete:'I ran the test look at your plotly extension for the results'})
    })
        //   sendResponse({farewell: document.querySelectorAll("body *:not(script)")});
      });

// chrome.runtime.onConnect.addListener(function(port) {
    
//     console.log(port.name === "DBready");
//     myPort = port
//     port.onMessage.addListener(function(msg) {
    
//       console.log(msg)
//       port.postMessage({stuff:'txt'})
//       port.postMessage({allTags:document.querySelectorAll("body *:not(script)")})
//       port.disconnect()
//       debugger
      
//     });
    
//     /*  Port lifetime */
//     port.onDisconnect.addListener(function(event) {
//         console.log('disconnect',event)
//     });
//     /**/
// });

// myPort.onMessage.addListener(function(msg) {
//     console.log(msg)
//     console.log(ultraObject)
//     console.log(document)
//     chrome.ultraObject = ultraObject
//     myPort.postMessage({allTags:document.querySelectorAll("body *:not(script)")})
    
//     // new Promise((resolve,reject)=>{
//     //     preFillForm({
//     //         // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
//     //         allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
//     //         list:{
//     //             'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
//     //             'Website':'https://ualbanyasist.github.io/',
//     //             'How did you hear about this job?':'Linkedin',
//     //             'Phone': '$80,000',
//     //             'Cover Letter':'as'
//     //             },
//     //         look:{ 'innerHTML':null,'innerText':null,'textContent':null}
//     //     })
//     //     resolve()
//     // }).then(()=>{
//     //     port.postMessage({complete:'I ran the test look at your plotly extension for the results'})
//     // })
// });



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
                    debugger
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
                    var pFFNS_0_i =  ultraObject.scope.add(   {value:ultraObject.nS.abelast[   ultraObject.nS.abelast.length-1   ]}   )
                    ultraObject.nS.abelast.add(   {value:ultraObject.scope[   pFFNS_0_i   ]}   )
                    // }  /**/
                    
                    ultraObject.selectTags.abelast.minus(   {index:0}   )
                    ultraObject.packIt({
                        order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                        directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                        fill:'value',
                        write:'valuePhrase'
                    })
                    // should also make sure value is not empty
                    ///////////////////////////////////////////////////////////////////////////
                    console.group(   'answers'   )
                    var pFFMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['tagName','className','hidden','id']}   )}   )}   );
                    var pFFMisc_1_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['input','select','textarea','option']}   )}   )}   );
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
                                    ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent}   )
                                    ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement}   )
                                    ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode}   )
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
                                                    if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                        
                                                        
                                                        ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                        
                     
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
                                                        console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects  )
                                                        
                                                        
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
                                    pointValue:'v1'
                                })
                                ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_1_i]}   )
                                ultraObject.scope.minus(   {index:pFFST_1_i}   )
                                ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_2_i]}   )
                                ultraObject.scope.minus(   {index:pFFST_2_i}   )
                                ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_3_i]}   )
                                ultraObject.scope.minus(   {index:pFFST_3_i}   )
                                throw('e')
                                console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                ultraObject.objInvolved({
                                    0:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value,
                                    1:ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                })
                                // }
                                console.groupEnd()
                            console.groupEnd()
                            
                        },
                        args:{}
                    }
                    ultraObject.forLoop(   pFFFL_0_i   )
                    ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                    ultraObject.scope.minus(   {index:pFFST_0_i}   )
                    console.groupEnd()
                    ///////////////////////////////////////////////////////////////////////////
                }