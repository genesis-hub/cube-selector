<!-- ![Screenshot]()  -->
# JS-Selector
#### A very small JavaScript library, used to refer to DOM elements

```github
git clone https://github.com/genesis-hub/cube-selector.git
```

### Code Example
```javascript
// REFERENCE:
$("#index").css(); Q("#index") or _Cube("#index").css();
// CODE EXTEND:
$.Extend({JSsyntax: function(color, element){
    //code here
}});
```
***
### Installation
1. First you need to download the core or the full version of the library, then put it in the HTML code as below:
```HTML 
<script src="js-selector.core.js"></script> or <script src="cube-selector_full.js"></script> 
```
2. If you use the 'core' version, you can use the methods from the [list](https://github.com/genesis-hub/cube-selector/tree/master/methods).
### Download
* 'Basic' version [Download](https://cdn.jsdelivr.net/gh/genesis-hub/cube-selector/core/cube-selector_core.js)
* 'Full' version [Download] 
### How to use?
To refer to a library, you can use "$", and if you use jQuery or something similar that uses "$", you can use "Q" for example:
```javascript
$(".class").css(); Q(".class").index(Q("#id")) or _Cube("#id").css();
```
***
### Disclaimer
This library is in beta, use at your own risk.


### License
MIT © [Matthew]()
