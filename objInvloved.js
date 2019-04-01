function objInvloved(   dev_obj   ){
    // console.log a list of the dev_obj  values to be outputted to the console to help the dev know how is items are in the middle of an API
    
        ultraObject.objIO = dev_obj
        var objInvloved_0_i = 0
        ultraObject.objIFL_0_i={
            forLoop_0_i: objInvloved_0_i,
            forLoopLength:Object.entries(   dev_obj   ).length,
            fn:function(      ){
                console.log(   ultraObject.objIO[ultraObject.objIFL_0_i.forLoop_0_i]   )
                },
            args:undefined
        }
        forLoop(   ultraObject.objIFL_0_i   )
}