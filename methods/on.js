/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/* event handler */

Q.Extend({
    on: function(events, callback){
        var i = 0,
            len = this.length;
        if(this[i].addEventListener) {
            for(; i < len; i++){
                this[i].addEventListener(events, callback, false);
            } 
        } else if(this[i].attachEvent){
            for(; i < len; i++){
                this[i].attachEvent(events, callback);
            } 
        }
    },
});