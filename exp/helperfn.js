function toPhoneNumberString(   dev_obj   ){
    var pNArray = dev_obj.string.split('')
    var pNFinal = ''
    var pNFinalArray = []
    var rules = [3,3,4]
    pNArray.map((a,i)=>{
        
        
        if(   a == parseInt(a)   ){
            
            
            pNFinal += a
            
            
        }
        
        if(   pNFinal.length === rules[0]  && rules.length !== 0   ){
            pNFinalArray.push([pNFinal])
            pNFinal = ''
            rules.shift()
        }
        
    })
    /* concatenate into a phone number string*/
    console.log(   pNFinalArray  )
    return pNFinalArray.reduce((x,y,z)=>{
        console.log(x,y,z)
        // y === '' ? y = x : y += '-' + x
        return x += '-' + y
    })
    /**/
}
toPhoneNumberString({string:'347 %505 %7932'})