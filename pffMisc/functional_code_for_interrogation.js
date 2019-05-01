                    /*suspects to see if different values were put in the same spot*/ //{
                    if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() !== ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                    
                    
                        console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                        var pFFBOOL_0_i = {0:false}
                        pFFBOOL_0_i = ultraObject.severalOr({
                            compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].eCSNS.currentNumber[pFFFL_0_i.forLoop_0_i],
                            compAgn: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].eCSNS.currentNumber,
                            boolean:pFFBOOL_0_i,
                            which:0,
                            how:function(   dev_obj   ){
                                
                                
                                if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                    
                                    
                                    if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects === undefined   ){
                                    //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                    
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects = ultraObject.iterableObject()
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects.add(   {value:dev_obj.index}   )
                                        //see i wrote for the future here
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects !== undefined   ){
                                        
                                    
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects.add(   {value:dev_obj.index}   )
                                        
                                        
                                    }
    
    
                                }
                                
                                
                                console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                            },
                            result:'a'
                        })
                        //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                        console.log(   'our suspects',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].suspects  )
                        
                        
                    }
                    // } /**/
                    /*
                        element
                        point system
                        1 for the correct tag name in pFFMisc_1_i
                        1 for being shown on the webpage,hidden true
                        1 for each class name met by partialMatch
                        1 for each ID name met by partialMatch
                        1 for matching string
                    */
                    /*
                    {
                        1. is this an input
                            <input>     -<html>
                            <textarea>  -<head>
                            <select>    -<title>
                            <optgroup>  -<body>
                            <option>    -<h1 -h6><p>
                            <label>     -<br>
                            <a>         -<hr>
                            <link>      -<abbr>
                            <div>       -<address>
                                        -<b>
                                        -<bdi>
                                        -<bdo>
                                        -<blockqultraObjectte>
                                        -<center>
                                        -<cite>
                                        -<code>
                                        -<del>
                                        -<dfn>
                                        -<em>
                                        -<font>
                                        -<i>
                                        -<ins>
                                        -<kbd>
                                        -<mark>
                                        -<meter>
                                        -<progress>
                                       -<q>
                                       -<rp>
                                       -<rt>
                                       -<ruby>
                                       -<s>
                                       -<samp>
                                       -<small>
                                       -<strike>
                                       -<strong>
                                       -<sub>
                                       -<sup>
                                       -<template>
                                       -<time>
                                       -<tt>
                                       -<u>
                                       -<var>
                                       -var
                                       -<wbr>
                                       -<form>
                                       -<fieldset>
                                       -<legend>
                                       -<datalist>
                                       -<output>
                                       -<frame>
                                       -<frameset>
                                       -<noframes>
                                       -<iframe>
                                       -<img>
                                       -<map>
                                       -<area>
                                       -<canvas>
                                       -<figcaption>
                                       -<figure>
                                       -<picture>
                                       -<svg>
                                       -<audio>
                                       -<source>
                                       -<track>
                                       -<video>
                                       -<nav>
                                       -<ul>
                                       -<ol>
                                       -<li>
                                       -<dir>
                                       -<dl>
                                       -<dt>
                                       -<dd>
                                       -<table>
                                       -<caption>
                                       -<th>
                                       -<tr>
                                       -<td>
                                       -<thead>
                                       -<tbody>
                                       -<tfoot>
                                       -<col>
                                       -<colgroup>
                                       -<style>
                                       -<span>
                                       -<header>
                                       -<footer>
                                       -<main>
                                       -<section>
                                       -<article>
                                       -<aside>
                                       -<details>
                                       -<dialog>
                                       -<summary>
                                       -<data>
                                       -<head>
                                       -<meta>
                                       -<base>
                                       -<basefont>
                                       -<script>
                                       -<noscript>
                                       -<applet>
                                       -<embed>
                                       -<object>
                                       -<param>
                    }
                    */
                    // {
                    console.group(  'what is the element'   )
                        console.log(   'things I should know'   )
                        var pFFFL_1_i = { //looking at the elements related properties
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].length,
                            fn:function(   dev_obj   ){
                                console.log(   [   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   )
                                
                                
                                if(   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'tagName'   ){
                                
                                                                                                
                                    var pFFBOOL_1_i = {0:false}
                                    pFFBOOL_1_i = ultraObject.severalOr({
                                        compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].toLowerCase(),
                                        compAgn:ultraObject.misc[ultraObject.scope[pFFMisc_1_i]],
                                        boolean:pFFBOOL_1_i,
                                        which:0
                                    })
                                    console.log(   pFFBOOL_1_i   )
                                    
                                    
                                    if(   pFFBOOL_1_i[0]   ){
                                        
                                        //POINT VALUE
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                     
                                            
                                    }
                                    
                                    
                                }
                                
                                
                                if(   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'hidden'   ){
                                    
                                    
                                    if(   !ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   ){
                                        
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                        
                                        
                                    }
                                        
                                }
                                
                                
                                if(   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'className'   ){
                                    
                                    /*the spaces between are classNames I will apply partial match here */
                                    ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].classes = ultraObject.iterify(   {iterify:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].split(' ')}   )
                                    ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].classes.add(   {value:'Linksoed'}   )
                                    /**/
                                    
                                    /*to loop through classNames and find a partial match*/
                                    var pFFBOOL_2_I = {0:false}
                                    pFFBOOL_2_I = ultraObject.severalOr({
                                        compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                        compAgn: ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].classes,
                                        boolean:pFFBOOL_2_I,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            ultraObject.partialMatch({
                                                compTo:dev_obj.compTo,
                                                compAgn:dev_obj.compAgnI,
                                                range:8,
                                                spaces:2,
                                                gap:2,
                                                trailer:0,
                                                type:'string',
                                                cCase:'toLowerCase'
                                            })
                                            
                                            
                                            if(   ultraObject.misc[ultraObject.misc.length-1].satisfy   ){
                                                
                                                
                                                ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                //POINT VALUE
                                                ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                
                                                
                                            }
                                            
                                            
                                            ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                            ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   pFFBOOL_2_I   )
                                    /**/
                                    
                                }
                                
                                
                                if(   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i] === 'id'   ){
                                    /*the spaces between are idNames I will apply partial match here */
                                    
                                    ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].ids = ultraObject.iterify(   {iterify:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ].split(' ')}   )
                                    
                                    /**/
                                    /*to loop through classNames and find a partial match*/
                                    var pFFBOOL_3_I = {0:false}
                                    pFFBOOL_3_I = ultraObject.severalOr({
                                        compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                        compAgn: ultraObject.misc[ultraObject.scope[pFFMisc_0_i]].ids,
                                        boolean:pFFBOOL_3_I,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            ultraObject.partialMatch({
                                                compTo:dev_obj.compTo,
                                                compAgn:dev_obj.compAgnI,
                                                range:8,
                                                spaces:2,
                                                gap:2,
                                                trailer:0,
                                                type:'string',
                                                cCase:'toLowerCase'
                                            })
                                            
                                            
                                            if(   ultraObject.misc[ultraObject.misc.length-1].satisfy   ){
                                                
                                                
                                                ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                //POINT VALUE
                                                ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                debugger
                                                
                                            }
                                            
                                            
                                            ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                            ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   pFFBOOL_3_I   )
                                    /**/
                                    
                                }
                                
                                
                                console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[   ultraObject.misc[ultraObject.scope[pFFMisc_0_i]][pFFFL_1_i.forLoop_0_i]   ]   )
                                
                            },
                            args:{}
                        }
                        ultraObject.forLoop(   pFFFL_1_i   )
                        console.log(   'is it found is its strings'   )
                        var pFFBOOL = {0:false}
                        pFFBOOL = ultraObject.severalOr({
                            compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                            compAgn: ultraObject.misc[ultraObject.scope[pFFLook_0_i]],
                            boolean:pFFBOOL,
                            which:0,
                            how:function(   dev_obj   ){
                                
        
                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item[dev_obj.compAgnI[0]].indexOf(   dev_obj.compTo   ) !== -1   ){
                                    
                                    
                                    return 'a'
                                    
                                    
                                }
                                
                                
                            },
                            result:'a'
                        })
                        
                        
                        if(   pFFBOOL[0]   ){
                            
                            
                            ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                            
                            
                        }
                        
                        
                        console.log(   'element point value',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                    console.groupEnd()
                    // }
                    
                    /*
                        to identiy the parent there is
                            offsetParent,parentElement,parentNode
                            
                            The offsetParent property returns the closest element in the ancestors hierarchy that is positioned.
                            The parentNode property simply returns the immediate parent element.
                        point system for parent
                        1 if it has a parent
                        1 if the parent is a div or label
                        1 for each className is met by partialMatch
                        1 for each ID name met by partialMatch
                    */
                    // {
                    console.group(   'what is its parent '   )
                        /*the parent we will look at looking at all parent types*/
                        var pFFST_1_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent}   )
                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement}   )
                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode}   )
                         console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]   )
                        /**/
                        var pFFFL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].length,
                            fn:function(   dev_obj   ){
                                /*if the element has a parent*/
                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ] !== null   ){
                                    
                                    
                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                    
                                    /* if the parent is a div or a label*/
                                    // {
                                        var pFFBOOL_4_I = {0:false}
                                        pFFBOOL_4_I = ultraObject.severalOr({
                                                compTo: ultraObject.selectTags[ultraObject.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ].tagName.toLowerCase(),
                                                compAgn:ultraObject.iterify(   {iterify:['label','div']}   ),
                                                boolean:pFFBOOL_4_I,
                                                which:0
                                        })
                                        console.log(   pFFBOOL_4_I   )
                                        
                                        
                                        if(   pFFBOOL_4_I[0] === true   ){
                                            
                                            
                                            ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                            
                                            
                                        }
                                    // }
                                    /**/
                                    /* the parents className*/
                                    // {
                                       
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].classes = ultraObject.iterify(   {iterify:ultraObject.selectTags[ultraObject.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ].className.split(' ')}   )
                                        console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ]      )
                                    
                                        /**/
                                        /*to loop through classNames and find a partial match*/
                                        var pFFBOOL_5_I = {0:false}
                                        pFFBOOL_5_I = ultraObject.severalOr({
                                            compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                            compAgn: ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].classes ,
                                            boolean:pFFBOOL_5_I,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                ultraObject.partialMatch({
                                                    compTo:dev_obj.compTo,
                                                    compAgn:dev_obj.compAgnI,
                                                    range:8,
                                                    spaces:2,
                                                    gap:2,
                                                    trailer:0,
                                                    type:'string',
                                                    cCase:'toLowerCase'
                                                })
                                                
                                                
                                                if(   ultraObject.misc[ultraObject.misc.length-1].satisfy   ){
                                                    
                                                    
                                                    ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                    ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                    //POINT VALUE
                                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                    
                                                    
                                                }
                                                
                                                
                                                ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   pFFBOOL_5_I   )
                                        /**/
                                        
                                    
                                    // }
                                    /**/
                                    /* the parents ID and find a partial match*/
                                    // {
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].ids = ultraObject.iterify(   {iterify:ultraObject.selectTags[ultraObject.scope[pFFST_1_i]][   pFFFL_2_i.forLoop_0_i   ].id.split(' ')}   )
                                        console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]   )
                                    
                                        /**/
                                        /*to loop through classNames and find a partial match*/
                                        var pFFBOOL_6_I = {0:false}
                                        pFFBOOL_6_I = ultraObject.severalOr({
                                            compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                            compAgn: ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].classes ,
                                            boolean:pFFBOOL_6_I,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                ultraObject.partialMatch({
                                                    compTo:dev_obj.compTo,
                                                    compAgn:dev_obj.compAgnI,
                                                    range:8,
                                                    spaces:2,
                                                    gap:2,
                                                    trailer:0,
                                                    type:'string',
                                                    cCase:'toLowerCase'
                                                })
                                                
                                                
                                                if(   ultraObject.misc[ultraObject.misc.length-1].satisfy   ){
                                                    
                                                    
                                                    ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                    ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                    //POINT VALUE
                                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                    
                                                    
                                                }
                                                
                                                
                                                ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   pFFBOOL_6_I   )
                                        /**/
                                        // }
                                    /**/
                                

                                }
                                /**/
                            },
                            args:{}
                        }
                        ultraObject.forLoop(   pFFFL_2_i   )
                        ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_1_i]}   )
                        ultraObject.scope.minus(   {index:pFFST_1_i}   )
                    console.groupEnd()
                    // }
                    /*
                        to identiy the siblings we use parentElement because we dont want any repetitive text nodes

                        point system for siblings
                        1 if any sibling is a label,buton ..., there could be many and we dont need that confusion
                        1 based on how many siblngs (if there are too many it might indicate it a form instead of something u need to fill ,even though thats the case we cannot make decisions based on that )
                    
                    */
                    // {
                    console.group(   'who are its siblings'   )
                        /* we going to slap a  property on the element to help us indicate not to use it, */
                            console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild   )
                            ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild = 'true'
                            console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild  )
                        /**/
                        var pFFFL_3_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children.length,
                            fn:function(   dev_obj   ){
                                
                                
                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[pFFFL_3_i.forLoop_0_i].sameChild !== 'true'   ){
                                    
                                    
                                    console.group(   'sibling'   )
                                        var pFFBOOL_7_I = {0:false}
                                        pFFBOOL_7_I = ultraObject.severalOr({
                                                compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[pFFFL_3_i.forLoop_0_i].tagName.toLowerCase(),
                                                compAgn:ultraObject.iterify(   {iterify:['label','div','button']}   ),
                                                boolean:pFFBOOL_7_I,
                                                which:0
                                        })
                                        console.log(   pFFBOOL_7_I   )
                                        
                                        
                                        if(   pFFBOOL_7_I[0] === true   ){
                                            
                                            
                                            ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                            return 'premature';
                                            
                                            
                                        }
                                        
                                        
                                    console.groupEnd()
                                    
                                    
                                    
                                }
                                
                                
                            },
                            args:{}
                        }
                        ultraObject.forLoop(   pFFFL_3_i   )
                    console.groupEnd()
                    // }
                    console.group(   ' its children'   )
                    /*
                        clues indicating from the  chidlren indicatiing this indeed is the element to use
                            
                            point system for kids
                            1 if any kid has a className met by partialMatch
                            1 if any kid has an ID met by partialMatch
                    */
                    // {
                    var pFFST_2_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                        var pFFFL_4_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children.length,
                            fn:function(   dev_obj   ){
                                console.group(   'child'   )
                                /* the child className and find a partial match*/
                                // {
                                    ultraObject.selectTags[ultraObject.scope[pFFST_2_i]].classes  =ultraObject.iterify(   {iterify:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children[pFFFL_4_i.forLoop_0_i].className.split(' ')}   )
                                        /**/
                                        /*to loop through classNames and find a partial match*/
                                            var pFFBOOL_8_I = {0:false}
                                            pFFBOOL_8_I = ultraObject.severalOr({
                                                compTo: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                compAgn: ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].classes ,
                                                boolean:pFFBOOL_8_I,
                                                which:0,
                                                how:function(   dev_obj   ){
                                                    ultraObject.partialMatch({
                                                        compTo:dev_obj.compTo,
                                                        compAgn:dev_obj.compAgnI,
                                                        range:8,
                                                        spaces:2,
                                                        gap:2,
                                                        trailer:0,
                                                        type:'string',
                                                        cCase:'toLowerCase'
                                                    })
                                                    
                                                    
                                                    if(   ultraObject.misc[ultraObject.misc.length-1].satisfy   ){
                                                        
                                                        
                                                        ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                        ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                        //POINT VALUE
                                                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue += 1
                                                        
                                                        
                                                    }
                                                    
                                                    
                                                    ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                    ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                                },
                                                result:'a'
                                            })
                                            console.log(   pFFBOOL_8_I   )
                                        /**/
                                        // }
                                    debugger
                                // }
                                /**/
                                console.groupEnd()
                            },
                            args:{}
                        }
                        ultraObject.forLoop(   pFFFL_4_i   )