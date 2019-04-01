function isPrimitive(   dev_obj   ){


    if(   dev_obj !== undefined   ){
        
        
        if(   dev_obj.type !== Object(   dev_obj.type   )   ){
            
            
            return true
            
            
        }
        
        
    }
    
    
    return false
}