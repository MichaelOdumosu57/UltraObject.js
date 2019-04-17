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
                compAgn:Marco
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
            .reset
                when a full range match is needed
                so if you have
                compTo dipper
                compAgn:tappen dipper
                if trailer is long enough it would pick up pp and it wouldnt work
                this is a boolan in v1 itO in v2 and if true will turn
                    range back to 0
                    the extension to
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
                
                //{
                dev_obj.compTo = ultraObject.iterify(    {iterify:dev_obj.compTo}   )
                dev_obj.compAgn = ultraObject.iterify(   {iterify:dev_obj.compAgn}   )
                /*initealize items to track range space and gap */
                pMMisc_0_i =  ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                ultraObject.misc.abelast.add(   {value:ultraObject.scope[pMMisc_0_i]}   )
                pMRange_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                pMSpaces_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}  )
                pMGap_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                pMTrailer_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                pMPause_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].add(   {value:ultraObject.iterableObject()}   )
                var pMRange_0_i_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i].add(   {value:0}   )
                var pMSpaces_0_i_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i].add(   {value:0}   )
                // ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:0}   )
                var pMTrailer_0_i_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i].add(   {value:1}   )
                var pMTrailer_0_i_1_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i].add(   {value:0}   )
                var pMPause_0_i_0_i = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].add(   {value:0}   )
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause = 0 // a reminnded for the comparision to continue here for those misplet words with errors in the middle
                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = true // made a boolean for possible self 3rd party use , if the condition is broken it turns to false
                            
                /**/
                //}
                var pMFL_0_i = { //find if the range for compAgn satisfies
                    forLoop_0_i:0,
                    forLoopLength: dev_obj.compTo.length > dev_obj.compAgn.length ? dev_obj.compTo.length + 1 :  dev_obj.compAgn.length + 1 ,
                    fn:function(   dev_obj   ){
                        /*
                            these contain the letters for each match
                            range service for itO[0]
                            space serivce for itO[1]
                            gap service for itO[2]
                            trailer service for itO[3]
                                each serice has a module that the letter goes through for processing
                                order is important but needs to be made unnessary for optimal performace
                            
                            VARIABLES
                            rangeFound , when the range is increased by one the trailer does not need to run anymore, leave this once set
                                            because in v1, the trailer module should only be used once
                            trailerRange , when the trailer finds a match, this lets the range know to increase  the range by one
                            trailerGap   , when this happens there is a massive gap made, this is an itO with the trailer module
                                            telling the Gap module to update accordingly
                                    itsThis - the gap should replace the value with what the trailer gives
                                    jobDone- the gap module did as requested
                            pause,         where the API is up to in compTo, this increases only if matches
                                            should all modules have access to this or a module just for this
                            spaceGap,      the space module tells the gap module to increment by one since the gap module
                            fullLoopApply, the full module applies until a given point in  pMFL_0_i
                            fullRange,      this is the full module way of telling the range module not to increase by one
                                ignore -  the range module will not increment by one
                                regular - let the range module act as normal
                            fullSpace      this is the full module way of telling the space module that there is no new space and not to increment
                                ignore - the space module will not increment
                                regular - space module will perform normal operations
                            fullGap -       full module tells the gap module to continue to increment since the words are not equal as such
                                fill  gap will continue to increment by one and try not to increase the itO in relation to the space module
                            fullCheck - allows the full module to deactivate itself saving memory
                                true activates its rules
                                false deactivates its rulesd
                            fullApply - if full module actually finds the compTo/range compAgn match
                                true it has found the match do accordingly
                                false it has not found the match do accordingly
                        */
                        /*Refer to case table for google slides*/
                        // not complete till trailer tells gap to update after it has found a match and pause contines from it
                        // ---------------------------------------------------------------------------------------------
                            // FULL MODULE
                        /*
                            whats is needed
                                            dev_obj.reset
                                            dev_obj.compAgn[pMFL_0_i.forLoop_0_i]
                            what is handled
                                            this is a v2 courtesy for times when the whole word is needed and not parts of the word
                                            if the API does not get the complete match in the length of the range it tells all modules to reset
                                            according until it finds that exact word match
                                            
                                            in v2 trailer gap and space in following indexes in their respecive itO would be set to 0, demanding
                                            that the rest of the compTo string should be there
                                            
                                            watch this has a lot to tell the other modules if conditions are satisfied here
                        */
                        //{
                            console.group(   'Full Module'   )
                            
                            
                                if(   dev_obj.full === 'true'   ){
                                    
                                    
                                    if(   (   dev_obj.compTo
                                            [   ultraObject.misc
                                                [   ultraObject.scope[pMMisc_0_i]
                                                ].pause
                                            ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]  ) &&  (   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ] !== undefined   )   ){
                                        //the chars are equal incrase the range by one up to the length of the range, also undefined and undefined can come at the end so watch
                                        
                                        /*
                                            if everything is good
                                            we dont run this we could actually try
                                                to resolve things from here
                                                tell the modules what to do and stop this predeterminded loop <- best choice
                                                let the modules come to that forgone conclusion <- allows for order
                                                
                                            if everything is bad
                                                the range module does not have to do anything since it going to find the full rnage, this should be zero
                                                so tell the range not to even increment
                                                the trailer module should not have to do anything also
                                                    
                                                see what the gap and space module does, they should be lef untouched
                                        */
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullOK = 'true'
                                        var pMFL_2_i = {
                                            forLoop_0_i:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause,
                                            forLoopLength:dev_obj.range,
                                            fn:function(   dev_obj   ){
                                                console.log(   dev_obj.compTo[pMFL_2_i.forLoop_0_i],dev_obj.compAgn[pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i]   )
                                                //comparing the compTo to the spot in the compAgn
                                                
                                                if(   dev_obj.compTo[pMFL_2_i.forLoop_0_i] !== dev_obj.compAgn[pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i]   ){
                                                    // this means the full range compTo is not satsifed and the API needs to reset so tell it things
                                                    
                                                    console.group(   'up to this point the Full Module applies',pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i   )
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullLoopApply = pMFL_0_i.forLoop_0_i + pMFL_2_i.forLoop_0_i
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullOK = 'false'
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullRange = 'ignore';
                                                        //tells the range module to not add one if finds matches in the rest of the range until point
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullSpace = 'ignore'
                                                        // tells the spaces module to not look for that now diff. -1 same until point
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullGap = 'fill'
                                                        // tells the gap module to go ahead and fill things
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullPause = 'holdoff' // full module depends on pause to do the right thing here the pause must be at the 0 of compTo to get that range compAgn - compTo match
                                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullCheck = 'true'
                                                    console.groupEnd()
                                                    return 'premature'
                                                    
                                                    
                                                }
                                                
                                                
                                            },
                                            args:{
                                                    compTo  : dev_obj.compTo,
                                                    compAgn : dev_obj.compAgn
                                            }
                                        }
                                        ultraObject.forLoop(   pMFL_2_i   )
                                        // debugger
                                        // throw('e')
                                        console.log(   'now that I am out of the loop what happened'   )
                                        console.warn(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ]   )
                                        if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullOK === 'true'   ){
                                            // we practially found the string do not run the full module again,
                                            console.log('zab')
                                            //LEFT off
                                            //make sure full range knows what to do on when it finds the strings
                                            // make sure trailer tells gap where to gap up to
                                            //make sure full module is working properly and setup a trailer test to provide
                                            // the trailer module with instructions as well
                                        }
                                        
                                        
                                    }
                                    
                                    
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullLoopApply < pMFL_0_i.forLoop_0_i && ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullCheck === 'true'   ){
                                    
                                    
                                        console.log(   'it safe for the other modules to operate as normal Full Module removing restraints'   )
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullRange = 'regular';
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullSpace = 'regular';
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullGap = 'regular';
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullPause = 'regular';
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullCheck = 'false'
                                        
                                        
                                    }
                                    
                                    
                                }
                                 
                                    
                            console.groupEnd()
                        //}
                            // RANGE MODULE
                        /*
                            whats is needed
                                            dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause   ]
                                            dev_obj.compAgn[pMFL_0_i.forLoop_0_i]
                            what is handled
                                            if there is a match, it increases the range by one
                                            FUTURE: if reset is involved this goes back to zero
                        */
                        //{
                        console.group(   'Range Module'   )
                                
                            
                            if(   (   dev_obj.compTo
                                    [   ultraObject.misc
                                        [   ultraObject.scope[pMMisc_0_i]
                                        ].pause
                                    ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]  ) &&  (   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ] !== undefined   )   ){
                                //the chars are equal incrase the range by one, also undefined and undefined can come at the end so watch
                                                                                            
                                console.log(   'increase the range by one'   )
                                console.log(   'also increase pause by one'   )
                                
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] === 0   ){
                                
                                    
                                    console.log(   'let the trailer know that is does not need to run'   )
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].rangeFound = 'true'
                                    
                                    
                                }
                                               
                                
                                console.log(   'the full module is trying to tell me something'   )
                                ultraObject.objInvloved({
                                    0:pMFL_0_i.forLoop_0_i,
                                    1:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullLoopApply,
                                    2:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullRange
                                })
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullRange !== 'ignore'   ){
                                    /*
                                        this means that the full module found something wrong and is telling the range
                                        to not increment because the compTo and the proceeding substring do not match
                                    */
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] += 1;
                                    
                                    
                                }
                                
                                
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange = 'true';
                                
                                
                            }
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerRange === 'true'   ){
                            
                            
                                console.log('increase for the trailer ')
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i][pMRange_0_i_0_i] += 1;
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerRange = 'false';
                                
                                
                            }
                             
                              
                            if(   pMFL_0_i.forLoop_0_i ===  pMFL_0_i.forLoopLength -1   ){
                                // this means that we have come to then end of serarch but this also means several things as well
                                
                                if(   ultraObject.misc
                                    [   ultraObject.scope[pMMisc_0_i]   ]
                                        [pMRange_0_i][pMRange_0_i_0_i] < dev_obj.range   ){
                                    
                                    
                                    console.error(   'error in range'   )
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                                    console.groupEnd()
                                    return 'premature' //>
                                    
                                    
                                }
                                
                                
                            }
                            
                            
                            console.log(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMRange_0_i]   )
                            console.log(   dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause ]   )
                            console.log(   dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   )

                                                        
                            if(   ultraObject.misc
                                [   ultraObject.scope[pMMisc_0_i]   ]
                                    [pMRange_0_i][pMRange_0_i_0_i] >= dev_obj.range   ){
                                //if the range is greater than or equal to the range we have a match
                                
                                console.log(   'range has been satisfied'   )
                                return 'premature'
                                
                                
                            }
                         
                                
                            
                                                    
                            
                        console.groupEnd()
                        // }
                            // TRAILER MODULE (only look so far)
                        /*
                                what is needed
                                        dev_obj.trailer
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i]
                                what is handled
                                    if range could not find a match check first if there is even a trailer
                                        if there is use that as the length to continue checking for the match
                                            if compTo is shorter, then the users implies its later in the string
                                            if compTo is greater, check compTo till dev_obj.trailer
                                        if we could not find a match at the end of the loop and 1 to the containing loop till the end of the dev_obj.trailer
                                        also make a flag telling the range module to not to try and evaluate and return at this point
                                explanation
                                    for illo and asdfun semper fil twillo
                                    there is not trailer and another parameter because
                                    trailler  = 4
                                    [someParam] = 7
                                    it would end if the compTo is less than some param which has a length of trailer
                                        to find the match later in the string you just have to increase trailer and this would also
                                        terminate earliest
                                    also if someParam was less than the trailer that would not workout because if the match is
                                    later in the trailer and someParam only told it to look less in the compAgn, it would not be able to find it
                                    or it would take longer to find it as it moves up in the itO so only is needed
                                        
                        */
                        // {
                        console.group(   'Trailer Module'   )
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] < dev_obj.trailer   ){
                                
                                    
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] += 1;
                                //FIX ME memory leak
                                
                                if(   (   ultraObject.isInt(   {type:dev_obj.trailer}   ) === 'true' && dev_obj.trailer !== 0 && ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i] !== 0   ) && ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].rangeFound !== 'true'  ){
                                    /*
                                        for v1 the 3rd comannd stops the API for looking for
                                        trailers as this is a v2 courtesy to help the API
                                        find words in the middle of sentences
                                    */
                                    var pMFL_1_i = {
                                        forLoop_0_i:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause,
                                        forLoopLength: ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause + dev_obj.trailer + 1,
                                        fn:function(   dev_obj   ){
                                            console.log(   [dev_obj.compTo[pMFL_1_i.forLoop_0_i],dev_obj.compAgn[pMFL_0_i.forLoop_0_i]]   )
                                            
                                            
                                            if(   dev_obj.compTo[pMFL_1_i.forLoop_0_i] === dev_obj.compAgn[pMFL_0_i.forLoop_0_i]   ){
                                            
                                                
                                                console.log(   'match found in trailer'   )
                                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i] -= 1
                                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer = 'true'
                                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].pauseTrailerReplace = pMFL_1_i.forLoop_0_i + 1
                                                //helping the pause module do its job
                                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerRange = 'true'
                                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerGap = ultraObject.iterify(   {iterify:['itsThis',pMFL_0_i.forLoop_0_i]}   )
                                                // where it should start to find the range
                                                return 'premature'
                                                
                                                
                                            }
                                            
                                            
                                            if(   dev_obj.compTo[pMFL_1_i.forLoop_0_i + 1] === undefined   ){
                                                /*
                                                    this means that the trailer is bigger than the compTo string and there is no more
                                                    'looking up' to do in order to find the result the answer is not here
                                                */
                                                
                                                return 'premature'
                                                
                                                
                                            }
                                        
                                            
                                        },
                                        args:dev_obj
                                    }
                                    ultraObject.forLoop(   pMFL_1_i   )
                                    console.log(   'how far in compTo I must search'   )
                                    console.log(   dev_obj.trailer - ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i]   )
                                    console.log(   'how many times should I run this'   )
                                    console.log(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_0_i]   )
                                    
                                    
                                }
                            
                            
                            }
                            /*
                                this determines if the trailer Module runs, as the dev_obj.trailer
                                set by the developer when it hits the trailer
                            */
                            else if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMTrailer_0_i][pMTrailer_0_i_1_i] >= dev_obj.trailer   ){
                                
                                    
                            }
                            
                                                        
                        console.groupEnd()
                        // }
                            // SPACES MODULE
                        /*
                                what is needed
                                        dev_obj.spaces
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i]
                                what is handled
                                    when the comparisons do not match at first a space is made and is incremented by one
                                    when spaces exceed what is given by the dev obj we have an error
                                FIX ME ; in cases when there API finds nothing there should be one big space and the gap should be the length of comp
                                        
                        */
                        // {
                        console.group(   'Spaces Module'   )
                            
                                                                                            
                            if(   dev_obj.compTo
                                    [   ultraObject.misc
                                        [   ultraObject.scope[pMMisc_0_i]
                                        ].pause
                                    ] !== dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                // this means the prev was a match and the now isnt so the space has been made
                                
                                
                                if(   dev_obj.compTo
                                        [   ultraObject.misc
                                            [   ultraObject.scope[pMMisc_0_i]
                                            ].pause -1
                                        ] === dev_obj.compAgn[   pMFL_0_i.forLoop_0_i  - 1]   ){
                                        //so it doesnt not make empty spaces for missing chars
                                            
                                    console.log(   'need a space'   )
                                    console.log(   'tell the gap module we got a new space'   )
                                    console.log(   'the full module has something for the space module'   )
                                    ultraObject.objInvloved({
                                        0:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullSpace,
                                        1:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullLoopApply,
                                        2:pMFL_0_i.forLoop_0_i
                                    })
                                    
                                    
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullSpace !== 'ignore'   ){
                                        //the full module is telling the space module that the range has never increased and there is just one big space do not increment
                                        
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i] += 1
                                        
                                        
                                    }
                                    
                                    
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].spaceGap = 'true';
                                    ultraObject.objInvloved({
                                        0:ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i],
                                        1:dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]].pause] ,
                                        2:dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ],
                                        3:dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]].pause -1],
                                        4:dev_obj.compAgn[   pMFL_0_i.forLoop_0_i  -1 ]
                                    })
                                 
                                                                                
                                }
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMSpaces_0_i][pMSpaces_0_i_0_i] > dev_obj.spaces   ){
                                    //if the spaces in the API is too great
                                                                        
                                    console.error(   'error in spaces'   )
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                                    console.groupEnd()
                                    return 'premature'
                                    
                                                                        
                                }
                                    
                                                                
                            }
                            
                            
                        console.groupEnd()
                        // }
                            // GAP MODULE
                        /*
                                what is needed
                                        dev_obj.gap
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i]
                                what is handled
                                    when the comparisons do not match a gap is also made and is incremented by one
                                    when new gaps afer spaces exceed what is given by the dev obj we have an error
                                    these are handled by itO, to determine the gap count for evey space
                                        
                        */
                        // {
                        console.group(   'Gap Module'   )
                            
                                                                                            
                            if(   dev_obj.compTo
                                    [   ultraObject.misc
                                        [   ultraObject.scope[pMMisc_0_i]
                                        ].pause
                                    ] !== dev_obj.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                // this means the prev was a match and a gap is increasing
                                                                                                                                                    
                                    console.log(   'gap is increasing'   )
                                    
                                    
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].spaceGap === 'true'  && ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullGap !== 'fill'  ){
                                        //however full module intervenes here so there is one space not a new space and this should not work need the && to do this
                                        
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].add(   {value:1}   )
                                        // to properly account for the gap
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].spaceGap = 'false'

                                        
                                    }
                                                
                                                                        
                                    else if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].spaceGap !== 'true'   || ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullGap === 'fill'   ){
                                        // spaceGap might equal true but an || is needed because the full module takes order
                                        
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ]  +=1
                                        
                                        
                                    }


                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerGap !== undefined   ){
                                        
                                        
                                        if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerGap[0] === 'itsThis'   ){
                                            //this means that the trailer has made a range and the gap needs to be updated
                                            // but should this exist this puts limits on the user
                                            console.log(   'gap updated from trailer'   )
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ]  = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerGap[1]
                                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].trailerGap[0] = 'jobDone'
                                             
                                                
                                        }
                                        
                                        
                                    }
                                        
                                                         
                                    if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i][   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i].length -1    ] > dev_obj.gap   ){
                                        //if the spaces in the API is too great
                                                                            
                                        console.error(   'error in gap'   )
                                        ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].satisfy = false
                                        console.groupEnd()
                                        return 'premature'
                                        
                                                                            
                                    }
                                    
                                                                
                            }
                            
                            
                            console.log(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMGap_0_i]   )
                        console.groupEnd()
                        // }
                        /*
                            PAUSE  MODULE
                                what is needed
                                    dev_obj.compTo[   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause
                                what is handled
                                    handles many things about the API concerning the pause an imporan component to
                                    compTo
                                properties
                                    pauseRange, means that a match in the range was found add one to the pause
                                        
                        */
                        // {
                        console.group(   'Pause Module'   )
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange === 'true'  ){
                                
                                
                                if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].fullPause !== 'holdoff'   ){
                                    // full module also wants to prevent the pause module from doing anything
                                    
                                    ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause += 1;
                                    
                                    
                                }
                                
                                
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].pauseRange = 'false'
                                
                                
                            }
                            
                            
                            if(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer   === 'true'   ){
                            
                            
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].pauseTrailerReplace
                                ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i].equateToTrailer  = 'false'
                                
                            
                            }
                            
                            
                            ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i][pMPause_0_i_0_i] = ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ].pause;
                            
                            
                            console.log(   'compTo set tracking'   )
                            console.log(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i][pMPause_0_i_0_i]   )
                            console.log(   'current API state'   )
                            console.log(   ultraObject.misc[   ultraObject.scope[pMMisc_0_i]   ][pMPause_0_i]   )
                        console.groupEnd()
                        // }
                    },
                    args:dev_obj
                }
                ultraObject.forLoop(   pMFL_0_i   )
                ultraObject.scope.minus(   {index:pMMisc_0_i}   )
            }
            
                    
        }
        
        
        
    }/*this helps the API when its expected to be a inconsitencies in searches that have the same meaning, the developer can adjust how many values they want from all the way to complete difference to one char difference  in order for the API to say hey, that just a mispelled word it s okay*/
    