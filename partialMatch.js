    /*
    for future
    think if you want to write conditionals for each module or have everything availble for some sort of quantum future

    ideas now
    the modules tell the managment module what to do conerning itself and the other modules, once the management modules gets all instructions from all modules at that point it starts to update the module accordingly
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
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls = dev_obj
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster = ultraObject.iterableObject()
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v1 = 'true'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v2 = 'false'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v1Start = 0
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v2Start = 5
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause  = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({
                            value:ultraObject.iterify({iterify:0}),
                            index:4
                        })
                        // }  /**/
                        
                        var pMFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength: ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ? ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length :  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ,// PROBLEM add one to the length and deal with the undefined problem at the end of this loop
                            fn:function(   dev_obj   ){
                                

                             
                                /*range module  */ //{
                                //key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause
                                    /*
                                        value
                                        true: tells scrum module to increment the range and pause by 1 and reset itself to false and turns also turns ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces to false
                                        false: its okat for me to evalutate if if dont execute, do not do what true does
                                    */
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause = 'true'
                                    
                                    
                                }
                                // }  /**/

                                /*spaces module  */ //{
                                // key ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces
                                    // tells the scrum module to increment the space by one
                                    /*
                                        value
                                        true: increment spaces by one
                                        standby: ive encountered a spaces already even though the chars arent equal im going through a gap
                                        false: the range just ended and I know I have encountered a new space
                                    
                                    */
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo