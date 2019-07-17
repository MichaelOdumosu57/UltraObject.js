const express = require('express')
const app = express()
const port = 3001
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
// const compression = require('compression')
const cors = require('cors')
global.ultraObject = require('./ultraObject.js')

app.use(cors())
// app.use(compression())


const config = {
    database : "postgres",
    host     : "24.189.66.225",
    user     : "postgres",
    port     : 5432,
    // this object will be passed to the TLSSocket constructor
    ssl : {
    rejectUnauthorized : false,
    // ca   : fs.readFileSync("/home/uoul/.postgresql/root.crt").toString(),
    // ca: 'a',
    key  : fs.readFileSync("/home/uoul/.postgresql/postgresql.key").toString(),
    // cert : fs.readFileSync("./postgresql.crt").toString(),
        // isServer: true,
        // requestCert:false,
        // sslmode:'verify-ca',
    },
  
//   connectionString:`postgres://postgres:`+process.argv[2]+`@127.0.0.1/postgres?sslmode=verify-full
//   &sslrootcert=/home/uoul/.postgresql/root.crt
//   &sslkey=/home/uoul/.postgresql/postgresql.key
//   &sslcert=/home/uoul/.postgresql/postgresql.crt
//   `
 

}


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.post('/database/headphone', function (req, res, next) {
    console.log('got it')
    var response = res
	ultraObject.reqBody({
		stream:req,
		fn:function(dev_obj){
            const wStream = fs.createWriteStream('./postgresql.crt',{
                start:0,
                autoClose:true
            })
            wStream.on('error',  function(err){
                setImmediate(() => {
                    console.log('error thrown in writeStream close everything ',err)
                    this.end()
                });
            });
            wStream.once('finish',function(   ){
		        config.cert =  fs.readFileSync("./postgresql.crt").toString(),
		        dbInteraction({res:response})
            })
            console.log(dev_obj.stream.body)
            wStream.end(dev_obj.stream.body)
            
		},
		keep:'false',
		finish:function(dev_obj){
		}
		
	})
});



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))

// console.log(process.env)



// console.log(pgcs)
// console.log(pg)





function dbInteraction(   dev_obj   ){
    var pg =  require( 'pg')
// var pgcs = require('pg-connection-string')
pg.defaults.ssl = true
    const client = new pg.Client(config)
    client.connectionParameters.host = client.host =  "24.189.66.225"
    // console.log(client)
    client.on('error',function(err){
        console.log(err)
    })
    client.connect((err) => {
      if (err) {
        console.log('error connecting', err.stack)
        dev_obj.res.send('error connecting', err.stack)
      } else {
        console.log('error connecting', err.stack)
        dev_obj.res.send('connected')
        
      }
    })
    
    app.get('/database/headphone', function (req, res, next) {
        ultraObject.reqBody({
        		stream:req,
        		fn:function(dev_obj){
                    client.query(dev_obj.stream.body, (err, res) => {
                        res.send(err, res.rows)
                        
                    })
        		},
        		keep:'true',
        		finish:function(dev_obj){
        		}
        		
        	})
    })
    
    
    app.get('/database/reset', function (req, res, next) {
        client.end()
        res.send('Very Well')
    })

}

// const pool = new Pool(config)
// pool.connect()
//   .then(client => {
//     console.log('connected')
//     client.release()
//   })
//   .catch(err => console.error('error connecting', err.stack))
//   .then(() => pool.end())