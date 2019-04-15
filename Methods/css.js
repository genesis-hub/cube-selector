/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/* 
css({display : "block"}) 
*/

_Cube.fn.css = function (prop){
    var elem = this,
        len = this.length,
        i = 0, property;
    for (property in prop){
        for(; i < len; i++){
        elem[i].style[property] = prop[property];
        }
    }    
};


