// link https://docs.google.com/spreadsheets/d/1EgG40OXUE1FHQdhaRCwINSo7HLB7LwDkmOKP5m_rdaw/edit#gid=0

console.clear()



//range module
ultraObject = ultraObjectReset()


ultraObject.partialMatch({
    compTo:'fun',
    compAgn:'fund',
    range:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfy,'should be true if the range is smaller then its looking for that fu'   )


ultraObject = ultraObjectReset()


ultraObject.partialMatch({
    compTo:'afun',
    compAgn:'fund',
    range:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfy,`should be false a trailer problem,
API cant find a in compAgn`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lin',
    compAgn:'cylinder',
    range:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfy,'should be true'   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lind',
    compAgn:'cylinder',
    range:4,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfy,'should be true'   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lifond',
    compAgn:'cylinder',
    range:4,
    type:'string'
    
    
})
console.log(   ultraObject.nE[0].satisfy,`should be false, letters are there
but it runs into that f`   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lifd',
    compAgn:'lifond',
    range:4,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfy,`should be true`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'savager beac',
    compAgn:'savager beacon temple tantrum',
    range:10,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfy,`should be true`   )
//spaces module

ultraObject = ultraObjectReset()

ultraObject.partialMatch({
    compTo:'fun',
    compAgn:'fdeuden',
    range:3,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfy, 'should be true it meets spaces but does not beat it'  )



ultraObject = ultraObjectReset()

ultraObject.partialMatch({
    compTo:'abe',
    compAgn:'abllllllllllllllllllle',
    range:3,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfy, 'should be there  is just one massive string'  )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Semper Fi',
    compAgn:'Semper Fi Semper',
    range:12,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false 1 space as the API continues to look from more string
    but this is the developer fault, the error comes from the range
`  )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Semper Fi',
    compAgn:'Semper Fi Semper',
    range:8,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true 0 spaces sinces range has made the api exit before hand'
`  )

debugger
//gap module

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'agllllllllllllllln',
    range:3,
    gap:3,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false we got a big gap to cover before we can get to n`   )
debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'agllllllllllllllln',
    range:3,
    gap:20,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true becuase the developer gives gap a chance to get to the n `   )
debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'allllllglllllln',
    range:3,
    gap:20,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true becuase the developer gives gap a chance to get to the n `   )
debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'algln',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true and the gap module should be 0:1,1:1  `   )

debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'aloglon',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true and the gap module should be 0:1,1:1  `   )
debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'mmTa',
    compAgn:'ddTa',
    range:3,
    gap:5,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false this is a trailer module problem 0:1,1:1  `   )

debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'asdfund',
    compAgn:'fuaaaan',
    range:3,
    gap:4,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies   )
console.log(    `%c trailer problem `,'background: #222; color: #bada55'   )

debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'asdfund',
    compAgn:'fun',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false gap like this does just as well when looking for words deep in to context `   )

debugger

    


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'fudn',
    compAgn:'safudn',
    range:3,
    gap:3,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `gap is working when range finally finds the string `   )
debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'azzzug',
    compAgn:'eeesdfueegwn',
    range:3,
    gap:10,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false gap depending on if gap gets to 10 it gets to range or gap first and works good`   )


    debugger
ultraObject = ultraObjectReset()

ultraObject.endpoint({
    xhttp:ultraObject.iterify({iterify:[new XMLHttpRequest()]}),
    instruct:'XMLHttpRequest',
    eventName:'load',
    eventHandler:()=>{
        ultraObject.partialMatch({
            compTo:'asdfund',
            compAgn:ultraObject.XHR[0][0].responseText,
            range:3,
            gap:2,
            type:'string'

        })

        console.log(   ultraObject.nE[0].satisfies, `practical example of above `   )
        

    },
    protocol:"GET",
    target:"https://raw.githubusercontent.com/MichaelOdumosu57/Vipes/master/modal.js",
    asyncBool:true
})
debugger
    throw('e')







//trailer module
debugger
ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'asdfun',
    compAgn:'fun',
    range:3,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`should be true`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lifond',
    compAgn:'cylinder',
    range:4,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`should be true`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atlidfr',
    compAgn:'cylinder',
    range:4,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`should be true`   )

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'twillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:5,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`should be false it finds the first t
 but anything after that is v2 so so far it cant get past the w`   )

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atwillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:5,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`should be false it finds the a but the trailer donest
run because a is the first letter so now it can find the t but once it finds the t thats it`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'gillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`true a functional purpose for the trailer`   )

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Millo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:2,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`false trailer needs to go further in compAgn`   )

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Millo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:25,
    type:'string'
    
})
console.log(   ultraObject.misc[0],`true trailer has enough length to get to the end of the string`   )
debugger
