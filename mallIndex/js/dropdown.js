// $(".dropdown").hover(function(){
//    var $this=$(this);
//    $this.addClass($this.data("toggle")+"-active");
// },function(){
// 	var $this=$(this);
//    $this.removeClass($this.data("toggle")+"-active");
// })
//封装dropdown组件



(function($){
     "use strict";
     var dropdown=function(elem,callback){
     var $elem=$(elem);

     $elem.hover(function(){
         if(!$(elem).data("load")){
         if(typeof callback == "function"){
            callback(elem);
            $elem.triggerHandler("dropdown-show");
            $(elem).data("load",true);
            
         } }
  
         
     
         $elem.addClass($elem.data("toggle")+"-active");
     },function(){
         $elem.removeClass($elem.data("toggle")+"-active");
     })
};
$.fn.extend({
	dropdown:function(callback){
           return this.each(function(){
           	    dropdown(this,callback);
           });
	}
});


})(jQuery);