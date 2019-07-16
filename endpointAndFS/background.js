function globalPromise(dev_obj){
    new Promise(dev_obj.globalResolve).then(dev_obj.globalThen)
}
chrome.runtime.onInstalled.addListener(function() {
    function instantiateFS(  dev_obj   ){
        return function (resolve,reject){
            devChosen({
                remove:'false',
                scssFn:window.jacket,
                quotaRequest:dev_obj.quotaRequest,
            //     selectRemove:{
            //             dR:'/K00MjBT5kc8BqExn',
            //             sR:''
            //         }
                upperResolve:resolve
            })
        }
    }
    function deleteFS(){
        devChosen({
            remove:'true',
            scssFn:window.operate,
            quotaRequest:'false',
            selectRemove:{
                    dR:'',
                    sR:''
                }
        })
    }
    function readSpot(){
        console.log(   fs   )
        
            local_FL1_i.args.next.file(
                (   file   )=>{
                    var reader = new FileReader();
                    reader.onload = function() {
                        console.log(reader.result);
                    };
                
                    reader.onerror = function() {
                        console.log(reader.error);
                    }
                
                    reader.readAsText(file)
                },
                (e)=>{
                    console.log(e)
                }
            )
    }
        
    
    debugger
    globalPromise({
        globalResolve:instantiateFS({quotaRequest:'true'}),
        globalThen:readSpot
    })
    

});
  
  
  