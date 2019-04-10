    function reqBody(   dev_obj   ){
        /*
            .stream readeable stream for data
            .fn function once done with the steram the req body will be in dev_obj.stream.body
        */
        var reqBody_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
        dev_obj.stream.on('data',(chunk)=> dev_obj.stream.body += chunk)
        dev_obj.stream.on('end',function(){
            rBMisc_0_i =  ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
            ultraObject.misc.abelast.add(   {value:ultraObject.scope[rBMisc_0_i]}   )            
            dev_obj.fn(dev_obj)
            ultraObject.scope.minus(   {index:rBMisc_0_i}   )
        })
    }// make body data collection easy