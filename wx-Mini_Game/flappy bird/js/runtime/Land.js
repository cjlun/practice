import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore";
export class Land extends Sprite {
  constructor() {
    const img = Sprite.getImg("Land");
    const canvas = DataStore.canvas;
    super(img, 0, 0, img.width, img.height, 0, canvas.height - img.height, img.width, img.height);
  }
  draw() {
    super.draw();
    this.x -= 2;
    if (Math.abs(this.x) >= this.img.width - DataStore.canvas.width){
      this.x=0;
    }
  }
}