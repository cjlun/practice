(function($){
    var $search_content=$(".search-content"),
        $search_btn=$(".search-btn"),
        $search_menu=$(".search-menu"),
        $form=$(".search-form");
    $form.on("submit",function(){
    	if($.trim($search_content.val())===""){
              return false;
    	}
    })
    $search_content.on("input",function(){
    	var url="https://suggest.taobao.com/sug?code=utf-8&_ksTS=1526284535149_7258&callback=jsonp7259&k=1&area=c2c&bucketid=2&q="+encodeURIComponent($.trim($(this).val()));
    	$.ajax({
    		url:url,
    		dataType:"jsonp",
    		// success:function(data){
    		// 	$search_menu.empty();
      //           for(var i=0;i<data.result.length;i++){
      //              var html='<div class="search-menu-item">'+data.result[i][0]+'</div>';
      //              $search_menu.append(html);
      //              $search_menu.show();
      //           }
    		// },
    		// error:function(error){
      //           console.log(error);
    		// }
    	}).done(function(data){
    		    $search_menu.empty();
                for(var i=0;i<data.result.length;i++){
                   var html='<div class="search-menu-item">'+data.result[i][0]+'</div>';
                   $search_menu.append(html);
                   $search_menu.show();

                }
    	}).fail(function(error){
    		$search_menu.empty();
    		console.log(error);
    	}).always(function(){
    		console.log("why is always me");
    	})
    })

    $search_menu.on("click",".search-menu-item",function(){
    	$search_content.val($(this).text());
    	$form.submit();
        
    });

    $search_content.on("focus",function(){
         $search_menu.show();
    }).on("click",function(e){
         e.stopPropagation();
    });

    $(document).on("click",function(){
    	$search_menu.hide();
    })


})(jQuery)