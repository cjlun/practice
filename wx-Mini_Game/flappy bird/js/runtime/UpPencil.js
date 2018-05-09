import {Pencil} from "Pencil.js";
import {Sprite} from "../base/Sprite";
export class UpPencil extends Pencil{
  constructor(top){
    const img=Sprite.getImg("UpPencil");
    super(img);
    this.y=top-img.height;
  }
  draw(){
    super.draw();
  }
}