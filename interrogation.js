
// we will let the developer deide if the object should be part of the siblings

/*actual use of each interrogaton function ot interrogate*/
// so if I have my own function use it or else use the interrgation module


/* use defaults instead
    when the developer needs to send information to the default module the developer needs to send an object like this
{
    ultraObejct:{
           [meaningful]:[its indexes according to the scope ]
    }
}

the developer must follow the appropriate instructions when it comes to using the module defaults, however itO's are not used here
    to give the developer freedom and make it easier to modify the arguments here a dev_obj
*/


/*tagName module
    its looking for an object dev_obj call this dev obj immedieatley according to converntion
    tagOptions
    
*/

/*
    default tagName module evalution
    compTo represents the tagName of the element in question to lowercase
        this has to be turned to a loop if we are dealing with parents and there is more than one element
        if its undefined its most likely an element
    compAgn represents the developer deesired arguments to compare the tagName against
*/

/*
    determing whether we are dealing with a element or a set of elements
    in certain cases we might get an element of a set of elements, if we have a set of elements the needed keyword is in its index
*/

/*
    needed for partialMatch className module
    the developer must provide the partialMatch objet
*/

/*
    accessing desired tagNames given by developer
    this comes in as an itO from the developer side
*/
                function interrogation(   dev_obj   ){
                    //throw the result in here later
                    /* ablelasts
                        1 for qC
                    */
                    /*
                        .proof - an array giving meaningful pieces of what to look at
                            to determine if the element is the right element that represents first name I might want proof which is
                                the element itself
                                the parent
                                the children
                                the siblngs
                            these are the object I will look at
                            each index is held in an itO
                                0. the name of the object
                                1, the actual object
                        .facts an array
                            this is how I interrogate the objects
                                valuePhrase
                                className (partialMatch)
                                id
                                tagName
                                hidden (true or false)
                            and you will specify this is an index in an itO corresponding to the the items in proof
                            the first index represents the proof object , the second index is an array containing the modules and specialized test, if module has a function, then its specialized otherwise, use deault function
                                each function should return values that help other modules on what to do next
                                
                        .pointValue if interrogation at facts passes this is incremented by one
                            v1, just use a simple counting mechanism
                            v2, use an itO for more complex counting system almost working like PAM in linux
                            if not a string or undefined it sets to use v1
                        ultraObject.qC question Chart
                            this object helps to visualize the dev_obj, its mainly the dev_obj with some additional
                                .pointValue
                                    if dev_obj.pointValue = v1, make 0, if dev_obj.pointValue =v2 use an itO
                                .passOn
                                    an itO helps the modules of the developer communicate with one another
                                    .proofObject
                                        an itO representing the proof object the API is looking at
                                    .factModule
                                        a sring representing the module used to evalute the proof object
                                .proof an itO from dev_obj.proof
                                    0 the proof object name
                                    1. the proof object reference
                                .facts
                                    the proof object name from facts is turned into a proerty name from the qC
                                    the proof object fact modules are places in ito
                                        0 module name
                                        1 module function or interrogation default
                        dev_obj
                            .keyword  ins string based comparision this is the keyword in quesiton
                            .pM_0_i: the partialMatch dev_obj with out compTo or compAgn
                            .care: an itO if multiple objects are available if no is at the index, the pointValue is left alone, if its undeinfed all are considered
                    */
                    
                    /*adding the first qC along with an abelast*/ //{
                    var iQC_0_i = ultraObject.scope.add(   {value:ultraObject.qC.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.qC.abelast.add(   {value:ultraObject.scope[iQC_0_i]}   )
                    // }  /**/
                    

                    /*setting the point value in the qC*/ //{
                    if(   dev_obj.pointValue === 'v1'   ){
                        
                        
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue = 0
                        
                        
                    }
                    
                    
                    else if(   dev_obj.pointValue === 'v2'   ){
                        
                        
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue = ultraObject.iterableObject()
                        
                        
                    }
                    // } /**/
                    
                    /*setting up proof in the qC*/ //{
                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof = ultraObject.iterableObject()
                    var iFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.proof.length,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof.add(   {value:ultraObject.iterify(   {iterify:dev_obj.proof[iFL_0_i.forLoop_0_i]}   )}   )
                        },
                        args:{
                            proof:dev_obj.proof
                        }
                    }
                    ultraObject.forLoop(   iFL_0_i   )
                    // } /**/
                    
                    /*setting up facts in the qC*/ //{
                    var iFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.facts.length,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   dev_obj.facts[iFL_1_i.forLoop_0_i][0]   ] = ultraObject.iterify(   {iterify:dev_obj.facts[iFL_1_i.forLoop_0_i][1]}   )
                        },
                        args:{
                            facts:dev_obj.facts
                        }
                    }
                    ultraObject.forLoop(   iFL_1_i   )
                    // } /**/
                    
                    /*providing important qC metadata for the developer*/ //{
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn = ultraObject.iterableObject()
                    // } /**/
                    
                    /*setting up the debugging object for the developer*/ //{
                        if(   dev_obj.debug === 'true'   ){
                            
                            
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB = ultraObject.iterableObject()
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB.add({value:dev_obj.debug})
                            
                            
                        }
                     // } /**/
                    
                    // debugger
                    /*beginning interrogation*/ //{
                    var iFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.proof.length,
                        fn:function(   dev_obj   ){
                            /*looking at the interrogation facts for each proof object*/
                            
                                /* grabbing the proofObject*/ // {
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i]
                                // } /**/
                        
                            /* debugging*/ // {
                            if(   dev_obj.debug === 'true'   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB.add({
                                    value:ultraObject.iterify({
                                        iterify:[
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0],
                                            ultraObject.iterableObject(),
                                            0
                                        ]
                                    })
                                    
                                })
                              
                                
                                
                            }
                            
                            // } /**/
                            
                            console.group(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0] +' proofObject'   )
                                iFL_3_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].length
                                ultraObject.forLoop(   iFL_3_i   )
                            console.groupEnd()
                            /**/
                        },
                        args:{debug:dev_obj.debug}
                    }
                    var iFL_3_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            /*actual use of each interrogaton function ot interrogate*/
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.factModule = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]
                            
                            
                            
                            if(   dev_obj.debug === 'true'   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1].add({
                                    value:ultraObject.iterify({
                                        iterify:[
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0],
                                            0
                                        ]
                                    })
                                    
                                })
                                
                                
                                
                            }
                            
                            /*use developer given*/ //{
                            if(   ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1](   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn   )
                               
                                                        
                            }
                            // } /**/
                            
                            /*use defaults instead */ //{
                            else if(   !ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                                
                                /* tagName module */ // {
                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'tagName'   ){
                                    console.group(   'tagName'   )
                                
                                    /* accessing desired tagNames given by developer */ // {
                                    ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn =  ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.tagOptions
                                    
                                    /* the element and the desired tags needed by the tagName module */ // {
                                    ultraObject.objInvloved(
                                        ultraObject.iterify({
                                            iterify:[
                                                ultraObject.qC[0][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1],
                                            ]
                                        })
                                    )
                                    
                                        /*objIO -self -ablelast   */ //{
                                        ultraObject.objIO.minus(   {index:ultraObject.objIO.length-1}   )
                                        ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                                        // }  /**/
                                    // } /**/
                                                                        
                                    // } /**/
                                    
                                    /* default tagName module evalution */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                    
                                    
                                        var iBOOL_0_i = {0:false}
                                        iBOOL_0_i = ultraObject.severalOr({
                                            compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].toLowerCase(),
                                            compAgn:ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                            boolean:iBOOL_0_i,
                                            which:0
                                        })
                                        
                                        
                                        if(   iBOOL_0_i[0]   ){
                                            
                                            
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                         
                                                
                                        }
                                        
                                        
                                        console.log(   iBOOL_0_i   )
                                            
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                                                                
                                        var iFL_6_i = {
                                            forLoop_0_i:0,
                                            forLoopLength:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length,
                                            fn:function(   dev_obj   ){
                                                

                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care  = ultraObject.iterableObject()
                                                    
                                                    
                                                }
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_6_i.forLoop_0_i   ] !== 'no'   ){
                                                    
                                                    
                                                    var iBOOL_1_i = {0:false}
                                                    iBOOL_1_i = ultraObject.severalOr({
                                                        compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_6_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].toLowerCase(),
                                                        compAgn:ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                                        boolean:iBOOL_1_i,
                                                        which:0
                                                    })
                                                    
                                                    
                                                    if(   iBOOL_1_i[0]   ){
                                                        
                                                        
                                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                                        
                                                                    
                                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                            
                                                            
                                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                            
                                                            
                                                        }
                                                     
                                                            
                                                    }
                                                    
                                                    
                                                    console.log(   iBOOL_1_i   )
                                                
                                                
                                                }
                                                
                                                
                                            },
                                            args:dev_obj
                                        }
                                        ultraObject.forLoop(   iFL_6_i   )
                                        
                                        
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* hidden module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'hidden'   ){
                                    console.group(   'hidden'   )
                                    
                                    /* if the element is not hidden add one to the pointValue */ // {
                                    if(   !ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ]   ){
                                        
                                        
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                        
                                        
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                            
                                            
                                             ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                             ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                            
                                            
                                        }
                                        
                                        
                                    }
                                    // } /**/
                                    
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* className module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'className'   ){
                                    console.group(   'className'   )
                                    
                                    /* keyword to compare against className */ // {
                                    console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword   )
                                    // } /**/
                                    
                                    /* pulling classes from the DOM element */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                        
                                        /* if there is only one element */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[ultraObject.scope[iQC_0_i]].passOn.proofObject[0]   ].classes =  ultraObject.iterify({
                                                iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                            })
                                        var  iBOOL_2_i = {0:false}
                                        iBOOL_2_i = ultraObject.severalOr({
                                            compTo:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                            compAgn :ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].classes,
                                            boolean:iBOOL_2_i,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                
                                                /* needed for partialMatch className module */ // {
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                        compTo:dev_obj.compTo,
                                                        compAgn: dev_obj.compAgnI
                                                }
                                                
                                                /* grabbing developer args for partialMatch */ // {
                                                iFL_4_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                                ultraObject.forLoop(   iFL_4_i   )
                                                // } /**/
                                                
                                                ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                                // } /**/
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE          .length-1].satisfy
                                                ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                                ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                    

                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                    
                                                            
                                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                        
                                                        
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                        
                                                        
                                                    }
                                                            
                                                                                                        
                                                }
                                                // debugger
                                                
                                                
                                                // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   iBOOL_2_i   )
                                        // } /**/
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        /* looking at specific different parents */ // {
                                        
                                            /* specs whether partial match should be checked for  */ // {
                                            console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care   )
                                            // } /**/
                                            
                                            iFL_7_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length
                                            ultraObject.forLoop(   iFL_7_i   )
                                        // } /**/
                                                                            
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* id module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'id'   ){
                                    
                                    
                                    console.group(   'id'   )

                                                                        
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                        
                                        /* pulling  id from the DOM element */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids =  ultraObject.iterify({
                                                iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                            })
                                        // } /**/
                                        
                                        /* keyword to compare against  id*/ // {
                                        console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword   )
                                        // } /**/
                                        
                                        var iBOOL_4_i = {0:false}
                                        iBOOL_4_i = ultraObject.severalOr({
                                            compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                            compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids,
                                            boolean:iBOOL_4_i,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                
                                                /* needed for partialMatch className module */ // {
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                        compTo:dev_obj.compTo,
                                                        compAgn: dev_obj.compAgnI
                                                }
                                                
                                                /* grabbing developer args for partialMatch */ // {
                                                iFL_5_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length,
                                                ultraObject.forLoop(   iFL_5_i   )
                                                // } /**/
                                                
                                                ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                                // } /**/

                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE          .length-1].satisfy
                                                ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                                ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                    
                                                    
                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                    
                                                    
                                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                        
                                                        
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                        
                                                        
                                                    }
                                                    
                                                    
                                                }
                                                // debugger
                                                
                                                // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   iBOOL_4_i   )
                                    
                                    
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        
                                        iFL_8_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length
                                        ultraObject.forLoop(   iFL_8_i   )

                                        
                                    }
                                    
                                    
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* exist module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'exist'   ){
                                    console.group(   'exist'   )
                                    
                                    /* if the element exists add one to the point value */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                    
                                    
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1] !== undefined   ){
                                            
                                        
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                            
                                            
                                        }
                                        
                                        
                                    }
                                    
                                    
                                    else if(    ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        
                                        iFL_10_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length,
                                        ultraObject.forLoop(   iFL_10_i   )
                                    
                                    
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                            }
                            // } /**/
                        },
                        args:{debug:dev_obj.debug}
                    }
                    
                    /* grabbing developer args for partialMatch */ // {
                    var iFL_4_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_4_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_4_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    // } /**/
                    var iFL_7_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care  = ultraObject.iterableObject()
                                
                                
                            }
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_7_i.forLoop_0_i   ] !== 'no'   ){
                                    
                                    
                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[ultraObject.scope[iQC_0_i]].passOn.proofObject[0]   ].classes =  ultraObject.iterify({
                                            iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_7_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                        })
                                    var iBOOL_3_i = {0:false}
                                    iBOOL_3_i = ultraObject.severalOr({
                                        compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                        compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].classes,
                                        boolean:iBOOL_3_i,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            
                                            /* needed for partialMatch className module */ // {
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                    compTo:dev_obj.compTo,
                                                    compAgn: dev_obj.compAgnI
                                            }
                                            
                                            /* grabbing developer args for partialMatch */ // {
                                            iFL_6_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                            ultraObject.forLoop(   iFL_6_i   )
                                            // } /**/
                                            
                                            ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                            // } /**/
                                                     
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE      .length-1].satisfy
                                            ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                            ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                
                                                
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                

                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                    
                                                    
                                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                    
                                                    
                                                }
                                                
                                                
                                            }
                                            // debugger
                                            
                                            
                                            // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                            // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   iBOOL_3_i   )
                                    
                                    
                                }
                            
                            
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    var iFL_6_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_6_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_6_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_5_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_5_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_5_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_8_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care = ultraObject.iterableObject()
                                
                                
                            }
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_8_i.forLoop_0_i   ] !== 'no'   ){
                                
                                
                                /* pulling  id from the DOM element */ // {
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids =  ultraObject.iterify({
                                        iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_8_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                    })
                                // } /**/
                                
                                
                                var iBOOL_5_i = {0:false}
                                iBOOL_5_i = ultraObject.severalOr({
                                    compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                    compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids,
                                    boolean:iBOOL_5_i,
                                    which:0,
                                    how:function(   dev_obj   ){
                                        
                                        /* needed for partialMatch className module */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                compTo:dev_obj.compTo,
                                                compAgn: dev_obj.compAgnI
                                        }
                                        
                                        /* grabbing developer args for partialMatch */ // {
                                        iFL_9_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                        ultraObject.forLoop(   iFL_9_i   )
                                        // } /**/
                                        
                                        ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                        // } /**/
                                        
                                        
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE.length-1].satisfy
                                        ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                        ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                        
                                        
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                            
                                        
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                            
                                            
                                        }
                                        
                                        

                                        // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                        // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                    },
                                    result:'a'
                                })
                                console.log(   iBOOL_5_i   )
                                
                                
                            }
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    var iFL_9_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_9_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_9_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_10_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_10_i.forLoop_0_i] !== undefined    ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                
                                
                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                    
                                    
                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                    
                                    
                                }
                    
                                
                            }
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    ultraObject.forLoop(   iFL_2_i   )
                    // } /**/
                                
                    /*debugging*/ // {
                    // console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ]   )
                    // } /**/
                    
                    /*taking the qC out of the scope*/ //{
                    ultraObject.scope.minus(   {index:iQC_0_i}   )
                    // }  /**/
                    
                }// used to perform advanced questions on results that can not be simply verified