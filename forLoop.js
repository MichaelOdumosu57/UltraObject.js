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