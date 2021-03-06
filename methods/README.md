<!-- ![Screenshot]()  -->
# Library methods
#### You can use these modules with the library or add your own functions to it

### Code Example:
```javascript
//REFERENCE
Q("#index").'method' or _Cube("#index").'method';

// CODE EXTEND:
Q.Extend({JSsyntax: function(color, element){
    //code here
}});
```
***
### How to use ?
To use these methods, you must first download the library 'basic', after which you can download method and added to html page.
```HTML 
<script src="cube-selector.basic.js"></script>
<script src="'method'.js"></script>>
/* or use CDN */
<script src="https://cdn.jsdelivr.net/gh/matthew-hub/cube-selector/basic/cube-selector.basic.js"></script>
<script src="https://cdn.jsdelivr.net/gh/matthew-hub/cube-selector/methods/'method'.js"></script>

/* *********************************************************** */
/* 'method' refers to the name of the function you want to add */
/* *********************************************************** */
```

### How to add own methods ?
To add methods, you can use these references, see below:
```bash
Q.Extend({'method': function(color, element){
    //code here
}});

// 90 line in library basic 
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

# Not recommended:
# _Cube.fn.'method' = function(){
#     //code here
# };
```
### Cube Selector functions:

#### Built:
* Extend
* makeArray
* ready
* stopProp
#### Other:
* css
* hasAttr
* index (contains match.js method)
* match
* on
* text

***
### Disclaimer
This library is in beta, use at your own risk.

### License
MIT © [Matthew](https://github.com/matthew-hub)
