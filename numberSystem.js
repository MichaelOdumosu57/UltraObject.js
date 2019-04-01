function numberSystem(   dev_obj   ){
        // this
        // .digits the object holding the NS and its map
        /*
            //.eCSNS a property in an object that contains the digits of the numbers as well the min max range of each digit
                .nSM,
                /*
                    
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
                
                */
                //.currentNumber
                /*
                    the current number for the NS
                */
            // logic
            // once 0 hits max then 1   ... once 1 hits max then 2
            //.further_checks if the case causes a break in the number,
                // !true if resulting number is valid in the number system
                // true if resulting number is not valid in the number system
            // 10 - 1 is 9 so in our decimal system 10 is max and 10 is min but if the min is 201 and the max is 299, -1 can only be one it will be the min here since 0 + 10 = 10 and not 9 201 + [digit amount] = 201,202
        //each digit is an iterableObject
        // 0 the current Digit
        // 1 the min digit for the digits
        // 2 the max digit for the digit
        //for min it needs to be tested
            // minus 1 how it will react
                //when its time for the NS to borrow, the first digit must be 1 less than its max
            // when the subtraction or add negative does not make the current less thean the min
            // the index at the digit
            // when it asks to borrow once
            // when it borrows several times
            //when it hits the NS  0
            
        // when working on max ask these questions
        /*
            //what  happens when i am at the current val max how do it increase the digits properly
                //works properly
            // when the sum is greater than the max how do I allocate to increase the digits properly
                 that is working properly, you have to subtract the length down one to one before the min and do the addition,
                    you also have to increase the next digit by one
                
            // when the sum is less than the max do I handle it simply
                //yes the first conditional does the math, checks if there is a [3] fo the NS for the next digit and returns 'premature'
            //do i interefere with the functionality meant for other circumstances
                //for the min make the dev_amount negative so it wont break bounds
        */
        // .operation
            /*
                what the number system is needed to do
                add, will be used for addition and subtract of decimal based integer values to the number system
                    it needs an .amount as an int
                validate, make sure the resulting number obeys the NS laws
                decimal, returns the decimal version of the number, good if you need to perform comparison or you are trying to do computation with different numberSystem since js is based off the decimal system this works perfectly
                    returns a int
                multiply
                    multiples the NS number according to the ns, the amount mustbe an int
                divide
                    divides the NS number according the NS, the decimal division reslt must be an int
                print prints the current number as well as puts it in the currentNumber property of the eCSNS,this should change so that currentNumber can be evaluated at use but for now its not
            */
        // .amount
            /*
                if the operation is add, then this is the amount to add, negative int to subtract
                if the operation is compare, this is a iterable Object of all desired comparisons
            */
         
        console.group(   'providing the mechanism for the number system'   )
        
        
        if(   dev_obj.operation === 'validate'   ){
                    
                            
            var numberSystemFL_1_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    
                    
                    if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0] < dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][1] || dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0] >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][2]   ){
                     
                     
                        throw(   'invalid number for the numberSystem'   )
                        
                        
                    }
                    
                    
                },
                args:{
                        digits:dev_obj.digits,
                    }
            }
            ultraObject.forLoop(   numberSystemFL_1_i   )
                        
            
        }
        
        
        if(   dev_obj.operation === 'decimal'   ){
                   
                    
            var decimalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][0] -  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][1]
            var rangeNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][2] - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[0]][1]
            var originalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[1]][0]
            //first digit range that influences the 2nd digit
            var numberSystemFL_2_i = {
                forLoop_0_i:1,// because the first digit is already of base decimal unless we decide how the digits count for the NS
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    
                   
                   if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] !==  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][1]  ){
                    
                    
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] -= 1
                        decimalNS += rangeNS
                        //effect adding the next digits worth for the decimal system
                        numberSystemFL_2_i.forLoop_0_i -= 1
                        // so we can get back to the min
                       
                    }
                    
                    
                    else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] ===  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][1] ){
                        
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i]][0] = originalNS
                        
                        
                        if(   numberSystemFL_2_i.forLoop_0_i+1 !==  numberSystemFL_2_i.forLoopLength){
                            
                            
                            rangeNS *=  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i-1]][2] - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i-1]][1]
                            originalNS = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_2_i.forLoop_0_i+1]][0]
                        
                        
                        }
                        
                    }
                    
                },
                
                args:{
                        digits:dev_obj.digits,
                        amount:dev_obj.amount
                    }
            }
            ultraObject.forLoop(   numberSystemFL_2_i   )
            return decimalNS
            
        }
        
        
        if(   dev_obj.operation === 'multiply'   ){
                    
                        
            if(   dev_obj.amount < 0  ){
                
                
                throw(' the NS does not undestand what to do the NS starts from 0 and to supply negative numbers requires future implemenation, also the amount must be an int' )
                
                
            }
            
            
            var decimalNS = ultraObject.numberSystem({
                digits:dev_obj.digits,
                operation:'decimal',
            })
            ultraObject.numberSystem({
                digits:dev_obj.digits,
                operation:'add',
                amount:-decimalNS
            })
            // gets to  0 so we can do the multiplcation through the decimal system much easier
            decimalNS *= dev_obj.amount

            
            if(   ultraObject.isInt(   {type:decimalNS}   ) === 'false'   ){
                
                
                throw(   'this will make the number invalid no-op'   )
                
                
            }
            
            
            else if(   ultraObject.isInt(   {type:decimalNS}   ) === 'true' && dev_obj.amount !== 0  ){
                //since the NS number is already 0 no need for noop
                
                ultraObject.numberSystem({
                    digits:dev_obj.digits,
                    operation:'add',
                    amount:decimalNS
                })
                
                
            }
            
                            
        }
        
        
        if(   dev_obj.operation === 'divide'   ){
            
                        
            if(   dev_obj.amount === 1   ){
                
                
                //no -op
                                
                                
            }
            
            
            if(   dev_obj.amount <= 0   ){
                
                
                throw(' in the decimal system divide by zero cannot be expressed so its an error. if the amount was negative, the implemnetation to express it is not available yet' )
                
                           
            }
            
            
            var decimalNS = ultraObject.numberSystem({
                digits:dev_obj.digits,
                operation:'decimal',
            })
            decimalNS -= (decimalNS/dev_obj.amount)
            
            
            if(   ultraObject.isInt(   {type:decimalNS}   ) === 'true'   ){
                
                
                if(   dev_obj.amount > 1   ){
                
                
                    ultraObject.numberSystem({
                        digits:dev_obj.digits,
                        operation:'add',
                        amount:-decimalNS
                    })
                                
                                
                }
                
                
            }
            
            
            else if(   ultraObject.isInt(   {type:decimalNS}   ) === 'false'   ){
                
                
                console.error('the result must be an int no-op')
                
                
            }
            
        }
        
        
        if(   dev_obj.operation === 'add'  ){
            //you might not supposed to be chaning the value of dev_obj.amount becuase wher it leaves here it calls its its original amount but this should work properly
            
                                    
            var numberSystemFL_0_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    
                                        
                    if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount  >=  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1] && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0]  + dev_obj.amount  <  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2] && dev_obj.digits.eCSNS.nSM.further_checks !== 'true'   ){
                        // if the operation fits and the algorithm does not have to check for more options in further_checks
                        
                        
                        if(   numberSystemFL_0_i.forLoop_0_i === 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i + 1]][3] === undefined   ){
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += dev_obj.amount
                            // at this point it was not going to break the number system and regular addition needed to be perofrmed
                            
                        }
                        
                        
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                        dev_obj.digits.eCSNS.nSM.further_checks ='false'
                        return 'premature'
                        
                        
                    }
                    
                    
                    else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount  <  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]   ){
                        //if the operation makes the digit less than the min make max and tell the next to subtract 1 max sure the amount does not break the numberSystem at this digit change the loop again
                        
                            if(   numberSystemFL_0_i.forLoop_0_i === numberSystemFL_0_i.forLoopLength - 1   ){
                                
                                
                                throw(' the operation caused the number to be less than the NS version of 0, use a smaller number. this is a memory leak fix now')
                                //if the head digit is less than the min, the number is less than the smallest number
                                
                            }
                                                                                    
                                                                                
                            if(   numberSystemFL_0_i.forLoop_0_i !== 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] !== undefined  ){
                                //resets the digit only once so we can know the true form and borrow form the next digit
                                
                                dev_obj.amount =  dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] * -1
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] +=  Math.abs(   dev_obj.amount   )// or change how you increment its 3 when the FL_0_i was less than one
                                //allows to start from sratch but this must be called only once
                                
                            }
                                                                                       
                                
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]  - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]
                            // because the max is 1 before the max
                            // were going to borrow form the next digit until were big enough for subtraction
                            
                            if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] - Math.abs(   dev_obj.amount   ) >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]   ){
                                
                                
                                
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -= Math.abs(   dev_obj.amount   )
                                // deals with an  absolute value problem coming from negative ##
                                dev_obj.amount -= dev_obj.amount
                                // so we do not have to loop
                                
                            }
                                                                                    
                                                        
                            if(   numberSystemFL_0_i.forLoop_0_i +1 <=  numberSystemFL_0_i.forLoopLength-1   ){
                                
                                
                                if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] === undefined   ){
                                        
                                        
                                      dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]].add(   {value:0}   )
                                      
                                      
                                }
                                
                                
                                
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] += 1
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][0] -= 1
                                // this will be the amount for the next digit
                                
                            }
                            
                            
                            dev_obj.digits.eCSNS.nSM.further_checks = 'true'
                            // console.log(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]]   )
                            numberSystemFL_0_i.forLoop_0_i -= 1
                            
                            

                        
                                                
                    }
                    
                    
                    else if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + dev_obj.amount >= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]   ){
                        //if the operation makes the digit greater than the max
                        
                        if(   numberSystemFL_0_i.forLoop_0_i === numberSystemFL_0_i.forLoopLength - 1   ){
                            
                            
                            throw(' the operation caused the number to be greater than the NS max use a smaller number. this is a memory leak fix now')
                            //if the head digit is 1 above the max off the conditional to get in here, throw an error
                            
                        }
                        
                    
                        if(   numberSystemFL_0_i.forLoop_0_i !== 0 && dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3] !== undefined  ){
                            //resets the digit only once so we can know the true form and borrow form the next digit
                            
                            dev_obj.amount = dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]].minus(   {value:dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][3]}   )
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -=  dev_obj.amount
                            //allows to start from sratch but this must be called only once
                            
                        }
                        
                        
                        dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] -= dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]  - dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][1]
                        
                        
                        if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] + Math.abs(   dev_obj.amount   ) < dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][2]   ){
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0] += Math.abs(   dev_obj.amount   )
                            // deals with an  absolute value problem coming from negative ##
                            dev_obj.amount -= dev_obj.amount
                            // so we do not have to loop
                            
                            
                        }
                        
                        
                        if(   numberSystemFL_0_i.forLoop_0_i +1 <=  numberSystemFL_0_i.forLoopLength-1   ){
                                
                                
                            if(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] === undefined   ){
                                    
                                    
                                dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]].add(   {value:0}   )
                                  
                                  
                            }
                            
                            
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][3] += 1
                            dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i +1 ]][0] += 1
                            // this will be the amount for the next digit
                            
                            

                                
                                
                        }
                        
                        
                        dev_obj.digits.eCSNS.nSM.further_checks = 'true'
                        numberSystemFL_0_i.forLoop_0_i -= 1
                        
                        
                    }
                                        
                                        
                    
                    
                    else{

                         
                         dev_obj.digits.eCSNS.nSM.further_checks ='false'

                         
                    }
                    
                    
                    
                },
                args:{
                        digits:dev_obj.digits,
                        amount:dev_obj.amount
                    }
            }
            ultraObject.forLoop(   numberSystemFL_0_i   )
            // if it somehow how leaves the number system
            if(   dev_obj.digits.eCSNS.nSM.further_checks !== 'true'  ){
                // dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_0_i.forLoop_0_i]][0]
            }
            // ultraObject.objInvloved({
            //     0:dev_obj.digits.eCSNS,
            //     1:dev_obj.digits.eCSNS.nSM,
            //     2:dev_obj.operation
            // })
            
                        
        }
        
        
        if(   dev_obj.operation === 'print'   ){
            
            
            var NS_iter = []
            var numberSystemFL_1_i = {
                forLoop_0_i:0,
                forLoopLength:dev_obj.digits.eCSNS.nSM.length,
                fn:function(   dev_obj   ){
                    NS_iter.push(   dev_obj.digits.eCSNS[dev_obj.digits.eCSNS.nSM[numberSystemFL_1_i.forLoop_0_i]][0]  )
                },
                args:{
                        digits:dev_obj.digits
                }
            }
            ultraObject.forLoop(   numberSystemFL_1_i   )
            console.log('current number',NS_iter)
            dev_obj.digits.eCSNS.currentNumber =  NS_iter
            return NS_iter
            
            
        }
        
        
        // dev_obj.digits.eCSNS.currentNumber = ultraObject.numberSystem({
        //     digits:dev_obj.digits,
        //     operation:'print',
        // })
        console.groupEnd()
    
}//makes a customized number system for the needs of the eCSearch multiple testing required by prefill form
