/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/*
// returns index of matching element
$(".method_box").index($("#test"))
$("#test").index(); 
*/
Q.Extend({
    index: function(e){
        var x, els, target;
        if(!e){
            x = this[0];
            // if has 'class' attribute, target takes this value, if not takes id 
            target = (this[0].hasAttribute("class") === true) ? '.' + x.className : '#' + x.id; 
            els = cube(target);
        } else {
            // if the first element not exist, x takes 'e' parameter, 
            // if exist, x take first element of e parameter
            x = (e.length && e.length >= 1) ? e[0] : e; // ? typeof e[0] === 'undefined'
            els = this; 
        }
        return this.match(els, x);          
    },
}); 

 
/* --------------------------------- */ 
/*********     CAUTION!      ******* */
/**    YOU CAN DELETE THIS IF YOU   **/
/**   ALREADY HAVE 'match' METHOD   **/

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
        return -1; 
    },
});


