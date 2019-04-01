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