            function wait(   ms   ){
               var start = new Date().getTime();
               var end = start;
               while(   end < start + ms   ) {
                 end = new Date().getTime();
               }
            }
    // if node use exports or figure how to get external modules in here
    
    //when using uO rmbr all your modules are mesed up replace uO with uOt
    
    // an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
    // for meaningful use, every property purpose is easily availble to each other and you can have several of them
    
    //if your find problems search PROBLEMS to see whats going on
    
    // finshed products should be left in the uO
    
    // customization paramters should be passed among microservices
    
    // if another API just needs a primitive, just provide it no need for an iterable Object
    
    //uO is designed to recover from the unexecpted make sure all needed values have defaults the cover all possibilites the microservice may run into
    
    //for every single function call its arogumetns must be held in uO.args when the function dies or its args are not needed,
    //they are taken from their place in the args. they are each put into another itO with an index just in case of recusion
        // when  an item from args is needed, it is put into a scope and added to a meanigunful property representation name in the uO,
        //there will be a function implemented if the developer needs a copy or changes can reflect in the args
        
    //var const and let in function must only represent the index of and item coming from uO.scope
    
    //to access items you must get it though the index in the scope
    // if a outer function needs a scope location from the inner function which started in the inner function use, .itO.abelast which is an itO in order to pull it out
    
    //use [   item   ], where item is a whole compact piece of code not an iteration or property
    //use  (   item   ) always unless there is nothing there or its multiline
    //function temp items should not be in the target object but  in the object the function uses to manipulate the target object. unless the fn does not use a temp object
    /*
        ex
        obj
        fn increase(   dev_obj   ){
            ...
                var a = uO.(...)
                a shoud go on dev_obj not in the actual object because oce the object is made the scaffolding should be thrown  away
            ...
        }
    */
    // all functions should perform comparision one at the time this allows for more
    // the inside fn adds meaning the outside decides whether to take them out
        
    
    //is {}[] allowed in ES5 ??
    //should items be accessed through the uO because mabye sometimes we cannot call it as a method
        //should we stick to property access, since its easier fro everyone to have access
    // templates
    // FL_0_i for loop object in the purpose action
    // BOOL for boolean object
    // SA for a selectAll object
    // O stands for Object for this functionality like thisfn has thisfnO
    // itO stands for iterableObject
    // MB_0_i stands for memory bank used when its hard to contain needed data inside a nested function. its also used as the brain of the API to access every related to its project purpose
    /* [function abbrevation][template] for a naming conveation of items in your API
        for nested function
        [function abbrevation]_[[function abbrevation]...][template]
        when adding the args to uO.args
        [function full]_[[function full]...]_dev_obj
    */
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
    /*
        var checkingAllValuesBOOL = {0:false}
        checkingAllValuesBOOL = uO.severalOr({
            compTo: 'match',
            compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
            boolean:checkingAllValuesBOOL,
            which:0
        })
        console.log(   checkingAllValuesBOOL   )
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
        all objects with a specific purpose should be stored in seperate indexes in an itO
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
        passing_args: function(   dev_obj   ){
            console.log(arguments)
        }, // use this to see parameters from functions that have something to offer
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
        selectTags:iterableObject(), // represents a set of chosen items
        eCSearch:eCSearch,
        
        isArray:isArray,
        isObject:isObject,
        isDOMElement:isDOMElement,
        isPrimitive:isPrimitive,
        isInt:isInt,
        isNodeList:isNodeList,
        isitO:isitO,
        isString:isString,
        
        elementFound:iterableObject(), // holds found elements needed by the uO
        removeCN:removeCN,
        removeOP:removeOP,
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
        scope:iterableObject(),// makes it very easy for functions to access items made for a project purpose, once done it must be emptied
        //if a scope starts in a function it must end in a function
        // to access  uO.allTags[uO.scope[pFFATI_0_i]]
        args:iterableObject(), // representing the dev_obj from the project purose
    
        sort:sort,
        swap:swap,
        partialMatch:partialMatch,
        
        misc:iterableObject(), //holds finished products with which we cannot assign a name
        numberSystem:numberSystem,
        reqBody:reqBody

        
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
            
            
            
            uO.DOM_child[0].addEventListener(   uO.eventName,fn   )
    } //  dev_obj.fn is used for 1st party dev to add their custom function to the listener dev_obj.xhttp is for xhr
    function xhttp(   dev_obj   ){
            
            
            if(   typeof(   XMLHttpRequest   ) !== 'undefined'   ){
                
                
                if(   dev_obj === undefined   ){
                    
                    
                    var xhttp_0_i = new XMLHttpRequest()
                    return xhttp_0_i
                    
                    
                }
                
                
                else if(   dev_obj !== undefined   ){
                    
                    
                    var xhttp_0_i = new XMLHttpRequest()
                    return xhttp_0_i
                    
                    
                }
                
                
            }
            
            
            
    } // creates an xhr obj
    function open(   dev_obj   ){
        
        dev_obj.xhttp.open(   dev_obj.protocol,dev_obj.target,dev_obj.unk_bool   )
    } // gets in contact with the host
    function xhttpreadystatechange(){
        console.log(    this   )
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
             
             
            if(   !Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object' && dev_obj.type.isitO === undefined   ){
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
    function isInt(   dev_obj   ){
        
        
        if(   dev_obj !== undefined   ){
            //hope IIFE are in ES5
            
            if(   Number.isInteger(dev_obj.type) || (function() {
              return typeof dev_obj.type === 'number' &&
                isFinite(dev_obj.type) &&
                Math.floor(dev_obj.type) === dev_obj.type;
            })()   ){
                
                
                return 'true'
                
                
            }
            
            
            else{
                
                return 'false'
                
                }
        
        
        }
        
        
    }
    function isNodeList(   dev_obj   ){
    
    
        if(   dev_obj !== undefined   ){
            
            
            if(   (   dev_obj.type.toString() || dev_obj.type.toLocaleString() || 'str'   ) === '[object NodeList]'   ){
                // if a polyfill is needed use severalOr to get a string
                
                return true
                
                
            }
            
            
            else if(   (   dev_obj.type.toString() || dev_obj.type.toLocaleString() || 'str'   ) !== '[object NodeList]'   ){
                
                
                return false
                
                
            }
            
        }
        
        
    }
    function isitO(   dev_obj   ){
        
        
        if(   dev_obj.type !== undefined   ){
            
            
            if(   dev_obj.type.isitO !== undefined && dev_obj.type.isitO() === 'true'   ){
                
                
                return true
                
                
            }
            
            
        }
        
        
        return false
    }
    function isString(   dev_obj   ){
        //should check for string object and string primitive
        //. type item in questions
        
        if(   dev_obj !== undefined   ){
            
             
            if(   typeof dev_obj.type === 'string'   ){
                
                
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
        
        var eCSearch_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   )
        
        
        if(   dev_obj.sT === undefined   ){
            
            
            var eCSSelectTags_0_i = uO.scope.add(   {value:uO.selectTags.add(   {value:uO.iterableObject()}   )}   )
            uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS = uO.iterableObject()
            uO.selectTags.abelast.add(   {value:uO.scope[eCSSelectTags_0_i]}   )
            
        }
        
        
        else if(    uO.isInt(   {type:dev_obj.sT}   )   ){
            
            
            var eCSSelectTags_0_i = dev_obj.sT
            
            
        }
        
            
        console.group(   'items needed to search for elements based on keywords'   )
        uO.objInvloved({
            0:uO.allTags[uO.scope[dev_obj.aT]],
            1:uO.misc[uO.scope[dev_obj.list]],
            2:uO.selectTags[uO.scope[eCSSelectTags_0_i]]
        })
        console.groupEnd()
        var eCSearchFL_0_i = {
            forLoop_0_i:0,
            forLoopLength: uO.misc[uO.scope[dev_obj.list]].length,
            fn:function(   dev_obj   ){
                var indexSelect = 0
                
                
                if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]] !== undefined   ){
                    
                                    
                    if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS !== undefined   ){
                        
                        
                        if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i] !== undefined   ){
                        
                        
                            if(   dev_obj.same !== 'true'   ){
                                //look at the next set of values
                                
                                if(   eCSearchFL_0_i.forLoop_0_i === 0   ){
                                    uO.numberSystem({
                                        digits:uO.selectTags[uO.scope[eCSSelectTags_0_i]],
                                        operation:'add',
                                        amount: 1 //helps the function look at the next combination set
                                    })
                                }
                                
                                
                            }
                            indexSelect = uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0]
                            console.log('it tells me to start here', indexSelect)
                                       
                    
                        }
                        
                        
                    }
                   
                        
                }
                
                
                var eCSearchFL_1_i = {
                    forLoop_0_i:indexSelect,
                    forLoopLength:uO.allTags[uO.scope[dev_obj.aT]].length,
                    fn:function(   dev_obj   ){
                        var eCSearchFL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength:uO.misc[uO.scope[dev_obj.look]].length,
                            fn:function(   dev_obj   ){
                                
                                
                                if(   uO.allTags[uO.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][uO.misc[uO.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]] !== undefined   ){
                                    //means if the comparison from the element property actually produces a string
                                        
                                    if(   uO.allTags[uO.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][uO.misc[uO.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]].indexOf(   uO.misc[uO.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1 || dev_obj.all  === 'true'  ){
                                        //this must mean it found a match
                                        
                                    
                                        if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i] === undefined   ){
                                            // the start value for the number system it means a NS is not available
                                            
                                            uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.ready = 'false'
                                            uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i] = uO.selectTags[uO.scope[eCSSelectTags_0_i]].add(   {value:uO.iterableObject()}   )
                                            var ecsNSI = uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.add(   {value:uO.iterableObject()}   )
                                            uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                            uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                            uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoopLength+1}   )
                                            
                                            
                                        }
                                        
                                        
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0] = eCSearchFL_1_i.forLoop_0_i
                                        //helps change the number when the match is found so the NS doesnt take over
                                        //if problems look here idk if it supposed to follow the nSM or not
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].item = uO.allTags[uO.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i]
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].query = uO.allTags[uO.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][uO.misc[uO.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].xMark = uO.misc[uO.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].keyword = uO.misc[uO.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].valuePhrase = uO.misc[uO.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                        uO.selectTags[uO.scope[eCSSelectTags_0_i]][uO.selectTags[uO.scope[eCSSelectTags_0_i]]['query'+eCSearchFL_0_i.forLoop_0_i]].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                        
                                        
                                        if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.ready  !== 'false'   ){
                                        }
                                        
                                        
                                        return 'premature'
                                    
                                    
                                    }
                                 
                                    
                                }
                                
                                
                            },
                            args:dev_obj,
                            bubble:'true'
                        }
                        return uO.forLoop(   eCSearchFL_2_i   )
                    },
                    args:dev_obj,
                }
                return uO.forLoop(   eCSearchFL_1_i   )
            },
            args:dev_obj,
        }
        uO.forLoop(   eCSearchFL_0_i   )
        
        
        if(   dev_obj.order === undefined   ){
            //this makes the instructions for the number map
            
            if(   uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.nSM === undefined   ){
                
                
                uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.nSM = uO.iterableObject()
                var eCSearchFL_3_i = {
                    forLoop_0_i:0,
                    forLoopLength:uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.length,
                    fn:function(   dev_obj   ){
                        uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.nSM.add(   {value:eCSearchFL_3_i.forLoop_0_i}   )
                    },
                    args:{}
                }
                uO.forLoop(   eCSearchFL_3_i   )
                uO.selectTags[uO.scope[eCSSelectTags_0_i]].eCSNS.ready = 'true'
                
            }
               
            
        }
        uO.numberSystem({
            digits:uO.selectTags[uO.scope[eCSSelectTags_0_i]],
            operation:'print',
        })
        uO.scope.minus(   {index:eCSSelectTags_0_i}   )
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
            // this
            // .digits the object holding the NS and its map
            /*
                //.eCSNS a property in an object that contains the digits of the numbers as well the min max range of each digit
                    .nSM,
                    /*
                        
                        determines how the number receive digits min is as 1 then 10 then 1000
                    
                        so forr
                        0:1
                        1:0
                        2:2
                        3::3
                                    .eCSNS:{
                                          0:{0:current,1:min,2:max}
                        the number system 1:{0:current,1:min,2:max}
                                          2:{0:current,1:min,2:max}
                                          3:{0:current,1:min,2:max}
                                            nSM:{}
                                    }
                        if the fn receives add 1 nS[1].current will increase by one
                        when ns[1].current hits the max then ns[0].current increases by one and
                            ns[1].current returns to zero
                    
                    */
                    //.currentNumber
                    /*
                        the current number for the NS
                    */
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
            /*
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
                    decimal, returns the decimal version of the number, good if you need to perform comparison or you are trying to do computation with different numberSystem since js is based off the decimal system this works perfectly
                        returns a int
                    multiply
                        multiples the NS number according to the ns, the amount mustbe an int
                    divide
                        divides the NS number according the NS, the decimal division reslt must be an int
                    print prints the current number as well as puts it in the currentNumber property of the eCSNS,this should change so that currentNumber can be evaluated at use but for now its not
                */
            // .amount
                /*
                    if the operation is add, then this is the amount to add, negative int to subtract
                    if the operation is compare, this is a iterable Object of all desired comparisons
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
            
            
            if(   dev_obj.operation === 'decimal'   ){
                       
                        
                var decimalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][0] -  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][1]
                var rangeNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][2] - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][1]
                var originalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[1]][0]
                //first digit range that influences the 2nd digit
                var numberSystemFL_2_i = {
                    forLoop_0_i:1,// because the first digit is already of base decimal unless we decide how the digits count for the NS
                    forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                    fn:function(   dev_obj   ){
                        
                       
                       if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] !==  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][1]  ){
                        
                        
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] -= 1
                            decimalNS += rangeNS
                            //effect adding the next digits worth for the decimal system
                            numberSystemFL_2_i.forLoop_0_i -= 1
                            // so we can get back to the min
                           
                        }
                        
                        
                        else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] ===  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][1] ){
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] = originalNS
                            
                            
                            if(   numberSystemFL_2_i.forLoop_0_i+1 !==  numberSystemFL_2_i.forLoopLength){
                                
                                
                                rangeNS *=  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i-1]][2] - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i-1]][1]
                                originalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i+1]][0]
                            
                            
                            }
                            
                        }
                        
                    },
                    
                    args:{
                            digits:dev_obj.digits,
                            amount:dev_obj.amount
                        }
                }
                uO.forLoop(   numberSystemFL_2_i   )
                return decimalNS
                
            }
            
            
            if(   dev_obj.operation === 'multiply'   ){
                        
                            
                if(   dev_obj.amount < 0  ){
                    
                    
                    throw(' the NS does not undestand what to do the NS starts from 0 and to supply negative numbers requires future implemenation, also the amount must be an int' )
                    
                    
                }
                
                
                var decimalNS = uO.numberSystem({
                    digits:dev_obj.digits,
                    operation:'decimal',
                })
                uO.numberSystem({
                    digits:dev_obj.digits,
                    operation:'add',
                    amount:-decimalNS
                })
                // gets to  0 so we can do the multiplcation through the decimal system much easier
                decimalNS *= dev_obj.amount
    
                
                if(   uO.isInt(   {type:decimalNS}   ) === 'false'   ){
                    
                    
                    throw(   'this will make the number invalid no-op'   )
                    
                    
                }
                
                
                else if(   uO.isInt(   {type:decimalNS}   ) === 'true' && dev_obj.amount !== 0  ){
                    //since the NS number is already 0 no need for noop
                    
                    uO.numberSystem({
                        digits:dev_obj.digits,
                        operation:'add',
                        amount:decimalNS
                    })
                    
                    
                }
                
                                
            }
            
            
            if(   dev_obj.operation === 'divide'   ){
                
                            
                if(   dev_obj.amount === 1   ){
                    
                    
                    //no -op
                                    
                                    
                }
                
                
                if(   dev_obj.amount <= 0   ){
                    
                    
                    throw(' in the decimal system divide by zero cannot be expressed so its an error. if the amount was negative, the implemnetation to express it is not available yet' )
                    
                               
                }
                
                
                var decimalNS = uO.numberSystem({
                    digits:dev_obj.digits,
                    operation:'decimal',
                })
                decimalNS -= (decimalNS/dev_obj.amount)
                
                
                if(   uO.isInt(   {type:decimalNS}   ) === 'true'   ){
                    
                    
                    if(   dev_obj.amount > 1   ){
                    
                    
                        uO.numberSystem({
                            digits:dev_obj.digits,
                            operation:'add',
                            amount:-decimalNS
                        })
                                    
                                    
                    }
                    
                    
                }
                
                
                else if(   uO.isInt(   {type:decimalNS}   ) === 'false'   ){
                    
                    
                    console.error('the result must be an int no-op')
                    
                    
                }
                
            }
            
            
            if(   dev_obj.operation === 'add'  ){
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
            
            
            if(   dev_obj.operation === 'print'   ){
                
                
                var NS_iter = []
                var numberSystemFL_1_i = {
                    forLoop_0_i:0,
                    forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                    fn:function(   dev_obj   ){
                        NS_iter.push(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0]  )
                    },
                    args:{
                            digits:dev_obj.digits
                    }
                }
                uO.forLoop(   numberSystemFL_1_i   )
                console.log('current number',NS_iter)
                dev_obj.digits.eCSNS.currentNumber =  NS_iter
                return NS_iter
                
                
            }
            
            
            // dev_obj.digits.eCSNS.currentNumber = uO.numberSystem({
            //     digits:dev_obj.digits,
            //     operation:'print',
            // })
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
        // .stop for the abelast
        
         var iterableObjectO = {
            length:0,
            
            add:function(   dev_obj   ){// returns the index that it was added to an object
                    iterableObjectO[iterableObjectO.length] = dev_obj.value
                    iterableObjectO.length += 1
                    // iterableObjectO['q'+(iterableObjectO.length -1).toString()] = iterableObjectO.length -1
                    return iterableObjectO.length -1
                },// adds a value and retuns its place in the array
            minus:function(   dev_obj   ){
                //.value value to remove
                //.index remove and index
                
                if(   dev_obj.index !== undefined   ){
                    
                    
                    delete iterableObjectO[dev_obj.index]
                    // delete iterableObjectO['q'+dev_obj.index.toString()]
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
                        args:{
                            index:dev_obj.index
                            }
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
                        // delete iterableObjectO['q'+iterableObjectTDI.toString()]
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
            }, //if corrputed resets the lengths
            isitO:function(   dev_obj   ){
                return 'true'
            }//confirms if its an itO, make it refuse to bind
         }
         iterableObjectO.abelast = {
            length:0,
            
            add:function(   dev_obj   ){// returns the index that it was added to an object
                    iterableObjectO.abelast[iterableObjectO.abelast.length] = dev_obj.value
                    iterableObjectO.abelast.length += 1
                    // iterableObjectO.abelast['q'+(iterableObjectO.abelast.length -1).toString()] = iterableObjectO.abelast.length -1
                    return iterableObjectO.abelast.length -1
                },// adds a value and retuns its place in the array
            minus:function(   dev_obj   ){
                //.value value to remove
                //.index remove and index
                
                if(   dev_obj.index !== undefined   ){
                    
                    
                    delete iterableObjectO.abelast[dev_obj.index]
                    // delete iterableObjectO.abelast['q'+dev_obj.index.toString()]
                    iterableObjectO.abelast.resetLength()// resets the length
                    var iterableObjectFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:iterableObjectO.abelast.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   iterableObjectTDI <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                
                                
                                iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]
                                delete iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                                
                                
                            }
                        },
                        args:{
                            index:dev_obj.index
                            }
                    }
                    uO.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                    
                    
                }
                
                
                if(   dev_obj.value !== undefined   ){
                    
                    
                    var iterableObjectO_abelast_BOOL = {0:false}
                    iterableObjectO_abelast_BOOL = uO.severalOr({
                                compTo: dev_obj.value,
                                compAgn: iterableObjectO.abelast,
                                boolean:iterableObjectO_abelast_BOOL,
                                which:0
                    })
                    
                    
                    if(   iterableObjectO_abelast_BOOL[0]   ){
                        
                        
                        var iterableObjectTDI = iterableObjectO_abelast_BOOL.spot // index to remove
                        delete iterableObjectO.abelast[iterableObjectTDI]
                        // delete iterableObjectO.abelast['q'+iterableObjectTDI.toString()]
                        iterableObjectO.abelast.resetLength()
                        var iterableObjectFL_1_i = {
                            forLoop_0_i:0,
                            forLoopLength:iterableObjectO.abelast.length,
                            fn:function(   dev_obj   ){
                                
                                
                                if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                    
                                    
                                    iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1]
                                    delete iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1 - iterableObjectTDI]//problems look here usually wants a variable or primitive to properly delete
                                    
                                    
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
                        val:iterableObjectO.abelast,
                        getLen:function(   dev_obj   ){
                            
                            
                            if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                })
            }, //if corrputed resets the lengths
            isitO:function(   dev_obj   ){
                return 'true'
            }//confirms if its an itO, make it refuse to bind
         }  // make a deep copy if outer function do not have access to scope from the inner functions, the inner function places the required info heree
         return iterableObjectO
    } //retuns or converts an object with which you can easily iterate but this is an array accroding to chrome 72
    function iterify(   dev_obj   ){
        //. iterify the item to turn into an iterableObject
    
        if(   dev_obj !== undefined   ){
            
            
            var iterableO = uO.iterableObject()
            
            
            if(   uO.isArray(   {type:dev_obj.iterify}   ) || uO.isNodeList(   {type:dev_obj.iterify}   )   ){
                
                
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
                //for strings it neatly splits it into an itO
                
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
        var subGroups_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   )
        
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
                            subGroupsBOOL_1_i = uO.severalOr({
                                compTo: uO.subGroupsO[subGroupsBOOL.spot].ending[subGroupsFL_1_i.forLoop_0_i],
                                compAgn: uO.subGroupsO[subGroupsBOOL.spot],
                                boolean:subGroupsBOOL_1_i,
                                which:0,
                                how:function(   dev_obj   ){
                                //this removes bad list that do not lead to an element
                                    
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
            //.target item to get all values from must be an itO or an object
            // .typeOnly, what specific values were looking for
        
            if(   dev_obj !== undefined   ){
                
                
                    var selectAllBOOL = {0:false}
                    selectAllBOOL = uO.severalOr({
                        compTo: 'element',
                        compAgn: dev_obj.typeOnly,
                        boolean:selectAllBOOL,
                        which:0
                    })
                    
                    
                    if(   uO.isObject(   {type:dev_obj.target}   ) || uO.isitO(   {type:dev_obj.target}   ) && selectAllBOOL[0]   ){
                        
                        
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
                                    if(   (   uO.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || uO.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ) || uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )     ){
                                        //I cannot add it if its a primitive not an object or an itO
                                        //done like this because what if im looking for a string, this would evaluate to false and the subGroupMap would be improper
                                        
                                        uO.subGroups({
                                            map:selectReturnMD,
                                            val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                        })
                                        
                                        
                                    }
                                }
                                
                                catch(e){debugger}
                                
                                if(   uO.isDOMElement(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                    
                                    
                                    selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    uO.subGroups({
                                        map:selectReturnMD,
                                        val:'element',
                                        nextItem:'true',
                                    })
                                    // return 'premature'
                                    //this might leave some impt things behind
                                        
                                    
                                }
                                
                                
                                else if(   uO.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || uO.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )    ){
                                    
                                    
                                    // console.group('recursion')
                                        selectCheckpoint.args = selectAllFL_0_i.args
                                        selectCheckpoint.forLoop_0_i =  selectAllFL_0_i.forLoop_0_i
                                        selectCheckpoint.forLoopLength = selectAllFL_0_i.forLoopLength
                                        selectAllFL_0_i.args ={
                                            target: Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                        }
                                        selectAllFL_0_i.forLoop_0_i = 0
                                        selectAllFL_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   ).length
                                        uO.forLoop(   selectAllFL_0_i   )
                                    // console.groupEnd()
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
                                    2:selectReturnMD
                                })
                        console.groupEnd()
                        selectReturn.subGroupsMap = selectReturnMD
                        return selectReturn
                        
                    }
                
                
            }
            
            
    }
    function packIt(   dev_obj   ){
        //for the the .fill and .write it expects them to be prefined in an iterable for .fill this must be found as a property in of the items in packItSA for .write this must be fount as a property in on of the items for dev_obj.order
        /*
             .order what this fn is supposed to fill right now takes objects or itO is needs to find out what it is
             .directions, what its filling it with
                match use match map and match keys and fills values
                gather use uO.selectAll to gather needed values to pack
                    element, return only elements from the order
             .matchMap if .directions === match map keys and fill values
             .fill  where to place the items
             .write what to place for each fill value
        */
        var packIt_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   )
        
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
                                    1:dev_obj.order,
                                    2:uO.subGroupsO
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
                        uO.forLoop(   packItFL_1_i   )
                        
                        
                    }
                    
                    
                    if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                            
                        
                        if(    uO.isObject(   {type:dev_obj.order}   )   ){
                            
                            
                            packItSA = uO.selectAll({
                                target:dev_obj.order,
                                typeOnly : {0:'element'},
                                length:Object.keys(   dev_obj.order   ).length
                            })
                            
                            
                        }
                        
                        
                        else if(   uO.isitO(   {type:dev_obj.order}   )     ){
                        
                            
                            packItSA = uO.selectAll({
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
    //templates, can swap in infinite places
    function partialMatch(   dev_obj   ){
        /*
            this function expects strings but there can be others objects arrays
                where objects are compared like this we call them eycems
            what will happen is that we will convert it to an itO and look at each property and ask about the range and the number of spaces
            so if compAgn is to big
                dasgjkfgnkasgpnksdfo word asidnogsindgj osapfoigjnsaoifgjasdgipkojagidknsknpgasd
                this will be stopped by the gap
            and if compAgn is to small
                compAgn:lit
                compTo:little
            it will will be stopped by the range
            .compTo the value we want to see
            .compAgn the value that the API can determine that its equal to compTo but its misspelt using this function
            .range the length it has to get to equal the string
                so if range is 7 and
                compTo  = 'abbacus'
                compAgn = 'abbaacus'
                the function sees
                abba  cus
                7 in a row which is true
                and same for reverse
                but if compTo is shorter than the string its satisfies on the max
                this is actually scary because
                compTo :'linkedin'
                compAgn :'linakedain'
                    might be wiedly I dont know how to handle this but then it would
                    require a version 2 implementation right away
            .spaces max allowed spaces before it rejects
                so if spaces is two and
                compTo  = 'abbacus'
                compAgn = 'abbaacusa'
                the function would point out
                a a
                and accept and
                also if we have
                compTo  = 'Linkedin'
                compAgn = 'Link'
                spaces would be 1
                vice versa
            .gap max allowed items between spaces that account for range
                say if we have .gap = 3 and
                compTo  = 'abbacus'
                compAgn = 'abbadabacus'
                the gap is daba which is 4 greater than the allowed gap
                so it would reject
                and we would not have a partial match
            .trailer
                when compAgn has the match but its not in the begiinmond of compTo
                say
                compTo: Narco
                compAgn:Marco
                trailer says how much it has to go up in Marco to get that arco match
                or
                compTo:raymond
                compAgn:diamond
                trailer needs 3 to get to that
                so if
                compTo:deNarco
                compAgn:marco
                trailer must be 2 to get there
                however this would also include
                    marefco
                    so trailing must be left at one and more modifiable in v2
            .reset
                when a full range match is needed
                so if you have
                compTo dipper
                compAgn:tappen dipper
                if trailer is long enough it would pick up pp and it wouldnt work
                this is a boolan in v1 itO in v2 and if true will turn
                    range back to 0
                    the extension to
            .version
                1  (default) use basic implementation
                2 a future implementation which so that range spaces and gap can be granular to user input
            .type
                the type for comparison I plan to make this obsolete allowing the fn to do more
                .cCase
                    when type is string, turns to desired cases such as upper lower camel, if not availble result is toLowerCase
        */
        
            
        if(   dev_obj !== undefined   ){
            
            
            var partialMatch_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   )
            
            
            if(   dev_obj.version === undefined   ){
                
                
                dev_obj.version = 1
                
                
            }
            
            
            if(   dev_obj.version === 1 && dev_obj.type === 'string'  ){ // handles strings only allow it to do more with the same algorithm
                
                            
                if(   dev_obj.cCase !== undefined  ){
                    //turns to case comparision of users desire
                    
                    dev_obj.compTo = dev_obj.compTo[dev_obj.cCase]()
                    dev_obj.compAgn = dev_obj.compAgn[dev_obj.cCase]()
                    
                                    
                }
                
                //{
                dev_obj.compTo = uO.iterify(    {iterify:dev_obj.compTo}   )
                dev_obj.compAgn = uO.iterify(   {iterify:dev_obj.compAgn}   )
                /*initealize items to track range space and gap */
                pMMisc_0_i =  uO.scope.add(   {value:uO.misc.add(   {value:uO.iterableObject()}   )}   )
                uO.misc.abelast.add(   {value:uO.scope[pMMisc_0_i]}   )
                pMRange_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ].add(   {value:uO.iterableObject()}   )
                pMSpaces_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ].add(   {value:uO.iterableObject()}  )
                pMGap_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ].add(   {value:uO.iterableObject()}   )
                pMTrailer_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ].add(   {value:uO.iterableObject()}   )
                pMPause_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ].add(   {value:uO.iterableObject()}   )
                var pMRange_0_i_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ][pMRange_0_i].add(   {value:0}   )
                var pMSpaces_0_i_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ][pMSpaces_0_i].add(   {value:0}   )
                // uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:0}   )
                var pMTrailer_0_i_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i].add(   {value:1}   )
                var pMTrailer_0_i_1_i = uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i].add(   {value:0}   )
                var pMPause_0_i_0_i = uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].add(   {value:0}   )
                uO.misc[   uO.scope[pMMisc_0_i]   ].pause = 0 // a reminnded for the comparision to continue here for those misplet words with errors in the middle
                uO.misc[   uO.scope[pMMisc_0_i]   ].satisfy = true // made a boolean for possible self 3rd party use , if the condition is broken it turns to false
                            
                /**/
                //}
                var pMFL_0_i = { //find if the range for compAgn satisfies
                    forLoop_0_i:0,
                    forLoopLength: dev_obj.compTo.length > dev_obj.compAgn.length ? dev_obj.compTo.length + 1 :  dev_obj.compAgn.length + 1 ,
                    fn:function(   dev_obj   ){
                        /*
                            these contain the letters for each match
                            range service for itO[0]
                            space serivce for itO[1]
                            gap service for itO[2]
                            trailer service for itO[3]
                                each serice has a module that the letter goes through for processing
                                order is important but needs to be made unnessary for optimal performace
                            
                            VARIABLES
                            rangeFound , when the range is increased by one the trailer does not need to run anymore, leave this once set
                                            because in v1, the trailer module should only be used once
                            trailerRange , when the trailer finds a match, this lets the range know to increase  the range by one
                            trailerGap   , when this happens there is a massive gap made, this is an itO with the trailer module
                                            telling the Gap module to update accordingly
                                    itsThis - the gap should replace the value with what the trailer gives
                                    jobDone- the gap module did as requested
                            pause,         where the API is up to in compTo, this increases only if matches
                                            should all modules have access to this or a module just for this
                            spaceGap,      the space module tells the gap module to increment by one since the gap module
                            fullLoopApply, the full module applies until a given point in  pMFL_0_i
                            fullRange,      this is the full module way of telling the range module not to increase by one
                                ignore -  the range module will not increment by one
                                regular - let the range module act as normal
                            fullSpace      this is the full module way of telling the space module that there is no new space and not to increment
                                ignore - the space module will not increment
                                regular - space module will perform normal operations
                            fullGap -       full module tells the gap module to continue to increment since the words are not equal as such
                                fill  gap will continue to increment by one and try not to increase the itO in relation to the space module
                            fullCheck - allows the full module to deactivate itself saving memory
                                true activates its rules
                                false deactivates its rulesd
                            fullApply - if full module actually finds the compTo/range compAgn match
                                true it has found the match do accordingly
                                false it has not found the match do accordingly
                        */
                        /*Refer to case table for google slides*/
                        // not complete till trailer tells gap to update after it has found a match and pause contines from it
                        // ---------------------------------------------------------------------------------------------
                            // FULL MODULE
                        /*
                            whats is needed
                                            dev_obj.reset
                                            dev_obj.compAgn[pMFL_0_i.forLoop_0_i]
                            what is handled
                                            this is a v2 courtesy for times when the whole word is needed and not parts of the word
                                            if the API does not get the complete match in the length of the range it tells all modules to reset
                                            according until it finds that exact word match
                                            
                                            in v2 trailer gap and space in following indexes in their respecive itO would be set to 0, demanding
                                            that the rest of the compTo string should be there
                                            
                                            watch this has a lot to tell the other modules if conditions are satisfied here
                        */
                        //{
                            console.group(   'Full Module'   )
                            
                            
                                if(   dev_obj.full === 'true'   ){
                                    
                                    
                                    if(   uO.isInt(   {type:dev_obj.trailer}   ) === 'true' && dev_obj.trailer !== 0   ){
                                        
                                        
                                        throw(   'trailer and full module is only supported in v2'   )
                                        
                                                                                
                                    }
                                    
                                    
                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullOK === 'true'   ){
                                                  
                                                                                
                                        // lets see what happens when we le the API run its
                                        
                                        
                                    }
                                    
                                    
                                    else if(   (   dev_obj.compTo
                                            [   uO.misc
                                                [   uO.scope[pMMisc_0_i]
                                                ].pause
                                            ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]  ) &&  (   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ] !== undefined   )   ){
                                        //the chars are equal incrase the range by one up to the length of the range, also undefined and undefined can come at the end so watch
                                        
                                        /*
                                            if everything is good
                                            we dont run this we could actually try
                                                to resolve things from here
                                                tell the modules what to do and stop this predeterminded loop <- best choice
                                                let the modules come to that forgone conclusion <- allows for order
                                                
                                            if everything is bad
                                                the range module does not have to do anything since it going to find the full rnage, this should be zero
                                                so tell the range not to even increment
                                                the trailer module should not have to do anything also
                                                    
                                                see what the gap and space module does, they should be lef untouched
                                        */
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullOK = 'true'
                                        var pMFL_2_i = {
                                            forLoop_0_i:uO.misc[   uO.scope[pMMisc_0_i]   ].pause,
                                            forLoopLength:dev_obj.range,
                                            fn:function(   dev_obj   ){
                                                console.log(   dev_obj.compTo[pMFL_2_i.forLoop_0_i],dev_obj.compAgn[pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i]   )
                                                //comparing the compTo to the spot in the compAgn
                                                
                                                if(   dev_obj.compTo[pMFL_2_i.forLoop_0_i] !== dev_obj.compAgn[pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i]   ){
                                                    // this means the full range compTo is not satsifed and the API needs to reset so tell it things
                                                    
                                                    console.group(   'up to this point the Full Module applies',pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i   )
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullLoopApply = pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullOK = 'false'
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullRange = 'ignore';
                                                        //tells the range module to not add one if finds matches in the rest of the range until point
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullSpace = 'ignore'
                                                        // tells the spaces module to not look for that now diff. -1 same until point
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullGap = 'fill'
                                                        // tells the gap module to go ahead and fill things
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullPause = 'holdoff' // full module depends on pause to do the right thing here the pause must be at the 0 of compTo to get that range compAgn - compTo match
                                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullCheck = 'true'
                                                    console.groupEnd()
                                                    return 'premature'
                                                    
                                                    
                                                }
                                                
                                                
                                            },
                                            args:{
                                                    compTo  : dev_obj.compTo,
                                                    compAgn : dev_obj.compAgn
                                            }
                                        }
                                        uO.forLoop(   pMFL_2_i   )
                                        // debugger
                                        // throw('e')
                                        console.log(   'now that I am out of the loop what happened'   )
                                        console.warn(   uO.misc[   uO.scope[pMMisc_0_i]   ]   )
                                        
                                            
                                        if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullOK === 'true'   ){
                                            // we practially found the string do not run the full module again,
                                            console.log(   'I have found the matching eycem'   )
                                            debugger
                                            /*
                                                LEFT off
                                                make sure full range knows what to do on when it finds the strings
                                                make sure full module is working properly and setup a trailer test to provide
                                                the trailer module with instructions as well
                                            */
                                        }
                                        
                                        
                                    }
                                    
                                    
                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullLoopApply < pMFL_0_i.forLoop_0_i && uO.misc[   uO.scope[pMMisc_0_i]   ].fullCheck === 'true'   ){
                                    
                                    
                                        console.log(   'it safe for the other modules to operate as normal Full Module removing restraints'   )
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullRange = 'regular';
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullSpace = 'regular';
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullGap = 'regular';
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullPause = 'regular';
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].fullCheck = 'false'
                                        
                                        
                                    }
                                    
                                    
                                }
                                 
                                    
                            console.groupEnd()
                        //}
                            // RANGE MODULE
                        /*
                            whats is needed
                                            dev_obj.compTo[   uO.misc[   uO.scope[pMMisc_0_i]   ].pause   ]
                                            dev_obj.compAgn[pMFL_0_i.forLoop_0_i]
                            what is handled
                                            if there is a match, it increases the range by one
                                            FUTURE: if reset is involved this goes back to zero
                        */
                        //{
                        console.group(   'Range Module'   )
                                
                            
                            if(   (   dev_obj.compTo
                                    [   uO.misc
                                        [   uO.scope[pMMisc_0_i]
                                        ].pause
                                    ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]  ) &&  (   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ] !== undefined   )   ){
                                //the chars are equal incrase the range by one, also undefined and undefined can come at the end so watch
                                                                                            
                                console.log(   'increase the range by one'   )
                                console.log(   'also increase pause by one'   )
                                
                                
                                
                                if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] === 0   ){
                                
                                    
                                    console.log(   'let the trailer know that is does not need to run'   )
                                    uO.misc[   uO.scope[pMMisc_0_i]   ].rangeFound = 'true'
                                    
                                    
                                }
                                               
                                
                                console.log(   'the full module is trying to tell me something'   )
                                uO.objInvloved({
                                    0:pMFL_0_i.forLoop_0_i,
                                    1:uO.misc[   uO.scope[pMMisc_0_i]   ].fullLoopApply,
                                    2:uO.misc[   uO.scope[pMMisc_0_i]   ].fullRange
                                })
                                
                                
                                if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullRange !== 'ignore'   ){
                                    /*
                                        this means that the full module found something wrong and is telling the range
                                        to not increment because the compTo and the proceeding substring do not match
                                    */
                                    uO.misc[   uO.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] += 1;
                                    
                                    
                                }
                                
                                
                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange = 'true';
                                
                                
                            }
                            
                            
                            if(   uO.misc[   uO.scope[pMMisc_0_i]   ].trailerRange === 'true'   ){
                            
                            
                                console.log('increase for the trailer ')
                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] += 1;
                                uO.misc[   uO.scope[pMMisc_0_i]   ].trailerRange = 'false';
                                
                                
                            }
                             
                              
                            if(   pMFL_0_i.forLoop_0_i ===  pMFL_0_i.forLoopLength -1   ){
                                // this means that we have come to then end of serarch but this also means several things as well
                                
                                if(   uO.misc
                                    [   uO.scope[pMMisc_0_i]   ]
                                        [pMRange_0_i][pMRange_0_i_0_i] < dev_obj.range   ){
                                    
                                    
                                    console.error(   'error in range'   )
                                    uO.misc[   uO.scope[pMMisc_0_i]   ].satisfy = false
                                    console.groupEnd()
                                    return 'premature' //>
                                    
                                    
                                }
                                
                                
                            }
                            
                            
                            console.log(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMRange_0_i]   )
                            console.log(   dev_obj.compTo[   uO.misc[   uO.scope[pMMisc_0_i]   ].pause ]   )
                            console.log(   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   )

                                                        
                            if(   uO.misc
                                [   uO.scope[pMMisc_0_i]   ]
                                    [pMRange_0_i][pMRange_0_i_0_i] >= dev_obj.range   ){
                                //if the range is greater than or equal to the range we have a match
                                
                                console.log(   'range has been satisfied'   )
                                console.groupEnd()
                                return 'premature'
                                
                                
                            }
                         
                                
                            
                                                    
                            
                        console.groupEnd()
                        // }
                            // TRAILER MODULE (only look so far)
                        /*
                                what is needed
                                        dev_obj.trailer
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i]
                                what is handled
                                    if range could not find a match check first if there is even a trailer
                                        if there is use that as the length to continue checking for the match
                                            if compTo is shorter, then the users implies its later in the string
                                            if compTo is greater, check compTo till dev_obj.trailer
                                        if we could not find a match at the end of the loop and 1 to the containing loop till the end of the dev_obj.trailer
                                        also make a flag telling the range module to not to try and evaluate and return at this point
                                explanation
                                    for illo and asdfun semper fil twillo
                                    there is not trailer and another parameter because
                                    trailler  = 4
                                    [someParam] = 7
                                    it would end if the compTo is less than some param which has a length of trailer
                                        to find the match later in the string you just have to increase trailer and this would also
                                        terminate earliest
                                    also if someParam was less than the trailer that would not workout because if the match is
                                    later in the trailer and someParam only told it to look less in the compAgn, it would not be able to find it
                                    or it would take longer to find it as it moves up in the itO so only is needed
                                        
                        */
                        // {
                        console.group(   'Trailer Module'   )
                            
                            
                            if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] < dev_obj.trailer   ){
                                
                                    
                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] += 1;
                                //FIX ME memory leak
                                
                                if(   (   uO.isInt(   {type:dev_obj.trailer}   ) === 'true' && dev_obj.trailer !== 0 && uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i] !== 0   ) && uO.misc[   uO.scope[pMMisc_0_i]   ].rangeFound !== 'true'  ){
                                    /*
                                        for v1 the 3rd comannd stops the API for looking for
                                        trailers as this is a v2 courtesy to help the API
                                        find words in the middle of sentences
                                    */
                                    var pMFL_1_i = {
                                        forLoop_0_i:uO.misc[   uO.scope[pMMisc_0_i]   ].pause,
                                        forLoopLength: uO.misc[   uO.scope[pMMisc_0_i]   ].pause + dev_obj.trailer + 1,
                                        fn:function(   dev_obj   ){
                                            console.log(   [dev_obj.compTo[pMFL_1_i.forLoop_0_i],dev_obj.compAgn[pMFL_0_i.forLoop_0_i]]   )
                                            
                                            
                                            if(   dev_obj.compTo[pMFL_1_i.forLoop_0_i] === dev_obj.compAgn[pMFL_0_i.forLoop_0_i]   ){
                                            
                                                
                                                console.log(   'match found in trailer'   )
                                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i] -= 1
                                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer = 'true'
                                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].pauseTrailerReplace = pMFL_1_i.forLoop_0_i + 1
                                                //helping the pause module do its job
                                                uO.misc[   uO.scope[pMMisc_0_i]   ].trailerRange = 'true'
                                                uO.misc[   uO.scope[pMMisc_0_i]   ].trailerGap = uO.iterify(   {iterify:['itsThis',pMFL_0_i.forLoop_0_i]}   )
                                                // where it should start to find the range
                                                return 'premature'
                                                
                                                
                                            }
                                            
                                            
                                            if(   dev_obj.compTo[pMFL_1_i.forLoop_0_i + 1] === undefined   ){
                                                /*
                                                    this means that the trailer is bigger than the compTo string and there is no more
                                                    'looking up' to do in order to find the result the answer is not here
                                                */
                                                
                                                return 'premature'
                                                
                                                
                                            }
                                        
                                            
                                        },
                                        args:dev_obj
                                    }
                                    uO.forLoop(   pMFL_1_i   )
                                    console.log(   'how far in compTo I must search'   )
                                    console.log(   dev_obj.trailer - uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i]   )
                                    console.log(   'how many times should I run this'   )
                                    console.log(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i]   )
                                    
                                    
                                }
                            
                            
                            }
                            /*
                                this determines if the trailer Module runs, as the dev_obj.trailer
                                set by the developer when it hits the trailer
                            */
                            else if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] >= dev_obj.trailer   ){
                                
                                    
                            }
                            
                                                        
                        console.groupEnd()
                        // }
                            // SPACES MODULE
                        /*
                                what is needed
                                        dev_obj.spaces
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i]
                                what is handled
                                    when the comparisons do not match at first a space is made and is incremented by one
                                    when spaces exceed what is given by the dev obj we have an error
                                FIX ME ; in cases when there API finds nothing there should be one big space and the gap should be the length of comp
                                        
                        */
                        // {
                        console.group(   'Spaces Module'   )
                            
                                                                                            
                            if(   dev_obj.compTo
                                    [   uO.misc
                                        [   uO.scope[pMMisc_0_i]
                                        ].pause
                                    ] !== dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                // this means the prev was a match and the now isnt so the space has been made
                                
                                
                                if(   dev_obj.compTo
                                        [   uO.misc
                                            [   uO.scope[pMMisc_0_i]
                                            ].pause -1
                                        ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i  - 1]   ){
                                        //so it doesnt not make empty spaces for missing chars
                                            
                                    console.log(   'need a space'   )
                                    console.log(   'tell the gap module we got a new space'   )
                                    console.log(   'the full module has something for the space module'   )
                                    uO.objInvloved({
                                        0:uO.misc[   uO.scope[pMMisc_0_i]   ].fullSpace,
                                        1:uO.misc[   uO.scope[pMMisc_0_i]   ].fullLoopApply,
                                        2:pMFL_0_i.forLoop_0_i
                                    })
                                    
                                    
                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullSpace !== 'ignore'   ){
                                        //the full module is telling the space module that the range has never increased and there is just one big space do not increment
                                        
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i] += 1
                                        
                                        
                                    }
                                    
                                    
                                    uO.misc[   uO.scope[pMMisc_0_i]   ].spaceGap = 'true';
                                    uO.objInvloved({
                                        0:uO.misc[   uO.scope[pMMisc_0_i]   ][pMSpaces_0_i],
                                        1:dev_obj.compTo[   uO.misc[   uO.scope[pMMisc_0_i]].pause] ,
                                        2:dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ],
                                        3:dev_obj.compTo[   uO.misc[   uO.scope[pMMisc_0_i]].pause -1],
                                        4:dev_obj.compAgn[   pMFL_0_i.forLoop_0_i  -1 ]
                                    })
                                 
                                                                                
                                }
                                
                                
                                if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i] > dev_obj.spaces   ){
                                    //if the spaces in the API is too great
                                                                        
                                    console.error(   'error in spaces'   )
                                    uO.misc[   uO.scope[pMMisc_0_i]   ].satisfy = false
                                    console.groupEnd()
                                    return 'premature'
                                    
                                                                        
                                }
                                    
                                                                
                            }
                            
                            
                        console.groupEnd()
                        // }
                            // GAP MODULE
                        /*
                                what is needed
                                        dev_obj.gap
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i]
                                what is handled
                                    when the comparisons do not match a gap is also made and is incremented by one
                                    when new gaps afer spaces exceed what is given by the dev obj we have an error
                                    these are handled by itO, to determine the gap count for evey space
                                        
                        */
                        // {
                        console.group(   'Gap Module'   )
                            
                                                                                            
                            if(   dev_obj.compTo
                                    [   uO.misc
                                        [   uO.scope[pMMisc_0_i]
                                        ].pause
                                    ] !== dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                // this means the prev was a match and a gap is increasing
                                                                                                                                                    
                                    console.log(   'gap is increasing'   )
                                    
                                    
                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ].spaceGap === 'true'  && uO.misc[   uO.scope[pMMisc_0_i]   ].fullGap !== 'fill'  ){
                                        //however full module intervenes here so there is one space not a new space and this should not work need the && to do this
                                        
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:1}   )
                                        // to properly account for the gap
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].spaceGap = 'false'

                                        
                                    }
                                                
                                                                        
                                    else if(   uO.misc[   uO.scope[pMMisc_0_i]   ].spaceGap !== 'true'   || uO.misc[   uO.scope[pMMisc_0_i]   ].fullGap === 'fill'   ){
                                        // spaceGap might equal true but an || is needed because the full module takes order
                                        
                                        uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i][   uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ]  +=1
                                        
                                        
                                    }


                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ].trailerGap !== undefined   ){
                                        
                                        
                                        if(   uO.misc[   uO.scope[pMMisc_0_i]   ].trailerGap[0] === 'itsThis'   ){
                                            //this means that the trailer has made a range and the gap needs to be updated
                                            // but should this exist this puts limits on the user
                                            console.log(   'gap updated from trailer'   )
                                            uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i][   uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ]  = uO.misc[   uO.scope[pMMisc_0_i]   ].trailerGap[1]
                                            uO.misc[   uO.scope[pMMisc_0_i]   ].trailerGap[0] = 'jobDone'
                                             
                                                
                                        }
                                        
                                        
                                    }
                                        
                                                         
                                    if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i][   uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ] > dev_obj.gap   ){
                                        //if the spaces in the API is too great
                                                                            
                                        console.error(   'error in gap'   )
                                        uO.misc[   uO.scope[pMMisc_0_i]   ].satisfy = false
                                        console.groupEnd()
                                        return 'premature'
                                        
                                                                            
                                    }
                                    
                                                                
                            }
                            
                            
                            console.log(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMGap_0_i]   )
                        console.groupEnd()
                        // }
                        /*
                            PAUSE  MODULE
                                what is needed
                                    dev_obj.compTo[   uO.misc[   uO.scope[pMMisc_0_i]   ].pause
                                what is handled
                                    handles many things about the API concerning the pause an imporan component to
                                    compTo
                                properties
                                    pauseRange, means that a match in the range was found add one to the pause
                                        
                        */
                        // {
                        console.group(   'Pause Module'   )
                            
                            
                            if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange === 'true'  ){
                                
                                
                                if(   uO.misc[   uO.scope[pMMisc_0_i]   ].fullPause !== 'holdoff'   ){
                                    // full module also wants to prevent the pause module from doing anything
                                    
                                    uO.misc[   uO.scope[pMMisc_0_i]   ].pause += 1;
                                    
                                    
                                }
                                
                                
                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange = 'false'
                                
                                
                            }
                            
                            
                            if(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer   === 'true'   ){
                            
                            
                                uO.misc[   uO.scope[pMMisc_0_i]   ].pause = uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].pauseTrailerReplace
                                uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer  = 'false'
                                
                            
                            }
                            
                            
                            uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i][pMPause_0_i_0_i] = uO.misc[   uO.scope[pMMisc_0_i]   ].pause;
                            
                            
                            console.log(   'compTo set tracking'   )
                            console.log(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i][pMPause_0_i_0_i]   )
                            console.log(   'current API state'   )
                            console.log(   uO.misc[   uO.scope[pMMisc_0_i]   ][pMPause_0_i]   )
                        console.groupEnd()
                        // }
                    },
                    args:dev_obj
                }
                uO.forLoop(   pMFL_0_i   )
                uO.scope.minus(   {index:pMMisc_0_i}   )
            }
            
                    
        }
        
        
        
    }/*this helps the API when its expected to be a inconsitencies in searches that have the same meaning, the developer can adjust how many values they want from all the way to complete difference to one char difference  in order for the API to say hey, that just a mispelled word it s okay*/
    
    function reqBody(   dev_obj   ){
        /*
            .stream readeable stream for data
            .fn function once done with the steram the req body will be in dev_obj.stream.body
            .keep whether to keep the created item
                false deletes created item
            .finish, since this is a stream last steps must go here
        */
        var reqBody_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   )
        dev_obj.stream.on('data',(chunk)=> {
            if(   dev_obj.stream.body === undefined  ){
                dev_obj.stream.body = '';
            }
            dev_obj.stream.body += chunk
        })
        dev_obj.stream.on('end',function(){
            // rBMisc_0_i =  uO.scope.add(   {value:uO.misc.add(   {value:uO.iterableObject()}   )}   )
            // uO.misc.abelast.add(   {value:uO.scope[rBMisc_0_i]}   )
            dev_obj.fn(dev_obj)
            if(   dev_obj.keep === 'false'){
                uO.misc.minus({
                    index:uO.misc.abelast[
                        uO.misc.abelast.length-1
                    ]
                })
                uO.misc.abelast.minus({
                    index:uO.misc.abelast.length-1
                })
            }
            dev_obj.finish(dev_obj)
            //why use dev_obj when you know where it is LOL
            // uO.scope.minus(   {index:rBMisc_0_i}   )
        })
    }// make body data collection easy
        
    function preFillForm(   dev_obj   ){
        //findings
            //i find that form items are not dependent on the number of children, the form can have children than containing the input
            //we are forced to make an outside variable just to access objects we must ask how to access these only using the uO
            
        var preFillForm_dev_obj = uO.args.add(   {value:uO.iterify(   {iterify:dev_obj}   )   }   ) // decided to replace or make room on addition
        var pFFATI_0_i = uO.scope.add(   {value:uO.allTags.add(   {value:uO.iterify(   {iterify:dev_obj.allTags}   )}   )}   )
        uO.sort({
            target: uO.allTags[uO.scope[pFFATI_0_i]],
            algorithm:'bubble',
            compare:function(   dev_obj   ){
                
                
                
                if(   dev_obj.val[dev_obj.index].childElementCount > dev_obj.val[dev_obj.index+ 1].childElementCount    ){
                    
                    
                    return 'true'
                    
                    
                }
                
                
            },
            result:'true'
        })
        console.group(   'making items accessible'   )
        uO.objInvloved({
            0:uO.allTags,
            1:uO.scope,
            2:pFFATI_0_i,
            3:uO.args
        })
        console.groupEnd()
        var pFFList_0_i = uO.scope.add(   {value:uO.misc.add(   {value:uO.iterify(   {iterify:dev_obj.list}   )}   )}   )
        var pFFLook_0_i = uO.scope.add(   {value:uO.misc.add(   {value:uO.iterify(   {iterify:dev_obj.look}   )}   )}   )
        uO.eCSearch({
            list:pFFList_0_i,
            look:pFFLook_0_i,
            aT: pFFATI_0_i,
            all:'true'
        })
        console.group(   'at this point the uO has meaningful values for all arguments from the init fn'   )
        // uO.objInvloved({
        //     0:uO.allTags[uO.allTags.eCSST],
        // })
        console.groupEnd()
        var pFFST_0_i =  uO.scope.add(   {value:uO.selectTags.abelast[0]}   )
        uO.selectTags.abelast.minus(   {index:0}   )
        uO.packIt({
            order:uO.selectTags[uO.scope[pFFST_0_i]],
            directions:{
                            0:'gather element',
                            1:'match',
                            length:2
                        },
            fill:'value',
            write:'valuePhrase'
        })
        // should also make sure value is not empty
        ///////////////////////////////////////////////////////////////////////////
        console.group(   'answers'   )
        var pFFMisc_0_i = uO.scope.add(   {value:uO.misc.add(   {value:uO.iterify(   {iterify:['tagName','className','hidden','id']}   )}   )}   );
        var pFFMisc_1_i = uO.scope.add(   {value:uO.misc.add(   {value:uO.iterify(   {iterify:['input','select','textarea','option']}   )}   )}   );
        var pFFFL_0_i = {
            //these for spots, the amount that claims the element, the objects related properties the family and the string matching all help determine where this object belongs
            //POINT VALUE the spot where we add points
            forLoop_0_i:0,
            forLoopLength:uO.selectTags[uO.scope[pFFST_0_i]].length,
            fn:function(   dev_obj   ){
                console.group(   'asking questions about the object'  )
                    /*
                        what is the framework?
                        turn all string into lowercase
    
                    */
                    uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = 0 // used to deterime if valuePhrasre belongs in the elements value
                    console.log(  'what is the result', uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                    console.log(   uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value,uO.misc[uO.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   )
                    
                    /*suspects to see if different values were put in the same spot*/
                    if(   uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() !== uO.misc[uO.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                    
                    
                        console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                        var pFFBOOL_0_i = {0:false}
                        pFFBOOL_0_i = uO.severalOr({
                            compTo: uO.selectTags[uO.scope[pFFST_0_i]].eCSNS.currentNumber[pFFFL_0_i.forLoop_0_i],
                            compAgn: uO.selectTags[uO.scope[pFFST_0_i]].eCSNS.currentNumber,
                            boolean:pFFBOOL_0_i,
                            which:0,
                            how:function(   dev_obj   ){
                                
                                
                                if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                    
                                    
                                    if(   uO.selectTags[uO.scope[pFFST_0_i]].suspects === undefined   ){
                                    //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                    
                                        uO.selectTags[uO.scope[pFFST_0_i]].suspects = uO.iterableObject()
                                        uO.selectTags[uO.scope[pFFST_0_i]].suspects.add(   {value:dev_obj.index}   )
                                        //see i wrote for the future here
                                        
                                    }
                                    
                                    
                                    else if(   uO.selectTags[uO.scope[pFFST_0_i]].suspects !== undefined   ){
                                        
                                    
                                        uO.selectTags[uO.scope[pFFST_0_i]].suspects.add(   {value:dev_obj.index}   )
                                        
                                        
                                    }
    
    
                                }
                                
                                
                                console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                
                            },
                            result:'a'
                        })
                        //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                        console.log(   'our suspects',uO.selectTags[uO.scope[pFFST_0_i]].suspects  )
                        
                        
                    }
                    /**/
                    /*
                        element
                        point system
                        1 for the correct tag name in pFFMisc_1_i
                        1 for being shown on the webpage,hidden true
                        1 for each class name met by partialMatch
                        1 for each ID name met by partialMatch
                        1 for matching string
                    */
                    
                    console.group(  'what is the element'   )
                        console.log(   'things I should know'   )
                        var pFFFL_1_i = { //looking at the elements related properties
                            forLoop_0_i:0,
                            forLoopLength:uO.misc[uO.scope[pFFMisc_0_i]].length,
                            fn:function(   dev_obj   ){
                                console.log(   [   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   )
                                
                                
                                if(   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'tagName'   ){
                                
                                                                                                
                                    var pFFBOOL_1_i = {0:false}
                                    pFFBOOL_1_i = uO.severalOr({
                                        compTo: uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].toLowerCase(),
                                        compAgn:uO.misc[uO.scope[pFFMisc_1_i]],
                                        boolean:pFFBOOL_1_i,
                                        which:0
                                    })
                                    console.log(   pFFBOOL_1_i   )
                                    
                                    
                                    if(   pFFBOOL_1_i[0]   ){
                                        
                                        //POINT VALUE
                                        uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                     
                                            
                                    }
                                    
                                    
                                }
                                
                                
                                if(   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'hidden'   ){
                                    
                                    
                                    if(   !uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   ){
                                        
                                        
                                        uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                        
                                        
                                    }
                                        
                                }
                                
                                
                                if(   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'className'   ){
                                    /*the spaces between are classNames I will apply partial match here */
                                    
                                    uO.misc[uO.scope[pFFMisc_0_i]].classes = uO.iterify(   {iterify:uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].split(' ')}   )
                                    uO.misc[uO.scope[pFFMisc_0_i]].classes.add(   {value:'Linksoed'}   )
                                    /**/
                                    /*to loop through classNames and find a partial match*/
                                    var pFFBOOL_2_I = {0:false}
                                    pFFBOOL_2_I = uO.severalOr({
                                        compTo: uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                        compAgn: uO.misc[uO.scope[pFFMisc_0_i]].classes,
                                        boolean:pFFBOOL_2_I,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            uO.partialMatch({
                                                compTo:dev_obj.compTo,
                                                compAgn:dev_obj.compAgnI,
                                                range:8,
                                                spaces:2,
                                                gap:2,
                                                trailer:0,
                                                type:'string',
                                                cCase:'toLowerCase'
                                            })
                                            
                                            
                                            if(   uO.misc[uO.misc.length-1].satisfy   ){
                                                
                                                
                                                uO.misc.minus(   {index:uO.misc.length-1}   )
                                                uO.misc.abelast.minus(   {index:uO.misc.abelast.length-1}   )
                                                //POINT VALUE
                                                uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                
                                                
                                            }
                                            
                                            
                                            uO.misc.minus(   {index:uO.misc.length-1}   )
                                            uO.misc.abelast.minus(   {index:uO.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   pFFBOOL_2_I   )
                                    /**/
                                    
                                }
                                
                                
                                if(   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'id'   ){
                                    /*the spaces between are idNames I will apply partial match here */
                                    
                                    uO.misc[uO.scope[pFFMisc_0_i]].ids = uO.iterify(   {iterify:uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].split(' ')}   )
                                    
                                    /**/
                                    /*to loop through classNames and find a partial match*/
                                    var pFFBOOL_3_I = {0:false}
                                    pFFBOOL_3_I = uO.severalOr({
                                        compTo: uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                        compAgn: uO.misc[uO.scope[pFFMisc_0_i]].ids,
                                        boolean:pFFBOOL_3_I,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            uO.partialMatch({
                                                compTo:dev_obj.compTo,
                                                compAgn:dev_obj.compAgnI,
                                                range:8,
                                                spaces:2,
                                                gap:2,
                                                trailer:0,
                                                type:'string',
                                                cCase:'toLowerCase'
                                            })
                                            
                                            
                                            if(   uO.misc[uO.misc.length-1].satisfy   ){
                                                
                                                
                                                uO.misc.minus(   {index:uO.misc.length-1}   )
                                                uO.misc.abelast.minus(   {index:uO.misc.abelast.length-1}   )
                                                //POINT VALUE
                                                uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                debugger
                                                
                                            }
                                            
                                            
                                            uO.misc.minus(   {index:uO.misc.length-1}   )
                                            uO.misc.abelast.minus(   {index:uO.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   pFFBOOL_3_I   )
                                    /**/
                                    
                                }
                                
                                
                                console.log(   uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   uO.misc[uO.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   )
                                
                            },
                            args:{}
                        }
                        uO.forLoop(   pFFFL_1_i   )
                        console.log(   'is it found is its strings'   )
                        var pFFBOOL = {0:false}
                        pFFBOOL = uO.severalOr({
                            compTo: uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                            compAgn: uO.misc[uO.scope[pFFLook_0_i]],
                            boolean:pFFBOOL,
                            which:0,
                            how:function(   dev_obj   ){
                                
        
                                if(   uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[dev_obj.compAgnI[0]].indexOf(   dev_obj.compTo   ) !== -1   ){
                                    
                                    
                                    return 'a'
                                    
                                    
                                }
                                
                                
                            },
                            result:'a'
                        })
                        
                        
                        if(   pFFBOOL[0]   ){
                            
                            
                            uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                            
                            
                        }
                        
                        console.log(   'element point value',uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                    console.groupEnd()
                    
                    
                    /*
                    {
                        1. is this an input
                            <input>     -<html>
                            <textarea>  -<head>
                            <select>    -<title>
                            <optgroup>  -<body>
                            <option>    -<h1 -h6><p>
                            <label>     -<br>
                            <a>         -<hr>
                            <link>      -<abbr>
                            <div>       -<address>
                                        -<b>
                                        -<bdi>
                                        -<bdo>
                                        -<blockquOte>
                                        -<center>
                                        -<cite>
                                        -<code>
                                        -<del>
                                        -<dfn>
                                        -<em>
                                        -<font>
                                        -<i>
                                        -<ins>
                                        -<kbd>
                                        -<mark>
                                        -<meter>
                                        -<progress>
                                       -<q>
                                       -<rp>
                                       -<rt>
                                       -<ruby>
                                       -<s>
                                       -<samp>
                                       -<small>
                                       -<strike>
                                       -<strong>
                                       -<sub>
                                       -<sup>
                                       -<template>
                                       -<time>
                                       -<tt>
                                       -<u>
                                       -<var>
                                       -var
                                       -<wbr>
                                       -<form>
                                       -<fieldset>
                                       -<legend>
                                       -<datalist>
                                       -<output>
                                       -<frame>
                                       -<frameset>
                                       -<noframes>
                                       -<iframe>
                                       -<img>
                                       -<map>
                                       -<area>
                                       -<canvas>
                                       -<figcaption>
                                       -<figure>
                                       -<picture>
                                       -<svg>
                                       -<audio>
                                       -<source>
                                       -<track>
                                       -<video>
                                       -<nav>
                                       -<ul>
                                       -<ol>
                                       -<li>
                                       -<dir>
                                       -<dl>
                                       -<dt>
                                       -<dd>
                                       -<table>
                                       -<caption>
                                       -<th>
                                       -<tr>
                                       -<td>
                                       -<thead>
                                       -<tbody>
                                       -<tfoot>
                                       -<col>
                                       -<colgroup>
                                       -<style>
                                       -<span>
                                       -<header>
                                       -<footer>
                                       -<main>
                                       -<section>
                                       -<article>
                                       -<aside>
                                       -<details>
                                       -<dialog>
                                       -<summary>
                                       -<data>
                                       -<head>
                                       -<meta>
                                       -<base>
                                       -<basefont>
                                       -<script>
                                       -<noscript>
                                       -<applet>
                                       -<embed>
                                       -<object>
                                       -<param>
                    }
                    */
                    /*
                        to identiy the parent there is
                            offsetParent,parentElement,parentNode
                            
                            The offsetParent property returns the closest element in the ancestors hierarchy that is positioned.
                            The parentNode property simply returns the immediate parent element.
                        point system for parent
                        1 if it has a parent
                        1 if the parent is a div or label
                        1 for each className is met by partialMatch
                        1 for each ID name met by partialMatch
                    */
                    console.group(   'what is its parent '   )
                        /*the parent we will look at looking at all parent types*/
                         var pFFST_1_i = uO.scope.add(   {value:uO.selectTags.add(   {value:uO.iterableObject()}   )}   )
                         uO.selectTags[uO.scope[pFFST_1_i]].add(   {value:uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent}   )
                         uO.selectTags[uO.scope[pFFST_1_i]].add(   {value:uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement}   )
                         uO.selectTags[uO.scope[pFFST_1_i]].add(   {value:uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode}   )
                         console.log(   uO.selectTags[uO.scope[pFFST_1_i]]   )
                        /**/
                        var pFFFL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength:uO.selectTags[uO.scope[pFFST_1_i]].length,
                            fn:function(   dev_obj   ){
                                /*if the element has a parent*/
                                if(   uO.selectTags[uO.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ] !== null   ){
                                    
                                    
                                    uO.selectTags[uO.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                    
                                    
                                }
                                 /**/
                            },
                            args:{}
                        }
                        uO.forLoop(   pFFFL_2_i   )
                    console.groupEnd()
                    throw(   'e'   )
                    console.log(   'who are its siblings'   )
                    console.group(   'who are its children'   )
                    /*
                        any clues that perhaps the children might be the key value to fill
                    */
                    console.groupEnd()
                console.groupEnd()
                
            },
            args:{}
        }
        uO.forLoop(   pFFFL_0_i   )
        console.groupEnd()
        ///////////////////////////////////////////////////////////////////////////
        throw('e')
    }
    
    function interrogation(   dev_obj   ){
        //throw the result in here later
        }// used to perform advanced questions on results that can not be simply verified
                
    
                // preFillForm({
                //     // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                //     allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
                //     list:{
                //         'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                //         'Website':'https://ualbanyasist.github.io/',
                //         'How did you hear about this job?':'Linkedin',
                //         'Phone': '$80,000',
                //         'Cover Letter':'as'
                //         },
                //     look:{ 'innerHTML':null,'innerText':null,'textContent':null}
                // })
        
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
    
    
    function checkingAllValues(   dev_obj   ){ //
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
    try{
    module.exports  = uO
    }
    catch(e){
        
    }
    