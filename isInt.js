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