// your lucidchart https://www.lucidchart.com/documents/edit/eb66719e-c3c3-4909-955f-badfbafb5962/0

var requestedBytes = 1024*1024*1; // 10MB


function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var subdirs // used to help us not make too many directors and get stuck in an infinite recurisve loop
var count = 0

// navigator.webkitPersistentStorage.requestQuota (
//     requestedBytes, function(grantedBytes) {
//         console.log(grantedBytes)
//         window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
//         jacket,
//         (err)=>{
//             console.log(err)
//         });

//     }, function(e) { console.log('Error', e); }
// );



function readDirAux(dev_obj) {
    debugger
    console.log(dev_obj.results)
    
    
    if (dev_obj.results.length) {
    
    
        dev_obj.totalResults.push(...dev_obj.results)
        var notDoneReadingEntries
        return notDoneReadingEntries = new Promise((resolve,reject)=>{
            dev_obj.dirReader.readEntries(
                (results)=>{
                    dev_obj.results = results
                    resolve(   readDirAux(dev_obj)   )
                },
                function(error) {
                  console.log(error)
                  throw(error)
                }
            )
        }).then(function(   bubbleUp   ){
            notDoneReadingEntries.value = bubbleUp // doing this seems to help the complier return what I intended in readDirAux non
            // recursive calle the string im returning in iths then function
            console.log(   notDoneReadingEntries   )
            return bubbleUp
            //you know when its empty it will bubble up so do you really to explicitly return this?
        })
        console.log(   notDoneReadingEntries   )
        
    
    
    }
    
    
    if(   !dev_obj.results.length   ){
        
        
        return 'resolve'
        
        
    }


}


        function getEntries(   dev_obj   ) {
            
                
                if(   dev_obj.surroundDir > 0   ){
                    
                    
                    console.group(   "directory " + dev_obj.groupName   )
                    
                    
                }
                
            
                var finishReadingEntries = new Promise((resolve,reject)=>{
                    dev_obj.dirReader.readEntries(
                        async function(results){
                            dev_obj.results = results
                            
                            var resolveMe = await readDirAux(dev_obj)
                            console.log(resolveMe) // strange thiungs happen here it calls it a promise but something see it as the string i return in the then of the promise which im fine with but completely bizzare
                            if(   resolveMe === 'resolve'   ){
                            
                            
                                resolve()
                            
                            
                            }
                            
                            
                        },
                        function(error) {
                          console.log(error)
                          throw(error)
                        }
                    )
                }).then(function(){
                    console.groupEnd()
                    console.log(   'groupEnded'   )
                    console.log(   dev_obj.totalResults   )
                    
                    
                    var FL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.totalResults.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   dev_obj.totalResults[FL_2_i.forLoop_0_i].isDirectory   ){
    
    
                                getEntries({
                                    dirReader:results[FL_2_i.forLoop_0_i].createReader(),
                                    groupName:results[FL_2_i.forLoop_0_i].fullPath,
                                    dirEntry:results[FL_2_i.forLoop_0_i],
                                    remove:dev_obj.remove
                                })
                             
                                
                            }
                            
                            
                            if(   dev_obj.remove === 'true'   ){
                                
                                console.log(results[FL_2_i.forLoop_0_i])
                                dev_obj.totalResults[FL_2_i.forLoop_0_i].isDirectory.remove(()=>{},(err)=>{ console.log(err)})
                                
                                
                            }
                            
                            
                        },
                        args:dev_obj //{}
                    }
        
                }).catch(errors)

        }
       

    // ultraObject.forLoop(   FL_2_i   )
        
    function operate(   dev_obj   ){
        var totalResults = [];
        debugger
        var promise0 = new Promise((reject,resolve)=>{
            getEntries({
                dirReader:dev_obj.fs.root.createReader(),
                groupName: dev_obj.fs.root.fullPath,
                dirEntry:dev_obj.fs.root,
                remove:dev_obj.remove,
                totalResults:totalResults,
                surroundDir:1
            })
            
        }).then(function(){
            console.log(totalResults)
        })
        
    }


function errors(err){
    console.log(err)
}



/*check testing */
// navigator.webkitPersistentStorage.requestQuota (
//     1024*1024*1, function(grantedBytes) {
//         window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
//         (fs)=>{
//                 var dirReader = fs.root.createReader();
//                 var entries = [];
//                 var dontMakeFiles = 'false'
                
//                 fs.root.getDirectory("Downloads",{create:true},()=>{
//                     getEntries()
//                 })
//                 function getEntries() {
//                   dirReader.readEntries(function(results) {
//                       console.log(results)
//                     if (results.length) {
//                         results.forEach((a)=>{
//                             if(   a.isFile   ){
//                                 dontMakeFiles = 'true'
//                             }
//                         })
//                         getEntries();
//                     }
//                   }, function(error) {
//                     /* handle error -- error is a FileError object */
//                     console.log(error)
//                     throw(error)
//                   });
//                 };
//                 getEntries()
//         },
//         (err)=>{
//             console.log(err)
//         })
//         }
// , function(e) { console.log('Error', e) }
// )
function jacket(dev_obj){
    var fs = dev_obj.fs
    
    var FL_0_i = {
        forLoop_0_i:0,
        forLoopLength:1,
        fn:function(   dev_obj   ){
            var subdirs = dev_obj.subdirs
            var sideDir = dev_obj.dir
            dev_obj.dir.getDirectory(makeid(16),{create:true},
                (dirEntry)=>{
                    
                    debugger
                    count += 1
                    if (count > 5000){
                        throw('stop!!!!')
                    }
                    
                    var dirReader = dev_obj.dir.createReader();
                    var entries = [];
                    var makeFiles = 'true'
                    function getEntries() {
                      dirReader.readEntries(function(results) {
                        console.log(results)
                        if (results.length) {
                            results.forEach((a)=>{
                                if(   a.isFile   ){
                                    makeFiles = 'true'
                                    return
                                }
                            })
                            getEntries();
                        }
                      }, function(error) {
                        /* handle error -- error is a FileError object */
                        console.log(error)
                        throw(error)
                      });
                    };
                    getEntries()
                                  
                                  
                    if(   makeFiles  === 'true'   ){
                        
                        
                        FL_1_i.args = {dir:sideDir}
                        FL_1_i.forLoopLength = Math.floor(Math.random() * Math.floor(10));
                        ultraObject.forLoop(   FL_1_i   )
                        
                        
                    }
                    
                    
                    if(   subdirs === 0   ){
                        
                        
                        return
                        
                        
                    }
                    
                    
                    FL_0_i.forLoopLength = Math.floor(Math.random() * Math.floor(10));
                    FL_0_i.args.dir = dirEntry
                    FL_0_i.args.subdirs = subdirs - 1
                    ultraObject.forLoop(   FL_0_i   )
                },
                (err)=>{console.log(err)
            })
            // FL_0_i.forLoopLength = Math.floor(Math.random() * Math.floor(10));
            FL_0_i.args.dir = sideDir
        },
        args:{
                dir:fs.root,
                subdirs:1
            }
    }
    ultraObject.forLoop(   FL_0_i   )
    var FL_1_i = {
        forLoop_0_i:0,
        fn:function(   dev_obj   ){
            dev_obj.dir.getFile(makeid(16),{create:true},
                ()=>{
                    count += 1
                    if (count > 5000){
                        throw('stop!!!!')
                    }
                },
                (err)=>{console.log(err)
            })
        },
        args:undefined //{}
    }
    count = 0
}



function devChosen(   dev_obj   ){
navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, function(grantedBytes) {
        console.log(grantedBytes)
        window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
        (fs)=>{
            dev_obj.scssFn({fs:fs,remove:dev_obj.remove})
        },
        (err)=>{
            console.log(err)
        });

    }, function(e) { console.log('Error', e); }
)}

devChosen({remove:'false',scssFn:window.operate})