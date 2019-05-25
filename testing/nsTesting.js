ultraObject = ultraObjectReset();
// jjjj = ultraObject.iterableObject();jjjj.add(   {value:1}   ); jjjj.add(   {value:2}   );jjjj.add(   {value:3}   );jjjj.add(   {value:4}   );jjjj.add(   {value:5}   );jjjj.add(   {value:6}   );
// jjjj.minus(   {value:3}   )
// debugger

// var FL_0_i = {
//     forLoop_0_i:0,
//     forLoopLength:ultraObject.allTags[ultraObject.scope[0]].length,
//     fn:function(   dev_obj   ){
//        console.log(   ultraObject.allTags[ultraObject.scope[0]][FL_0_i.forLoop_0_i].childElementCount   )
//     },
//     args:{}
//      }
// ultraObject.forLoop(   FL_0_i   )
// debugger

//testing nSM creation
//                         ultraObject.numberSystem({
//                             operation:'create',
//                             digits:ultraObject.iterify({
//                                     iterify:[
//                                         ultraObject.iterify({
//                                             iterify:[0,0,99]
//                                         }),
//                                         ultraObject.iterify({
//                                             iterify:[0,0,92]
//                                         }),
//                                         ultraObject.iterify({
//                                             iterify:[12,0,71]
//                                         }),
//                                     ]
//                                 }),
//                             nSM:ultraObject.iterify({iterify:[2,0,1]})
                            
//                         })

// testing to decimal conversion
//1 single digit min 0 sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[0,0,92]
                }),
                ultraObject.iterify({
                    iterify:[12,0,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 12')

//2 single digit min - sucess should 34 sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[0,0,92]
                }),
                ultraObject.iterify({
                    iterify:[12,-22,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 34')


// //3 single digit min + sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[0,0,92]
                }),
                ultraObject.iterify({
                    iterify:[12,2,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 10')

                                                                                         
                        
// //4 double digit min 0 no first  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[1,0,92]
                }),
                ultraObject.iterify({
                    iterify:[0,0,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 71')

// //5 double digit min 0 first 0      should 143  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[2,0,92]
                }),
                ultraObject.iterify({
                    iterify:[1,0,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 143')

// //6 double digit min - first 0      should 285  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[2,-2,92]
                }),
                ultraObject.iterify({
                    iterify:[1,0,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 285')

//7 double digit min + first 0      should 1  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[2,2,92]
                }),
                ultraObject.iterify({
                    iterify:[1,0,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 1')


//8 double digit min 0 first -      should 72  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[1,0,92]
                }),
                ultraObject.iterify({
                    iterify:[-1,-1,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 72')


// //9 double digit min + first -      should 72  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[2,1,92]
                }),
                ultraObject.iterify({
                    iterify:[-1,-1,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 72')


// //10 double digit min - first -      should 72  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[0,-1,92]
                }),
                ultraObject.iterify({
                    iterify:[-1,-1,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 72')


//10 double digit min 0 first +      should 70  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0,99]
                }),
                ultraObject.iterify({
                    iterify:[1,0,92]
                }),
                ultraObject.iterify({
                    iterify:[1,1,71]
                }),
            ]
        }),
       nSM:ultraObject.iterify({iterify:[0,1,2]})
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 70')
  

//11 double digit min - first +      should 70  sucess
ultraObject = ultraObjectReset();
                        ultraObject.numberSystem({
                            operation:'create',
                            digits:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[0,0,99]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[0,-1,92]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[1,1,71]
                                        }),
                                    ]
                                }),
                               nSM:ultraObject.iterify({iterify:[0,1,2]})
                        })
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 70')
                          

//12 double digit min + first +      should 140  sucess
ultraObject = ultraObjectReset();
                        ultraObject.numberSystem({
                            operation:'create',
                            digits:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[0,0,99]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[3,1,92]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[1,1,71]
                                        }),
                                    ]
                                }),
                               nSM:ultraObject.iterify({iterify:[0,1,2]})
                        })
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 140')
                                     

//13 multi digit double digit 0 first 0      should 921  sucess
ultraObject = ultraObjectReset();
                        ultraObject.numberSystem({
                            operation:'create',
                            digits:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[9,0,10]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[2,0,10]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[1,0,10]
                                        }),
                                    ]
                                }),
                               nSM:ultraObject.iterify({iterify:[0,1,2]})
                        })
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 921')
                                                                    
//14 the power of the ultraObject      should 1500  sucess
ultraObject = ultraObjectReset();
                        ultraObject.numberSystem({
                            operation:'create',
                            digits:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[15,0,10]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[0,0,10]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[0,0,10]
                                        }),
                                    ]
                                }),
                               nSM:ultraObject.iterify({iterify:[0,1,2]})
                        })
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 1500')
                        throw('eCSST')
                                                
            //when the nS is availble in the API
                        
                        ultraObject.numberSystem({
                            operation:'create',
                            nS:0,
                            nSM:ultraObject.iterify({iterify:[2,1,0]})
                                                           
                        })
                        debugger
                        
                        ultraObject.numberSystem({
                            operation:'create',
                            nS:0,
                            nSM:ultraObject.iterify({iterify:[1,2,0]}),
                            digits:{
                                      0:ultraObject.iterify({
                                            iterify:[31,0,76]
                                        }),
                                     2:ultraObject.iterify({
                                            iterify:[41,0,79]
                                        })
                                   }
                        })

                                            
                                    
//                         ultraObject.numberSystem({
//                             digits:ultraObject.allTags[ultraObject.allTags.eCSST],
//                             operation:'add',
//                             amount: 7200000// smallest number I can add to fix the problem -240357 111100112
//                         })
//                         ultraObject.numberSystem({
//                             digits:ultraObject.allTags[ultraObject.allTags.eCSST],
//                             operation:'multiply',
//                             amount: 1.5// smallest number I can add to fix the problem -240357 111100112
//                         })
//                         ultraObject.numberSystem({
//                             digits:ultraObject.allTags[ultraObject.allTags.eCSST],
//                             operation:'print',
//                             // smallest number I can add to fix the problem -240357 111100112
//                         })
//                         ultraObject.numberSystem({
//                             digits:ultraObject.allTags[ultraObject.allTags.eCSST],
//                             operation:'decimal',
//                             // smallest number I can add to fix the problem -240357 111100112
//                         })