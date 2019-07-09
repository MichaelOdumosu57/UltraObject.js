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

navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, function(grantedBytes) {
        console.log(grantedBytes)
        window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
        jacket,
        (err)=>{
            console.log(err)
        });

    }, function(e) { console.log('Error', e); }
);

function clearDir(fs){
    
        var dirReader = fs.root.createReader();
        var entries = [];
        var dontMakeFiles = 'false'
      
        function getEntries() {
          dirReader.readEntries(function(results) {
            console.log(results)
            if (results.length) {
                results.forEach((a)=>{
                    a.remove(()=>{},(err)=>{console.log(err)})
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
}

function seeFs(fs){
    
        var dirReader = fs.root.createReader();
        var entries = [];
        var dontMakeFiles = 'false'
      
        function getEntries() {
          dirReader.readEntries(function(results) {
            console.log(results)
            if (results.length) {
                getEntries();
            }
          }, function(error) {
            /* handle error -- error is a FileError object */
            console.log(error)
            throw(error)
          });
        };
        getEntries()
    
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
function jacket(fs){
            console.log(fs)
            var FL_0_i = {
                forLoop_0_i:0,
                forLoopLength:1,
                fn:function(   dev_obj   ){
                    var subdirs = dev_obj.subdirs
                    var sideDir = dev_obj.dir
                    dev_obj.dir.getDirectory(makeid(16),{create:true},
                        (dirEntry)=>{
                            
                            
                            count += 1
                            if (count > 5000){
                                throw('stop!!!!')
                            }
                            
                            var dirReader = dev_obj.dir.createReader();
                            var entries = [];
                            var dontMakeFiles = 'false'
                          
                            function getEntries() {
                              dirReader.readEntries(function(results) {
                                debugger
                                if (results.length) {
                                    results.forEach((a)=>{
                                        if(   a.isFile   ){
                                            dontMakeFiles = 'true'
                                            break
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
                                          
                                          
                            if(   dontMakeFiles  !== 'true'   ){
                                
                                
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
        }