/****************************/
/*   CUBE-SELECTOR METHOD:  */
/*    ******************    */
/****************************/

/*  returns the content of the elements as text */
Q.Extend({ 
    text: function () {
        var i = 0,
            len = this.length,
            arrhold = [],  
            text;
        if(len > 1) {
            for(i; i < len; i++){
                text = this[i].textContent;
                arrhold.push(text);
            }
            return arrhold;
        } else {
            return text = this[0].textContent;
        }  
        
    },
});    