function xhttpreadystatechange(){
    console.log(    this   )
    var dev_obj = undefined
    
    if (    this.readyState == 4 && this.status == 200   ) {
    
    
        if(   dev_obj !==undefined   ){
            
            
            dev_obj.fn()
            
            
        }
        
        
        else if(   dev_obj ===undefined   ){
            
            
            ultraObject.xhrResponse = this.responseText
            
            
        }
        
        
    }
    
} // handles getting remote reposnes
