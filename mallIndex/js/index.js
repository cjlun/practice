(function($){
      // $(".dropdown").eq(3).on("dropdown-show",function(){
      //           var html="",
      //               $menu=$(this).find(".dropdown-menu"),
      //               img='<img class="dropdown-loading" src="img/loading.gif">';
      //           $menu.append(img);
      //           setTimeout(function(){
      //               $.getJSON("dropdown.json",function(data){
      //                  $menu.empty();
      //                  for(var i in data){
      //                      html="<div class='myshop-item'>"+data[i]+"</div>";
      //                     $menu.append(html);
      //                  }
                    
      //           })
      //           },2000);/*模拟加载*/
                
      // })
        
        $(".myshop").dropdown(function(elem){
                if($(elem).index()==3){
                  var html="",
                      $menu=$(elem).find(".dropdown-menu"),
                    img='<img class="dropdown-loading" src="img/loading.gif">';
                $menu.append(img);
                setTimeout(function(){
                    $.getJSON("json/dropdown.json",function(data){
                       $menu.empty();
                       for(var i in data){
                           html="<div class='myshop-item'>"+data[i]+"</div>";
                           $menu.append(html);
                       }
                    
                })
                },1000);/*模拟加载*/
                }
        });
        $(".cart").dropdown();
        $(".category-item").dropdown(function(elem){
             var html="",
                 index=$(elem).index()+1,
                 $menu=$(elem).find(".dropdown-menu"),
                 img='<img class="dropdown-loading" src="img/floor/loading.gif">';
                 $menu.append(img);
                 setTimeout(function(){
                    $.getJSON("json/category-detail-"+index+".json",function(data){
                       $menu.empty();
                       for(var i=0;i<data.length;i++){
                              html='<dl class="category-details cf"><dt class="category-details-title lf">'+data[i].title+'</dt><dd class="category-details-item lf">';
                         for(var j=0;j<data[i].items.length;j++){
                                html+='<a class="details-link"href="#">'+data[i].items[j]+'</a>';
                         }
                              html+='</dd></dl>';
                              $menu.append(html);
                              html="";
                       }
                       // console.log("发送请求");
                       // console.log($(elem).data("load"));
                })
                },1000);/*模拟加载*/
        });
        $(".banner .slideImgs").slide();
        $(".onsale .slideImgs").slide();
        $(".floor").buildFloor(function(floor){
            $(floor).floor();
        }).floorElevator().clickFloorBtn();

        $(document).on("scroll resize",function(){
          $(".floor").buildFloor(function(floor){
            $(floor).floor();
        });
          $(".floor").floorElevator();
        })
        $(".toTop").on("click",function(){
            $("html").animate({
              scrollTop:0
            })
        })
})(jQuery)
      

      

        
     



