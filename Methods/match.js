/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/*
matching items and returning the index 
can be used instead 'index method'  
*/
_Cube.fn.match = function( arr, el ) {
    var i = 0, 
        len = arr.length;
    for(; i < len; i++) {
        if(arr[i] == el){
            return i;
        }
    } 
};
