function isitO(   dev_obj   ){
    
    
    if(   dev_obj.type !== undefined   ){
        
        
        if(   dev_obj.type.isitO !== undefined && dev_obj.type.isitO() === 'true'   ){
            
            
            return true
            
            
        }
        
        
    }
    
    
    return false
}