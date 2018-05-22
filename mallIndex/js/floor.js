(function($){
    var index=0;
    function floor(elem){
    	var $elem=$(elem),
    	    $btn=$elem.find(".category-tab"),
    	    $layer=$elem.find(".floor-categorys"),
    	    $arrow=$elem.find(".triangle-groups .triangle-group");
        if($btn.length!=0){
            $btn.on("mouseover",function(){
            index=$(this).index();
            $(this).addClass("red").siblings().removeClass("red");
            // $arrow.eq(index).show().siblings().hide();
            $layer.eq(index).show().siblings().hide();
            console.log("move");
        })
        }
    	
    }

    $.fn.extend({
    	floor:function(){
    		return this.each(function(){
    			floor(this);
    		})
    	}
    })
})(jQuery)