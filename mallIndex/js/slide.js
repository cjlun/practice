(function($){
      function slide(elem){

  var $elem=$(elem),
      index=0,
      $wrap=$elem.find(".wrap"),
      $slideImg=$elem.find(".slideImg"),
      width=$slideImg.width(),
      timer=null,
      $slideImgs=$elem,
      $arrow_left=$elem.find(".arrow-left"),
      $arrow_right=$elem.find(".arrow-right"),
      $btns=$elem.find(".btn-group .btn");
  function slideImg(){
         $wrap.stop().animate({
          "left":-1*index*width+"px"
         },1500)
         $btns.eq(index).addClass("active").siblings().removeClass("active");
  }//切换图片函数
  function autoplay(){
  timer=setInterval(function(){
           index++;
           if(index>$slideImg.length-1){
            index=0;
           }
           slideImg();
   
  },6000);
  }//自动播放函数
  autoplay();
  $slideImgs.hover(function(){
      if(timer){
             clearInterval(timer)
      }
  },function(){
          autoplay();
  })//悬浮在轮播图上时停止轮播，离开时继续轮播
    $arrow_left.on("click",function(){
         index--;
         if(index<0){
          index=$slideImg.length-1;
         }
         slideImg();
    })//点击左边箭头，回到上一张图
    $arrow_right.on("click",function(){
      index++;
      if(index>$slideImg.length-1){
        index=0;
      }
      slideImg();
    })//点击右边箭头，切换到下一张图
    $btns.on("click",function(){
      index=$(this).index();
      slideImg();
    })
      }
	  
    $.fn.extend({
      slide:function(){
             return this.each(function(){
                slide(this);
             })
      }
    })
})(jQuery)