    function reqBody(   dev_obj   ){
        /*
            .stream readeable stream for data
            .fn function once done with the steram the req body will be in dev_obj.stream.body
            .keep whether to keep the created item
                false deletes created item
            .finish, since this is a stream last steps must go here
        */
        var reqBody_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
        dev_obj.stream.on('data',(chunk)=> {
            if(   dev_obj.stream.body === undefined  ){
                dev_obj.stream.body = '';
            } 
            dev_obj.stream.body += chunk
        })
        dev_obj.stream.on('end',function(){
            // rBMisc_0_i =  ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
            // ultraObject.misc.abelast.add(   {value:ultraObject.scope[rBMisc_0_i]}   )            
            dev_obj.fn(dev_obj)
            if(   dev_obj.keep === 'false'){
                ultraObject.misc.minus({
                    index:ultraObject.misc.abelast[
                        ultraObject.misc.abelast.length-1
                    ]
                })
                ultraObject.misc.abelast.minus({
                    index:ultraObject.misc.abelast.length-1
                })                
            }
            dev_obj.finish(dev_obj)
            //why use dev_obj when you know where it is LOL
            // ultraObject.scope.minus(   {index:rBMisc_0_i}   )
        })
    }// make body data collection easy