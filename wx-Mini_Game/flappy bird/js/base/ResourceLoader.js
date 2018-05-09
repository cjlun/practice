// 新建图片对象
import {resource} from "Resource.js";
export class ResourceLoader{
  constructor(){
      this.map=new Map(resource);
      for(let [key,value] of this.map){
         const image=wx.createImage();
         image.src=value;
         this.map.set(key,image);
      }
  }
  loadComplete(callback){
    let count=0;
    for(let value of this.map.values()){
      value.onload=()=>{
        count++;
        if(count>=this.map.size){
          callback(this.map);
        }
      }
    }
  }
  static create(){
    return new ResourceLoader();
  }
  // 为什么要使用create？
}