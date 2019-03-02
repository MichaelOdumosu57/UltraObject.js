        function wait(   ms   ){
           var start = new Date().getTime();
           var end = start;
           while(   end < start + ms   ) {
             end = new Date().getTime();
           }
        }
// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other

//if your find problems search PROBLEMS to see whats going on

//is {}[] allowed in ES5
// templates
// FL_0_i for loop object in the purpose action
// BOOL for boolean object
// SA for a selectAll object
// O stands for Object for this functionality like thisfn has thisfnO
/*
{
    forLoop_0_i:0,
    forLoopLength:Object.keys(   ultraObject.identifyEO   ).length,
    fn:function(   dev_obj   ){
    
    },
    args:{}
}
ultraObject.forLoop(   selectAllFL_0_i   )
*/
 
//
/*
if(   dev_obj !== undefined   ){

}
*/
// __poss stands for possiblity
function ultraObjectReset(   dev_obj   ){
    //I know about ES6 but this is an ultraObject right???
    return {
    eventName:"",           //wants a DOMString event name
    event_obj:undefined,              //wants an Event
    DOM_child:{0:undefined}, // wants a DOM element
    addEventListener:addEventListener, //  dev_obj.fn is used for 1st party dev to add their custom function to the listener
    passing_args: function(   dev_obj   ){console.log(arguments)}, // use this to see parameters from functions that have something to offer
    dispatchEvent: function(   dev_obj   ){ultraObject.DOM_child[0].dispatchEvent(   ultraObject.event_obj   )},    // sync fires
    xhttp:xhttp(),
    // xhr:ultraObject.xhttp //might not be able to use class figure this out might use a function for this
    // for foward compatability , you should tell this function what to return for default is the xmlhttprequest,
    open:open, // for starting xhr
    protocol :"GET", // FOR xhr protocol
    target:"https://raw.githubusercontent.com/MichaelOdumosu57/JAVASCRIPT/master/SNIPPETS_AND_TEMPLATES/ultraObject.js", // to make the xhr request from
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
    
    allTags:undefined, // should i hold this here?? represents serach range for the ultraObject concerning elements
    eCSearch:eCSearch,
    isArray:isArray,
    isObject:isObject,
    isDOMElement:isDOMElement,
    
    elementFound:{}, // holds found elements needed by the ultraObject
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
    
    
    subGroups:subGroups,
    subGroupsO:{},
    }
}
var ultraObject = ultraObjectReset()
function objInvloved(   dev_obj   ){
    // console.log a list of the dev_obj  values to be outputted to the console to help the dev know how is items are in the middle of an API
    
        ultraObject.objIO = dev_obj
        var objInvloved_0_i = 0
        ultraObject.objIFL_0_i={
            forLoop_0_i: objInvloved_0_i,
            forLoopLength:Object.entries(   dev_obj   ).length,
            fn:function(      ){
                console.log(   ultraObject.objIO[ultraObject.objIFL_0_i.forLoop_0_i]   )
                },
            args:undefined
        }
        forLoop(   ultraObject.objIFL_0_i   )
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
                
                
                fn = ultraObject.passing_args
                
                
            }
            
            
        }
        
        
        else if(   dev_obj === undefined   ){
            
            
            fn = ultraObject.passing_args
            
            
        }
        
        
        console.log(fn)
        ultraObject.DOM_child[0].addEventListener(   ultraObject.eventName,fn   )
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
            
            
            ultraObject.xhrResponse = this.responseText
            
            
        }
        
        
    }
    
} // handles getting remote reposnes
function notes_entries_fn(   dev_obj   ){
    ultraObject.notes_entries = Object.entries(   ultraObject.notes_object  )
}// produces the entries for the pretty_print functionality
function pretty_do(   dev_obj   ){

                                if(   dev_obj != undefined   ){
                                    
                                    
                                    if(   dev_obj.notes_object != undefined   ){
    
    
                                        ultraObject.notes_object = dev_obj.notes_object
                                        
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
         
        
        if(   ultraObject.isObject({type:dev_obj.type}) && dev_obj.type.ownerDocument !== undefined   ){
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
    // holds the found elements that meet the query in ultraObject.elementFound
    var eCSearchLook = []
    var eCSearchList = []
    var eCSearchProp
    var eCSearchElem
    var eCSearchProp_obj = {
                                cBQ:undefined  //chop question marl
                            }
    
    if(   dev_obj !== undefined   ){
        
        
        if(   ultraObject.isArray(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = dev_obj.look
            
                
        }
        
        
        else if(   ultraObject.isObject(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = Object.keys(   dev_obj.look   )
            
                             
        }
        
        
        if(   ultraObject.isArray(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = dev_obj.list
                
                
        }
        
        
        else if(   ultraObject.isObject(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = Object.keys(   dev_obj.list   )
            
                             
        }
        
        
        
    }
    
    
    for(   var eCSearch_0_i = 0; eCSearch_0_i !==  ultraObject.allTags.length;  eCSearch_0_i++   ){
        for(   var eCSearch_1_i = 0; eCSearch_1_i !==  eCSearchLook.length;  eCSearch_1_i++   ){
            for(   var eCSearch_2_i = 0; eCSearch_2_i !==  eCSearchList.length;  eCSearch_2_i++   ){
                eCSearchProp = ultraObject.allTags[eCSearch_0_i][eCSearchLook[eCSearch_1_i]]
                eCSearchElem = ultraObject.allTags[eCSearch_0_i]
                
                            
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
                    
                        if(   ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] !== eCSearchElem   ){
                            
                            
                            ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] = {
                                
                                item:eCSearchElem,
                                query:eCSearchProp,
                                xMark:eCSearchLook[eCSearch_1_i],
                                keyword:eCSearchProp_obj.cBQ
                            
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
    removeCNLength = Object.keys(   ultraObject.elementFound   ).length
    for(   var removeCN_0_i = 0; removeCN_0_i !== removeCNLength;  removeCN_0_i++){
        
        
        if(   ultraObject.elementFound[removeCN_0_i] !== undefined   ){
            
            
            ultraObject.elementFound[removeCN_0_i].remove()
            ultraObject.elementFound[removeCN_0_i] = 'elementRemoved'
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
                
                                
                if(   forLoopbreak === 'true' || forLoopbreak === 'premature'  ){
                    
                    
                    break;
                    
                    
                }
                
                
        }
        dev_obj.forLoop_0_i = 0

        
    }
}
function severalOr(   dev_obj   ){
    //.compAgn the several items to find a true value
    //.spot I should have returned an object but hopefully you get your value back else make function that returns an object
    // severalOrReturn value item
        //.spot where the function returned true
    //.how how tomake the comparison so the default is a  === its a function
        // indexOf dev_obj.compAgn[index].indexOF(dev_obj.compTo)
        // . reuslt if dev_obj.how is a function, result is optional for what ever makes it true
    // .premature ,  bool if the loop should break early

    if(   dev_obj !== undefined   ){
        
        
        if(   dev_obj.compAgn.length === undefined   ){
            
            
            dev_obj.compAgn.length = Object.keys(   dev_obj.compAgn   ).length
            
            
        }
        
        var severalOrFnAnswer // if dev_obj.how is a function this holds the return value
        var severalOrReturn = dev_obj.boolean
        var severalOrFL_O_i  = {
            forLoop_0_i:0,
            forLoopLength:dev_obj.compAgn.length,//compare Against
            fn:function(   dev_obj   ){
                
                    console.log(   severalOrFL_O_i.forLoop_0_i   )
                    if(   dev_obj.how === undefined   ){
                                                            
                        
                        if(   dev_obj.compTo === dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i]   ){
                            
                            
                            dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                            severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                            severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                            return 'true'
                            
                            
                        }
                        
                        
                    }
                    
                    
                    else if(   dev_obj.how !== undefined   ){
                        
                        
                        if(   typeof(   dev_obj.how   ) === 'function'   ){
                            
                            
                            severalOrFnAnswer = dev_obj.how({
                                compAgnI:dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i],
                                compTo:dev_obj.compTo,
                                index:severalOrFL_O_i.forLoop_0_i
                            })
                            
                            
                            if(   severalOrFnAnswer === dev_obj.result   ){
                                
                                
                                dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                                severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                                severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                                return 'true'
                                
                                
                            }
                            
                            
                            else if(   severalOrFnAnswer === 'premature'   ){
                                
                                                                
                                return 'premature'
                                
                                
                            }
                    
                            
                        }
                        
                        
                    }
                    
                    

                    
                    
                },
            args:{
                    compTo: dev_obj.compTo,
                    compAgn:dev_obj.compAgn,
                    boolean:dev_obj.boolean,
                    which:dev_obj.which,
                    how:dev_obj.how,
                    result:dev_obj.result
                }
        }
        ultraObject.forLoop(   severalOrFL_O_i   )
        return severalOrReturn
    }
    
    
}// if you have several OR comparisons for the same object use it here
function identifyE(   dev_obj   ){
    var identifyELength = Object.keys(   ultraObject.elementFound   ).length
    var identifyEC = {} //identify element  Check checls for parents and children for the right node
    for(   var identifyE_0_i = 0; identifyE_0_i !== identifyELength; identifyE_0_i++   ){
        
        
        if(   dev_obj !== undefined   ){
            
           
            if(   dev_obj.action === 'preFill'   ){
                
                
                if(   ultraObject.elementFound[identifyE_0_i].item.tagName.toLowerCase() !== 'input'   ){// if there is more needed make a function im not writing these massive loops
                
                    identifyEC['0'] = ultraObject.elementFound[identifyE_0_i].item.querySelectorAll("*") //gr8 now we can grab all element children, make it check itself too or do you want to do this
                    var identifyE_1_i = 0
                    var iEFL_1_i ={
                        forLoop_0_i: identifyE_1_i,
                        forLoopLength:identifyEC['0'].length,
                        fn:function(   dev_obj   ){
                            
                                                        
                            if(   ultraObject.identifyEO[identifyE_0_i] === undefined   ){
                                
                                
                                ultraObject.identifyEO[identifyE_0_i]  = {item : {}}
                                
                                                                    
                            }
                            
                            
                            ultraObject.identifyEO.boolVal = {0:false}
                            ultraObject.identifyEO.boolVal =  ultraObject.severalOr({
                                            compTo: identifyEC['0'][iEFL_1_i.forLoop_0_i].tagName.toLowerCase(),
                                            compAgn: {0:'input',1:'a',length:2},
                                            boolean:ultraObject.identifyEO.boolVal,
                                            which:0
                            })
                                

                            if(   ultraObject.identifyEO.boolVal[0]   ){ // if more have it come in as a parameter and make a function comparing every one
                                 
                                ultraObject.identifyEO.boolVal = {0:false}//remember to reset it
                                ultraObject.identifyEO[identifyE_0_i].item[Object.keys(   ultraObject.identifyEO[identifyE_0_i].item   ).length] = {item:{}} // for all the identifyEC['0']descendants
                                ultraObject.identifyEO[identifyE_0_i].item[Object.keys(   ultraObject.identifyEO[identifyE_0_i].item   ).length -1 ].item = identifyEC['0'][iEFL_1_i.forLoop_0_i]
                                // actual placement of the descendants
                            
                            }
                                                                                            
                                                            
                        },
                        args:undefined
                    }
                    console.log(   identifyE_0_i   )
                    ultraObject.forLoop(   iEFL_1_i   )
                    // console.group('after first loop')
                    // ultraObject.objInvloved({
                    //         0:ultraObject.elementFound,
                    //         1:ultraObject.identifyEO,
                    //         2:identifyEC,
                    //         3:ultraObject.forLoop,
                    //         4:ultraObject.objInvloved
                    //     })
                    // console.groupEnd()
                    var iEFL_2_i ={
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   ultraObject.identifyEO   ).length,
                        fn:function(   dev_obj   ){/* when we have to deal with it
                                    use a findSlbing key for .elementFound to instruct the function to search its siblings and the parent and its siblings */
                                    },
                        args:{}
                    }
                    console.group('fl')
                    // ultraObject.forLoop(   iEFL_2_i   )
                    console.groupEnd()
                    // console.group('checking relatives')
                    // ultraObject.objInvloved({
                    //         0:ultraObject.elementFound,
                    //         1:ultraObject.identifyEO,
                    //         2:ultraObject.forLoop,
                    //         3:ultraObject.objInvloved
                    //     })
                    // console.groupEnd()
                    
                    //at this point all related elements should be found

                        
                }
                
                
            }
            
            
        }
        
        
    }
    
        
} // identifies tags in elementFound and what is needed to do the next task so for it looks through descemdats not siblings
function subGroups(   dev_obj   ){
    //.nextItem, indicates to the function that needs to find the path of the next item
    //.val a factual represenation of how to use functionality to get to the item for another complex item
    // .map a place to keep the mapping list
        //.ending, the cutoff to determine the good from the bad
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
    
    if(   dev_obj !== undefined   ){
        
        
        var subGroupsBOOL = {0:false}
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
                        console.log
                        subGroupsBOOL_1_i = ultraObject.severalOr({
                            compTo: ultraObject.subGroupsO[subGroupsBOOL.spot].ending[subGroupsFL_1_i.forLoop_0_i],
                            compAgn: ultraObject.subGroupsO[subGroupsBOOL.spot],
                            boolean:subGroupsBOOL_1_i,
                            which:0,
                            how:function(   dev_obj   ){
                                
                                console.log(dev_obj.compAgnI)
                                if(   dev_obj.compAgnI !== undefined   ){
                                    
                                                                        
                                    if(   dev_obj.compAgnI.indexOf(   dev_obj.compTo   ) === -1   ){
                                        
                                        
                                        delete ultraObject.subGroupsO[subGroupsBOOL.spot][dev_obj.index]
                                        
                                        
                                    }
                                    
                                
                                }
                                
                                else if(   dev_obj.compAgnI === undefined   ){
                                    
                                    
                                    return 'premature'
                                    
                                    
                                }
                                
                            }, // see how this works
                            result:'true'
                        })
                    },
                    args:{}
                }
                ultraObject.forLoop(   subGroupsFL_1_i   )
                ultraObject.objInvloved({
                            0:dev_obj.map.ending,
                            1:ultraObject.subGroupsO[subGroupsBOOL.spot]
                        })
                        throw('e')
            console.groupEnd()
            
                        
        }
        
        
        else if(   subGroupsBOOL[0]   ){
            
            
            if(   ultraObject.subGroupsO[subGroupsBOOL.spot].length === 0 &&  ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] === undefined   ){
                
                
                ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
            }
            
            
            ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] += dev_obj.val + ' '
            //hopefully ' ' is a gr8 sepereator
            
            if(   dev_obj.nextItem === 'true'   ){

                                
                ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
            }
            
            

            
            
        }
            
        
        dev_obj.map +=  dev_obj.val.toString()
        
        
        
    }
        
        
}// returns ordering information about nested items
function selectAll(   dev_obj   ){
        // this function also returns the group ordering if looked for nested items
        //.target item to get all values from
        // .typeOnly, what specific values were looking for
    
        if(   dev_obj !== undefined   ){
            
            
                var selectAllBOOL = {0:false}
                selectAllBOOL = ultraObject.severalOr({
                            compTo: 'element',
                            compAgn: dev_obj.typeOnly,
                            boolean:selectAllBOOL,
                            which:0
                })
                if(   ultraObject.isObject({type:dev_obj.target}) && selectAllBOOL[0]   ){
                    
                    
                    var selectReturn = {}
                    var selectReturnMD = {length:0,str:'',ending:{0:'element'}}//selectReturnMetaData contains grouping information about the .target
                    var selectAllFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   dev_obj.target   ).length,
                        fn:function(   dev_obj   ){
                            console.log(   selectAllFL_0_i.forLoop_0_i,'walk in'   )
                            console.log(   Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   )
                            var selectCheckpoint = {}  // when it leave recurison it restore the values
                            ultraObject.subGroups({
                                    map:selectReturnMD,
                                    val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                })
                            
                            
                            if(   ultraObject.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                ultraObject.subGroups({
                                        map:selectReturnMD,
                                        val:'element',
                                        nextItem:'true',
                                    })
                                    
                                
                            }
                            
                            
                            else if(   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                console.group('recursion')
                                    selectCheckpoint.args = selectAllFL_0_i.args
                                    selectCheckpoint.forLoop_0_i =  selectAllFL_0_i.forLoop_0_i
                                    selectCheckpoint.forLoopLength = selectAllFL_0_i.forLoopLength
                                    selectAllFL_0_i.args ={
                                        target: Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    }
                                    selectAllFL_0_i.forLoop_0_i = 0
                                    selectAllFL_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   ).length
                                    ultraObject.forLoop(   selectAllFL_0_i   )
                                console.groupEnd()
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
                                1:ultraObject.identifyEO,
                                2:selectReturnMD
                            })
                    console.groupEnd()
                    selectReturn.subGroupsMap = selectReturnMD
                    return selectReturn
                    
                }
            
            
        }
        
        
}
function packIt(   dev_obj   ){
    /*
     .order what this fn is supposed to fill right now takes objects
     .directions, what its filling it with
        match use match map and match keys and fills values
        gather use ultraObject.selectAll to gather needed values to pack
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
                    
                    console.group(   'an attempt to fill items'   )
                        ultraObject.objInvloved({
                                0:packItSA,
                                1:ultraObject.identifyEO,
                                2:ultraObject.elementFound,
                                3:ultraObject.subGroupsO
                            })
                    console.groupEnd()
                    var packItFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:packItSA.subGroupsMap.length,
                        fn:function(   dev_obj   ){
                            // console.log(    packItFL_1_i.forLoop_0_i,packItSA[packItFL_1_i.forLoop_0_i],packItSA.subGroupsMap[packItFL_1_i.forLoop_0_i],ultraObject.elementFound[packItSA.subGroupsMap[packItFL_1_i.forLoop_0_i].split(' ')[0]]   )
                                //left off here, the subGroupMap is given but we need to make it meaning ful fo this loop
                        },
                        args:{}
                    }
                    ultraObject.forLoop(   packItFL_1_i   )
                    
                    
                }
                
                
                if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                        
                                        
                    packItSA = ultraObject.selectAll({
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
        ultraObject.forLoop(   packItFL_0_i   )
        
    }
    
        
} //fills anything as you tell it, use pack to avoid missspelling
//templates

function preFillForm(   dev_obj   ){
    ultraObject.allTags = dev_obj.allTags
    ultraObject.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    ultraObject.removeOP({rules:'duplicates'})
    ultraObject.identifyE({
                action:'preFill'
            })
    console.group('identified elements')
    ultraObject.objInvloved({
            0:ultraObject.elementFound,
            1:ultraObject.identifyEO,
            2:ultraObject.forLoop,
            3:ultraObject.objInvloved
        })
    console.groupEnd()
    ultraObject.packIt({
        order:ultraObject.identifyEO,
        directions:{
                        0:'gather element',
                        1:'match',
                        length:1
                    },
        matchMap:ultraObject.elementFound
    })
}
    
//to make an xhr request
function h(   dev_obj   ){
            ultraObject.DOM_child[0] = ultraObject.xhttp
            ultraObject.eventName = 'readystatechange'
            ultraObject.addEventListener({xhttp:'true'}) //your item is here
            ultraObject.open({
                    protocol: ultraObject.protocol,
                    xhttp:ultraObject.xhttp,
                    target:ultraObject.target,
                    unk_bool:true
                })
            ultraObject.DOM_child[0].send()
        }

//to add an eventListener
function a(   dev_obj   ){
    ultraObject.eventName = 'click'
    ultraObject.DOM_child[0] = document
    ultraObject.addEventListener()
}

//to remove elements from a page
function b(   dev_obj   ){
    ultraObject.allTags = dev_obj.allTags
    ultraObject.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    ultraObject.removeCN({rules:'all'})
}


function checkingAllValues(   dev_obj   ){
    var checkingAllValuesBOOL = {0:false}
    checkingAllValuesBOOL = ultraObject.severalOr({
                compTo: 'match',
                compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
                boolean:checkingAllValuesBOOL,
                which:0
    })
    console.log(   checkingAllValuesBOOL   )
}

function recurisveForLoop(   dev_obj   ){
                    var recurisveForLoop_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   dev_obj.target   ).length,
                        fn:function(   dev_obj   ){
                            console.log(   recurisveForLoop_0_i.forLoop_0_i,'walk in'   )
                            console.log(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   )
                            var selectCheckpoint =  {}  // when it leave recurison it restore the values
                            
                            
                            if(   ultraObject.isDOMElement(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                
                            }
                            
                            
                            else if(   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                console.group('recursion')
                                    selectCheckpoint.args = recurisveForLoop_0_i.args
                                    selectCheckpoint.forLoop_0_i =  recurisveForLoop_0_i.forLoop_0_i
                                    selectCheckpoint.forLoopLength = recurisveForLoop_0_i.forLoopLength
                                    recurisveForLoop_0_i.args ={
                                        target: Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                    }
                                    recurisveForLoop_0_i.forLoop_0_i = 0
                                    recurisveForLoop_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   ).length
                                    ultraObject.forLoop(   recurisveForLoop_0_i   )
                                console.groupEnd()
                                recurisveForLoop_0_i.args = selectCheckpoint.args
                                recurisveForLoop_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                recurisveForLoop_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                
                            }
                            
                        },
                        args:{target:dev_obj.target}
                    }
                    ultraObject.forLoop(   recurisveForLoop_0_i   )
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
// whats a good rules if parameters are part of the ultraObject or come in as an argument
// if a function naturally passes arguments to a function, dev params must go to the ultraObject

