/**
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
                cube.fn.makeArray(ary, this);  
            } else {
                // if length < 1 first element is equal to first element of node list
                this[0] = ary[0]; 
            }
            this.length = ary.length // array length
        } 
        if(typeof selector === 'function') {
            cube.fn.ready(selector); // DOMContentLoaded 
        } 
        if(typeof selector === 'object') {
            this[0] = selector;
        }
        return this;
    }
    
    // extend object methods from another 
    // you can add any methods into 'cube library'
    // $.Extend({codeSyntax: function(el){}});
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
    }

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

    //
    cube.loadJSON = function(path) {
        var jsonObj = {};
        var xObject = new XMLHttpRequest();
        xObject.overrideMimeType('application/json');
        xObject.open('GET', path);
        xObject.onreadystatechange = function() {
            if (xObject.readyState === 4) {
                jsonObj = JSON.parse(xObject.responseText);
            }
        };
        xObject.send(null);
        return jsonObj;
    }
    
    // stops before bubbling events
    cube.stopProp = function(e){
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();
            //console.log("prop");
        } 
        if (typeof e.cancelBubble !== 'undefined') {
            e.cancelBubble = true;
           // console.log("bub");
        }
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
           // console.log("pre");
        }
        if (typeof e.returnValue !== 'undefined') {
            e.returnValue = false;
           //  console.log("ret");
        }
    }
    

    query.prototype = cube.fn = {

        length: 0,
        // css({display : "block"}) 
        // set css style 
        css: function(prop) {
            var elem = this,
                len = this.length,
                i = 0, property;
            for (property in prop){
                for(; i < len; i++){
                elem[i].style[property] = prop[property];
                }
            }   
        },

        // returns the content of the element as text
        text: function () {
            var i = 0,
                len = this.length,
                arrhold = [],  
                text;
            if(len > 1) {
                for(i; i < len; i++){
                    text = this[i].textContent;
                    arrhold.push(text);
                }
                return arrhold;
            } else {
                return text = this[0].textContent;
            }  
            
        },  

        // hasAttr returns true or false when attribute exist or not
        hasAttr: function(el){
            var stat = this[0].hasAttribute(el);
            return stat;
        },

        // returns index of matching element
        // $(".method_box").index($("#test"))
        // $("#test").index();
        index: function(e){
            var x, els, target;
            if(!e){
                x = this[0];
                // if has 'class' attribute, target takes this value, if not takes id 
                target = (this.hasAttr("class") === true) ? '.' + x.className : '#' + x.id; 
                els = cube(target);
            } else {
                // if the first element not exist, x takes 'e' parameter, 
                // if exist, x take first element of e parameter
                x = (e.length && e.length >= 1) ? e[0] : e; // ? typeof e[0] === 'undefined'
                els = this;
            }
            return this.match(els, x);          
        },
        
        // returns the index of matching items
        // can be used instead 'index method' 
        match: function( arr, el ) {
            var i = 0, 
                len = arr.length;
            for(; i < len; i++) {
                if(arr[i] == el){
                    return i;
                }
            } 
        },

        // event handler
        on: function(events, callback){
            var i = 0,
                len = this.length;
            if(this[i].addEventListener) {
                for(; i < len; i++){
                    this[i].addEventListener(events, callback, false);
                } 
            } else if(this[i].attachEvent){
                for(; i < len; i++){
                    this[i].attachEvent(events, callback);
                } 
            }
        },

        // wait for "DOM" when it will be safe to manipulate
        ready: function(fn) {
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
        },

        //

        splice: function(){

        }

    };
   
    root.Q = cube;
  
    return cube;

})(this, _Cube || {});


