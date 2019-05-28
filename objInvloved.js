function objInvloved(   dev_obj   ){
            /* ablelasts
                1 for objIO
            */
            // console.log a list of the dev_obj  values to be outputted to the console to help the dev know how is items are in the middle of an API

                /*adding the dev_obj to args*/ //{
                var objInvloved_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                // }  /**/
                
                
                /*objIO +scope +self +abelast */ //{
                var oIobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.add(   {value:dev_obj}   )}   )
                ultraObject.objIO.abelast.add(   {value:ultraObject.scope[oIobjI_0_i]}   )
                // }  /**/
                
                
                if(   ultraObject.isInt({type:ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ].length}) === 'false'  ){
                    
                    
                    throw('fix me at my invocation')
                    
                    
                }
                
                
                var objIFL_0_i={
                    forLoop_0_i: 0,
                    forLoopLength:ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ].length,
                    fn:function(   dev_obj   ){
                        console.log(   ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ][   objIFL_0_i.forLoop_0_i   ]   )
                    },
                    args:undefined
                }
                ultraObject.forLoop(   objIFL_0_i   )
                
                /*objIO -scope   */ //{
                ultraObject.scope.minus(   {index:oIobjI_0_i}   )
                // }  /**/
                
        }