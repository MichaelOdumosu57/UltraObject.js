debugger;devChosen({
    remove:'false',
    scssFn:window.jacket,
    quotaRequest:'false',
//     selectRemove:{
//             dR:'/K00MjBT5kc8BqExn',
//             sR:''
//         }
})



devChosen({
    remove:'false',
    scssFn:window.operate,
    quotaRequest:'false',
//     selectRemove:{
//             dR:'/K00MjBT5kc8BqExn',
//             sR:''
//         }
})



devChosen({
    remove:'true',
    scssFn:window.operate,
    quotaRequest:'false',
//     selectRemove:{
//             dR:'/K00MjBT5kc8BqExn',
//             sR:''
//         }
})




/* to clear the fs */
new Promise((resolve,reject)=>{
    
resolve(
devChosen({
    remove:'true',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:''
        }
})
)
}).then(()=>{
    console.log('done')
})


/**/