/*
 * JavaScript library: selector-engine
 * Released under MIT license
 * Copyright genesis-gub
 * Made by M4TT
*/

var _Cube = (function(root, cube) {
   "use strict";
   
    /* Variables */
    var doc = document, // used for shorthand 
        toStr = Object.prototype.toString, // used for shorthand
        objArr = "[object Array]"; // used to comparison

    // initiating function
    cube = function(select) {
        return new query(select);
    };
    
    // check if 'select' is a string, function or object 
    // make array from node list
    // or simple add one element to function and return 'this'
    var query = function(selector){
        if(typeof selector === 'string'){          
            var ary = doc.querySelectorAll(selector),
                len = ary.length;
            if(len > 1) { // check length of node list if bigger then 1 create array
                cube.makeArray(ary, this);  
            } else {
                // if length < 1 first element is equal to first element of node list
                this[0] = ary[0]; 
            }
            this.length = ary.length // array length
        } 
        if(typeof selector === 'function') {
            cube.ready(selector); // DOMContentLoaded 
        } 
        if(typeof selector === 'object') {
            this[0] = selector;
        }
        return this;
    };

    // wait for "DOM" when it will be safe to manipulate
    cube.ready = function(fn) {
        if (doc.readyState != 'loading'){ // modern browser
            fn();
        } else if (doc.addEventListener) { // W3C
            doc.addEventListener('DOMContentLoaded', fn);
        } else {
            doc.attachEvent('onreadystatechange', function() { // IE
            if (doc.readyState != 'loading')
                fn(); 
            });
        }
    };

    // return array or object with added elements 
    cube.makeArray = function (ary, fun){
        var len = ary.length, 
            i = 0;  
            fun = fun || [];
        for(i; i < len; i++ ) {
            fun[i] = ary[i];
        } 
        return fun;
    };
    
    // extend object methods from another 
    // you can add any methods into 'cube library'
    // $.Extend({JSsyntax: function(el){}});
    cube.Extend = function(meth) { 
        var i; 
        var lib = cube.fn;
        for (i in meth) {
            if(meth.hasOwnProperty(i)){
                if(typeof meth[i] === 'object'){        
                    // call method of an object, substituting another object for the current object.
                    lib[i] = (toStr.call(meth[i]) === objArr) ? [] : {};
                    cube.Extend(meth[i], lib[i])
                } else {
                    lib[i] = meth[i]
                }    
            }
        }
        return lib;
    };

    query.prototype = cube.fn = {
        length: 0,

        /* *********************************** */
        /* YOU CAN PLACE YOUR OWN METHODS HERE */
        /* **************  OR  *************** */
        /*         USE 'EXTEND' METHOD         */
        /* *********************************** */

    };
   
    // check if there is an root.$
    if(typeof(root.$) === 'undefined'){
        root.$ = cube;
    } else{
        console.log('"$" this name is already reserved'); //delete in minify 
        console.log('Now to refer, you must use Q'); //delete in minify 
        root.Q = cube;
    }
  
    return cube;

})(this, _Cube || {});


