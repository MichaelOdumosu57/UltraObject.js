// devChosen
// remove -string false, true decides to remove the whole filesytem
// selectRemove, selects a specific file or specific directory to remove, for dis, the directory must be
    //  dR -dirRemove: when chosen removes everthing only in the specified dir
    // sR - singleRemove: removes one exact file or dir
// scssFn: fn to execute once the API got the filesystem needed
// quotaRequest: when true, asks the API for a storage amt indicatied by requested bytes



// MAJOR UPDATE can now go and delete whole subdirectories that are filled up






// your lucidchart https://www.lucidchart.com/documents/edit/eb66719e-c3c3-4909-955f-badfbafb5962/0


//cool stuff
// very wonky nature of how Promises are powerful when dealing with deprecation like this, since async functions can be places as parameters inside invocation if you are using await and returning a promise from a function a you have a value in that function you want to bubble up, on function containing promiseEnd it will actually give the value amazing


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


function readDirAux(dev_obj) {
    console.log(dev_obj.results)
    
    
    if (dev_obj.results.length ) {
    

        dev_obj.totalResults[   dev_obj.groupName   ].push(...dev_obj.results)
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
            
            // debugger
            return bubbleUp
            //you know when its empty it will bubble up so do you really to explicitly return this?, when this fails just return then
        })
        console.log(   notDoneReadingEntries   )
        
    
    
    }
    
    
    if(   !dev_obj.results.length   ){
        
        dev_obj.resolve = 'resolve'
        return dev_obj
        
        
    }


}

async function containAux(dev_obj){
                        
    
    console.log(   dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter]   )
    
    
    if(   dev_obj.totalResultsCounter === dev_obj.totalResultsLength   ){
        
        
        return  dev_obj
        // means were done traversing the directory
        
    }
    
    
    if(   dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter].isFile   ){
        
        debugger
        if(   (   dev_obj.remove === 'true'   ) || (   dev_obj.selectRemove.sR === dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter].fullPath   ) || (    dirRemove({
                                                                            c:dev_obj.selectRemove.dR,
                                                                            d:dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter].fullPath
                                                                })   === 1  )   ){
            
            
            dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter].remove(
                ()=>{console.log('removed')},
                ()=>{console.log('could not remove')}
            )
            
         
            
        }
        
        
    }
    
    
    else if(   dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter].isDirectory   ){
        
        
     
        dev_obj.readers.add({
            value:dev_obj.totalResultsCounter
        })
        dev_obj.readers.relativeDir.add({
            value:dev_obj.groupName
        })
        dev_obj.readers.dirItself.add({
            value:dev_obj.totalResults[   dev_obj.groupName   ][dev_obj.totalResultsCounter]
        })
        
        
        
    }
    

    dev_obj.totalResultsCounter += 1
    containAux(dev_obj)
    
    
}


    function getEntries(   dev_obj   ) {
            
                
            console.group(   "directory " + dev_obj.groupName   )
            var finishReadingEntries = new Promise((resolve,reject)=>{
                dev_obj.dirReader.readEntries(
                    async function(results){
                        dev_obj.results = results
                        dev_obj.totalResults[   dev_obj.groupName   ] = []
                        var resolveMe = await readDirAux(dev_obj)
                        console.log(resolveMe) // strange thiungs happen here it calls it a promise but something see it as the data  i return in the then of the promise which im fine with but completely bizzare
                        if(   resolveMe.resolve === 'resolve'   ){
                        
                        
                            resolve(resolveMe)
                        
                        
                        }
                        
                        
                    },
                    function(error) {
                      console.log(error)
                      throw(error)
                    }
                )
            }).then(function(dev_obj){
                console.groupEnd()
                console.log(   'groupEnded'   )
                // console.log(   dev_obj.totalResults   )
                dev_obj.totalResultsLength  = dev_obj.totalResults[   dev_obj.groupName   ].length
                dev_obj.totalResultsCounter = 0
                dev_obj.readers = ultraObject.iterableObject()
                dev_obj.readers.relativeDir  = ultraObject.iterableObject()
                dev_obj.readers.dirItself = ultraObject.iterableObject()
                function promiseChain0Resolve(  dev_obj   ){
                    return function(resolve,reject){
                    
                        var toDo = containAux(dev_obj)
                        resolve(dev_obj)
                        
                    }
                    
                }
                function promiseChain0Then(  dev_obj   ){
            
            
                    if(   dev_obj.readers.length !== 0   ){
                
                
                        dev_obj.neededReader =  dev_obj.totalResults[   dev_obj.readers.relativeDir[0]   ][dev_obj.readers[0]].createReader()
                        new Promise((resolve,reject)=>{
                                        
                                      
                            dev_obj.neededReader.readEntries(
                                async function(results){
                                    console.group(   "directory " + dev_obj.totalResults[   dev_obj.readers.relativeDir[0]   ][dev_obj.readers[0]].fullPath   )
                                    dev_obj.totalResults[   dev_obj.totalResults[   dev_obj.readers.relativeDir[0]   ][dev_obj.readers[0]].fullPath   ] = []
                                    var resolveMe = await readDirAux({
                                                                        dirReader: dev_obj.neededReader,
                                                                        dirEntry: dev_obj.totalResults[   dev_obj.readers.relativeDir[0]   ][dev_obj.readers[0]],
                                                                        groupName: dev_obj.totalResults[   dev_obj.readers.relativeDir[0]   ][dev_obj.readers[0]].fullPath,
                                                                        remove:dev_obj.remove,
                                                                        totalResults:dev_obj.totalResults,
                                                                        results : results,
                                                                        flag: 'inRecursion',
                                                                        readers:dev_obj.readers,
                                                                        selectRemove:dev_obj.selectRemove
                                                                    })
                                    console.log(resolveMe) // strange thiungs happen here it calls it a promise but something see it as the data i return in the then of the promise which im fine with but completely bizzare
                
                                    if(   resolveMe.resolve === 'resolve'   ){
                                    
                                        debugger
                                        resolve(resolveMe)
                                    
                                    
                                    }
                                    
                                    
                                },
                                function(error) {
                                  console.log(error)
                                  throw(error)
                                }
                            )
                            
                        }).then(function(dev_obj){
                            console.groupEnd()
                            console.log(   'groupEnded'   )
                            dev_obj.readers.minus({
                                index:0
                            })
                            dev_obj.readers.relativeDir.minus({
                                index:0
                            })
                            // console.log(   dev_obj.totalResults   )
                            // console.log(`walk through this and hopefully we get out in order
                            // remember to be sucessful no two promises can be running at the same time`)
                            dev_obj.totalResultsLength  = dev_obj.totalResults[   dev_obj.groupName   ].length
                            dev_obj.totalResultsCounter = 0
                            promiseChain0Iterable(   dev_obj   )
                        })
                        
                        
                    }
                    
                    
                    else if(   dev_obj.readers.length === 0   &&  (   dev_obj.remove === 'true' || dev_obj.selectRemove !== undefined   )   ){
                        
                        
                        ultraObject.sort({
                            target: dev_obj.readers.dirItself,
                            algorithm:'bubble',
                            compare:function(   dev_obj   ){
                                
                                debugger
                                if(   dev_obj.val[dev_obj.index].fullPath.split('/').length < dev_obj.val[dev_obj.index + 1].fullPath.split('/').length    ){
                                    
                                    
                                    return 'true'
                                    
                                    
                                }
                                    
                                
                            },
                            result:'true'
                        })
                        var FL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength:dev_obj.readers.dirItself.length,
                            fn:function(   dev_obj   ){
                               
                                debugger
                                if(   (   dev_obj.remove === 'true'   ) || (   dev_obj.selectRemove.sR === dev_obj.readers.dirItself[   FL_2_i.forLoop_0_i   ].fullPath   ) || (   dirRemove({
                                                                                            c:dev_obj.selectRemove.dR,
                                                                                            d:dev_obj.readers.dirItself[   FL_2_i .forLoop_0_i   ].fullPath
                                                                                        }) === 1   )   ){
                                    
                       
                                    dev_obj.readers.dirItself[   FL_2_i.forLoop_0_i   ].remove(
                                        ()=>{console.log('removed')},
                                        ()=>{console.log('could not remove')}
                                    )
                                    console.log('removed')
                                    
                                }
                                
                                
                            },
                            args:dev_obj //{}
                        }
                        ultraObject.forLoop(   FL_2_i   )
                        
                        
                    }
                    
                    
                }
                function promiseChain0Iterable(   dev_obj   ){
                    var PromiseChain0 = new Promise(promiseChain0Resolve(   dev_obj   )).then(promiseChain0Then)
                    // now we have a function to call it again
                }
                promiseChain0Iterable(   dev_obj   )
            }).catch(errors)


        }
       
        
    function operate(   dev_obj   ){
        var promise0 = new Promise((reject,resolve)=>{
            getEntries({
                dirReader:dev_obj.fs.root.createReader(),
                groupName: dev_obj.fs.root.fullPath,
                dirEntry:dev_obj.fs.root,
                remove:dev_obj.remove,
                totalResults:ultraObject.iterableObject(),
                selectRemove:dev_obj.selectRemove
                //neededReaders:[] // if anything we can make this an array, i dont want to deal with invocations and async
                // surroundDir:1
            })
            
        }).then(function(){
            console.log(totalResults)
        })
        
    }


function errors(err){
    console.log(err)
}



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


    if(   dev_obj.quotaRequest === 'true'   ){
        
        
        navigator.webkitPersistentStorage.requestQuota (
        requestedBytes, function(grantedBytes) {
            console.log(grantedBytes)
            window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
            (fs)=>{
                dev_obj.scssFn({
                    fs:fs,
                    remove:dev_obj.remove,
                    selectRemove:dev_obj.selectRemove
                })
            },
            (err)=>{
                console.log(err)
            });
    
        }, function(e) { console.log('Error', e); }
    )
    
    
    }
    
    
    else if(   dev_obj.quotaRequest !== 'true'   ){
        
        
        window.webkitRequestFileSystem(window.PERSISTENT,  requestedBytes,
            (fs)=>{
                dev_obj.scssFn({
                    fs:fs,
                    remove:dev_obj.remove,
                    selectRemove:dev_obj.selectRemove
                })
            },
            (err)=>{
                console.log(err)
        });
        
        
    }
    
    
}


function traverseDirectory(entry) {
  const reader = entry.createReader();
  // Resolved when the entire directory is traversed
  return new Promise((resolve, reject) => {
    const iterationAttempts = [];
    function readEntries() {
      // According to the FileSystem API spec, readEntries() must be called until
      // it calls the callback with an empty array.  Seriously??
      reader.readEntries((entries) => {
        if (!entries.length) {
          // Done iterating this particular directory
          resolve(Promise.all(iterationAttempts));
        } else {
          // Add a list of promises for each directory entry.  If the entry is itself
          // a directory, then that promise won't resolve until it is fully traversed.
          iterationAttempts.push(Promise.all(entries.map((ientry) => {
            if (ientry.isFile) {
              // DO SOMETHING WITH FILES
              return ientry;
            }
            // DO SOMETHING WITH DIRECTORIES
            return traverseDirectory(ientry);
          })));
          // Try calling readEntries() again for the same dir, according to spec
          readEntries();
        }
      }, error => reject(error));
    }
    readEntries();
  });
}




function testChosen(   dev_obj   ){


    window.webkitRequestFileSystem(window.PERSISTENT,  requestedBytes,
        (fs)=>{
            
            traverseDirectory(fs.root).then(result => console.log(result));
        },
        (err)=>{
            console.log(err)
    });
    
        
}


function dirRemove(   dev_obj   ){
    var c = dev_obj.c
    var d = dev_obj.d
    var dirSpot = 0
    return c.split('/').reduce((x,i)=>{
        // console.log('c',i)
        // debugger
        var fullPathSpot = 0
        var k = d.split('/').reduce((y,j,m)=>{
            // console.log('d',j)
            
            
            if(   i === j && dirSpot === fullPathSpot   ){
                
                dirSpot += 1
                // debugger
                return x === "" ? c.split('/').length - 1 : x -1
                // if x isnt "" on the first interation we have a problem
                
                
            }
            
            
            fullPathSpot += 1
            // impt it goes after the conditional so comparison can be in line with \ on comparison
            
            
            return y === "" ? x:y
        })
        return k
    })
}

devChosen({
    remove:'true',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:''
        }
})


// testChosen()