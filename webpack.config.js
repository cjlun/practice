var webpack=require("webpack");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var HtmlWebpackPlugin=require("html-webpack-plugin");

var WEBPACK_ENV=process.env.WEBPACK_ENV || "dev";
var getHtmlTemplate=function(name){
           return{
           	  template:"./src/view/"+name+".html",
        	  filename:"view/"+name+".html",
        	  inject:true,
        	  hash:true,
        	  chunks:["common",name]
           }
};
var config={
	entry:{
		"common":["./src/page/common/common.js"],
		"index":["./src/page/index/index.js"],
		"login":["./src/page/login/login.js"]
	},
	output:{
		path:"./dist",
		publicPath:"/dist",
		filename:"js/[name].js"
	},
	externals:{
		"jquery":"window.jQuery"
	},
	module:{
		loaders:[
           {test: /\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
           {test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,loader:"url-loader?limit=100&name=resource/[name].[ext]"}
	]
    },
	plugins:[
        new webpack.optimize.CommonsChunkPlugin({
        	name:"common",
        	filename:"js/base.js"
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlTemplate("index")),
        new HtmlWebpackPlugin(getHtmlTemplate("login"))
	]
}
if("dev" === WEBPACK_ENV){
	config.entry.common.push("webpack-dev-server/client?http://localhost:8088/");
}
module.exports=config;