/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/* 
hasAttr returns true or false when attribute exist or not
*/

_Cube.fn.hasAttr = function(el){
    var stat = this[0].hasAttribute(el);
    return stat;
};
