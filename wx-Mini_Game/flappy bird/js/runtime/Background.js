import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";
export class Background extends Sprite{
  constructor(){
      const img=Sprite.getImg("Background");
      const canvas=DataStore.canvas;
      super(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
  }
  draw(){
    super.draw();
  }
}