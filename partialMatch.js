/*
    for future
    think if you want to write conditionals for each module or have everything availble for some sort of quantum future
    remove spaces module for v1 since its === to the length of the gap index

    ideas now
    the modules tell the managment module what to do conerning itself and the other modules, once the management modules gets all instructions from all modules at that point it starts to update the nE accordingly
*/

/*
    setting up the nE
    //key  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster, this is an itO containing the final
        // instruction to perform on the nE, after all modules fineshed looking at their part in the nE
    // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls a list of controls
    // key
    // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v1Start
    // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v2Start
    // where data types related to v1 and v2 are stored in the itO for the given value index to the next
        //if v1
    // key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range - range v1, itO that handles the range module
    // key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause - pause v1, itO that handles the pause module
*/
/*
    range module
    if ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][4][0]   ]
        //key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause
            
                value
                true: tells scrum module to increment the range and pause by 1 and reset itself to false and turns also turns ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces to false
                false: its okat for me to evalutate if if dont execute, do not do what true does
               
*/
/*
    spaces module
    // key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces
        // tells the scrum module to increment the space by one
        
            value
            true: increment spaces by one
            standby: ive encountered a spaces already even though the chars arent equal im going through a gap
            false: the range just ended and I know I have encountered a new space
                                    
                                        
*/
/*
    scrumMaster module
    do code that doesnt modify first before you do code that modifies
    evalution of module parts should occur when another module is not being touch, so if looking at gap range should be neutral and vice versa
    for the if else if dealing with gap, the code block needed to make sure that the range module was not coming into to interefere with the operations
    for the range modification, decided whether to offer or omit the feautre
        the feature is the API is allowing the trailer as a wildcard one time to finish the string row
        so even if rangefinds it first if it comes across a letter in compTo not in compAgn only once
        the trailer module runs comment LINK1 out to enable\disable this feature
        when compAgn is smaller than compTo the gap go to lenght of compTo if nothing is found, allow the developer to put gap the length of compTo if desiored or compAgn must be always greater than compTo
*/

/*
    trailer module
    key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer if 'true'
        modify the pause module to the index of the match
        probably increment the range by 1
    key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerRange if true
        disable the whole module make trailer == 'false
    key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerLocation , helps the API know
        where to start in compTo after trailer has found a match, the previous was a bad selection
*/

/*
    full module
    key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.full helps the scrumMaster know wheter to allow normal operations, or fix the nE
    whats going on here is sometimes the dev want the exact word, or that exact range
    
    compTO: macbook
    range:5 ( so now were are looking for macbo )
    compAgn: I love eating toasted cheese and tuna sandwiches while coding on my macbook
    full:'true'
    when full  === 'true', the API must find 'macbo' in compAgn or it will fail
    this is a v2 implementation to work with v1,
    DO NOT ALLOW IT TO SUPPORT TRAILER AT ALL
    
    so if we have a module handle this
        we know the range starts at 0 and ends at range
        we know theres one big space and if its fails we still have one big space, and if it succeeds there should be only one big space
        we know if it fails the gap get incremented by range, our gap itO length === 1 with index 0 representign the only space
        
    happy coding!!
*/
function partialMatch(   dev_obj   ){
                    /*
                        key points
                        everything is in relation to compAgn
                        remember to comment out all .satisfies for debugging only
                    */
                    /* ablelasts
                        1 for nE
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var partialMatch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*nE  +scope +self +abelast  */ //{
                    pMNE_0_i = ultraObject.scope.add(   {value:ultraObject.nE.add({value:ultraObject.iterableObject()}   )}   )
                    ultraObject.nE.abelast.add({value:ultraObject.scope[pMNE_0_i]})
                    // }  /**/
                                    
                    /*handles strings only allow it to do more with the same algorithm*/ //{
                    if(   (   dev_obj.version === 1 || dev_obj.version === undefined   )  && dev_obj.type === 'string'  ){
    
                        /*turns to case comparision of users desire*/ //{
                        if(   dev_obj.cCase !== undefined  ){
                            
                            
                            dev_obj.compTo = dev_obj.compTo[dev_obj.cCase]()
                            dev_obj.compAgn = dev_obj.compAgn[dev_obj.cCase]()
                            
                                            
                        }
                        // }  /**/
                    
                        dev_obj.compTo = ultraObject.iterify(    {iterify:dev_obj.compTo}   )
                        dev_obj.compAgn = ultraObject.iterify(   {iterify:dev_obj.compAgn}   )
                        
                        /* setting up the nE*/ //{
                        // when you make this function make all the conditionals go in the index so we can loop through them
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls = dev_obj
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster = ultraObject.iterableObject()
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy = {} // PROBLEM make this an itO
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v1 = 'true'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v2 = 'false'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v1Start = 0
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v2Start = 5
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterableObject()})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause  = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({
                            value:ultraObject.iterify({iterify:0}),
                            index:4
                        })
                        // }  /**/
                        
                        var pMFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength: ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ? ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length :  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ,// PROBLEM add one to the length and deal with the undefined problem at the end of this loop
                            fn:function(   dev_obj   ){
                                ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy = {}
                                
                                /*range module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause = 'true'
                                    
                                    
                                }
                                // }  /**/

                                /*spaces module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] !== ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ] &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces !== 'standby'  ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces = 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                /*gap module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] !== ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                
                                
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.gap = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap = 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                /*trailer module  */ //{
                                if(   ultraObject.isInt({type:ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.trailer})   ==='true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer !== 'complete' &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   !== 'true'   ){
                                    
                                    
                                    var pMFL_1_i = {
                                        forLoop_0_i:ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0],
                                        forLoopLength:ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] +ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.trailer,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[pMFL_1_i.forLoop_0_i] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[pMFL_0_i.forLoop_0_i]  ){
                                                //&& ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   !== 'true'
                                            
                                                
                                                ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'true'
                                                ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerLocation = pMFL_1_i.forLoop_0_i
                                                ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer = 'true'
                                                return 'premature'
                                                
                                                
                                            }
                                            
                                            
                                            // else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   === 'true'   ){
                                                
                                                
                                            //     return 'premature'
                                                
                                                
                                            // }
                                            
                                            
                                        },
                                        args:undefined //{}
                                    }
                                    ultraObject.forLoop(   pMFL_1_i   )
                                
                                
                                }
                                // }  /**/
                                
                                /*pause module  */ //{
                                
                                // }  /**/
                                
                                /*scrumMaster module  */ //{
                                // for the range modification, decided whether to offer or omit the feautre
                                    //the feature is the API is allowing the trailer as a wildcard one time to finish the string row
                                    // so even if rangefinds it first if it comes across a letter in compTo not in compAgn only once
                                    // the trailer module runs comment LINK1 out to enable\disable this feature
                                    // when compAgn is smaller than compTo the gap go to lenght of compTo if nothing is found, allow the developer to put gap the length of compTo if desiored or compAgn must be always greater than compTo
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces !== 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause !== 'true'   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].length-1   ] += 1
                                    
                                    
                                                                        
                                }
                                
                                
                                else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause !== 'true'  ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].add({value:1})
                                    
                                                                        
                                }
                                
                                
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause === 'true'    ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] += 1
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] += 1
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause = 'false'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'false'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.gap = 'false'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'complete' // LINK1
                                 
                                    
                                }
                                
                                                                
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces === 'true'   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] += 1
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'standby'
                                    
                                    
                                }
                                
                                
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer === 'true'   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerLocation + 1
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] += 1
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'complete'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'false'
                                    
                                    
                                    
                                }
                                                        
                                                                
                                    /*reacting to the final range  */ //{
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] >= ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.range   ){
                                        
                                       
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'true'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['true','range']})
                                        return 'premature'
                                        
                                        
                                    }
                                                                        
                                    
                                    else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] < ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.range  && pMFL_0_i.forLoopLength -1 ===  pMFL_0_i.forLoop_0_i    ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','range']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    /*reacting to the final of spaces  */ //{
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.spaces   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','spaces']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    /*reacting to the final of gap */ //
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].length-1   ] > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.gap   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','gap']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                // }  /**/
                               
                            },
                            args:dev_obj //{}
                        }
                        ultraObject.forLoop(   pMFL_0_i   )
                        
                    }
                    // }  /**/
                    
                    
                }