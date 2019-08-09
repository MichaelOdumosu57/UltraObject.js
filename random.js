/*
    MISC +scope +self +abelast
    the number is is in misc then
*/

                function random(   dev_obj   ){
                    /*abelast
                        1 for misc
                    */
                    /*
                        dev_obj
                            .type
                                simple give me a random number according to dev_obj.value
                                stream used when needed to call same fn several times
                            .value
                                when dev_obj.type === 'simple' this should be a number for the range you need randomess
                            .fn when  dev_obj.type === 'stream' this should be the function that allows for random
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var random_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    if(   dev_obj.type === 'simple'   ){
                        
                        
                        /*MISC +scope +self +abelast */ //{
                        var rdmMisc_0_i = ultraObject.scope.add({value:ultraObject.misc.add(   {value:Math.floor(Math.random() * Math.floor(   dev_obj.value   ))  }   )})
                        ultraObject.misc.abelast.add(   {value:ultraObject.scope[rdmMisc_0_i]}   )
                        // }  /**/
                       
                        
                        /*MISC -scope */ //{
                        ultraObject.scope.minus(   {index:rdmMisc_0_i}   )
                        // }  /**/
                        
                    }
                    
                    
                    if(   dev_obj.type === 'stream'   ){
                        
                        
                        /*MISC +scope +self +abelast */ //{
                        var rdmMisc_0_i = ultraObject.scope.add({value:ultraObject.misc.add(   {value:dev_obj.value  }   )})
                        ultraObject.misc.abelast.add(   {value:ultraObject.scope[rdmMisc_0_i]}   )
                        // }  /**/
                       
                        
                        /*MISC -scope */ //{
                        ultraObject.scope.minus(   {index:rdmMisc_0_i}   )
                        // }  /**/
                        
                    }
                    
                    
                }// anything random is done here