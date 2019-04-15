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
* To use these methods, you must first download the library core, after this you can download method and added to.
1. <script src="cube-selector.js"></script>
2. <script src="'method'.js"></script>>


### How to add?
To add methods, you can use these references, see below:
```bash
_Cube.fn.'method' = function(){
    //code here
};

$.Extend({'method': function(color, element){
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
        'method': function(){

        },

    };
```
***
### Disclaimer
This library is in beta, use at your own risk.

### License
MIT © [Matthew]()
