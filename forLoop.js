/*
    for future
    might make a FL section for the ultraObject, for better coding and less naming schemes
    check out forLoopBreak you have meaningless options for forLoopBreak .bubble === 'true' forLoopBreak should send back a value
    your forLoop does not follow the ecamscript standards I have for the ultraObject,
        its not flexible it ends like a promise,
        you should be able to start  stop,and edit looping functionaltiy like in nE with its functionality
        i can not access the FL objects from anywhere in the API this is really bad
        values should not have to be bubbled, you should have made a FL section in the ultraObject and any bubbled values will be placed in the respective index

    ideas now
    the modules tell the managment module what to do conerning itself and the other modules, once the management modules gets all instructions from all modules at that point it starts to update the nE accordingly
*/

 function forLoop(   dev_obj   ){
                    /*
                        important
                        when your forLoop_0_i !== 0, at the end of this function, its made to be equal 0, keep this in mind ok
                    */
                    //.forLoop_0_i the iteration
                    //.forLoopLength the length to iterate to
                    //.fn what to do
                    // .args, since they are out scroped this is a way to access the args
                    // .bubble 'true' or 'false' indicating whether to send the break back up nested
                    // forLoopBreak
                        //true
                        // premature does the same thing true breaks it early
                        // continue, like a python continue statement, stops in the fn body and starts with the loop index changed
                    
                    var forLoopBreak = false
                    
                
                        if(   dev_obj.custom !== 'true'   ){
                            
                            
                            for(   dev_obj.forLoop_0_i; dev_obj.forLoop_0_i !== dev_obj.forLoopLength; dev_obj.forLoop_0_i++   ){
                                // console.log(   dev_obj.forLoop_0_i   )
                                forLoopBreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                                
                                                
                                if(   forLoopBreak === 'true' || forLoopBreak === 'premature'  ){
                                    // premature  provided when you dont want to bubble up the value just break
                                    
                                    if(   dev_obj.bubble === 'true'   ){
                                        
                                        
                                        return forLoopBreak
                                        
                                        
                                    }
                                    break;
                                    
        
                                }
                                
                                
                                else if(   forLoopBreak === 'continue'  ){
                                    
                                }
                                
                                
                            }
                            dev_obj.forLoop_0_i = 0
                            
                            
                        }
                
                        
                        else if(   dev_obj.custom === 'true'   ){
                            
                            
                            for(   dev_obj.forLoop_0_i; dev_obj.forLoopLength_fn(); dev_obj.forLoop_0_i_fn()   ){ // change this to be a fuctiont that allow the dev to do anything here
                                // console.log(   dev_obj.forLoop_0_i   )
                                forLoopBreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                                
                                                
                                if(   forLoopBreak === 'true' || forLoopBreak === 'premature'  ){
                                    // premature  provided when you dont want to bubble up the value just break
                                    
                                    if(   dev_obj.bubble === 'true'   ){
                                        
                                        
                                        return forLoopBreak
                                        
                                        
                                    }
                                    break;
                                    
                                    
                                }
                                
                                
                                else if(   forLoopBreak === 'continue'  ){
                                    
                                }
                                
                                
                            }
                            
                            
                        }
                        
                    
                }