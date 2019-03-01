// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other

//if your find problems search PROBLEMS to see whats going on

//is {}[] allowed in ES5
// templates
// FL_0_i for loop object in the purpose action
// BOOL for boolean object
/*
{
    forLoop_0_i:0,
    forLoopLength:Object.keys(   uO.identifyEO   ).length,
    fn:function(   dev_obj   ){},
    args:{}
}
uO.forLoop(   selectAllFL_0_i   )
*/
 
//
/*
if(   dev_obj !== undefined   ){

}
*/
// __poss stands for possiblity
function uOReset(   dev_obj   ){
    //I know about ES6 but this is an uO right???
    return {
    eventName:"",           //wants a DOMString event name
    event_obj:undefined,              //wants an Event
    DOM_child:{0:undefined}, // wants a DOM element
    addEventListener:addEventListener, //  dev_obj.fn is used for 1st party dev to add their custom function to the listener
    passing_args: function(   dev_obj   ){console.log(arguments)}, // use this to see parameters from functions that have something to offer
    dispatchEvent: function(   dev_obj   ){uO.DOM_child[0].dispatchEvent(   uO.event_obj   )},    // sync fires
    xhttp:xhttp(),
    // xhr:uO.xhttp //might not be able to use class figure this out might use a function for this
    // for foward compatability , you should tell this function what to return for default is the xmlhttprequest,
    open:open, // for starting xhr
    protocol :"GET", // FOR xhr protocol
    target:"https://raw.githubusercontent.com/MichaelOdumosu57/JAVASCRIPT/master/SNIPPETS_AND_TEMPLATES/uO.js", // to make the xhr request from
    xhttpreadystatechange:xhttpreadystatechange, // see how you can apply ES6 but for compatability, this helps get the response text
    xhrResponse:'',// response from the ajax
    
    seperator : 3, // for pretty print represents spaces to seperate
    s_key:"-", // how to seperate notes and values
    max : -Infinity || -9999999999999999999, // conisder if || is supported in the oldest browser
    notes_object:{
                     '.altKey': 'true if keydown during event',
                     '.button': 'button number pressed during event'
                }, // a sample for what pretty object can do
    notes_collection: '', // for the final pretty print result
    notes_entries : [], // to turn the notes_object to entries for pretty_print to do its job
    notes_entries_fn:notes_entries_fn,// makes the note_entries
    pretty_do:pretty_do,
    
    allTags:undefined, // should i hold this here?? represents serach range for the uO concerning elements
    eCSearch:eCSearch,
    isArray:isArray,
    isObject:isObject,
    elementFound:{}, // holds found elements needed by the uO
    removeCN:removeCN,
    removeOP:removeOP,
    identifyE:identifyE,
    identifyEO:{}, // object for all needed identified
    forLoop:forLoop,
    objInvloved:objInvloved,// to keep track of all items responbile for a purpose at a specific point
    objIO:{}, // OBKECT FOR VobjInvloved
    objIFL_0_i:{},
    severalOr:severalOr,
    packIt:packIt,
    selectAll:selectAll,
    isDOMElement:isDOMElement
    }
}
var uO = uOReset()
function objInvloved(   dev_obj   ){
        uO.objIO = dev_obj
        var objInvloved_0_i = 0
        uO.objIFL_0_i={
            forLoop_0_i: objInvloved_0_i,
            forLoopLength:Object.entries(   dev_obj   ).length,
            fn:function(      ){
                console.log(   uO.objIO[uO.objIFL_0_i.forLoop_0_i]   )
                },
            args:undefined
        }
        forLoop(   uO.objIFL_0_i   )
}
function addEventListener(   dev_obj   ){
        var fn;
        
        
        if(   dev_obj !== undefined   ){
            
            
            if(   dev_obj.fn !== undefined   ){
                
                
                fn = dev_obj.fn
                
                
            }
            
            
            else if(   dev_obj.xhttp === 'true'   ){
                
                
                fn= xhttpreadystatechange
                
                
            }
            
            
            else if(   dev_obj.fn === undefined   ){
                
                
                fn = uO.passing_args
                
                
            }
            
            
        }
        
        
        else if(   dev_obj === undefined   ){
            
            
            fn = uO.passing_args
            
            
        }
        
        
        console.log(fn)
        uO.DOM_child[0].addEventListener(   uO.eventName,fn   )
} //  dev_obj.fn is used for 1st party dev to add their custom function to the listener dev_obj.xhttp is for xhr
function xhttp(   dev_obj   ){
        
        if(   dev_obj === undefined   ){
            
            
            var xhttp_0_i = new XMLHttpRequest()
            return xhttp_0_i
            
            
        }
        
        
        else if(   dev_obj !== undefined   ){
            
            
            var xhttp_0_i = new XMLHttpRequest()
            return xhttp_0_i
            
            
        }
        
        
} // creates an xhr obj
function open(   dev_obj   ){
    
    dev_obj.xhttp.open(   dev_obj.protocol,dev_obj.target,dev_obj.unk_bool   )
} // gets in contact with the host
function xhttpreadystatechange(){
    console.log(    this.readyState)
    var dev_obj = undefined
    
    if (    this.readyState == 4 && this.status == 200   ) {
    
    
        if(   dev_obj !==undefined   ){
            
            
            dev_obj.fn()
            
            
        }
        
        
        else if(   dev_obj ===undefined   ){
            
            
            uO.xhrResponse = this.responseText
            
            
        }
        
        
    }
    
} // handles getting remote reposnes
function notes_entries_fn(   dev_obj   ){
    uO.notes_entries = Object.entries(   uO.notes_object  )
}// produces the entries for the pretty_print functionality
function pretty_do(   dev_obj   ){

                                if(   dev_obj != undefined   ){
                                    
                                    
                                    if(   dev_obj.notes_object != undefined   ){
    
    
                                        uO.notes_object = dev_obj.notes_object
                                        
                                    }
                                
                                
                                }
                                
                                
                                this.notes_entries_fn()


                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                
                                
                                    if(   this.notes_entries[i][0].length > this.max   ){
                                        this.max = this.notes_entries[i][0].length
                                    }
                                    
                                }
                                
                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                    this.notes_collection += "\n" + this.notes_entries[i][0] + Array(   this.max  - this.notes_entries[i][0].length + this.seperator ).join(" ") + this.s_key
                                    
                                    
                                     	if(   typeof(   this.notes_entries[i][1]   ) == 'object'   ){
                                
                                
                                     		this.notes_collection += JSON.stringify(   this.notes_entries[i][1],null,2   )
                                
                                
                                     	}
                                     	
                                     	
                                     	else{
                                
                                
                                     		this.notes_collection += this.notes_entries[i][1]
                                
                                
                                     	}
                                     	
                                     	
                                }
                                return this.notes_collection
                            }
function isArray(   dev_obj   ){ // should combine all type query or keep seperate??
    //.type the item in question
    
     if(   dev_obj !== undefined   ){
         
         
        if(   Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) !== 'object'   ){
             //an array
             
            return true
            
            
        }
        
        
     }
     
     
     return false
} // is item an object will be upgraded to test for more objects, you can use instance of but its not available everywher
function isObject(   dev_obj   ){ // should combine all type query or keep seperate??
    //.type the item in question
    
     if(   dev_obj !== undefined   ){
         
         
        if(   !Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object'   ){
             //an array
             
            return true
            
            
        }
        
        
     }
     
     
     return false
}
function isDOMElement(   dev_obj   ){ //checks if item is HTML or XML tag
    //.type the item in question
    
     if(   dev_obj !== undefined   ){
         
        
        if(   uO.isObject({type:dev_obj.type}) && dev_obj.type.ownerDocument !== undefined   ){
             //an array
            console.log('true')
            return true
            
            
        }
        
        
     }
     
     
     return false
}
function eCSearch(   dev_obj   ){
    // .list, desired items
    // .look spot where to look and assert for list, if an object the items should be keys
    // look through innerHTML, innerText, textContext
    // holds the found elements that meet the query in uO.elementFound
    var eCSearchLook = []
    var eCSearchList = []
    var eCSearchProp
    var eCSearchElem
    var eCSearchProp_obj = {
                                cBQ:undefined  //chop question marl
                            }
    
    if(   dev_obj !== undefined   ){
        
        
        if(   uO.isArray(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = dev_obj.look
            
                
        }
        
        
        else if(   uO.isObject(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = Object.keys(   dev_obj.look   )
            
                             
        }
        
        
        if(   uO.isArray(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = dev_obj.list
                
                
        }
        
        
        else if(   uO.isObject(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = Object.keys(   dev_obj.list   )
            
                             
        }
        
        
        
    }
    
    
    for(   var eCSearch_0_i = 0; eCSearch_0_i !==  uO.allTags.length;  eCSearch_0_i++   ){
        for(   var eCSearch_1_i = 0; eCSearch_1_i !==  eCSearchLook.length;  eCSearch_1_i++   ){
            for(   var eCSearch_2_i = 0; eCSearch_2_i !==  eCSearchList.length;  eCSearch_2_i++   ){
                eCSearchProp = uO.allTags[eCSearch_0_i][eCSearchLook[eCSearch_1_i]]
                eCSearchElem = uO.allTags[eCSearch_0_i]
                
                            
                if(   eCSearchProp === undefined   ){
                    
                    
                    continue;
                    
                    
                }
                
                
                else if(   eCSearchProp !== undefined   ){
                    
                    
                    eCSearchProp = eCSearchProp.toString()
                    // console.log(   eCSearchProp    )
                    // console.log(   eCSearchList[eCSearch_2_i]   )
                    // console.log(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]  )   )
                    // console.log(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null ? eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0] === eCSearchList[eCSearch_2_i] : null    )
                        // match chops off the question mark for some reason
                        //sdafdfa?sassa'.match('a?s') does not work as intenede
                }
                
                
                try{//async might have a problem with this
                    
                    
                    if(   eCSearchList[eCSearch_2_i].indexOf('?') !== -1   ){
                    
                    
                        if(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null   ){
                            
                            
                            eCSearchProp_obj.cBQ = eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0] + "?"
                        
                        
                        }
                        
                        
                    }
                    
                    
                    else if(   eCSearchList[eCSearch_2_i].indexOf('?') === -1   ){
                        
                        
                        if(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null   ){
                            
                            
                            eCSearchProp_obj.cBQ = eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0]
                            
                            
                        }
                        
                        
                    }
                    
                    
                    // console.log(   eCSearchProp_obj.cBQ, eCSearchList[eCSearch_2_i]   )
                    // console.log(   eCSearchProp_obj.cBQ === eCSearchList[eCSearch_2_i]     )
                    if(   eCSearchProp_obj.cBQ === eCSearchList[eCSearch_2_i]     ){
                        //PROBLEMS
                        
                        // console.log(   eCSearchList[eCSearch_2_i].match(   eCSearchProp.toString()   )[0]    )
                        // console.log(   eCSearchElem    )
                    
                        if(   uO.elementFound[Object.keys(   uO.elementFound   ).length] !== eCSearchElem   ){
                            
                            
                            uO.elementFound[Object.keys(   uO.elementFound   ).length] = {
                                
                                item:eCSearchElem,
                                query:eCSearchProp,
                                xMark:eCSearchLook[eCSearch_1_i]
                            
                                } // the bug for removing pharma charts
                                
                            
                            
                        }
                                            
                        
                    }
                    
                    
                }
                catch(   e   ){
                    // console.log(e)
                }
            }
        }
    }
    console.log(   eCSearchLook   )
}// seaches for elements with the queried filters and does things to them
function removeCN(   dev_obj   ){
    // removes specified childNodes from the DOM
    
    
    if(   dev_obj != undefined   ){
        
        
        if(   dev_obj.rules === 'all'   ){
            continue;
        }
        
        
        else if(   dev_obj.rules === 'duplicates'   ){
                
        }
        
        // if the rules are differnent consider before items are removed
    }
    removeCNLength = Object.keys(   uO.elementFound   ).length
    for(   var removeCN_0_i = 0; removeCN_0_i !== removeCNLength;  removeCN_0_i++){
        
        
        if(   uO.elementFound[removeCN_0_i] !== undefined   ){
            
            
            uO.elementFound[removeCN_0_i].remove()
            uO.elementFound[removeCN_0_i] = 'elementRemoved'
            // is it removed
            
        
        }
        
            
        console.log(   removeCN_0_i   )
    }
    console.log(   'compeleted'   )
}
function removeOP(   dev_obj   ){
    var removeOPLength;
    var removeOPObj = {}
    if(   dev_obj !== undefined   ){
        
                    
        if(   dev_obj.rules === 'duplicates'   ){
            
            
            removeOPLength = Object.keys(   this.elementFound   ).length   //be careful for nesting
            for(   var removeOP_0_i = 1; removeOP_0_i !== removeOPLength; removeOP_0_i++   ){
                
                // console.log(removeOP_0_i,this.elementFound[removeOP_0_i].item)
                // console.log(   this.elementFound[removeOP_0_i].item === this.elementFound[removeOP_0_i].item   )
                
                
                for(   var removeOP_1_i = 0; removeOP_1_i !== removeOPLength; removeOP_1_i++   ){
                    
                    // console.log(   removeOP_1_i   )
                    
                        if(   this.elementFound[removeOP_0_i].item === this.elementFound[removeOP_1_i].item && removeOP_0_i !== removeOP_1_i  ){
                            
                            
                            this.elementFound[removeOP_0_i].item = null
                            break
                            
                            
                        }
                        
                    
                }
                                
                
            }
            for(   var removeOP_2_i = 0; removeOP_2_i !== removeOPLength; removeOP_2_i++   ){
                
                
                if(   this.elementFound[removeOP_2_i].item !== null   ){
                    
                    
                    removeOPObj[Object.keys(   removeOPObj   ).length] = this.elementFound[removeOP_2_i]
                    
                    
                }
                
                
            }
            this.elementFound = removeOPObj
        }
        
        // if the rules are differnent consider before items are removed
    }
    
        
} //remove specific properties from obj
function forLoop(   dev_obj   ){
    
    var forLoopbreak = false
    if(   dev_obj !== undefined   ){

        
        for(   dev_obj.forLoop_0_i; dev_obj.forLoop_0_i !== dev_obj.forLoopLength; dev_obj.forLoop_0_i++   ){
                // console.log(   dev_obj.forLoop_0_i   )
                forLoopbreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                
                
                if(   forLoopbreak === 'true'   ){
                    
                    
                    break;
                    
                    
                }
                
                
        }
        dev_obj.forLoop_0_i = 0

        
    }
}
function severalOr(   dev_obj   ){ // if you have several OR comparisons for the same object use it here


    if(   dev_obj !== undefined   ){
        
        
        if(   dev_obj.compAgn.length === undefined   ){
            
            
            dev_obj.compAgn.length =  Object.keys(   dev_obj.compAgn   ).length
            
            
        }
        
        
        var severalOrReturn = dev_obj.boolean
        var severalOrFL_O_i  = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.compAgn.length,//compare Against
                        fn:function(   dev_obj   ){
                                
                                
                                if(   dev_obj.compTo === dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i]   ){
                                    
                                    
                                    dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                                    severalOrReturn = dev_obj.boolean // just in case  uO can't re-reference the object back
                                    return true
                                    
                                    
                                }
                                
                                
                            },
                        args:{
                                compTo: dev_obj.compTo,
                                compAgn:dev_obj.compAgn,
                                boolean:dev_obj.boolean,
                                which:dev_obj.which
                            }
                    }
        uO.forLoop(   severalOrFL_O_i   )
        return severalOrReturn
    }
    
    
}
function identifyE(   dev_obj   ){
    var identifyELength = Object.keys(   uO.elementFound   ).length
    var identifyEC = {} //identify element  Check checls for parents and children for the right node
    for(   var identifyE_0_i = 0; identifyE_0_i !== identifyELength; identifyE_0_i++   ){
        
        
        if(   dev_obj !== undefined   ){
            
           
            if(   dev_obj.action === 'preFill'   ){
                
                
                if(   uO.elementFound[identifyE_0_i].item.tagName.toLowerCase() !== 'input'   ){// if there is more needed make a function im not writing these massive loops
                
                    identifyEC['0'] = uO.elementFound[identifyE_0_i].item.querySelectorAll("*") //gr8 now we can grab all element children, make it check itself too or do you want to do this
                    var identifyE_1_i = 0
                    var iEFL_1_i ={
                        forLoop_0_i: identifyE_1_i,
                        forLoopLength:identifyEC['0'].length,
                        fn:function(   dev_obj   ){
                            
                                                        
                            if(   uO.identifyEO[identifyE_0_i] === undefined   ){
                                
                                
                                uO.identifyEO[identifyE_0_i]  = {item : {}}
                                
                                                                    
                            }
                            
                            
                            uO.identifyEO.boolVal = {0:false}
                            uO.identifyEO.boolVal =  uO.severalOr({
                                            compTo: identifyEC['0'][iEFL_1_i.forLoop_0_i].tagName.toLowerCase(),
                                            compAgn: {0:'input',1:'a',length:2},
                                            boolean:uO.identifyEO.boolVal,
                                            which:0
                            })
                                

                            if(   uO.identifyEO.boolVal[0]   ){ // if more have it come in as a parameter and make a function comparing every one
                                 
                                uO.identifyEO.boolVal = {0:false}//remember to reset it
                                uO.identifyEO[identifyE_0_i].item[Object.keys(   uO.identifyEO[identifyE_0_i].item   ).length] = {item:{}} // for all the identifyEC['0']descendants
                                uO.identifyEO[identifyE_0_i].item[Object.keys(   uO.identifyEO[identifyE_0_i].item   ).length -1 ].item = identifyEC['0'][iEFL_1_i.forLoop_0_i]
                                // actual placement of the descendants
                            
                            }
                                                                                            
                                                            
                        },
                        args:undefined
                    }
                    console.log(   identifyE_0_i   )
                    uO.forLoop(   iEFL_1_i   )
                    // console.group('after first loop')
                    // uO.objInvloved({
                    //         0:uO.elementFound,
                    //         1:uO.identifyEO,
                    //         2:identifyEC,
                    //         3:uO.forLoop,
                    //         4:uO.objInvloved
                    //     })
                    // console.groupEnd()
                    var iEFL_2_i ={
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   uO.identifyEO   ).length,
                        fn:function(   dev_obj   ){/* when we have to deal with it
                                    use a findSlbing key for .elementFound to instruct the function to search its siblings and the parent and its siblings */
                                    },
                        args:{}
                    }
                    console.group('fl')
                    // uO.forLoop(   iEFL_2_i   )
                    console.groupEnd()
                    // console.group('checking relatives')
                    // uO.objInvloved({
                    //         0:uO.elementFound,
                    //         1:uO.identifyEO,
                    //         2:uO.forLoop,
                    //         3:uO.objInvloved
                    //     })
                    // console.groupEnd()
                    
                    //at this point all related elements should be found

                        
                }
                
                
            }
            
            
        }
        
        
    }
    
        
} // identifies tags in elementFound and what is needed to do the next task so for it looks through descemdats not siblings
function selectAll(   dev_obj   ){
        //.target item to get all values from
    
        if(   dev_obj !== undefined   ){
            
            
                var selectAllBOOL = {0:false}
                selectAllBOOL = uO.severalOr({
                            compTo: 'element',
                            compAgn: dev_obj.typeOnly,
                            boolean:selectAllBOOL,
                            which:0
                })
                if(   uO.isObject({type:dev_obj.target}) && selectAllBOOL[0]   ){
                    
                    
                    var selectReturn = {}
                    var selectHold = dev_obj.target
                    var selectAllFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   selectHold   ).length,
                        fn:function(   dev_obj   ){
                            console.log(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   )
                            
                            
                            if(   uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                
                            }
                            
                            
                            if(   uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                
                                
                            }
                            
                        },
                        args:{target:dev_obj.target}
                    }
                    uO.forLoop(   selectAllFL_0_i   )
                
                    
                }
            
            
        }
        
        
}
function packIt(   dev_obj   ){
    /*
     .order what this fn is supposed to fill right now takes objects
     .directions, what its filling it with
        match use match map and match keys and fills values
        gather use uO.selectAll to gather needed values to pack
            element, return only elements from the order
     .matchMap if .directions === match map keys and fill values
    */
    
    
    if(   dev_obj !== undefined   ){
            
        var packItSA //for packIT selectall
        var packItFL_0_i ={
            forLoop_0_i:0,
            forLoopLength:Object.keys(   dev_obj.directions   ).length,
            fn:function(   dev_obj   ){
                
                                    
                if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'match'   ){
                        
                    
                    
                        
                }
                
                
                if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                        
                    
                    
                    packItSA = uO.selectAll({
                        target:dev_obj.order,
                        typeOnly : {0:'element'}
                    })
                }
            
            },
            args:{
                directions:dev_obj.directions,
                order:dev_obj.order
            }
        }
        uO.forLoop(   packItFL_0_i   )
        
    }
    
        
} //fills anything as you tell it, use pack to avoid missspelling
//templates

function preFillForm(   dev_obj   ){
    uO.allTags = dev_obj.allTags
    uO.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    uO.removeOP({rules:'duplicates'})
    uO.identifyE({
                action:'preFill'
            })
    console.group('identified elements')
    uO.objInvloved({
            0:uO.elementFound,
            1:uO.identifyEO,
            2:uO.forLoop,
            3:uO.objInvloved
        })
    console.groupEnd()
    uO.packIt({
        order:uO.identifyEO,
        directions:{
                        0:'match',
                        1:'gather element',
                        length:1
                    },
        matchMap:uO.elementFound
    })
}
    
//to make an xhr request
function h(   dev_obj   ){
            uO.DOM_child[0] = uO.xhttp
            uO.eventName = 'readystatechange'
            uO.addEventListener({xhttp:'true'}) //your item is here
            uO.open({
                    protocol: uO.protocol,
                    xhttp:uO.xhttp,
                    target:uO.target,
                    unk_bool:true
                })
            uO.DOM_child[0].send()
        }

//to add an eventListener
function a(   dev_obj   ){
    uO.eventName = 'click'
    uO.DOM_child[0] = document
    uO.addEventListener()
}

//to remove elements from a page
function b(   dev_obj   ){
    uO.allTags = dev_obj.allTags
    uO.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    uO.removeCN({rules:'all'})
}


function checkingAllValues(   dev_obj   ){
    var checkingAllValuesBOOL = {0:false}
    checkingAllValuesBOOL = uO.severalOr({
                compTo: 'match',
                compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
                boolean:checkingAllValuesBOOL,
                which:0
    })
    console.log(   checkingAllValuesBOOL   )
}


            preFillForm({
                allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                //allTags:document.querySelectorAll("body *"), // bug it just grabs the whole query
                list:{
                    'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                    'Website':'https://ualbanyasist.github.io/',
                    'How did you hear about this job?':'Linkedin',
                    'What is your desired Salary?': '$80,000'},
                look:{ 'innerHTML':null,'innerText':null,'textContext':null}
            })
// whats a good rules if parameters are part of the uO or come in as an argument
// if a function naturally passes arguments to a function, dev params must go to the uO

