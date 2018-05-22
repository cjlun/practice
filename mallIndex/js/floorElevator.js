(function($){

function isMoveMiddle(elem){
        var $elem=$(elem),
            $win=$(window);
            if($win.scrollTop()+$win.height()/2>=$elem.offset().top){
            	return true;
            }
          

	}
	function isFirstToMiddle(){
            var $win=$(window);
            if($win.scrollTop()+$win.height()/2>=931){
            	return true;
            }
            return false;
      
	}
	function floorElevator(elem){

		var $floorElevator=$(".floor-elevator"),
		    $floorNum=$floorElevator.find(".floor-num"),
		    index=$(elem).index(),
		    arr1=['F1','F2','F3','F4','F5'],
		    arr2=['服饰','美妆','手机','家电','数码'];
            
           if(isFirstToMiddle()){
           	  $floorElevator.show();
           }else{
           	  $floorElevator.hide();
           }
           if(isMoveMiddle(elem)){
               $floorNum.eq(index).addClass("red").siblings().removeClass("red");
               $floorNum.each(function(){
               	   $(this).html(arr1[$(this).index()]);
               }).eq(index).html(arr2[index]);
           }



	}
    function clickFloorBtn(elem){
           var $floorElevator=$(".floor-elevator"),
		       $floorNum=$floorElevator.find(".floor-num"),
		       index=$(elem).index();
		    $floorNum.eq(index).on("click",function(){
		    	var top=$(elem).offset().top;
		    	$("html").animate({
		    		scrollTop:top
		    	})
		    })
    }


	$.fn.extend({
       floorElevator:function(){
       	   return this.each(function(){
       	   	    floorElevator(this);
       	   })
       },
       clickFloorBtn:function(){
       	   return this.each(function(){
       	   	     clickFloorBtn(this);
       	   })
       }
	})
})(jQuery)