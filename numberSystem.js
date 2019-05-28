/*
    key
    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM - used to help the API generate a new nSM to be verified an itO of the new itO
    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart - contuer to test against the nSM an itO conuter each index an iteration to the length of the itO
    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ]  -  index to check against nSM
 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits - when dev wants to modify the current digits in the nS
 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][0] - the digit as Object.entries when the digits are to be modified
 ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber = an array so devs can see it better in the debugger console
*

/*
    first things first the nSM should be looked at than changes are made in the digits, if the nSM is not given, the orginal is used to make any changes in digits
    
    its important to note that once the nS is made, the order you see is not the order to apply the nSM, it was already ordered according to the nSM. to see the original order look at digits

/*
    this code blocks adds subtracts or modifies the numberSystem digits
    //if it sees nSM or digits, it should modify the digit order according to their indexes,
*/

/*
    lets go create this nS!
    // note later, if it doesnt get what it wants that the developers fault
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

/*
    we want to see if the newnSM at the index contains an item in limitStart
    // see if we can also lessen the length when we take out an index so we dont get undefined as we loop through the limit start itO
    // key - ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ]
*/


/*
    if the developer wants the digits to be reordered
    if the developer does not want to get hit with the nSM restriction, to remove a digit from the nS, simply ultraObject minus on it, so you ultraObject should be about performance not vaildation because when there is validations performance is compromised instead one module should be dedicated to validation
*/

/*
    if the developer wants the digits to be changed
    we kinda dont need an itO we can also use an object with numbers as keys
    key  ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits
    if this is changed you want to take a look at the digits and the actual nS because they will be changed as well, the digits however according to the nSM
    key ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][0]
*/

/*
    adding of current number to nS object
    key ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber
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
                        decimal - turns the numberSystem number to a decimal for mathematical conversion and external-API readable format
                            .conversion - whether to convert to decimal or the custom numberSystem
                                to = convert to decimal
                                from = convert from decimal to nsm
                            .currentNumber when convert from decimal to a NS
                            .prevent -
                                    'false' - do not update the nS's number
                        update-
                            updae the .currentNumber after opperations
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
                        
                        /*NS +scope */ //{
                        var nSNS_1_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                        // }  /**/
                        
                        /*this code blocks adds subtracts or modifies the existing digits*/ //{
                        if(   dev_obj.operation === 'create'   ){
                            
                            /*if the developer wants the nS to be reordered*/ //{
                            if(   ultraObject.isitO(   {type:dev_obj.nSM}   )   ){
                                
                                /* node mode choice thread performance */ //{
                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = dev_obj.nSM
                                    var nSFL_1_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.length,
                                        fn:function(   dev_obj   ){
                                            
                                            /*means that the end of the current nSM*/ //{
                                            if(   nSFL_1_i.forLoop_0_i >= ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length ){
                                            
                                            
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]}   )
                                                
                                                
                                            }
                                            // }  /**/
                                            
                                            /*means newnSM can replace an available value in the current nSM*/ //{
                                            else if(   nSFL_1_i.forLoop_0_i < ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length   ){
                                                
                                                
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ] = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   nSFL_1_i.forLoop_0_i   ] =  ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ]   ]
                                                
                                                
                                            }
                                            // }  /**/
                                            
                                        },
                                        args:dev_obj
                                    }
                                    ultraObject.forLoop(   nSFL_1_i   )
                                    delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                                // }  /**/
                                
                                /* node mode choice thread validation */ //{
                                
                                    // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer = dev_obj.nSM
                                    
                                    // /* setting some presets to test when the nSM is remade */ //{
                                    
                                    //     /*asking first how many digits are there*/ //{
                                    //     console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length   )
                                    //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length
                                    //     // }  /**/
                                    
                                    // // }  /**/
                                    
                                    // /*remaking the nSM*/ //{
                                    // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = ultraObject.iterableObject()
                                    // var nSFL_1_i = {
                                    //     forLoop_0_i:0,
                                    //     forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                    //     fn:function(   dev_obj   ){
                                    //         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer[   nSFL_1_i.forLoop_0_i   ]}   )
                                    //     },
                                    //     args:dev_obj
                                    // }
                                    // ultraObject.forLoop(   nSFL_1_i   )
                                    // console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM   )
                                    
                                    //     /*testing if the nSM is valid*/ //{
                                    //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart  = ultraObject.iterableObject()
                                        
                                    //         /*grabbing all expected indexes from the length of the NS*/ //{
                                    //         var nSFL_2_i  = {
                                    //             forLoop_0_i:0,
                                    //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                    //             fn:function(   dev_obj   ){
                                    //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart.add(   {value:ultraObject.iterify(   {iterify:[nSFL_2_i.forLoop_0_i,-1]}   )   }   )
                                    //             },
                                    //             args:dev_obj
                                    //         }
                                    //         ultraObject.forLoop(   nSFL_2_i    )
                                    //         // }  /**/
                                            
                                    //         /*testing to see if all indexes are represented in the newnSM*/ //{
                                    //         var nSFL_3_i   = {
                                    //             forLoop_0_i:0,
                                    //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                    //             fn:function(   dev_obj   ){
                                    //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   )
                                    //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i   ][0]   )
                                                    
                                    //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                    //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ] !== undefined   ){
                                                            
                                    //                         debugger
                                    //                         console.log(   'its there ill note it in limitStart'   )
                                    //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ][1] = -2
                                    //                         console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart   )
                                                            
                                                            
                                    //                     }
                                    //                     // }  /**/
                                                        
                                    //                 console.log('----')
                                    //             },
                                    //             args:dev_obj
                                    //         }
                                    //         ultraObject.forLoop(   nSFL_3_i     )
                                    //         // }  /**/
                                            
                                    //         /*checking limit start to see if nSM is valid*/ //{
                                    //         var nSFL_4_i   = {
                                    //             forLoop_0_i:0,
                                    //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart,
                                    //             fn:function(   dev_obj   ){
                                    //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i][0]   ]   )
                                    //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i   ][0]   )
                                                    
                                    //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                    //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   [   nSFL_4_i.forLoop_0_i]   ][1] === -1    ){
                                                            
                                                            
                                    //                         console.log(   'this  is invalid'   )
                                    //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid = 'false'
                                    //                         return 'premature'
                                                            
                                    //                     }
                                    //                     // }  /**/
                                                        
                                    //                 console.log('----')
                                    //             },
                                    //             args:dev_obj
                                    //         }
                                    //         ultraObject.forLoop(   nSFL_4_i     )
                                            
                                            
                                    //         if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid === 'false'   ){
                                                
                                                
                                    //             console.log(   'bad nSM reset please'   )
                                    //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart
                                    //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit
                                    //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                                    //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer
                                                
                                    //         }
                                    //         // }  /**/
                                                                                
                                    //     // }  /**/
                                        
                                    
                                    // // }  /**/
                                // }  /**/
                                
                            }
                            // }  /**/
                            
                            /*if the developer wants the digits to be changed*/ //{
                            // the actual digits get modified according to given and the original .digits get modified according their respecitve digits in the actual digits
                            // key ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][0], used to access the orginal digit in the numberSystem to change the digits accordingly
                            if(   dev_obj.digits !== undefined   ){
                                
                                
                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits = Object.entries(   dev_obj.digits   )
                                
                                var nSFL_6_i  = {
                                    forLoop_0_i:0,
                                    forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits.length,
                                    fn:function(   dev_obj   ){
                                        
                                        
                                        if(   ultraObject.isInt(   {type:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_6_i.forLoop_0_i   ][0]}   )   ){
                                            
                                            
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_6_i.forLoop_0_i   ][0]   ]   ] = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_6_i.forLoop_0_i   ][1]
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    args:dev_obj
                                }
                                ultraObject.forLoop(   nSFL_6_i    )
                                var nSFL_5_i  = {
                                    forLoop_0_i:0,
                                    forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits.length,
                                    fn:function(   dev_obj   ){
                                        
                                        
                                        if(   ultraObject.isInt(   {type:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][0]}   )   ){
                                            
                                            
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][0]  ] = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits[   nSFL_5_i.forLoop_0_i   ][1]
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    args:dev_obj
                                }
                                ultraObject.forLoop(   nSFL_5_i    )
                                delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits
                                
                                
                            }
                            // }  /**/
                            
                            
                        }
                        // }  /**/
                        
                        /*adding of current number to nS object*/ //{
                        ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].currentNumber = []
                        var nSFL_6_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].length,
                            fn:function(   dev_obj   ){
                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   nSFL_6_i.forLoop_0_i   ][0])
                            },
                            args:dev_obj //{}
                        }
                        ultraObject.forLoop(   nSFL_6_i   )
                        // }  /**/
                            
                        /*NS -scope */ //{
                        ultraObject.scope.minus(   {index:nSNS_1_i}   )
                        // }  /**/
                            
                    }
                    // }  /**/
                    
                    /*make a new numberSystem if the calling function doesnt have it*/ //{
                    else if(   dev_obj.nS === undefined   ){
                        
                        /*this code blocks adds subtracts or modifies the numberSystem digits*/ //{
                        if(   dev_obj.operation === 'create'   ){
                            
                            /*adding of a new NS to the ultraobject*/ //{
                            var nSNS_0_i = ultraObject.scope.add(   {value:ultraObject.nS.add(   {value:ultraObject.iterableObject()}   )}   )
                            ultraObject.nS.abelast.add(   {value:ultraObject.scope[nSNS_0_i]}   )
                            // }  /**/
                            
                            
                        
                            /*lets go create this nS!*/ //{
                                
                                /* restructing the dev obj in the target nS*/ //{
                                ultraObject.nS[   ultraObject.scope[nSNS_0_i]].nSM = dev_obj.nSM
                                ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits = dev_obj.digits
                                // }  /**/
                                
                                /*looping through  nSM to recreate the string!*/ //{
                                
                                    
                                    /*an important check to make sure the nSM is availble!*/ //{
                                    ultraObject.propertyUndefined({
                                            target:ultraObject.nS[   ultraObject.scope[nSNS_0_i]],
                                            expected:ultraObject.iterify({iterify:["nSM","length"]}),
                                            noVal:{'a':'b'}
                                    })
                                    // }  /**/
                                    
                                    var nSobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.abelast[   ultraObject.objIO.abelast.length-1]}   )
                                    
                                    
                                    if(   ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result['a'] !== 'b'   ){
                                        
                                        
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
                                        
                                        
                                    }
                                    
                                    /*objIO -scope -self -abelast */ //{
                                        debugger
                                        ultraObject.objIO.minus(   {index:ultraObject.scope[nSobjI_0_i]}   )
                                        ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length -1}   )
                                        ultraObject.scope.minus(   {index:nSobjI_0_i}   )
                                    // }  /**/
                                    
                                // }  /**/
                                 
                            // }  /**/

                            
                            /*adding of current number to nS object*/ //{
                            ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber = []
                            var nSFL_6_i = {
                                forLoop_0_i:0,
                                forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].length,
                                fn:function(   dev_obj   ){
                                    ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ][   nSFL_6_i.forLoop_0_i   ][0])
                                },
                                args:dev_obj //{}
                            }
                            ultraObject.forLoop(   nSFL_6_i   )
                            // }  /**/
                                
                            /*NS -scope */ //{
                            ultraObject.scope.minus(   {index:nSNS_0_i}   )
                            // }  /**/
                            
                        }
                        // }  /**/
                        
                    }
                    // }  /**/
                    
                    /* convert the number to a decimal */ //{
                    // this will also be used for math operations
                    // the smallest digit is at 0 the largest is at length - 1, sometimes we need to know what the largest digit is i hope i made the right choice future
                    if(   dev_obj.operation === 'decimal'   ){
                        
                        /*NS +scope */ //{
                        var nSNS_2_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                        // }  /**/
                        
                        /*converting the number to decimal */ //{
                        if(   dev_obj.conversion === 'to'   ){
                            
                            
                            if(   !ultraObject.isitO(   {value:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal}   )   ){
                                
                                
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal = ultraObject.iterableObject()
                                
                                
                            }
                            
                            
                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber = 0
                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                            var nSFL_7_i = {
                                forLoop_0_i:-ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].length,
                                forLoopLength:0,
                                fn:function(   dev_obj   ){
                                    //1
                                    // ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.add(   {value:ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ]}   )
                                    //2 actual update
                                    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber += (   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ][0] - ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ][1]   ) * (    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   )
                                    //3
                                    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range *=( ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ][2]  - ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ][1]   )
                                },
                                args:dev_obj //{}
                            }
                            ultraObject.forLoop(   nSFL_7_i   )
                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                            
                            
                        }
                        // }  /**/
                        
                        /*converting the decimal number to the numberSystem */ //{
                        //we get the decimal number now we should go to the biggest to smallest the biggest digit is at digit 0 representing all digits, but you must have that max range and you dont know how big the number is so you must start from the back
                        //
                        else if(   dev_obj.conversion === 'from'   ){
                            
                            
                            if(   !ultraObject.isitO(   {value:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal}   )   ){
                                
                                
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal = ultraObject.iterableObject()
                                
                                
                            }
                            
                                                    
                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber = dev_obj.currentNumber
                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                            
                            
                            if(   dev_obj.prevent === 'false'   ){
                                
                                
                                
                            }
                            
                            /*we going to replace the actual number numberSystem*/ //{
                            else if(   dev_obj.prevent !== 'false'   ){
                                
                                
                                var nSFL_8_i = {
                                    forLoop_0_i: 0,
                                    forLoopLength:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].length,
                                    fn:function(   dev_obj   ){
                                        ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   nSFL_8_i.forLoop_0_i   ][0] = ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   nSFL_8_i.forLoop_0_i   ][1]
                                        var nSFL_9_i = {
                                            forLoop_0_i: -(ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].length - 1 ),
                                            forLoopLength:0-nSFL_8_i.forLoop_0_i,
                                            fn:function(   dev_obj   ){
                                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range *= ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   -nSFL_9_i.forLoop_0_i   ][2] - ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   -nSFL_9_i.forLoop_0_i   ][1]
                                            },
                                            args:dev_obj //{}
                                        }
                                        ultraObject.forLoop(   nSFL_9_i   )
                                        
                                        /*at this point we have the range to work with now computing the actual digit*/ //{
                                        // the range determines if the number should be subtracted and moved into the current digit
                                        //if the currentDigit is less than the range move on to the next digit
                                        // I hope parseInt is a ES5 solution and it always Math.floor
                                        console.log(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range,'what it takes to get to the next digit'   )
                                        if(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber >= ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range     ){
                                            
                                            
                                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   nSFL_8_i.forLoop_0_i   ][0] += Math.floor(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber/ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   )
                                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber -= (ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range  * Math.floor(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber/ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   )   )
                                            
                                            
                                        }
                                        ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                        // }  /**/
                                        
                                    },
                                    args:dev_obj //{}
                                }
                                ultraObject.forLoop(   nSFL_8_i   )
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                
                            }
                            // }  /**/
                                
                        }
                        // }  /**/
                        
                        
                    }
                    // } /**/
                    
                    /* update the currentNumber*/ //{
                    if(   dev_obj.operation === 'update'   ){
                        
                        
                        var nSNS_3_i = dev_obj.nS
                        ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].currentNumber = []
                        var nSFL_10_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].length,
                            fn:function(   dev_obj   ){
                                ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ][   nSFL_10_i.forLoop_0_i   ][0])
                            },
                            args:dev_obj //{}
                        }
                        ultraObject.forLoop(   nSFL_10_i   )
                        
                        
                    }
                    // }  /**/
                    
                }
                
                
            }