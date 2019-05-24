update numberSystem when digits get modified in the actual they are respectively reflected in the .digits

                function wait(   ms   ){
                   var start = new Date().getTime();
                   var end = start;
                   while(   end < start + ms   ) {
                     end = new Date().getTime();
                   }
                }
        // if node use exports or figure how to get external modules in here
        
        //when using ultraObject rmbr all your modules are mesed up replace ultraObject with uO
        
        // an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
        // for meaningful use, every property purpose is easily availble to each other and you can have several of them
        
        //if your find problems search PROBLEMS to see whats going on
        
        // when you see /* node mode choice thread [theead name]*/ it means an important piece of code is not used
        
        // finshed products should be left in the ultraObject
        
        // customization paramters should be passed among microservices
        
        // if another API just needs a primitive, just provide it no need for an iterable Object
        
        //ultraObject is designed to recover from the unexecpted make sure all needed values have defaults the cover all possibilites the microservice may run into
        
        //so you ultraObject should be about performance not vaildation because when there is validations performance is compromised instead one module should be dedicated to validation

        
        //for every single function call its arogumetns must be held in ultraObject.args when the function dies or its args are not needed,
        //they are taken from their place in the args. they are each put into another itO with an index just in case of recusion
            // when  an item from args is needed, it is put into a scope and added to a meanigunful property representation name in the ultraObject,
            //there will be a function implemented if the developer needs a copy or changes can reflect in the args
            
        //var const and let in function must only represent the index of and item coming from ultraObject.scope
        
        //to access items you must get it though the index in the scope
        // if a outer function needs a scope location from the inner function which started in the inner function use, .itO.abelast which is an itO in order to pull it out
        
        //use [   item   ], where item is a whole compact piece of code not an iteration or property
            // the space used between the brakets indicats if it take that braket group  and place in the consle it returns something meaningful to the function environment and  a standalone value
        //use  (   item   ) always unless there is nothing there or its multiline
        //function temp items should not be in the target object but  in the object the function uses to manipulate the target object. unless the fn does not use a temp object
        /*
            ex
            obj
            fn increase(   dev_obj   ){
                ...
                    var a = ultraObject.(...)
                    a shoud go on dev_obj not in the actual object because oce the object is made the scaffolding should be thrown  away
                ...
            }
        */
        // all functions should perform comparision one at the time this allows for more
        // the inside fn adds meaning the outside decides whether to take them out
            
        // if a function has flow like partialMatch all uO.itO should be added to the scope and taken out of the scope upon completion
            //it should be made known to the developer how to access them in the abelast
            
        // send in the target to a function rather than how to access the target when you are not sure you need to access it from somewhere else, because I may have to access it from anywhere. When you bring them in, place them as a property of antoher uO.itO, or an another associated object
        
        // if a function is to be used on the same uO.itO again such as numberSystem, the developer must tell the function where the specifi uO.itO is as it expect to work with only one type of itO
        
        // pass the item the function needs to a function, becuase what if the item path changes, this does not apply for specific functions looking for the specific itO respective such as numberSystem, code based on meaning not module
        
        // also  function should specify what they are receiving until you come up with a function that converts any type into the type you want which will look like a massive data table, but consider which times are approppriate
        
        //is {}[] allowed in ES5 ??
        //should items be accessed through the ultraObject because mabye sometimes we cannot call it as a method
            //should we stick to property access, since its easier fro everyone to have access
        // templates
        // FL_0_i for loop object in the purpose action
        // BOOL for boolean object
            // BOOL_0_i for more
        // SA for a selectAll object
        // O stands for Object for this functionality like thisfn has thisfnO
        // itO stands for iterableObject
        // MB_0_i stands for memory bank used when its hard to contain needed data inside a nested function. its also used as the brain of the API to access every related to its project purpose
        /* [function abbrevation][template] for a naming conveation of items in your API
            for nested function
            [function abbrevation]_[[function abbrevation]...][template]
            when adding the args to ultraObject.args
            [function full]_[[function full]...]_dev_obj
        */
        // for the remiidify API
            // not sure if calls should be functions or methods which is easier for ultraObject to survivce
        /*
        var FL_0_i = {
            forLoop_0_i:0,
            forLoopLength:.length,
            fn:function(   dev_obj   ){
               
            },
            args:dev_obj //{}
        ultraObject.forLoop(   FL_0_i   )
        }
        */
        /*
            var checkingAllValuesBOOL = {0:false}
            checkingAllValuesBOOL = ultraObject.severalOr({
                compTo: 'match',
                compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
                boolean:checkingAllValuesBOOL,
                which:0
            })
            console.log(   checkingAllValuesBOOL   )
        */
         
        //
        
        // function (   dev_obj   ){
        
        //     /*adding the dev_obj to args*/ //{
        //     var _dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
        //     // }  /**/
        
        //     if(   dev_obj !== undefined   ){
            
        //     }
            
            
        // }
        
        /*
             /*[meaning block descritpion]*/ //{
             // }  /**/
        //
        // __poss stands for possiblity
        /*
        items that should be placed in the ultraObject
            finished products that are to be used by other API, they shold be stored in an iterableObject and used using iterableObject methods
            all objects with a specific purpose should be stored in seperate indexes in an itO
            functions
            absolute primitive values like Infinity or XMLHTTPRequest
                
         */
        function ultraObjectReset(   dev_obj   ){
            //I know about ES6 but this is an ultraObject right???
            return {
            eventName:"",           //wants a DOMString event name
            event_obj:undefined,              //wants an Event
            DOM_child:iterableObject(), // wants a DOM element
            addEventListener:addEventListener, //  dev_obj.fn is used for 1st party dev to add their custom function to the listener
            passing_args: function(   dev_obj   ){
                console.log(arguments)
            }, // use this to see parameters from functions that have something to offer
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
            
            allTags:iterableObject(), // represents serach range for the ultraObject concerning elements
            selectTags:iterableObject(), // represents a set of chosen items
            eCSearch:eCSearch,
            
            isAbelast:isAbelast,
            isArray:isArray,
            isObject:isObject,
            isDOMElement:isDOMElement,
            isPrimitive:isPrimitive,
            isInt:isInt,
            isNodeList:isNodeList,
            isitO:isitO,
            isString:isString,
            isFunction:isFunction,
            
            elementFound:iterableObject(), // holds found elements needed by the ultraObject
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
            // to access  ultraObject.allTags[ultraObject.scope[pFFATI_0_i]]
            args:iterableObject(), // representing the dev_obj from the project purose
        
            sort:sort,
            swap:swap,
            partialMatch:partialMatch,
            interrogation:interrogation,
            qC:iterableObject(),
            
            misc:iterableObject(), //holds finished products with which we cannot assign a name
            fG:iterableObject(),
            numberSystem:numberSystem,
            nS:iterableObject(),
            reqBody:reqBody
    
            
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
                
                
                
                ultraObject.DOM_child[0].addEventListener(   ultraObject.eventName,fn   )
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
                 
                
                if(   ultraObject.isObject({type:dev_obj.type}) && dev_obj.type.ownerDocument !== undefined   ){
                    
                    
                    return true
                    
                    
                }
                
                
             }
             
             
             return false
        }
        function isDOMCollection(   dev_obj   ){
            //.type the item in question
            // possible choices are HTMLCollection and more how would I go about this obviously I should make this sepearte but how
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
        function isAbelast(   dev_obj   ){
            
            
            if(   dev_obj.type !== undefined   ){
                
                
                if(   dev_obj.type.isAbelast !== undefined && dev_obj.type.isAbelast() === 'true'   ){
                    
                    
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
        function isFunction(   dev_obj   ){
            //should check for string object and string primitive
            //. type item in questions
            
            if(   dev_obj !== undefined   ){
                
                 
                if(   typeof dev_obj.type === 'function'   ){
                    
                    
                    return true
                    
                    
                }
                
                
            }
            
            
            return false
                
        }
        function eCSearch(   dev_obj   ){
            /*
                abelasts
                1 for select tags
            
            */
            
            // .list, desired items
            // .look spot where to look and assert for list, if an object the items should be keys
            // .same  indicator to look at the same set of values
            // .order iterableObject on how to create the numbersystem
            // make eCSST an iterableObject
            // look through innerHTML, innerText, textContext
            // holds the found elements that meet the query in ultraObject.elementFound
            
            
            /*[addding the dev_obj  to ultraObject.args ]*/ //{
            var eCSearch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            // }  /**/
            
            
            if(   dev_obj.sT === undefined   ){
                
                /*[the object handling everything with the choosing tags in addition the numberSystem ]*/ //{
                var eCSSelectTags_0_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS = ultraObject.iterableObject()
                ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[eCSSelectTags_0_i]}   )
                // }  /**/
                
            }
            
            /*[if the developer already had the function make the selectTags]*/ //{
            else if(    ultraObject.isInt(   {type:dev_obj.sT}   )   ){
                
                
                var eCSSelectTags_0_i = dev_obj.sT
                
                
            }
            // }  /**/
                
            console.group(   'items needed to search for elements based on keywords'   )
            ultraObject.objInvloved({
                0:ultraObject.allTags[ultraObject.scope[dev_obj.aT]],
                1:ultraObject.misc[ultraObject.scope[dev_obj.list]],
                2:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]
            })
            console.groupEnd()
            /* look at each requirement preFillForm must fill in the document by the end user*/ //{
            var eCSearchFL_0_i = {
                forLoop_0_i:0,
                forLoopLength: ultraObject.misc[ultraObject.scope[dev_obj.list]].length,
                fn:function(   dev_obj   ){
                    /*it should start with the first element if none is given*/ //{
                    var indexSelect = 0
                    // }  /**/
                    
                    /* if I want to go ahead anad actually add one to our numberSystem*/ //{
                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]] !== undefined   ){
                        
                        /* this means i made or in the process of making the nS*/ //{
                        if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS !== undefined   ){
                            
                            /* this means that I have made that specific digit*/ //{
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
                                
                                /* what element in the document preFillForm will consider for the respecitve list item*/ //{
                                indexSelect = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0]
                                console.log('it tells me to start here', ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0])
                                // }  /**/
                                           
                        
                            }
                            // }  /**/
                            
                        }
                        // }  /**/
                            
                    }
                    // }  /**/
                    
                    /* where every tag is looked at in relation to the respective list*/ //{
                    var eCSearchFL_1_i = {
                        forLoop_0_i:indexSelect,
                        forLoopLength:ultraObject.allTags[ultraObject.scope[dev_obj.aT]].length,
                        fn:function(   dev_obj   ){
                            /* possible places to look to fill in the element to satisfy end users query*/ //{
                            var eCSearchFL_2_i = {
                                forLoop_0_i:0,
                                forLoopLength:ultraObject.misc[ultraObject.scope[dev_obj.look]].length,
                                fn:function(   dev_obj   ){
                                    
                                    
                                    if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ] !== undefined   ){
                                        //means if the comparison from the element property actually produces a string PROBLEM, if all in dev obj look is undefined but dev-obj.all = true the element could be skipped
                                            
                                        if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ].indexOf(   ultraObject.misc[   ultraObject.scope[dev_obj.list]   ][eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1 || dev_obj.all  === 'true'  ){
                                            //this must mean it found a match amoung title of user input and something in the string of the property of the element or were looking at every value and using advanced techniques to invesitage our answers
                                            
                                            
                                            if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i] === undefined   ){
                                                // the start value for the number system it means a NS is not available
                                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ]
                                                /*creating the digits and metadata for the numberSystem*/ //{
                                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.ready = 'false'
                                                // ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ]['query'+eCSearchFL_0_i.forLoop_0_i] = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].add(   {value:ultraObject.iterableObject()}   )
                                                // ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].minus(   {index:ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ]['query'+eCSearchFL_0_i.forLoop_0_i]}   )
                                                ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].abelast.add(   {value:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].add(   {value:ultraObject.iterableObject()}   )   }   )
                                                var ecsNSI = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS.add(   {value:ultraObject.iterableObject()}   )
                                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoop_0_i}   )
                                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[ecsNSI].add(   {value:eCSearchFL_1_i.forLoopLength+1}   )
                                                // }  /**/
                                                
                                                
                                            }
                                            
                                            /*adjusting this digits itO to that of the numberSystem */ //{
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].eCSNS[eCSearchFL_0_i.forLoop_0_i][0] = eCSearchFL_1_i.forLoop_0_i
                                            //helps change the number when the match is found so the NS doesnt take over
                                            //if problems look here idk if it supposed to follow the nSM or not
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i]
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][eCSearchFL_1_i.forLoop_0_i][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                            ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].abelast[eCSearchFL_0_i.forLoop_0_i]   ].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                            // }  /**/
                                            
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
                            // }  /**/
                        },
                        args:dev_obj,
                    }
                    return ultraObject.forLoop(   eCSearchFL_1_i   )
                    // }  /**/
                },
                args:dev_obj,
            }
            ultraObject.forLoop(   eCSearchFL_0_i   )
            // }  /**/
            
            
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
            debugger
            ultraObject.scope.minus(   {index:eCSSelectTags_0_i}   )
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
    
        function removeCN(   dev_obj   ){// removes specified childNodes from the DOM
            
            
            
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
                ultraObject.forLoop(   objectLengthFL_0_i   )
            
        }
        function iterableObject(   dev_obj   ){
            //. value the actual item your are adding to the object
            // .stop for the abelast
            
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
                        
                        
                        delete iterableObjectO[dev_obj.index]
                        iterableObjectO.resetLength()// resets the length
                        var iterableObjectFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength:iterableObjectO.length,
                            fn:function(   dev_obj   ){
                                
                                /*fixing the array part of the itO*/ //{
                                if(   dev_obj.index <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.length   ){ // at that point something must be missing
                                    
                                    
                                    iterableObjectO[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]
                                    delete iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]//problems look here usually wants a variable or primitive to properly delete
                                    
                                    
                                }
                                // } /**/
                                
                            },
                            args:{
                                index:dev_obj.index
                                }
                        }
                        ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                        
                        
                    }
                    
                    
                    if(   dev_obj.value !== undefined   ){
                        
                        
                        var iterableObjectO_BOOL = {0:false}
                        iterableObjectO_BOOL = ultraObject.severalOr({
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
                                        delete iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1 ]//problems look here usually wants a variable or primitive to properly delete
                                        
                                        
                                    }
                                    
                                    
                                },
                                args:{}
                            }
                            ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                            
                            
                            if(    dev_obj.correct === 'false'   ){
                                
                                
                                //leave the index alone
                                
                                
                            }
        
                        }
                        
                        
                    }
                    
                    
                },// removes an item from an array if its there
                resetLength:function(   dev_obj   ){
                    ultraObject.objectLength({
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
                                
                                
                                if(   dev_obj.index <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                    
                                    
                                    iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]
                                    delete iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]//problems look here usually wants a variable or primitive to properly delete
                                    
                                    
                                }
                            },
                            args:{
                                index:dev_obj.index
                                }
                        }
                        ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                        
                        
                    }
                    
                    
                    if(   dev_obj.value !== undefined   ){
                        
                        
                        var iterableObjectO_abelast_BOOL = {0:false}
                        iterableObjectO_abelast_BOOL = ultraObject.severalOr({
                                    compTo: dev_obj.value,
                                    compAgn: iterableObjectO.abelast,
                                    boolean:iterableObjectO_abelast_BOOL,
                                    which:0
                        })
                        
                        
                        if(   iterableObjectO_abelast_BOOL[0]   ){
                            
                            
                            var iterableObjectTDI = iterableObjectO_abelast_BOOL.spot // index to remove
                            delete iterableObjectO.abelast[iterableObjectTDI]
                            iterableObjectO.abelast.resetLength()
                            var iterableObjectFL_1_i = {
                                forLoop_0_i:0,
                                forLoopLength:iterableObjectO.abelast.length,
                                fn:function(   dev_obj   ){
                                    
                                    
                                    if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                        
                                        
                                        iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1]
                                        delete iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1 ]//problems look here usually wants a variable or primitive to properly delete
                                        
                                        
                                    }
                                    
                                    
                                },
                                args:{}
                            }
                            ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                            
                            
                            if(    dev_obj.correct === 'false'   ){
                                
                                
                                //leave the index alone
                                
                                
                            }
        
                        }
                        
                        
                    }
                    
                    
                },// removes an item from an array if its there
                resetLength:function(   dev_obj   ){
                    ultraObject.objectLength({
                            val:iterableObjectO.abelast,
                            getLen:function(   dev_obj   ){
                                
                                
                                if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                    
                                    
                                    return 'true'
                                    
                                    
                                }
                                
                                
                            },
                            result:'true'
                    })
                }, //if corrputed resets the lengths
                isAbelast:function(   dev_obj   ){
                    return 'true'
                }//confirms if its an itO, make it refuse to bind
             }  // make a deep copy if outer function do not have access to scope from the inner functions, the inner function places the required info heree
             return iterableObjectO
        } //retuns or converts an object with which you can easily iterate but this is an array accroding to chrome 72
        function iterify(   dev_obj   ){
            //. iterify the item to turn into an iterableObject
        
            if(   dev_obj !== undefined   ){
                
                
                var iterableO = ultraObject.iterableObject()
                
                
                if(   ultraObject.isArray(   {type:dev_obj.iterify}   ) || ultraObject.isNodeList(   {type:dev_obj.iterify}   )   ){
                    
                    
                    var iterableFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.iterify.length,
                        fn:function(   dev_obj   ){
                            iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                        },
                        args:{iterify:dev_obj.iterify}
                    }
                    ultraObject.forLoop(   iterableFL_0_i   )
                    
                    
                }
                
                
                else if(   ultraObject.isObject(   {type:dev_obj.iterify}   )   ){
                    //places the key and value inside every index , So 0,1 represents the key and 1 the value
                    
                    var iterableArr = Object.entries(   dev_obj.iterify   )
                    var iterableFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:iterableArr.length,
                        fn:function(   dev_obj   ){
                            iterableO.add({
                                value:ultraObject.iterify({iterify:iterableArr[iterableFL_0_i.forLoop_0_i]})
                            })
                        },
                        args:{iterify:dev_obj.iterify}
                    }
                    ultraObject.forLoop(   iterableFL_0_i   )
                    
                    
                }
                
                
                else if(   ultraObject.isPrimitive(   {type:dev_obj.iterify}   )   ){
                    //for strings it neatly splits it into an itO
                    
                    var iterableFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.iterify.length,
                        fn:function(   dev_obj   ){
                            iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                        },
                        args:{iterify:dev_obj.iterify}
                    }
                    ultraObject.forLoop(   iterableFL_0_i   )
                    
                    
                }
                
                
                return iterableO
                
                                
            }
            
            
        }//turns anything into an iterableObject
        function packIt(   dev_obj   ){
            /*
                abelast
                1 for args
            */
            //for the the .fill and .write it expects them to be prefined in an iterable for .fill this must be found as a property in of the items in packItSA for .write this must be fount as a property in on of the items for dev_obj.order
            /*
                 .order what this fn is supposed to fill right now takes objects or itO is needs to find out what it is
                 .directions, what its filling it with
                    match use match map and match keys and fills values
                    gather use ultraObject.selectAll to gather needed values to pack
                        element, return only elements from the order
                 .matchMap if .directions === match map keys and fill values
                 .fill  where to place the items
                 .write what to place for each fill value
            */
            var packIt_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            ultraObject.args.abelast.add(   {value:packIt_dev_obj}   )
            
            
            if(   dev_obj !== undefined   ){
                  
                    
                var packItSA //for packIT selectall
                var packItFL_0_i ={
                    forLoop_0_i:0,
                    forLoopLength:dev_obj.directions.length,
                    fn:function(   dev_obj   ){
                        
                        
                        if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'match'   ){
                            console.group(   'an attempt to fill items'   )
                                ultraObject.objInvloved({
                                        0:packItSA,
                                        1:dev_obj.order,
                                        2:ultraObject.subGroupsO
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
                            ultraObject.forLoop(   packItFL_1_i   )
                            
                            
                        }
                        
                        
                        if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                                
                            
                            if(    ultraObject.isObject(   {type:dev_obj.order}   )   ){
                                
                                
                                packItSA = ultraObject.selectAll({
                                    target:dev_obj.order,
                                    typeOnly : ultraObject.iterify(   {iterify:['element']}   ),
                                    length:Object.keys(   dev_obj.order   ).length
                                })
                                ultraObject.misc.minus(   {index:ultraObject.misc.length -1}   )
                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length -1}  )
                                ultraObject.fG.minus(   {index:ultraObject.fG.length -1}   )
                                ultraObject.fG.abelast.minus(   {index:ultraObject.fG.abelast.length -1}  )
                                
                            }
                            
                            
                            else if(   ultraObject.isitO(   {type:dev_obj.order}   )     ){
                            
                                
                                packItSA = ultraObject.selectAll({
                                    target:dev_obj.order,
                                    typeOnly : ultraObject.iterify(   {iterify:['element']}   ),
                                    length:dev_obj.order.length
                                })
                                ultraObject.misc.minus(   {index:ultraObject.misc.length -1}   )
                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length -1}  )
                                ultraObject.fG.minus(   {index:ultraObject.fG.length -1}   )
                                ultraObject.fG.abelast.minus(   {index:ultraObject.fG.abelast.length -1}  )
                                
                                
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
                ultraObject.forLoop(   packItFL_0_i   )
                
            }
            
                
        } //fills anything as you tell it, use pack to avoid missspelling
        // an endpoint here means what the selectAll is lookng for in the object
    
    /*
        setting up functon group
            this is so selectAll can include a varity of data type endpoints from the developer
    */
    
    
     /*
        actual function used to determine data type endpoint
            I refer to this as call i will change it to calls to avoid future problems
    */
        function selectAll(   dev_obj   ){
                /*
                    abelast : 1 for misc
                                1 for fG
                */
                // this function also returns the group ordering if looked for nested items
                //.target item to get all values from must be an itO or an object
                // .typeOnly, what specific values were looking for
                
                
                            
                if(   dev_obj !== undefined   ){
                    
                    
                    var selectAll_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    ultraObject.args.abelast.add(   {value:selectAll_dev_obj}   )
                    
                    /*adding the first misc holds the function that test for the data type endpoint*/ //{
                    var selectAllMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.misc.abelast.add(   {value:ultraObject.scope[selectAllMisc_0_i]}   )
                    // }  /**/
                
                    /*setting the booleans for the datatype*/ //{
                    
                    /*setting up functon group*/ //{
                    var selectAllFG_0_i = ultraObject.scope.add(   {value:ultraObject.fG.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.fG.abelast.add(   {value:ultraObject.scope[selectAllFG_0_i]}   )
                    // }  /**/
                    
                    ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ].add({
                        value:function(   dev_obj   ){
                            var selectAllFL_1_i = {
                                forLoop_0_i:0,
                                forLoopLength:dev_obj.typeOnly.length,
                                fn:function(   dev_obj   ){
                                    
                                    /* how subGroups should complete a group */ //{
                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint = dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ]
                                    // }  /**/
                                    
                                    /* this checks for the desired data type from the developer */ //{
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'array'    ){
                                        
                                        /* this allows selectAll to test against data type endpoints same for each if statement*/ //{
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isArray(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        // }  /**/
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'element'    ){
                                        
                                        
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isDOMElement(   {type:dev_obj.type}   )   ){
                                                    
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'function'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isFunction(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'int'   ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isInt(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'nodelist'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isNodeList(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'object'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isObject(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'primitive'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isPrimitive(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'string'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isString(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'itO'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isitO(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                },
                                args:dev_obj,
                                bubble:'true'
                            }
                            ultraObject.forLoop(   selectAllFL_1_i   )
                        }
                    })
                    ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ][0](   {typeOnly:dev_obj.typeOnly}   )
                
                    /*actual function used to determine data type endpoint*/ //{
                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls = function(   dev_obj   ){
                        var selectAllFL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength: ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].length,
                            fn:function(   dev_obj   ){
                                
                                /*if it has found a data type endpoint bubble up */ //{
                                if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ][   selectAllFL_2_i.forLoop_0_i   ](   dev_obj   ) === 'true'   ){
                                    
                                    
                                    return 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                
                            },
                            args:dev_obj,
                            bubble:'true'
                        }
                        return ultraObject.forLoop(   selectAllFL_2_i   )
                    }
                    // }  /**/
                    
                    // }  /**/
    
    
                    
                    if(   ultraObject.isObject(   {type:dev_obj.target}   ) || ultraObject.isitO(   {type:dev_obj.target}   )   ){
                        
                        
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
                                    
                                    /*if we have an itO an Object or the data type endpoint, record its key traversing the structure*/ //{
                                    if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'    ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                        //I cannot add it if its a primitive not an object or an itO
                                        //done like this because what if im looking for a string, this would evaluate to false and the subGroupMap would be improper
                                        
                                        ultraObject.subGroups({
                                            map:selectReturnMD,
                                            val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                        })
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                }
                                
                                catch(e){}
                                
                                
                                if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'   ){
                                    
                                    /* we have come to the desired target and the end of our search use subGroups to move on */ //{
                                    selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    ultraObject.subGroups({
                                        map:selectReturnMD,
                                        val:ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint,
                                        nextItem:'true',
                                    })
                                    // return 'premature'
                                    //this might leave some impt things behind
                                    // }  /**/
                                        
                                    
                                }
                                
                                
                                else if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                    
                                    
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
                                    1:selectReturnMD
                                })
                        console.groupEnd()
                        selectReturn.subGroupsMap = selectReturnMD
                        return selectReturn
                        
                    }
                    
                    /*taking the misc that holds the function out the scope*/ //{
                    ultraObject.scope.minus(   {index:selectAllMisc_0_i}   )
                    // }  /**/
                    
                }
                
                
        }
        function subGroups(   dev_obj   ){
            // it needs to be used when gathering path information for specifc items in a complex object, at every path open, a will be recorded here
            //.nextItem, indicates to the function that needs to find the path of the next item
                // true look for the next titem
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
                    
                    //LEFT OFF figure out why abelast still has that itO test fn
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
                        
                        
                        /* we are still loooking at children  no parents yet*/ //{
                        if(   dev_obj.map.MB_0_i.groupHeadLength <=  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                            
                            
                            dev_obj.map.MB_0_i.groupHead = dev_obj.map.MB_0_i.lastAddedIndex
                            dev_obj.map.MB_0_i.groupHeadLength = dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length
                            
                            
                        }
                        // }  /**/
                        
                        /* we are looking at the next parent*/ //{
                        else if(   dev_obj.map.MB_0_i.groupHeadLength >  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                            
                            
                            dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].unshift.apply(   dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex],dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.groupHead].slice(   0,dev_obj.map.MB_0_i.groupHeadLength -  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   )   )
                           // takes the path of coming from sub children and makes it of parents
                            
                            ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] =  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].join(   subGroupsSeperator   )
                            
                        }
                        // }  /**/
                        
                        
                        ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                        ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                        
                        
                    }
                    
                            
                }
                    
                
                dev_obj.map +=  dev_obj.val.toString()
                
                
                
            }
                
                
        }// returns ordering information about nested items
        function numberSystem(   dev_obj   ){
            /* ablelasts
                1 for nS
                1 for misc
            */
            /*
                .nS: if this is undefined the function sets aside a new numberSystem, if not it loads the one given according to the scope
                the indexes represents the digits
                .operation:
                    create - adds, modifes or removes digits from the numberSyste,
                        for every digit, we need the actual, the minx and the max
                        0 for actual, 1 for min 2 for max
                        requires a .digits or just leaves it alone
                .digits
                        an itO containing itO's that represent each digit of the nS
                        0 for the current digit
                        1 for the min amount the digit can be
                        2 for the max amount the digit can be
                        
                        this can be added all at once, or modified through out the application
                        
                .nSM, which digit comes first
                //
                    
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
                //
            */
            /*
                looping through  nSM to recreate the string!
                key:digits in ordered index: ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits[   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ]   ]
                key:the dev given nS:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]
            */
            
            /*adding the dev_obj to args*/ //{
            var numberSystem_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            // }  /**/
            
            if(   dev_obj !== undefined   ){
                
                var nSNS_2_i;
                /*we have a numberSystem to work with*/ //{
                if(   ultraObject.isInt(   {type:dev_obj.nS}   ) === 'true'  ){
                    
                    /*NS +scope */ //{
                    var nSNS_1_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                    // }  /**/
                    
                    /*this code blocks adds subtracts or modifies the existing digits*/ //{
                    if(   dev_obj.operation === 'create'   ){
                        
                        /*if the developer wants the nS to be reordered*/ //{
                        if(   ultraObject.isitO(   {type:dev_obj.nSM}   )   ){
                            
                            /* node mode choice thread performance */ //{
                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = dev_obj.nSM
                                var nSFL_1_i = {
                                    forLoop_0_i:0,
                                    forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.length,
                                    fn:function(   dev_obj   ){
                                        
                                        /*means that the end of the current nSM*/ //{
                                        if(   nSFL_1_i.forLoop_0_i >= ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length ){
                                        
                                        
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]}   )
                                            
                                            
                                        }
                                        // }  /**/
                                        
                                        /*means newnSM can replace an available value in the current nSM*/ //{
                                        else if(   nSFL_1_i.forLoop_0_i < ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length   ){
                                            
                                            
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ] = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   nSFL_1_i.forLoop_0_i   ] =  ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ]   ]
                                            
                                            
                                        }
                                        // }  /**/
                                        
                                    },
                                    args:dev_obj
                                }
                                ultraObject.forLoop(   nSFL_1_i   )
                                delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                            // }  /**/
                            
                            /* node mode choice thread validation */ //{
                            
                                // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer = dev_obj.nSM
                                
                                // /* setting some presets to test when the nSM is remade */ //{
                                
                                //     /*asking first how many digits are there*/ //{
                                //     console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length   )
                                //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length
                                //     // }  /**/
                                
                                // // }  /**/
                                
                                // /*remaking the nSM*/ //{
                                // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = ultraObject.iterableObject()
                                // var nSFL_1_i = {
                                //     forLoop_0_i:0,
                                //     forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                //     fn:function(   dev_obj   ){
                                //         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer[   nSFL_1_i.forLoop_0_i   ]}   )
                                //     },
                                //     args:dev_obj
                                // }
                                // ultraObject.forLoop(   nSFL_1_i   )
                                // console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM   )
                                
                                //     /*testing if the nSM is valid*/ //{
                                //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart  = ultraObject.iterableObject()
                                    
                                //         /*grabbing all expected indexes from the length of the NS*/ //{
                                //         var nSFL_2_i  = {
                                //             forLoop_0_i:0,
                                //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                //             fn:function(   dev_obj   ){
                                //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart.add(   {value:ultraObject.iterify(   {iterify:[nSFL_2_i.forLoop_0_i,-1]}   )   }   )
                                //             },
                                //             args:dev_obj
                                //         }
                                //         ultraObject.forLoop(   nSFL_2_i    )
                                //         // }  /**/
                                        
                                //         /*testing to see if all indexes are represented in the newnSM*/ //{
                                //         var nSFL_3_i   = {
                                //             forLoop_0_i:0,
                                //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                //             fn:function(   dev_obj   ){
                                //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   )
                                //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i   ][0]   )
                                                
                                //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ] !== undefined   ){
                                                        
                                //                         debugger
                                //                         console.log(   'its there ill note it in limitStart'   )
                                //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ][1] = -2
                                //                         console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart   )
                                                        
                                                        
                                //                     }
                                //                     // }  /**/
                                                    
                                //                 console.log('----')
                                //             },
                                //             args:dev_obj
                                //         }
                                //         ultraObject.forLoop(   nSFL_3_i     )
                                //         // }  /**/
                                        
                                //         /*checking limit start to see if nSM is valid*/ //{
                                //         var nSFL_4_i   = {
                                //             forLoop_0_i:0,
                                //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart,
                                //             fn:function(   dev_obj   ){
                                //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i][0]   ]   )
                                //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i   ][0]   )
                                                
                                //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   [   nSFL_4_i.forLoop_0_i]   ][1] === -1    ){
                                                        
                                                        
                                //                         console.log(   'this  is invalid'   )
                                //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid = 'false'
                                //                         return 'premature'
                                                        
                                //                     }
                                //                     // }  /**/
                                                    
                                //                 console.log('----')
                                //             },
                                //             args:dev_obj
                                //         }
                                //         ultraObject.forLoop(   nSFL_4_i     )
                                        
                                        
                                //         if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid === 'false'   ){
                                            
                                            
                             