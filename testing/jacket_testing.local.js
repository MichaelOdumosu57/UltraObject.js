devChosen({
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
    selectRemove:{
            dR:'',
            sR:''
        }
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
    

devChosen({
    remove:'true',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:''
        }
    upperResolve:resolve
})

}).then(()=>{
    console.log('done')
})


/**/