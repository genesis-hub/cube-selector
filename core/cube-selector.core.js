/*
 * JavaScript library: selector-engine
 * Released under MIT license
 * Copyright genesis-gub
 * Made by M4TT
*/

var _Cube = (function(root, cube) {
   "use strict";
   
    /* Variables */
    var doc = document; // used for shorthand 
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

    query.prototype = cube.fn = {
        length: 0,

        /* *********************************** */
        /* YOU CAN PLACE YOUR OWN METHODS HERE */
        /* **************  OR  *************** */

    };

    root.Q = cube;

    return cube;
})(this, _Cube || {});


