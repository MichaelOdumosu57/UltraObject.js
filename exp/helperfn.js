function toPhoneNumberString(   dev_obj   ){
    var pNArray = dev_obj.string.split('')
    var pNFinal = ''
    pNArray.map((a)=>{
        
        
        if(   a == parseInt(a)   ){
            
            
            pNFinal += a
            
            
        }
        
        
    })
    return pNFinal
}