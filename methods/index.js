/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/*
returning index of matching element 
$(".method_box").index($("#test"))
$("#test").index(); 
*/

_Cube.fn.index = function(e){
    var x, els, target;
    if(!e){
        x = this[0];
        // if has 'class' attribute, target takes this value, if not takes id 
        target = (this.hasAttr("class") === true) ? '.' + x.className : '#' + x.id; 
        els = _Cube(target);
    } else {
        // if the first element not exist, x takes 'e' parameter, 
        // if exist, x take first element of e parameter
        x = (e.length && e.length >= 1) ? e[0] : e; // ? typeof e[0] === 'undefined'
        els = this; 
    }
    return this.match(els, x);          
};

if(!_Cube.fn.hasAttr){ 
    console.log("You need 'hasAttr' method");
} else if (!_Cube.fn.match) {
    console.log("You need 'match' method");
};



