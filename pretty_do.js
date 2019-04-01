function pretty_do(   dev_obj   ){

                                if(   dev_obj != undefined   ){
                                    
                                    
                                    if(   dev_obj.notes_object != undefined   ){
    
    
                                        ultraObject.notes_object = dev_obj.notes_object
                                        
                                    }
                                
                                
                                }
                                
                                
                                this.notes_entries_fn()


                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                
                                
                                    if(   this.notes_entries[i][0].length > this.max   ){
                                        this.max = this.notes_entries[i][0].length
                                    }
                                    
                                }
                                
                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                    this.notes_collection += "\n" + this.notes_entries[i][0] + Array(   this.max  - this.notes_entries[i][0].length + this.seperator ).join(" ") + this.s_key
                                    
                                    
                                        if(   typeof(   this.notes_entries[i][1]   ) == 'object'   ){
                                
                                
                                            this.notes_collection += JSON.stringify(   this.notes_entries[i][1],null,2   )
                                
                                
                                        }
                                        
                                        
                                        else{
                                
                                
                                            this.notes_collection += this.notes_entries[i][1]
                                
                                
                                        }
                                        
                                        
                                }
                                return this.notes_collection
                            }