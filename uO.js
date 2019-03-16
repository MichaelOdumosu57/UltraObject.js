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

// finshed products should be left in the uO

// customization paramters should be passed among microservices

// if another API just needs a primitive, just provide it no need for an iterable Object

//uO is designed to recover from the unexecpted make sure all needed values have defaults the cover all possibilites the microservice may run into

//is {}[] allowed in ES5 ??
// templates
// FL_0_i for loop object in the purpose action
// BOOL for boolean object
// SA for a selectAll object
// O stands for Object for this functionality like thisfn has thisfnO
// itO stands for iterableObject
// MB_0_i stands for memory bank used when its hard to contain needed data inside a nested function
// for the remiidify API
    // not sure if calls should be functions or methods which is easier for uO to survivce
/*
var FL_0_i = {
    forLoop_0_i:0,
    forLoopLength:.length,
    fn:function(   dev_obj   ){
       
    },
    args:{}
uO.forLoop(   FL_0_i   )
}
*/
 
//
/*
function (   dev_obj   ){


    if(   dev_obj !== undefined   ){
    
    }
    
    
}
*/
// __poss stands for possiblity
/*
items that should be placed in the uO
    finished products that are to be used by other API, they shold be stored in an iterableObject and used using iterableObject methods
    functions
    absolute primitive values like Infinity or XMLHTTPRequest
        
 */
function uOReset(   dev_obj   ){
    //I know about ES6 but this is an uO right???
    return {
    eventName:"",           //wants a DOMString event name
    event_obj:undefined,              //wants an Event
    DOM_child:iterableObject(), // wants a DOM element
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
    
    allTags:iterableObject(), // represents serach range for the uO concerning elements
    eCSearch:eCSearch,
    isArray:isArray,
    isObject:isObject,
    isDOMElement:isDOMElement,
    isPrimitive:isPrimitive,
    
    elementFound:iterableObject(), // holds found elements needed by the uO
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
    objectLength:objectLength,
    iterableObject:iterableObject,
    iterify:iterify,
    MB_0_i:iterableObject(), // memory bank for functionality thats needs misc. in several places
    
    sort:sort,
    swap:swap,
    
    misc:iterableObject(), //holds finished products with which we cannot assign a name
    numberSystem:numberSystem
    
    }
}
var uO = uOReset()
function objInvloved(   dev_obj   ){
    // console.log a list of the dev_obj  values to be outputted to the console to help the dev know how is items are in the middle of an API
    
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
         
         
        if(   Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object'   ){
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
            
            return true
            
            
        }
        
        
     }
     
     
     return false
}
function isPrimitive(   dev_obj   ){


    if(   dev_obj !== undefined   ){
        
        
        if(   dev_obj.type !== Object(   dev_obj.type   )   ){
            
            
            return true
        }
        
        
    }
    
    
    return false
}
function eCSearch(   dev_obj   ){
    // .list, desired items
    // .look spot where to look and assert for list, if an object the items should be keys
    // .same  indicator to look at the same set of values
    // .order iterableObject on how to create the numbersystem
    // make eCSST an iterableObject
    // look through innerHTML, innerText, textContext
    // holds the found elements that meet the query in uO.elementFound
    
    
    var eCSearchLook
    var eCSearchList
    var eCSearchAllTags
    var eCSearchSelectTags
    
    
    if(   dev_obj !== undefined   ){
        
        
        eCSearchLook = uO.iterify(   {iterify:dev_obj.look}   )
        eCSearchList = uO.iterify(   {iterify:dev_obj.list}   )


    }
    
    
    if(   uO.allTags.eCSST === undefined   ){
        
        
        uO.allTags.eCSST = uO.allTags.add(   {value:uO.iterableObject()}   )
        uO.allTags[uO.allTags.eCSST].eCSNS = uO.iterableObject()
        
    }
    
    
    console.group(   'items needed to search for elements based on keywords'   )
    uO.objInvloved({
            0:uO.allTags[dev_obj.aTIndex],
            1:eCSearchList,
            2:uO.allTags[uO.allTags.eCSST]
    })
    console.groupEnd()
    eCSearchAllTags = uO.allTags[dev_obj.aTIndex]
    var eCSearchFL_0_i = {
        forLoop_0_i:0,
        forLoopLength: eCSearchList.length,
        fn:function(   dev_obj   ){
            var indexSelect = 0
            
            
            if(   uO.allTags[uO.allTags.eCSST] !== undefined   ){
                //keeps track of number map
                
                if(   uO.allTags[uO.allTags.eCSST].eCSNS !== undefined   ){
                    
                    
                    if(   uO.allTags[uO.allTags.eCSST].eCSNS[eCSearchFL_0_i.forLoop_0_i] !== undefined   ){
                    
                        
                        uO.numberSystem({
                            digits:uO.allTags[uO.allTags.eCSST],
                            operation:'add',
                            amount: 26334554// smallest number I can add to fix the problem -240357 111100112
                        })
                        indexSelect = uO.allTags[uO.allTags.eCSST].eCSNS[eCSearchFL_0_i.forLoop_0_i][0]
                        console.log('it tells me to start here', indexSelect)
                                   
                
                    }
                    
                    
                }
               
                    
            }
            
            
            var eCSearchFL_1_i = {
                forLoop_0_i:indexSelect,
                forLoopLength:eCSearchAllTags.length,
                fn:function(   dev_obj   ){
                    var eCSearchFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:eCSearchLook.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   eCSearchAllTags[eCSearchFL_1_i.forLoop_0_i][eCSearchLook[eCSearchFL_2_i.forLoop_0_i][0]] !== undefined   ){
                                    
                                    
                                if(   eCSearchAllTags[eCSearchFL_1_i.forLoop_0_i][eCSearchLook[eCSearchFL_2_i.forLoop_0_i][0]].indexOf(   eCSearchList[eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1   ){
                                    
                                    
                                    if(   uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i] === undefined   ){
                                        // the start value for the number system
                                        
                                        uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i] = uO.allTags[uO.allTags.eCSST].add(   {value:uO.iterableObject()}   )
                                        var ecsNSI = uO.allTags[uO.allTags.eCSST].eCSNS.add(   {value:uO.iterableObject()}   )
                                        
                                        
                                        if(   eCSearchFL_0_i.forLoop_0_i === 0   ){
                                            
                                            
                                            uO.allTags[uO.allTags.eCSST].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                            
                                            
                                        }
                                        
                                        
                                        else if(   eCSearchFL_0_i.forLoop_0_i !== 0   ){
                                            
                                            
                                            uO.allTags[uO.allTags.eCSST].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i + 2}   )
                                            
                                            
                                        }
                                        
                                        
                                        uO.allTags[uO.allTags.eCSST].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                        uO.allTags[uO.allTags.eCSST].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoopLength}   )
                                        
                                        
                                        }
                                    
                                    
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].item = eCSearchAllTags[eCSearchFL_1_i.forLoop_0_i]
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].query = eCSearchAllTags[eCSearchFL_1_i.forLoop_0_i][eCSearchLook[eCSearchFL_2_i.forLoop_0_i][0]]
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].xMark = eCSearchLook[eCSearchFL_2_i.forLoop_0_i][0]
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].keyword = eCSearchList[eCSearchFL_0_i.forLoop_0_i][0]
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].valuePhrase = eCSearchList[eCSearchFL_0_i.forLoop_0_i][1]
                                    uO.allTags[uO.allTags.eCSST][uO.allTags[uO.allTags.eCSST]['query'+eCSearchFL_0_i.forLoop_0_i]].eCSIndex = eCSearchFL_1_i.forLoop_0_i  // very important to look at the next index
                                    return 'premature'
                                
                                
                                }
                             
                                
                            }
                            
                            
                        },
                        args:{},
                        bubble:'true'
                    }
                    return uO.forLoop(   eCSearchFL_2_i   )
                },
                args:{},
            }
            return uO.forLoop(   eCSearchFL_1_i   )
        },
        args:{},
    }
    uO.forLoop(   eCSearchFL_0_i   )
    
    
    if(   dev_obj.order === undefined   ){
        //this makes the instructions for the number map
        
        if(   uO.allTags[uO.allTags.eCSST].eCSNS.nSM === undefined   ){
            
            
            uO.allTags[uO.allTags.eCSST].eCSNS.nSM = uO.iterableObject()
            var eCSearchFL_3_i = {
                forLoop_0_i:0,
                forLoopLength:uO.allTags[uO.allTags.eCSST].eCSNS.length,
                fn:function(   dev_obj   ){
                    uO.allTags[uO.allTags.eCSST].eCSNS.nSM.add(   {value:eCSearchFL_3_i.forLoop_0_i}   )
                },
                args:{}
            }
            uO.forLoop(   eCSearchFL_3_i   )
            
            
        }
           
        
    }
        
        
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
function numberSystem(   dev_obj   ){
        // .digits the number system itself
        /*
            // .nSM, determines how the number receive digits min is as 1 then 10 then 1000
            
                so forr
                0:1
                1:0
                2:2
                3::3
                
                                  0:{0:current,1:min,2:max}
                the number system 1:{0:current,1:min,2:max}
                                  2:{0:current,1:min,2:max}
                                  3:{0:current,1:min,2:max}
                                  
                if the fn receives add 1 nS[1].current will increase by one
                when ns[1].current hits the max then ns[0].current increases by one and
                    ns[1].current returns to zero
                
            
            // logic
            // once 0 hits max then 1   ... once 1 hits max then 2
            //.further_checks if the case causes a break in the number,
                // !true if resulting number is valid in the number system
                // true if resulting number is not valid in the number system
            // 10 - 1 is 9 so in our decimal system 10 is max and 10 is min but if the min is 201 and the max is 299, -1 can only be one it will be the min here since 0 + 10 = 10 and not 9 201 + [digit amount] = 201,202
        //each digit is an iterableObject
        // 0 the current Digit
        // 1 the min digit for the digits
        // 2 the max digit for the digit
        //for min it needs to be tested
            // minus 1 how it will react
                //when its time for the NS to borrow, the first digit must be 1 less than its max
            // when the subtraction or add negative does not make the current less thean the min
            // the index at the digit
            // when it asks to borrow once
            // when it borrows several times
            //when it hits the NS  0
            
        // when working on max ask these questions
            //what  happens when i am at the current val max how do it increase the digits properly
                //works properly
            // when the sum is greater than the max how do I allocate to increase the digits properly
                 that is working properly, you have to subtract the length down one to one before the min and do the addition,
                    you also have to increase the next digit by one
                
            // when the sum is less than the max do I handle it simply
                //yes the first conditional does the math, checks if there is a [3] fo the NS for the next digit and returns 'premature'
            //do i interefere with the functionality meant for other circumstances
                //for the min make the dev_amount negative so it wont break bounds
        */
        // .operation
            /*
                what the number system is needed to do
                add, will be used for addition and subtract of decimal based integer values to the number system
                    it needs an .amount as an int
                validate, make sure the resulting number obeys the NS laws
                
            */
        // .amount
            /*
                if the operation is add, then this is the amount to add, negative int to subtract
            */
        console.group(   'providing the mechanism for the number system'   )
        
        
        if(   dev_obj.operation === 'validate'   ){
                    
                            
            var numberSystemFL_1_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    
                    
                    if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0] < dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][1] || dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0] >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][2]   ){
                     
                     
                        throw(   'invalid number for the numberSystem'   )
                        
                        
                    }
                    
                    
                },
                args:{
                        digits:dev_obj.digits,
                    }
            }
            uO.forLoop(   numberSystemFL_1_i   )
                        
            
        }
        
        
        if(   dev_obj.operation === 'add' ){
            //you might not supposed to be chaning the value of dev_obj.amount becuase wher it leaves here it calls its its original amount but this should work properly
            
                                    
            var numberSystemFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    
                                        
                    if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount  >=  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1] && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0]  + dev_obj.amount  <  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2] && dev_obj.digits.eCSNS.nSM.further_checks !== 'true'   ){
                        // if the operation fits and the algorithm does not have to check for more options in further_checks
                        
                        
                        if(   numberSystemFL_0_i.forLoop_0_i === 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i + 1]][3] === undefined   ){
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += dev_obj.amount
                            // at this point it was not going to break the number system and regular addition needed to be perofrmed
                            
                        }
                        
                        
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                        dev_obj.digits.eCSNS.nSM.further_checks ='false'
                        return 'premature'
                        
                        
                    }
                    
                    
                    else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount  <  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]   ){
                        //if the operation makes the digit less than the min make max and tell the next to subtract 1 max sure the amount does not break the numberSystem at this digit change the loop again
                        
                            if(   numberSystemFL_0_i.forLoop_0_i === numberSystemFL_0_i.forLoopLength - 1   ){
                                
                                
                                throw(' the operation caused the number to be less than the NS version of 0, use a smaller number. this is a memory leak fix now')
                                //if the head digit is less than the min, the number is less than the smallest number
                                
                            }
                                                                                    
                                                                                
                            if(   numberSystemFL_0_i.forLoop_0_i !== 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] !== undefined  ){
                                //resets the digit only once so we can know the true form and borrow form the next digit
                                
                                dev_obj.amount =  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] * -1
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] +=  Math.abs(   dev_obj.amount   )// or change how you increment its 3 when the FL_0_i was less than one
                                //allows to start from sratch but this must be called only once
                                
                            }
                                                                                       
                                
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]  - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]
                            // because the max is 1 before the max
                            // were going to borrow form the next digit until were big enough for subtraction
                            
                            if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] - Math.abs(   dev_obj.amount   ) >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]   ){
                                
                                
                                
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -= Math.abs(   dev_obj.amount   )
                                // deals with an  absolute value problem coming from negative ##
                                dev_obj.amount -= dev_obj.amount
                                // so we do not have to loop
                                
                            }
                                                                                    
                                                        
                            if(   numberSystemFL_0_i.forLoop_0_i +1 <=  numberSystemFL_0_i.forLoopLength-1   ){
                                
                                
                                if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] === undefined   ){
                                        
                                        
                                      dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]].add(   {value:0}   )
                                      
                                      
                                }
                                
                                
                                
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] += 1
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][0] -= 1
                                // this will be the amount for the next digit
                                
                            }
                            
                            
                            dev_obj.digits.eCSNS.nSM.further_checks = 'true'
                            // console.log(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]]   )
                            numberSystemFL_0_i.forLoop_0_i -= 1
                            
                            

                        
                                                
                    }
                    
                    
                    else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]   ){
                        //if the operation makes the digit greater than the max
                        
                        if(   numberSystemFL_0_i.forLoop_0_i === numberSystemFL_0_i.forLoopLength - 1   ){
                            
                            
                            throw(' the operation caused the number to be greater than the NS max use a smaller number. this is a memory leak fix now')
                            //if the head digit is 1 above the max off the conditional to get in here, throw an error
                            
                        }
                        
                    
                        if(   numberSystemFL_0_i.forLoop_0_i !== 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] !== undefined  ){
                            //resets the digit only once so we can know the true form and borrow form the next digit
                            
                            dev_obj.amount = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -=  dev_obj.amount
                            //allows to start from sratch but this must be called only once
                            
                        }
                        
                        
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]  - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]
                        
                        
                        if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + Math.abs(   dev_obj.amount   ) < dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]   ){
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += Math.abs(   dev_obj.amount   )
                            // deals with an  absolute value problem coming from negative ##
                            dev_obj.amount -= dev_obj.amount
                            // so we do not have to loop
                            
                            
                        }
                        
                        
                        if(   numberSystemFL_0_i.forLoop_0_i +1 <=  numberSystemFL_0_i.forLoopLength-1   ){
                                
                                
                            if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] === undefined   ){
                                    
                                    
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]].add(   {value:0}   )
                                  
                                  
                            }
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] += 1
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][0] += 1
                            // this will be the amount for the next digit
                            
                            

                                
                                
                        }
                        
                        
                        dev_obj.digits.eCSNS.nSM.further_checks = 'true'
                        numberSystemFL_0_i.forLoop_0_i -= 1
                        
                        
                    }
                                        
                                        
                    
                    
                    else{

                         
                         dev_obj.digits.eCSNS.nSM.further_checks ='false'

                         
                    }
                    
                    
                    
                },
                args:{
                        digits:dev_obj.digits,
                        amount:dev_obj.amount
                    }
            }
            uO.forLoop(   numberSystemFL_0_i   )
            // if it somehow how leaves the number system
            if(   dev_obj.digits.eCSNS.nSM.further_checks !== 'true'  ){
                // dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0]
            }
            // uO.objInvloved({
            //     0:dev_obj.digits.eCSNS,
            //     1:dev_obj.digits.eCSNS.nSM,
            //     2:dev_obj.operation
            // })
            
                        
        }
        
        
        var NS_iter = []
        var debugFL_0_i = {
            forLoop_0_i:0,
            forLoopLength:dev_obj.digits.eCSNS.nSM.length,
            fn:function(   dev_obj   ){
                NS_iter.push(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[debugFL_0_i.forLoop_0_i]][0]  )
            },
            args:{
                    digits:dev_obj.digits
                }
        }
        uO.forLoop(   debugFL_0_i   )
        console.log('current number',NS_iter)
        
        console.groupEnd()
    
}//makes a customized number system for the needs of the eCSearch multiple testing required by prefill form
function removeCN(   dev_obj   ){// removes specified childNodes from the DOM
    
    
    
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
    //.forLoop_0_i the iteration
    //.forLoopLength the length to iterate to
    //.fn what to do
    // .args, since they are out scroped this is a way to access the args
    // .bubble 'true' or 'false' indicating whether to send the break back up nested
    
    var forLoopbreak = false
    if(   dev_obj !== undefined   ){

        
        for(   dev_obj.forLoop_0_i; dev_obj.forLoop_0_i !== dev_obj.forLoopLength; dev_obj.forLoop_0_i++   ){ // change this to be a fuctiont that allow the dev to do anything here
                // console.log(   dev_obj.forLoop_0_i   )
                forLoopbreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                
                                
                if(   forLoopbreak === 'true' || forLoopbreak === 'premature'  ){
                    // premature  provided when you dont want to bubble up the value just break
                    
                    if(   dev_obj.bubble === 'true'   ){
                        
                        
                        return forLoopbreak
                        
                        
                    }
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
                
                                    
                    if(   dev_obj.how === undefined   ){
                                                            
                        
                        if(   dev_obj.compTo === dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i]   ){
                            
                            
                            dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                            severalOrReturn = dev_obj.boolean // just in case  uO can't re-reference the object back
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
                                severalOrReturn = dev_obj.boolean // just in case  uO can't re-reference the object back
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
        uO.forLoop(   severalOrFL_O_i   )
        return severalOrReturn
    }
    
    
}// if you have several OR comparisons for the same object use it here
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
function objectLength(   dev_obj   ){ // finds object lenghts
        //.val the object itself
        // .getLen function descrbing how to get the length
        // .result if function reutrns it equal increase the length by one
        dev_obj.val.length = 0
        var objectLengthFL_0_i = {
            forLoop_0_i:0,
            forLoopLength:Object.keys(   dev_obj.val   ).length,
            fn:function(   dev_obj   ){
                
                 
                if(   dev_obj.getLen(   {val:dev_obj.val,   index:objectLengthFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
                                        
                    
                    dev_obj.val.length += 1
                    
                    
                }
                
                
            },
            args:{
                val:dev_obj.val,
                getLen:dev_obj.getLen,
                result:dev_obj.result
                }
        }
        uO.forLoop(   objectLengthFL_0_i   )
    
}
function iterableObject(   dev_obj   ){
    //. value the actual item your are adding to the object
    
     var iterableObjectO = {
        length:0,
        add:function(   dev_obj   ){// returns the index that it was added to an object
                iterableObjectO[iterableObjectO.length] = dev_obj.value
                iterableObjectO.length += 1
                return iterableObjectO.length -1
            },// adds a value and retuns its place in the array
        minus:function(   dev_obj   ){
            //.value value to remove
            //.index remove and index
            
            if(   dev_obj.index !== undefined   ){
                
                
                delete iterableObjectO[iterableObjectO_BOOL.spot]
                iterableObjectO.resetLength()// resets the length
                var iterableObjectFL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:iterableObjectO.length,
                    fn:function(   dev_obj   ){
                        
                        
                        if(   iterableObjectTDI <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.length  ){ // at that point something must be missing
                            
                            
                            iterableObjectO[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]
                            delete iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                            
                            
                        }
                    },
                    args:{}
                }
                uO.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                
                
            }
            
            
            if(   dev_obj.value !== undefined   ){
                
                
                var iterableObjectO_BOOL = {0:false}
                iterableObjectO_BOOL = uO.severalOr({
                            compTo: dev_obj.value,
                            compAgn: iterableObjectO,
                            boolean:iterableObjectO_BOOL,
                            which:0
                })
                
                
                if(   iterableObjectO_BOOL[0]   ){
                    
                    
                    var iterableObjectTDI = iterableObjectO_BOOL.spot // index to remove
                    delete iterableObjectO[iterableObjectTDI]
                    iterableObjectO.resetLength()
                    var iterableObjectFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:iterableObjectO.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.length  ){ // at that point something must be missing
                                
                                
                                iterableObjectO[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1]
                                delete iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                                
                                
                            }
                            
                            
                        },
                        args:{}
                    }
                    uO.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                    
                    
                    if(    dev_obj.correct === 'false'   ){
                        
                        
                        //leave the index alone
                        
                        
                    }

                }
                
                
            }
            
            
        },// removes an item from an array if its there
        resetLength:function(   dev_obj   ){
            uO.objectLength({
                    val:iterableObjectO,
                    getLen:function(   dev_obj   ){
                        
                        
                        if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                            
                            
                            return 'true'
                            
                            
                        }
                        
                        
                    },
                    result:'true'
            })
        }
     }
     return iterableObjectO
} //retuns or converts an object with which you can easily iterate but this is an array accroding to chrome 72
function iterify(   dev_obj   ){
    //. iterify the item to turn into an iterableObject

    if(   dev_obj !== undefined   ){
        
        
        var iterableO = uO.iterableObject()
        
                
        if(   uO.isArray(   {type:dev_obj.iterify}   )   ){
            
            
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.iterify.length,
                fn:function(   dev_obj   ){
                    iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                },
                args:{iterify:dev_obj.iterify}
            }
            uO.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        else if(   uO.isObject(   {type:dev_obj.iterify}   )   ){
            //places the key and value inside every index , So 0,1 represents the key and 1 the value
            
            var iterableArr = Object.entries(   dev_obj.iterify   )
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:iterableArr.length,
                fn:function(   dev_obj   ){
                    iterableO.add({
                        value:uO.iterify({iterify:iterableArr[iterableFL_0_i.forLoop_0_i]})
                    })
                },
                args:{iterify:dev_obj.iterify}
            }
            uO.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        else if(   uO.isPrimitive(   {type:dev_obj.iterify}   )   ){
            //FIX ME this method does not exist yet
            
            var iterableFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.iterify.length,
                fn:function(   dev_obj   ){
                    iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                },
                args:{iterify:dev_obj.iterify}
            }
            uO.forLoop(   iterableFL_0_i   )
            
            
        }
        
        
        return iterableO
        
                        
    }
    
    
}//turns anything into an iterableObject
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
    // uO.subGroupsO , keeps a list of all subgroup maps
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
    
    if(   dev_obj !== undefined   ){
        
        
        var subGroupsBOOL = {0:false}
        var subGroupsSeperator = ' ' // how to seperate the items
        
        if(   dev_obj.map.MB_0_i === undefined   ){
            
            
            dev_obj.map.MB_0_i = uO.iterableObject()
            dev_obj.map.MB_0_i.globalMB = uO.MB_0_i.add(   {value:dev_obj.map.MB_0_i}   ) //if problem get the answer for a variable and assign it back
            dev_obj.map.MB_0_i.seperator = ' ' // how fn makes a path to a child element
            dev_obj.map.MB_0_i.groupHeadLength = uO.max // for the length of the path representing the head group
            subGroupsSeperator =  dev_obj.map.MB_0_i.seperator
            
        }
        
        
        subGroupsBOOL = uO.severalOr({
                compTo: dev_obj.map,
                compAgn: uO.subGroupsO,
                boolean:subGroupsBOOL,
                which:0
        })
        
        
        if(   !subGroupsBOOL[0]   ){
            uO.subGroupsO[uO.subGroupsO.length] = dev_obj.map
            uO.subGroupsO.length += 1
            subGroupsBOOL = uO.severalOr({
                    compTo: dev_obj.map,
                    compAgn: uO.subGroupsO,
                    boolean:subGroupsBOOL,
                    which:0
            })
            //this is done so it can add the first item
        }
        
        
        if(   dev_obj.nextItem === 'complete'   ){
            //here the map is recreated based on the assumption
            //gets rid of bad results
            
            
            
            console.group(   'complete'   )
                uO.subGroupsO[subGroupsBOOL.spot].length = 0
                var subGroupsFL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:Object.keys(   uO.subGroupsO[subGroupsBOOL.spot]   ).length,
                    fn:function(   dev_obj   ){
                        
                         
                        if(   !isNaN(Object.keys(   uO.subGroupsO[subGroupsBOOL.spot]   )[subGroupsFL_0_i.forLoop_0_i  ])   ){
                            
                            
                            uO.subGroupsO[subGroupsBOOL.spot].length += 1
                            
                            
                        }
                    },
                    args:{}
                }
                uO.forLoop(   subGroupsFL_0_i   )
                dev_obj.val = ''
                var subGroupsBOOL_1_i = {0:false}
                var subGroupsFL_1_i ={
                    forLoop_0_i:0,
                    forLoopLength:Object.keys(   uO.subGroupsO[subGroupsBOOL.spot].ending   ).length,
                    fn:function(   dev_obj   ){
                        console.log
                        subGroupsBOOL_1_i = uO.severalOr({
                            compTo: uO.subGroupsO[subGroupsBOOL.spot].ending[subGroupsFL_1_i.forLoop_0_i],
                            compAgn: uO.subGroupsO[subGroupsBOOL.spot],
                            boolean:subGroupsBOOL_1_i,
                            which:0,
                            how:function(   dev_obj   ){
                                
                                
                                if(   dev_obj.compAgnI !== undefined   ){
                                    
                                                                        
                                    if(   dev_obj.compAgnI.indexOf(   dev_obj.compTo   ) === -1   ){
                                        
                                        
                                        delete uO.subGroupsO[subGroupsBOOL.spot][dev_obj.index]
                                        
                                        
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
                uO.forLoop(   subGroupsFL_1_i   )
                console.group(   'proper length'   )
                    uO.objectLength({
                        val:uO.subGroupsO[subGroupsBOOL.spot],
                        getLen:function(   dev_obj   ){
                            
                            
                            if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                        })
                console.groupEnd()
                uO.objInvloved({
                            0:dev_obj.map.ending,
                            1:uO.subGroupsO[subGroupsBOOL.spot],
                            2:dev_obj.map.MB_0_i
                        })
            console.groupEnd()
            
                        
        }
        
        
        else if(   subGroupsBOOL[0]   ){
            
            
            if(   uO.subGroupsO[subGroupsBOOL.spot].length === 0 &&  uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length] === undefined   ){
                
                
                uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
            }
            
            
            uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length] += dev_obj.val + subGroupsSeperator
            //hopefully ' ' is a gr8 sepereator
            
            if(   dev_obj.nextItem === 'true'   ){


                dev_obj.map.MB_0_i.lastAddedIndex = dev_obj.map.MB_0_i.add(   {value:uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length].split(   subGroupsSeperator   )}   )
                
                
                if(   dev_obj.map.MB_0_i.groupHeadLength <=  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                    
                    dev_obj.map.MB_0_i.groupHead = dev_obj.map.MB_0_i.lastAddedIndex
                    dev_obj.map.MB_0_i.groupHeadLength = dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length
                    
                    
                }
                
                
                else if(   dev_obj.map.MB_0_i.groupHeadLength >  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                    
                    dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].unshift.apply(   dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex],dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.groupHead].slice(   0,dev_obj.map.MB_0_i.groupHeadLength -  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   )   )
                   // takes the path of coming from sub children and makes it of parents
                    
                    uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length] =  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].join(   subGroupsSeperator   )
                    
                }
                uO.subGroupsO[subGroupsBOOL.spot].length += 1
                uO.subGroupsO[subGroupsBOOL.spot][uO.subGroupsO[subGroupsBOOL.spot].length] = ''
                
                
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
                selectAllBOOL = uO.severalOr({
                            compTo: 'element',
                            compAgn: dev_obj.typeOnly,
                            boolean:selectAllBOOL,
                            which:0
                })
                if(   uO.isObject({type:dev_obj.target}) && selectAllBOOL[0]   ){
                    
                    
                    var selectReturn = {}
                    var selectReturnMD = {length:0,str:'',ending:{0:'element'}}//selectReturnMetaData contains grouping information about the .target
                    var selectAllFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   dev_obj.target   ).length,
                        fn:function(   dev_obj   ){
                            console.log(   selectAllFL_0_i.forLoop_0_i,'walk in'   )
                            console.log(   Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   )
                            var selectCheckpoint = {}  // when it leave recurison it restore the values
                            uO.subGroups({
                                    map:selectReturnMD,
                                    val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                })
                            
                            
                            if(   uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                uO.subGroups({
                                        map:selectReturnMD,
                                        val:'element',
                                        nextItem:'true',
                                    })
                                    
                                
                            }
                            
                            
                            else if(   uO.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                console.group('recursion')
                                    selectCheckpoint.args = selectAllFL_0_i.args
                                    selectCheckpoint.forLoop_0_i =  selectAllFL_0_i.forLoop_0_i
                                    selectCheckpoint.forLoopLength = selectAllFL_0_i.forLoopLength
                                    selectAllFL_0_i.args ={
                                        target: Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    }
                                    selectAllFL_0_i.forLoop_0_i = 0
                                    selectAllFL_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   ).length
                                    uO.forLoop(   selectAllFL_0_i   )
                                console.groupEnd()
                                selectAllFL_0_i.args = selectCheckpoint.args
                                selectAllFL_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                selectAllFL_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                selectCheckpoint = null
                            }
                            
                        },
                        args:{target:dev_obj.target}
                    }
                    uO.forLoop(   selectAllFL_0_i   )
                    uO.subGroups({
                            map:selectReturnMD,
                            nextItem:'complete',
                        })
                    console.group(   'grabbing the chosen elements from the object'   )
                        uO.objInvloved({
                                0:selectReturn,
                                1:uO.identifyEO,
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
                    
                    console.group(   'an attempt to fill items'   )
                        uO.objInvloved({
                                0:packItSA,
                                1:uO.identifyEO,
                                2:uO.elementFound,
                                3:uO.subGroupsO
                            })
                    console.groupEnd()
                    var packItFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:packItSA.subGroupsMap.length,
                        fn:function(   dev_obj   ){
                            console.log(   packItSA[packItFL_1_i.forLoop_0_i],packItSA.subGroupsMap.MB_0_i[packItFL_1_i.forLoop_0_i][0],uO.elementFound[packItSA.subGroupsMap.MB_0_i[packItFL_1_i.forLoop_0_i][0]   ].keyword   )
                            
                            packItSA[packItFL_1_i.forLoop_0_i].value = uO.elementFound[packItSA.subGroupsMap.MB_0_i[packItFL_1_i.forLoop_0_i][0]   ].valuePhrase
                            
                        },
                        args:{}
                    }
                    uO.forLoop(   packItFL_1_i   )
                    
                    
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
function sort(   dev_obj   ){
    //.target, the target we are sorting
    //. algorithm the sorting alogrithm to use
        //. bubble use the bubble sort algorithm
    //.compare logic a function used to sort
        //.valu represnets target from aboue
        // .index index in the for loop
    //. result if the reutrn value from .compare  === result perform the sort operation
        
    var sortO  // soritng object that helps fn sort
    var sortFlagO = uO.iterableObject()  //indicates if the sort is finished
    
    var sortFL_0_i = {
        forLoop_0_i:0,
        forLoopLength:dev_obj.target.length-1,
        fn:function(   dev_obj   ){
            
            
            if(   dev_obj !== undefined   ){
                
                
                if(   dev_obj.algorithm  === 'bubble'   ){
                    
                            	        
        	        if(   dev_obj.compare(   {val:dev_obj.target,   index:sortFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
        	            
        	                sortFlagO[sortFlagO.bubble]  = 'false'
        	                sortFL_0_i.itO.swapO = sortFL_0_i.itO.add(   {value:uO.iterableObject()}   )
        	                sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
        	                sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
        	                sortO = uO.swap({
        	                        swapO:sortFL_0_i.itO[sortFL_0_i.itO.swapO],
        	                        instruct:sortFL_0_i.itO[sortFL_0_i.itO.instruct],
        	                        action:'default'
        	                    })
        	                sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
        	                sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
        	                dev_obj.target[sortFL_0_i.forLoop_0_i] = sortO[0]
        	                dev_obj.target[sortFL_0_i.forLoop_0_i+1] = sortO[1]
        	                
        	                
        	            }
        	        
        	        
                }
        	    
        	    
            }
            
            
        },
        args:{
                target:dev_obj.target,
                algorithm:dev_obj.algorithm,
                compare:dev_obj.compare,
                result:dev_obj.result
            },
        itO:uO.iterableObject()
    }
    
    
    if(   dev_obj.algorithm  === 'bubble'   ){
        
            sortFlagO.bubble = sortFlagO.add(   {value:'false'}   )
    	    sortFL_0_i.itO.instruct = sortFL_0_i.itO.add(   {value:uO.iterableObject()}   )
    	    sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:1}   )
    	    sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:0}   )
            while(   sortFlagO[sortFlagO.bubble] !== 'true'){
            
                sortFlagO[sortFlagO.bubble]  = 'true'
                uO.forLoop(   sortFL_0_i   )
            
            
            }
    }
    
    
    return dev_obj.target
}//you kneew uO would need this one
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
                
                
                var swapO_0_i = uO.iterableObject()
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
                uO.forLoop(   swapFL_0_i   )
                return swapO_0_i
                
                
            }
            
        }
        
        
    }// when you need values swpped
//templates


function preFillForm(   dev_obj   ){
    //findings
        //i find that form items are not dependent on the number of children, the form can have children than containing the input
    preFillFormO = uO.iterableObject()
    var preFillFormFL_0_i = {
        forLoop_0_i:0,
        forLoopLength:dev_obj.allTags.length,
        fn:function(   dev_obj   ){
            preFillFormO.add(   {value:dev_obj.allTags[preFillFormFL_0_i.forLoop_0_i]}   )
        },
        args:{allTags:dev_obj.allTags}
    }
    uO.forLoop(   preFillFormFL_0_i   )
    dev_obj.allTags = uO.sort({
            target: preFillFormO,
            algorithm:'bubble',
            compare:function(   dev_obj   ){
                
                
                if(   dev_obj.val[dev_obj.index].childElementCount > dev_obj.val[dev_obj.index+ 1].childElementCount    ){
                    
                    
                    return 'true'
                    
                    
                }
            },
            result:'true'
            
    })
    uO.allTags.pFFATI = uO.allTags.add(   {value:preFillFormO}   ) //number were all tags is located in the uO
    console.group(   'sorting items by least children'   )
    uO.objInvloved({
            // 0:preFillFormO,
        })
    console.groupEnd()
    uO.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
        aTIndex: uO.allTags.pFFATI
    })
    uO.eCSearch({
        list:{
                    'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                    'Website':'https://ualbanyasist.github.io/',
                    'How did you hear about this job?':'Linkedin',
                    'Phone': '$80,000'},
        look:{ 'innerHTML':null,'innerText':null,'textContent':null},
        aTIndex: uO.allTags.pFFATI
    })
    console.group(   'at this point the uO has meaningful values for all arguments from the init fn'   )
    uO.objInvloved({
            // 0:preFillFormO,
        })
    console.groupEnd()
    uO.removeOP({rules:'duplicates'})
    throw('e') //left off here properly organized
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
                        0:'gather element',
                        1:'match',
                        length:1
                    },
        matchMap:uO.elementFound
    })
}

            preFillForm({
                // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
                list:{
                    'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                    'Website':'https://ualbanyasist.github.io/',
                    'How did you hear about this job?':'Linkedin',
                    'Phone': '$80,000'},
                look:{ 'innerHTML':null,'innerText':null,'textContent':null}
            })
    
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
    uO.eventName = dev_obj.eventName || 'click'
    uO.DOM_child[0] = dev_obj.DOMchild || document
    uO.addEventListener()
    // you can place a function here
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

function recurisveForLoop(   dev_obj   ){
                    var recurisveForLoop_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:Object.keys(   dev_obj.target   ).length,
                        fn:function(   dev_obj   ){
                            console.log(   recurisveForLoop_0_i.forLoop_0_i,'walk in'   )
                            console.log(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   )
                            var selectCheckpoint =  {}  // when it leave recurison it restore the values
                            
                            
                            if(   uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                
                            }
                            
                            
                            else if(   uO.isObject(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                console.group('recursion')
                                    selectCheckpoint.args = recurisveForLoop_0_i.args
                                    selectCheckpoint.forLoop_0_i =  recurisveForLoop_0_i.forLoop_0_i
                                    selectCheckpoint.forLoopLength = recurisveForLoop_0_i.forLoopLength
                                    recurisveForLoop_0_i.args ={
                                        target: Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                    }
                                    recurisveForLoop_0_i.forLoop_0_i = 0
                                    recurisveForLoop_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   ).length
                                    uO.forLoop(   recurisveForLoop_0_i   )
                                console.groupEnd()
                                recurisveForLoop_0_i.args = selectCheckpoint.args
                                recurisveForLoop_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                recurisveForLoop_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                
                            }
                            
                        },
                        args:{target:dev_obj.target}
                    }
                    uO.forLoop(   recurisveForLoop_0_i   )
    }


// whats a good rules if parameters are part of the uO or come in as an argument
// if a function naturally passes arguments to a function, dev params must go to the uO

function increaseObjectLengthByNumKeys(   dev_obj   ){
uO.objectLength({
                        val:dev_obj.object,
                        getLen:function(   dev_obj   ){
                            
                            
                            if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                        })
    }
    
function bubbleSort(   dev_obj   ){
dev_obj.allTags = uO.sort({
            target: arrayToBubbleSort,
            algorithm:'bubble',
            compare:function(   dev_obj   ){
                
                
                if(   dev_obj.val[dev_obj.index].value > dev_obj.val[dev_obj.index+ 1].value    ){
                    
                    
                    return 'true'
                    
                    
                }
            },
            result:'true'
            
        })
}


function deleteDocument(   dev_obj   ){
var FL_0_i = {
                forLoop_0_i:0,
                forLoopLength:document.all.length,
                fn:function(   dev_obj   ){
                    delete document.all[FL_0_i.forLoop_0_i]
                },
                args:{}
            }
            uO.forLoop(   FL_0_i   )
            
            
    deleteDocumentO = uO.iterableObject()
    var deleteDocumentFL_0_i = {
        forLoop_0_i:0,
        forLoopLength:document.all.length,
        fn:function(   dev_obj   ){
            preFillFormO.add(   {value:document.all[preFillFormFL_0_i.forLoop_0_i]}   )
        },
        args:{allTags:dev_obj.allTags}
    }
    uO.forLoop(   preFillFormFL_0_i   )
}
