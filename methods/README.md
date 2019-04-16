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
### How to use ?
To use these methods, you must first download the library 'basic', after this you can download method and added to html page.
```HTML 
<script defer src="cube-selector.basic.js"></script>
<script src="'method'.js"></script>>
/* or use CDN */
<script defer src="https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/basic/cube-selector.basic.js"></script>
<script src="https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/methods/index.js"></script>
```

### How to add own methods?
To add methods, you can use these references, see below:
```bash
$.Extend({'method': function(color, element){
    //code here
}});

# _Cube.fn.'method' = function(){
#     //code here
# };

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
### Cube Selector functions:

#### Built:
* Extend
* makeArray
* ready
#### Other:
* css
* hasAttr
* index (contains match.js method)
* match

***
### Disclaimer
This library is in beta, use at your own risk.

### License
MIT © [Matthew]()
