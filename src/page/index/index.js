
require("page/common/nav-simple/nav-simple.js");
require("page/common/nav/nav.js");
require("./index.css");
var _mm=require("util/mm.js");
_mm.request({
	url:"/product/list.do?keyword=1",
	success:function(res){
		console.log(res);
	},
	error:function(err){
		console.log(err);
	}
});
var html="<div>{{data}}</div>";
var data={
	data:"hello,how are you! fine,thank you"
}
var result=_mm.renderHtml(html,data);
console.log(result);
console.log(_mm.getUrlParam("name"));