/*
    key
    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM - used to help the API generate a new nSM to be verified
*

/*
    first things first the nSM should be looked at than changes are made in the digits, if the nSM is not given, the orginal is used to make any changes in digits
    
    its important to note that once the nS is made, the order you see is not the order to apply the nSM, it was already ordered according to the nSM. to see the original order look at digits

/*
    this code blocks adds subtracts or modifies the numberSystem digits
    //if it sees nSM or digits, it should modify the digit order according to their indexes,
*/

/*
    applying digits to the NS
    // note later, if it doesnt get what it wants it should through an error
    // NS  are very impt to an operation
*/

/*
    adding the digits according to the nSM
    // we need to properly check against this that the intergrity of the nS is not compromised
    // to create digits gaps just as easily place undefined in the nSM, and have you API redefine it later
*/

/*
    misc -self -scope
    //deleting the misc that checks my parameter
*/

/*
    this code blocks adds subtracts or modifies the existing digits
    when nSM and the digits are  given it modifies the existing resource
    so if nSM
    
    "{
      "0": 2,
      "1": 0,
      "2": 1,
      "length": 3,
      "abelast": {
        "length": 0
      }
    }"
    
    and we get
    
    "{
      "0": 2,
      "length": 1,
      "abelast": {
        "length": 0
      }
    }"
    
    
    this is invalid because we have a system here, the developer cant do whatever and cant think the api has an ai and know what is meant explicitly provide a new one
    
    however for big numberSystems this could be a memory leak. so provide an itO iterified from an object
    
    iterify:
    "{
      "0": 0
      "1": 1
      '2': 2
    }"
    
    rules of the object,
    everything has to swap, well make holding spot in nSM, and if we find a problem we throw an error, thats really it
    
*/

/*
    asking first how many digits are there
    we ask according to the digits because this is how first the nS is made
    this has to be .limit, so we dont order out digits that are not there
*/

/*
    remaking the nSM
    in remaking the nSM, we rely on the digits length, as iteraton as replace the nSM
    use ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM - key
*/
function numberSystem(   dev_obj   ){
            /* ablelasts
                1 for nS
                1 for misc
            */
            /*
                .nS: if this is undefined the function sets aside a new numberSystem, if not it loads the one given according to the scope
                the indexes represents the digits
                .operation:
                    create - adds, modifes or removes digits from the numberSyste,
                        for every digit, we need the actual, the minx and the max
                        0 for actual, 1 for min 2 for max
                        requires a .digits or just leaves it alone
                .digits
                        an itO containing itO's that represent each digit of the nS
                        0 for the current digit
                        1 for the min amount the digit can be
                        2 for the max amount the digit can be
                        
                        this can be added all at once, or modified through out the application
                        
                .nSM, which digit comes first
                //
                    
                    determines how the number receive digits min is as 1 then 10 then 1000
                
                    so forr
                    0:1
                    1:0
                    2:2
                    3::3
                                .eCSNS:{
                                      0:{0:current,1:min,2:max}
                    the number system 1:{0:current,1:min,2:max}
                                      2:{0:current,1:min,2:max}
                                      3:{0:current,1:min,2:max}
                                        nSM:{}
                                }
                    if the fn receives add 1 nS[1].current will increase by one
                    when ns[1].current hits the max then ns[0].current increases by one and
                        ns[1].current returns to zero
                //
            */
            /*
                looping through  nSM to recreate the string!
                key:digits in ordered index: ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits[   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ]   ]
                key:the dev given nS:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]
            */
            
            /*adding the dev_obj to args*/ //{
            var numberSystem_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            // }  /**/
            
            if(   dev_obj !== undefined   ){
                
                /*we have a numberSystem to work with*/ //{
                if(   ultraObject.isInt(   {type:dev_obj.nS}   ) === 'true'  ){
                    
                    var nSNS_1_i = dev_obj.nS
                    
                    /*this code blocks adds subtracts or modifies the existing digits*/ //{
                    if(   dev_obj.operation === 'create'   ){
                        ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]
                        
                        /*if the developer wants the nS to be reordered*/ //{
                        if(   ultraObject.isitO(   {type:dev_obj.nSM}   )   ){
                            
                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer = dev_obj.nSM
                            
                            /* setting some presets to test when the nSM is remade */ //{
                            
                                /*asking first how many digits are there*/ //{
                                console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length   )
                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length
                                // }  /**/
                            
                            // }  /**/
                            
                            /*remaking the nSM*/ //{
                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = ultraObject.iterableObject()
                            var nSFL_1_i = {
                                forLoop_0_i:0,
                                forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                fn:function(   dev_obj   ){
                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer[   nSFL_1_i.forLoop_0_i   ]}   )
                                },
                                args:dev_obj
                            }
                            ultraObject.forLoop(   nSFL_1_i   )
                            console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM   )
                            // }  /**/
                            
                        }
                        // }  /**/
                        
                    }
                    // }  /**/
                    
                }
                // }  /**/
                
                /*make a new numberSystem if the calling function doesnt have ine*/ //{
                else if(   dev_obj.nS === undefined   ){
                    
                    /*this code blocks adds subtracts or modifies the numberSystem digits*/ //{
                    if(   dev_obj.operation === 'create'   ){
                        
                        /*adding of a new NS to the ultraobject*/ //{
                        var nSNS_0_i = ultraObject.scope.add(   {value:ultraObject.nS.add(   {value:ultraObject.iterableObject()}   )}   )
                        ultraObject.nS.abelast.add(   {value:ultraObject.scope[nSNS_0_i]}   )
                        // }  /**/
                        
                        /*applying digits to the NS*/ //{
                        
                            /*adding an ito to misc to check my  parameters*/ //{
                            var nSMisc_0_i = ultraObject.scope.add({
                                value:ultraObject.misc.add({value:ultraObject.iterify({
                                            iterify:[
                                                ultraObject.iterify({ iterify:['nSM','itO',dev_obj.nSM]}),
                                                ultraObject.iterify({ iterify:['digits','itO',dev_obj.digits]})
                                            ]
                                    })}
                            )})
                            // }  /**/
                        
                            var nSBOOL = {0:false}
                            nSBOOL = ultraObject.severalOr({
                                compTo: 'match',
                                compAgn: ultraObject.misc[   ultraObject.scope[nSMisc_0_i]   ],
                                boolean:nSBOOL,
                                how:function(   dev_obj   ){
                                    
                                    if(   !ultraObject.isitO(   {type:dev_obj.compAgnI[2]}   )   ){
                                        return 'a'
                                    }
                                },
                                result:'a',
                                which:0
                            })
                        
                            /*means a paramater type is not what the function wanted*/ //{
                            if(   nSBOOL[0]   ){
                                throw(   'dev_obj.' + ultraObject.misc[   ultraObject.scope[nSMisc_0_i]   ][   nSBOOL.spot   ][0] +' is not a ' +  ultraObject.misc[   ultraObject.scope[nSMisc_0_i]   ][   nSBOOL.spot   ][1] + ' check parameters types and try again '   )
                            }
                            // }  /**/
                    
                            /*lets go create this nS!*/ //{
                            else if(   !nSBOOL[0]   ){
                                
                                /* restructing the dev obj in the target nS*/ //{
                                ultraObject.nS[   ultraObject.scope[nSNS_0_i]].nSM = dev_obj.nSM
                                ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits = dev_obj.digits
                                // }  /**/
                                
                                /*looping through  nSM to recreate the string!*/ //{
                                var nSFL_0_i = {
                                    forLoop_0_i:0,
                                    forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_0_i]].nSM.length,
                                    fn:function(   dev_obj   ){
                                        
                                        /* adding the digits according to the nSM*/ //{
                                        ultraObject.nS[   ultraObject.scope[nSNS_0_i]].add({
                                                value:(   ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits[   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ]   ]   )
                                        })
                                        // }  /**/
                                        
        
                                      
                                    },
                                    args:dev_obj //{}
                                }
                                ultraObject.forLoop(   nSFL_0_i   )
                                // }  /**/
                                 
                            }
                            // }  /**/
                        
                            /*misc -self -scope*/ //{
                            ultraObject.misc.minus(   {index:ultraObject.scope[nSMisc_0_i]}   )
                            ultraObject.scope.minus(   {index:nSMisc_0_i}   )
                            // }  /**/
    
                        // }  /**/
                        
                        /*NS -scope */ //{
                        ultraObject.scope.minus(   {index:nSMisc_0_i}   )
                        // }  /**/
                        
                    }
                    // }  /**/
                    
                }
                // }  /**/
                
            }
            
            
        }
