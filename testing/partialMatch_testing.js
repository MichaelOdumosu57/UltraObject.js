// link https://docs.google.com/spreadsheets/d/1EgG40OXUE1FHQdhaRCwINSo7HLB7LwDkmOKP5m_rdaw/edit#gid=0

console.clear()

//combinded testing

console.group('range && trailer')
ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'tzzzgapa',
    compAgn:`gapa`,
    range:1,
    trailer:2,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,'false cant get to g'   )
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'tzzzgapa',
    compAgn:`gzpa`,
    range:1,
    trailer:2,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,'false cant get to g but it can get to z'   )
// debugger
console.groupEnd()

console.group('range && trailer && space')
ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'tzpzzgapa',
    compAgn:`gzopozozog`,
    range:5,
    trailer:2,
    spaces:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false there are 4 o generateing the spaces
once it get to the foruth space even though trailer has worked it could not get there in time with spaces`   )
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'tzpzzgapa',
    compAgn:`gzopozzg`,
    range:5,
    trailer:2,
    spaces:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true because trailer works there are 3 o and range can get it beofre spaces shuts the operation down`   )
// debugger



console.groupEnd()


console.group('range && trailer && gap')
ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzzzradge',
    compAgn:`yyyyyyyradge`,
    range:5,
    trailer:7,
    gap:6,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false trailer can get there but gap wot let it`   )
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzradge',
    compAgn:`radge`,
    range:5,
    trailer:7,
    spaces:6,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`trailer does it job as there wont be a gap`   )
// debugger
console.groupEnd()


console.group('range && space && gap')

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'jason',
    compAgn:`zzzjzzzazzzszzzo`,
    range:4,
    spaces:3,
    gap:12,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`fails too many spaces`   )

// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'jason',
    compAgn:`zzzjzzzazzzsozzz`,
    range:4,
    spaces:3,
    gap:12,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true range beats it and there just enough spaces`   )

// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'ttttt',
    compAgn:`tptppppppptttt`,
    range:5,
    spaces:2,
    gap:5,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`fails on 2 space gap is too big`   )

// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'ttttt',
    compAgn:`tptpttt`,
    range:5,
    spaces:2,
    gap:5,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true gap is never big enough`   )

// debugger
console.groupEnd()

console.group('range && gap && full')

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'jacked',
    compAgn:`should I help jack  out this mejadia group, i think I Lost their card
check this site out https://randomwordgenerator.jackecom/sentence.php
would it be weird if jacked I had a laptop out which I talked about ideas
infosys just looked me up people really want to hire me
kafka (search this ull thank me later)`,
    range:6,
    gap:120,
    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false gap is too big before it finds that full jacked word`   )

// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'jacked',
    compAgn:`should I help jack  out this mejadia group, i think I Lost their card
check this site out https://randomwordgenerator.jackecom/sentence.php
would it be weird if jacked I had a laptop out which I talked about ideas
infosys just looked me up people really want to hire me
kafka (search this ull thank me later)`,
    range:6,
    gap:200,
    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false gap is too big before it finds that full jacked word`   )

// debugger
console.groupEnd()


console.group('range && trailer && space && gap')

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzzzzzzzzzzzzjacked',
    compAgn:`keaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad`,
    range:3,
    trailer:20,
    spaces:40,
    gap:20,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false gap is too big before it finds that full ked word`   )

// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzzzzzzzzzzzzjacked',
    compAgn:`keaaaaad`,
    range:3,
    trailer:20,
    spaces:40,
    gap:20,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true gap is big enough`   )

// debugger

 

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzzzzz   zzzzzzzjackeded',
    compAgn:`jaffcffkefffdffefffd`,
    range:7,
    trailer:30,
    spaces:3,
    gap:10,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false just too many spaces although we got some range `   )

debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'zzzzzzz   zzzzzzzjackeded',
    compAgn:`jacffkedffefffded`,
    range:7,
    trailer:30,
    spaces:3,
    gap:10,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true enough spaces alright `   )

debugger
console.groupEnd()

throw('e')









//range module
ultraObject = ultraObjectReset()


ultraObject.partialMatch({
    compTo:'fun',
    compAgn:'fund',
    range:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies,'should be true if the range is smaller then its looking for that fu'   )



ultraObject = ultraObjectReset()


ultraObject.partialMatch({
    compTo:'afun',
    compAgn:'fund',
    range:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies,`should be false a trailer problem,
API cant find a in compAgn`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lin',
    compAgn:'cylinder',
    range:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,'should be true'   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lind',
    compAgn:'cylinder',
    range:4,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,'should be true'   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lifond',
    compAgn:'cylinder',
    range:4,
    type:'string'
    
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false, letters are there
but it runs into that f`   )




ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'lifd',
    compAgn:'lifond',
    range:4,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be true`   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'savager beac',
    compAgn:'savager beacon temple tantrum',
    range:10,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be true`   )


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
debugger



ultraObject = ultraObjectReset()

ultraObject.partialMatch({
    compTo:'abe',
    compAgn:'abllllllllllllllllllle',
    range:3,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, 'should be true  is just one massive string gaps not invovled'  )



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
    compTo:'Smpr Fi',
    compAgn:'Semper Fi Semper',
    range:6,
    spaces:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true 0 spaces sinces range has made the api exit before hand'
`  )



// debugger
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
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'agllllllllllllllln',
    range:3,
    gap:20,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true becuase the developer gives gap a chance to get to the n `   )
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'allllllglllllln',
    range:3,
    gap:20,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true becuase the developer gives gap a chance to get to the n `   )
// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'algln',
    range:3,
    gap:2,
    type:'string'
    

})

console.log(   ultraObject.nE[0].satisfies, `should be true and the gap module should be 0:1,1:1  `   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'algllllln',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be faLse because api see the 2nd gap is bigger than dev specs
and it manages to stop when it sees tht prematurely`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'agn',
    compAgn:'aloglon',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be true and the gap module should be 0:2,1:2  `   )
// debugger



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'mmTa',
    compAgn:'ddTa',
    range:3,
    gap:5,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false this is a trailer module problem 0:1,1:1
but we got one big space gap up to compAgn length which is 4 `   )

// debugger

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


// debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'asdfund',
    compAgn:'fun',
    range:3,
    gap:2,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false gap like this does just as well when looking for words deep in to context
also no trailer so one massive space `   )

debugger

    


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'fudn',
    compAgn:'safudn',
    range:3,
    gap:3,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `true gap is working when range finally finds the string  `   )
// debugger
// debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'azzzug',
    compAgn:'eeesdfueegwn',
    range:3,
    gap:10,
    type:'string'
    
})

console.log(   ultraObject.nE[0].satisfies, `should be false gap depending on if gap gets to 10 it gets to range or gap first and works good`   )


//     debugger

// debugger


    



//trailer module

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atlidr',
    compAgn:'cylinder',
//     compAgn:'cyzlzz',
    range:4,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be true`   )
debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atlidr',
//     compAgn:'cylinder',
    compAgn:'cyzlzz',
    range:25,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false`   )
debugger



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'asdfun',
    compAgn:'fun',
    range:3,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false trailer wont get to that f the function needs that f to complete`   )
debugger





ultraObject = ultraObjectReset()

ultraObject.partialMatch({
    compTo:'lifond',
    compAgn:'cylinder',
    range:4,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false once the range is matched the trailer module is disabled`   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atlidr',
    compAgn:'cylinder',
    range:4,
    trailer:3,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be true`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'twillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:5,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false it finds the first t
 but anything after that is v2 so so far it cant get past the w`   )


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'atwillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:5,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`should be false it finds the a but the trailer donest
run because a is the first letter so now it can find the t but once it finds the t thats it`   )



ultraObject = ultraObjectReset()

ultraObject.partialMatch({
    compTo:'gillo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:20,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true a functional purpose for the trailer`   )

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Millo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:1,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`false trailer needs to go further in compTo to have the it
match in compAgn`   )



ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'Millo',
    compAgn:'asdfun semper typeillo semper fi',
    range:3,
    trailer:5,
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true trailer has enough length to get to the end of the string`   )
debugger


ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'uia s',
    compAgn:`tempopaporibuis ea eligendi quod esse. Commodi quaerat
             quia sequi soluta sit alias. Officia illum recusandae
             quia omnis suscipit qui debitis. Tempora`,
    range:3,
//     trailer:5,
    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true full module resets the whole nE until range can complete`   )
debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'paporib',
    compAgn:`temagpaporibuis ea eligendi qu`,
    range:7,
//     trailer:5,
    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,`true if the range figures it out to the purpose of the full, the module is not activated`   )

debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'and',
//     compAgn:`and a and b and c and d`,
    compAgn:`and c and b`,
    range:4,

    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,` unless a char === undfined it will evalute to false`)
debugger

ultraObject = ultraObjectReset()
ultraObject.partialMatch({
    compTo:'and',
    compAgn:`and a and b`,
    range:4,

    full:'true',
    type:'string'
    
})
console.log(   ultraObject.nE[0].satisfies,` unless a char === undfined it will evalute to false`)
debugger







// xhttp for gap testing
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

        console.log(   ultraObject.nE[0].satisfies, `practical example of above which is false `   )
        

    },
    protocol:"GET",
    target:"https://raw.githubusercontent.com/MichaelOdumosu57/Vipes/master/modal.js",
    asyncBool:true
})