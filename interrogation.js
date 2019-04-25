// FIX ME
// helping the sibling module know not to look at the same element again
// if this is the case use subGroups to help interrogation figure out where element is when its looking at the sibling to easily modify it

/*actual use of each interrogaton function ot interrogate*/
// so if I have my own function use it or else use the interrgation module

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
                        helps the modules of the developer communicate with one another
                    .proof an itO from dev_obj.proof
                        0 the proof object name
                        1. the proof object reference
                    .facts
                        the proof object name from facts is turned into a proerty name from the qC
                        the proof object fact modules are places in ito
                            0 module name
                            1 module function or interrogation default
        */
        
        
        if(   dev_obj !== undefined   ){
        
            /*adding the first qC along with an abelast*/ //{
            var iQC_0_i = ultraObject.scope.add(   {value:ultraObject.qC.add(   {value:ultraObject.iterableObject()}   )}   )
            // }  /**/
            
            /*setting the point value in the qC*/ //{
            if(   !ultraObject.isString(   {type:dev_obj.pointValue}   ) || dev_obj.pointValue === 'v1'   ){
                
                
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
                    /*helping the sibling module know not to look at the same element again*/
                    if(   dev_obj.proof[iFL_0_i.forLoop_0_i][0] === 'element'   ){
                        
                        
                        dev_obj.proof[iFL_0_i.forLoop_0_i][1].sameChild = 'true'
                        
                        
                    }
                    /**/
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
            
            /*beginning interrogation*/ //{
            var iFL_2_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.proof.length,
                fn:function(   dev_obj   ){
                    /*looking at the interrogation facts for each proof object*/
                    var iFL_3_i = {
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ].length,
                        fn:function(   dev_obj   ){
                            /*actual use of each interrogaton function ot interrogate*/
                            if(   ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                                
                                debugger
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1](   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn   )
                               
                            
                            
                            }
                            
                            
                            else if(   !ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                            
                            
                                    
                            }
                            /**/
                        },
                        args:{}
                    }
                    ultraObject.forLoop(   iFL_3_i   )
                    /**/
                },
                args:{}
            }
            ultraObject.forLoop(   iFL_2_i   )
            // } /**/
                        
            /*debugging*/
            console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ]   )
            /**/
            
            /*taking the qC out of the scope*/ //{
            ultraObject.qC.abelast.add(   {value:ultraObject.scope[iQC_0_i]}   )
            ultraObject.scope.minus(   {index:iQC_0_i}   )
            // }  /**/
            
        }
        
        
    }// used to perform advanced questions on results that can not be simply verified
     