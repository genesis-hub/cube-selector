/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/*returns the index of matching items, can be used instead 'index method' */
Q.Extend({
    match: function( arr, el ) {
        var i = 0, 
            len = arr.length;
        for(; i < len; i++) {
            if(arr[i] == el){
                return i;
            }
        } 
    }
});    
