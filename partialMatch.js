            function partialMatch(   dev_obj   ){
                
                /*adding the dev_obj to args*/ //{
                var partialMatch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                // }  /**/
                                
                /*handles strings only allow it to do more with the same algorithm*/ //{
                if(   (   dev_obj.version === 1 || dev_obj.version === undefined   )  && dev_obj.type === 'string'  ){

                    /*turns to case comparision of users desire*/ //{
                    if(   dev_obj.cCase !== undefined  ){
                        
                        
                        dev_obj.compTo = dev_obj.compTo[dev_obj.cCase]()
                        dev_obj.compAgn = dev_obj.compAgn[dev_obj.cCase]()
                        
                                        
                    }
                    // }  /**/
                
                    dev_obj.compTo = ultraObject.iterify(    {iterify:dev_obj.compTo}   )
                    dev_obj.compAgn = ultraObject.iterify(   {iterify:dev_obj.compAgn}   )
                    
                    
                }
                // }  /**/
                
            }
