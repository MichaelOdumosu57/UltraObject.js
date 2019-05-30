


//testing nSM creation sucess
// we want to make that digit there an itO but thats nasty looking ill provide option here
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[1,0,1]]
                }),
                ultraObject.iterify({
                    iterify:[1,ultraObject.iterify({iterify:[2,0,1]})]
                }),
                ultraObject.iterify({
                    iterify:[2,ultraObject.iterify({iterify:[3,0,1]})]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,2]
                }),
                ultraObject.iterify({
                    iterify:[1,0]
                }),
                ultraObject.iterify({
                    iterify:[2,1]
                })
            ]
        })
})
// with items missing from the inside sucess
ultraObject = ultraObjectReset();
                        ultraObject.numberSystem({
                            operation:'create',
                            digits:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[0,[1,0,1]]
                                        }),
//                                         ultraObject.iterify({
//                                             iterify:[1,ultraObject.iterify({iterify:[2,0,1]})]
//                                         }),
                                        ultraObject.iterify({
                                            iterify:[2,ultraObject.iterify({iterify:[3,0,1]})]
                                        }),
                                    ]
                                }),
                            nSM:ultraObject.iterify({
                                    iterify:[
                                        ultraObject.iterify({
                                            iterify:[2,0]
                                        }),
                                        ultraObject.iterify({
                                            iterify:[0,2]
                                        }),
//                                         ultraObject.iterify({
//                                             iterify:[1,0]
//                                         })
                                    ]
                                })
                        })


/*with nothing we will do thhis later
// ultraObject = ultraObjectReset();
// ultraObject.numberSystem({
//     operation:'create'
// })

// with an unavailble digits
//you will need both
// ultraObject = ultraObjectReset();
// ultraObject.numberSystem({
//     operation:'create',
//     nSM:ultraObject.iterify({
//             iterify:[
//                 ultraObject.iterify({
//                     iterify:[2,0]
//                 }),
//                 ultraObject.iterify({
//                     iterify:[0,2]
//                 }),
//             ]
//         })
// })
*/
//modifying availble nS with only the nSM
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[1,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[2,[3,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[3,[4,0,5]]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,2]
                }),
                ultraObject.iterify({
                    iterify:[1,0]
                }),
                ultraObject.iterify({
                    iterify:[2,1]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'create',
    nS:0,
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,1]
                }),
                ultraObject.iterify({
                    iterify:[1,0]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                }),
                ultraObject.iterify({
                    iterify:[3,3]
                })
            ]
        })
})


//modifying availble nS with only the nSM unsorted
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[1,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[2,[3,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[3,[4,0,5]]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[2,1]
                }),
                ultraObject.iterify({
                    iterify:[0,2]
                }),
                ultraObject.iterify({
                    iterify:[1,0]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'create',
    nS:0,
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[3,2]
                }),
                ultraObject.iterify({
                    iterify:[0,1]
                }),
                ultraObject.iterify({
                    iterify:[2,3]
                }),
                ultraObject.iterify({
                    iterify:[1,0]
                })
            ]
        })
})



//modifying availble nS with only the nSM  items missing from creation
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[1,0,5]]
                }),
//                 ultraObject.iterify({
//                     iterify:[1,[2,0,5]]
//                 }),
                ultraObject.iterify({
                    iterify:[2,[3,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[3,[4,0,5]]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
//                 ultraObject.iterify({
//                     iterify:[2,1]
//                 }),
                ultraObject.iterify({
                    iterify:[0,2]
                }),
                ultraObject.iterify({
                    iterify:[2,0]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'create',
    nS:0,
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[3,2]
                }),
//                 ultraObject.iterify({
//                     iterify:[0,1]
//                 }),
                ultraObject.iterify({
                    iterify:[2,3]
                }),
                ultraObject.iterify({
                    iterify:[0,0]
                })
            ]
        })
})

//modifying availble nS with only the digits
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[1,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[2,[3,0,5]]
                }),
                ultraObject.iterify({
                    iterify:[3,[4,0,5]]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[2,1]
                }),
                ultraObject.iterify({
                    iterify:[0,2]
                }),
                ultraObject.iterify({
                    iterify:[3,0]
                }),
                ultraObject.iterify({
                    iterify:[1,3]
                })
            ]
        })
})

ultraObject.numberSystem({
    operation:'create',
    nS:0,
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[7,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[1,[8,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[2,[9,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[3,[11,0,15]]
                })
            ]
        }),
})

    
 
// modifying the nS with both this is a no-op if you dont change the order of the dev_obj.digits, it only affects how the digits are ordered
// the new digits are to update the digits in the nS and respectively rematch them in digits not the other way around
// to have a meaningful change the digits index must be changed
ultraObject.numberSystem({
    operation:'create',
    nS:0,
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[2,[7,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[1,[8,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[3,[9,0,11]]
                }),
                ultraObject.iterify({
                    iterify:[0,[11,0,15]]
                })
            ]
        }),
        nSM:ultraObject.iterify({
                iterify:[
                    ultraObject.iterify({
                        iterify:[2,1]
                    }),
                    ultraObject.iterify({
                        iterify:[0,3]
                    }),
                    ultraObject.iterify({
                        iterify:[3,2]
                    }),
                    ultraObject.iterify({
                        iterify:[1,0]
                    })
                ]
            })

})

// testing to decimal conversion
//1 single digit min 0 sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[12,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 12')

// //2 single digit min - sucess should 34 sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[12,-22,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
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
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[12,2,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 10')

                                                                                         
                        
// // //4 double digit min 0 no first  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[1,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[0,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 71')

 //5 double digit min 0 first 0      should 143  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
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
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,-2,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 285')

// //7 double digit min + first 0      should 1  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,2,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 1')


//8 double digit min 0 first -      should 71  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[1,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[-1,-1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
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
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,1,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[-1,-1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber + ' should be 72')


// // //10 double digit min - first -      should 72  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,-1,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[-1,-1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 72')


// //10 double digit min 0 first +      should 70  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[1,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 70')
  

// //11 double digit min - first +      should 70  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,-1,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 70')
                          

// //12 double digit min + first +      should 140  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[3,1,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,1,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 140')
                                     

// //13 multi digit double digit 0 first 0      should 921  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[9,0,10]]
                }),
                ultraObject.iterify({
                    iterify:[1,[2,0,10]]
                }),
                ultraObject.iterify({
                    iterify:[2,[1,0,10]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 921')
                                                                    
// //14 the power of the ultraObject      should 1500  sucess
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[15,0,10]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,10]]
                }),
                ultraObject.iterify({
                    iterify:[2,[0,0,10]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0
})
console.log(ultraObject.nS[   0   ].decimal.currentNumber  + ' should be 1500')





//conversion from
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[5,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[1,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[6,0,71]]
                }),
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                }),
                ultraObject.iterify({
                    iterify:[0,0]
                })
            ]
        })
})

// 1 from below the lowest digit all min 0  sucess
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:70
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,0,70]'   )
              
// 2 in the next digit all min 0 sucess
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:74
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,1,3]'   )

// // 3 in the next digit grater than the nS 1 all min 0 sucess
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:216
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,3,3]'   )


// 4 in the higest digit grater than the nS 1 at the digit all min 0 sucess
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:19599
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [3,0,3]'   )

// 5 lets get to the max
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:640136
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [98,0,0]'   )


//5 testing back and forth
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:74
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'to',
    nS:0,
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,1,3]'   )
console.log(   ultraObject.nS[0].decimal.currentNumber, 'should return 74'   )

// 6 - first digit all 0 curr <
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,ultraObject.iterify({iterify:[0,-2,71]})]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:60
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,0,58]'   )

// 7 - first digit all 0 curr =
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:73
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,1,-2]'   )

// 8 - first digit all 0 curr >
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:75
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,1,0]'   )

// 9 - first digit all 0 curr > multiple first digit
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:149
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,2,1]'   )

// 10 - first digit all 0 curr > higest digit
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:6716
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [1,0,-2]'   )
debugger



// 20 + first digit all 0
ultraObject = ultraObjectReset();
ultraObject.numberSystem({
    operation:'create',
    digits:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,[0,0,99]]
                }),
                ultraObject.iterify({
                    iterify:[1,[0,0,92]]
                }),
                ultraObject.iterify({
                    iterify:[2,[0,2,71]]
                })
            ]
        }),
    nSM:ultraObject.iterify({
            iterify:[
                ultraObject.iterify({
                    iterify:[0,0]
                }),
                ultraObject.iterify({
                    iterify:[1,1]
                }),
                ultraObject.iterify({
                    iterify:[2,2]
                })
            ]
        })
})
ultraObject.numberSystem({
    operation:'decimal',
    conversion:'from',
    nS:0,
    currentNumber:60
})
ultraObject.numberSystem({
    operation:'update',
    nS:0
})
console.log(   ultraObject.nS[0].currentNumber, 'should return [0,0,62]'   )

// when you test with non consecutive digits it still works!!
throw('eCSST')
                                                

                        


                                            
                                    
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



// postgres
// create table nSTesting;
// in order no gap
// in order gap
// non order no gap
// non order gap