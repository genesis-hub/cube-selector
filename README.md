<!-- ![Screenshot]()  -->
# Cube Selector
#### A very small JavaScript library, used to refer to HTML elements

```github
git clone https://github.com/genesis-hub/cube-selector.git
```

### Code Example:
```javascript
// REFERENCE:
Q("#index") or _Cube("#index");

// CODE EXTEND:
Q.Extend({JSsyntax: function(color, element){
    //code here
}});
```
***
### Installation
1. First you need to download the basic or the full version of the library, then put it in the HTML code as below:
```HTML 
<script src="cube-selector.basic.js"></script> 
/* or use CDN */
<script src="https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/basic/cube-selector.basic.js"></script>
```
2. If you use the 'basic' version, you can use the methods from the [list](https://github.com/genesis-hub/cube-selector/tree/master/methods/README.md#cube-selector-functions).
### Download
Type of library:
* Basic - [Download](https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/basic/cube-selector.basic.js) 
* Core - [Download](https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/core/cube-selector.core.js)
* Full - [Download](https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/full/cube-selector.full.js)

### How to use?
To refer to a library, you can use "Q" for example:
```javascript
Q(".class").index(Q("#id")) or _Cube("#id").css();
```
***
### Disclaimer
This library is in beta, use at your own risk.

### License
MIT © [Matthew]()
