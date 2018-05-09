import {Pencil} from "Pencil.js";
import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";
export class DownPencil extends Pencil{
  constructor(top){
     const img=Sprite.getImg("DownPencil");
     super(img);
     this.y=top+DataStore.canvas.height/5;
  }
  draw(){
    super.draw();
  }
}