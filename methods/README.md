<!-- ![Screenshot]()  -->
# Library methods
#### You can add modulets to it


### Code Example
```javascript
//Reference
$("#index").css(); Q("#index") or _Cube("#index").css();
$.Extend({JSsyntax: function(el){
    //code here
}});
```
***
### Installation
* Download the method you want, add like normal js file or put code in library core

### How to use?
To use these methods, you must first download the library core, connect it, or edit the code, see below:
```bash
_Cube.fn.method = function(){
    //code here
};

$.Extend({toggle: function(color, element){
    //code here
}});

// 90 line in library core 
   query.prototype = cube.fn = {
        length: 0,

        /* *********************************** */
        /* YOU CAN PLACE YOUR OWN METHODS HERE */
        /* **************  OR  *************** */
        /*         USE 'EXTEND' METHOD         */
        /* *********************************** */

        //like this 
        hide: function(){

        },

    };
```
***
### Disclaimer
This library is in beta, use at your own risk.

### License
MIT © [Matthew]()
