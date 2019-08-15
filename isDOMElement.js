                function isDOMElement(   dev_obj   ){ //checks if item is HTML or XML tag
                    //.type the item in question

                        if(   !ultraObject.isPrimitive({type:dev_obj.type})   ){
                        
                        
                            if(   dev_obj.type.ownerDocument !== undefined   ){
                                
                                
                                if(   ultraObject.isObject({type:dev_obj.type})    ){
                                    
                                    
                                    return true
                                    
                                    
                                }
                                
                                
                            }
                        
                        
                        }
                        
                        
                    return false
                }