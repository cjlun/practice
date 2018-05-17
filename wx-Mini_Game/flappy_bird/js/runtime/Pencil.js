import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
export class Pencil extends Sprite {
  constructor(img) {
    const canvas = DataStore.canvas;
    super(img, 0, 0, img.width, img.height, canvas.width, 0, img.width, img.height);


  }
  draw() {
    super.draw();
    this.x -= 2;
  }
}