    function partialMatch(   dev_obj   ){
        /*
            this function expects strings but there can be others objects arrays
            what will happen is that we will convert it to an itO and look at each property and ask about the range and the number of spaces
            so if compAgn is to big
                dasgjkfgnkasgpnksdfo word asidnogsindgj osapfoigjnsaoifgjasdgipkojagidknsknpgasd
                this will be stopped by the gap
            and if compAgn is to small
                compAgn:lit
                compTo:little
            it will will be stopped by the range
            .compTo the value we want to see
            .compAgn the value that the API can determine that its equal to compTo but its misspelt using this function
            .range the length it has to get to equal the string
                so if range is 7 and
                compTo  = 'abbacus'
                compAgn = 'abbaacus'
                the function sees
                abba  cus
                7 in a row which is true
                and same for reverse
                but if compTo is shorter than the string its satisfies on the max
                this is actually scary because
                compTo :'linkedin'
                compAgn :'linakedain'
                    might be wiedly I dont know how to handle this but then it would
                    require a version 2 implementation right away
            .spaces max allowed spaces before it rejects
                so if spaces is two and
                compTo  = 'abbacus'
                compAgn = 'abbaacusa'
                the function would point out
                a a
                and accept and
                also if we have
                compTo  = 'Linkedin'
                compAgn = 'Link'
                spaces would be 1
                vice versa
            .gap max allowed items between spaces that account for range
                say if we have .gap = 3 and
                compTo  = 'abbacus'
                compAgn = 'abbadabacus'
                the gap is daba which is 4 greater than the allowed gap
                so it would reject
                and we would not have a partial match
            .trailer
                when compAgn has the match but its not in the begiinmond of compTo
                say
                compTo: Narco
                compAgn:Marc0
                trailer says how much it has to go up in Marco to get that arco match
                or
                compTo:raymond
                compAgn:diamond
                trailer needs 3 to get to that
                so if
                compTo:deNarco
                compAgn:marco
                trailer must be 2 to get there
                however this would also include
                    marefco
                    so trailing must be left at one and more modifiable in v2
            .version
                1  (default) use basic implementation
                2 a future implementation which so that range spaces and gap can be granular to user input
            .type
                the type for comparison I plan to make this obsolete allowing the fn to do more
                .cCase
                    when type is string, turns to desired cases such as upper lower camel, if not availble result is toLowerCase
        */
        
            
        if(   dev_obj !== undefined   ){
            
            
            var partialMatch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            
            
            if(   dev_obj.version === undefined   ){
                
                
                dev_obj.version = 1
                
                
            }
            
            
            if(   dev_obj.version === 1 && dev_obj.type === 'string'  ){ // handles strings only allow it to do more with the same algorithm
                
                            
                if(   dev_obj.cCase !== undefined  ){
                    //turns to case comparision of users desire
                    
                    dev_obj.compTo = dev_obj.compTo[dev_obj.cCase]()
                    dev_obj.compAgn = dev_obj.compAgn[dev_obj.cCase]()
                    
                                    
                }
                
                
                dev_obj.compTo = ultraObject.iterify(    {iterify:dev_obj.compTo}   )
                dev_obj.compAgn = ultraObject.iterify(   {iterify:dev_obj.compAgn}   )
                /*initealize items to track range space and gap */
                pMMisc_0_i =  ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                ultraObject.misc.abelast.add(   {value:ultraObject.scope[pMMisc_0_i]}   )
                pMRange_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                pMSpaces_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}  )
                pMGap_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                pMTrailer_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].add(   {value:0}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i].add(   {value:0}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:0}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i].add(   {value:1}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause = 0 // a reminnded for the comparision to continue here for those misplet words with errors in the middle
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = true // made a boolean for possible self 3rd party use , if the condition is broken it turns to false
                            
                /**/
                var pMFL_0_i = { //find if the range for compAgn satisfies
                    forLoop_0_i:0,
                    forLoopLength: dev_obj.compTo.length < dev_obj.compAgn.length ? dev_obj.compTo.length  :  dev_obj.compAgn.length,
                    fn:function(   dev_obj   ){
                        /*range service for itO[0]
                            these contain the letters for each match
                            space serivce for itO[1]
                            gap service for itO[2]
                            
                            space is a single number
                            while range and gap are its represent the length of each match and unnmatch string in the spaces
                            .extension helps the API, by giving it more time to find the string if the shortest string is not availble 
                            in the length of the for loop
                            .pause keeps track of new found items
                            .trailerFound means it found it in the list and should keep checking
                        */
                        // console.log(   pMFL_0_i.forLoopLength,pMFL_0_i.forLoop_0_i   )
                        // if(   pMFL_0_i.forLoop_0_i= pMFL_0_i.forLoopLength - 1 && pMFL_0_i.forLoopLength === dev_obj.compTo.length   ){
                        //     // for cases when the gap is large but the compTo finsihes early and compAgn would satisfy but exits prematurely
                        //     pMFL_0_i.forLoopLength =dev_obj.compAgn.length
                            
                            
                        // }
                        
                        
                        // if(   dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause   ] === undefined   ){
                        //     //we have come to the end of the compTo string and its chance to get the job done is over, it should have gotten the
                            
                        //     return 'premature'//or true
                            
                            
                        // }
                        if(   pMFL_0_i.forLoop_0_i   === pMFL_0_i.forLoopLength-1   ){
                            //.pause shoud be  0
                            if(   dev_obj.trailer > pMFL_0_i.forLoopLength && !ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerFound   ){
                                pMFL_0_i.forLoopLength = dev_obj.trailer
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].extension = 'true';
                            }
                            // means it has not looked through the whole string to find that trailer
                        }
                        
                        
                        if(   dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause   ] === dev_obj.compAgn[pMFL_0_i.forLoop_0_i]   ){
                            
                            
                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause += 1 // so can pick up once the letters equal again
                            //this is wronng
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length-1   ] !== 0   ){
                                //this means there is a new range and there should be a possible gap accounted for
                                
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:0}   )
                                
                                
                            }
                            
                            
                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].length-1   ] +=1
                            
                            
                        }
                        
                        
                        else if(   dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause   ] !== dev_obj.compAgn[pMFL_0_i.forLoop_0_i]   ){
                            
                            //at this point a trailer is rquired this means that its only waiting for a match at the beginning
                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerFound = false
                            
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i].length-1   ] !== 0  ){
                                
                                
                                var pMFL_1_i = {
                                    forLoop_0_i:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause,
                                    forLoopLength:dev_obj.trailer + ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause,
                                    fn:function(   dev_obj   ){
                                        
                                        
                                        if(   dev_obj.compTo[   pMFL_1_i.forLoop_0_i   ] === dev_obj.compAgn[pMFL_0_i.forLoop_0_i]   ){
                                            //this means the match is available later in the compTo string and it needs to be given a chance however this is v1 and in v2 everything would match so there would it be a range as a string of matching letters
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause  = pMFL_1_i.forLoop_0_i + 1
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].length-1   ] +=1
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerFound = true
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i].length-1   ] -= 1
                                            return 'premature'
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    args:{
                                        compTo:dev_obj.compTo,
                                        compAgn:dev_obj.compAgn
                                    }
                                }
                                ultraObject.forLoop(   pMFL_1_i   )
                                
                                
                            }
                            
                            
                            
                            if(   !ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerFound   ){
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].length-1   ] !== 0   ){
                                    //this means there is a new gap and there should be a possible range accounted for
                                    //this is a level 2 implementation however we will get here for now make sure the string has enough letters :)
                                    // ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].add(   {value:0}   )
                                    
                                    
                                }
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length-1   ] <= dev_obj.gap   ){
                                    
                                    
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length-1   ] === 0   ){
                                        //we came across a new gap space = 1
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i].length-1   ] += 1

                                            
                                    }
                                                            
                                    
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length-1   ] +=1
                                    
                                    
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length-1   ]> dev_obj.gap   ){
                                        console.log('error in gap')
                                        if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].extension !== 'true'   ){
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                                        }
                                        return 'premature'
                                        
                                    }
                                    
                                    
                                }
                                                    
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i].length-1   ]   > dev_obj.spaces   ){
                                    console.log('error in spaces')
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].extension !== 'true'   ){
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                                    }
                                    return 'premature'
                                    
                                    
                                }
                                
                                
                            }
                             
                            // .extension needs to be made false at some point                            
                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerFound = false
                            
                            
                        }
                        
                        //or assert.equal
                        /**/
                    },
                    args:dev_obj
                }
                ultraObject.forLoop(   pMFL_0_i   )
                
                
                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].length-1   ] < dev_obj.range   ){
                    
                    console.log(   'error in range'   )
                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                    
                    
                }
                
                
                ultraObject.scope.minus(   {index:pMMisc_0_i}   )
            }
            
                    
        }
        
        
        
    }/*this helps the API when its expected to be a inconsitencies in searches that have the same meaning, the developer can adjust how many values they want from all the way to complete difference to one char difference  in order for the API to say hey, that just a mispelled word it s okay*/
   