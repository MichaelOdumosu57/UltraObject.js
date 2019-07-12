//towork should equal 1

function dirRemove(c,d){
    return c.split('/').reduce((x,i)=>{
        console.log('c',i)
        var k = d.split('/').reduce((y,j)=>{
            console.log('d',j)
            
            
            if(   i === j   ){
                
                debugger
                return x === "" ? c.split('/').length - 1 : x -1
                // if x isnt "" on the first interation we have a problem
                
                
            }
            
            
            return y === "" ? x:y
        })
        return k
    })
}


/*when fullPaths has a subfir for dr */

var c = '/cd/cde'
//dR
var d = '/cd/cde/cded'
//fullPath

// works


/**/

/* when fullPaths === dR */

var c = '/cd/cde'
//dR
var d = '/cd/cde'
//fullPath
console.log(dirRemove(c,d))

// works

/**/



/* when dR is a subpath of fullPaths  */

var c = '/cd/cde'
//dR
var d = '/cd'
//fullPath
console.log(dirRemove(c,d))

// works

/**/


