//towork should equal 1

function dirRemove(   dev_obj   ){
    var c = dev_obj.c
    var d = dev_obj.d
    var dirSpot = 0
    return c.split('/').reduce((x,i)=>{
        console.log('c',i)
        debugger
        var fullPathSpot = 0
        var k = d.split('/').reduce((y,j,m)=>{
            console.log('d',j)
            
            
            if(   i === j && dirSpot === fullPathSpot   ){
                
                dirSpot += 1
                debugger
                // var e = d.split("/")
                // e.splice(m,1)
                // d = e.join('/')
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


/*when fullPaths has a subfir for dr */

var c = '/cd/cde'
//dR
var d = '/cd/cde/cded'
//fullPath
console.log(dirRemove(c,d))
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

// failworks

/**/


/* when fullPath is root */

var c = '/'
//dR
var d = '/cd/cde'
//fullPath
console.log(dirRemove(c,d))

// fail works

/**/


/* when dR is root */

var c = '/cd/cde'
//dR
var d = '/'
//fullPath
console.log(dirRemove(c,d))

// fail works

/**/

/* when both root */

var c = '/'
//dR
var d = '/'
//fullPath
console.log(dirRemove(c,d))

// works

/**/


/* when dR does not contain fullPaths properly */

var c = '/cd/cde/cded'
//dR
var d = '/cd/cded/cde'
//fullPath
console.log(dirRemove(c,d))

// works

/**/


/* when dR does not contain fullPaths properly */

var c = '/cd/cded/cded'
//dR
var d = '/cd/cded/cde'
//fullPath
console.log(dirRemove(c,d))

// works

/**/


/* bad dR input*/

var c = '/cd/cded/cded'
//dR
var d = 'cd/cded'
//fullPath
console.log(dirRemove(c,d))

// works

/**/




/* remove everything in FS*/

devChosen({
    remove:'true',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:''
        }
})

//works

/**/


/* remove one entry*/

devChosen({
    remove:'false',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:'/K00MjBT5kc8BqExn/Yj8CiadT2d4GtRW2'
        }
})

//works

/**/


/* remove a directory */
// remember to test tthis with 2 subdirs
devChosen({
    remove:'false',
    scssFn:window.operate,
    quotaRequest:'false',
    selectRemove:{
            dR:'',
            sR:'/K00MjBT5kc8BqExn'
        }
})

//works

/**/