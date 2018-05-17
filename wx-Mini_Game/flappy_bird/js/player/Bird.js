import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
export class Bird extends Sprite {
  constructor() {
    const img = Sprite.getImg("Bird");
    const canvas = DataStore.canvas;

    super(img);
    this.arrSrcX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
    this.arrSrcY = [10, 10, 10];
    this.arrSrcW = [34, 34, 34];
    this.arrSrcH = [24, 24, 24];
    this.birdX = canvas.width / 4;
    this.arrX = [this.birdX, this.birdX, this.birdX];
    this.birdY = canvas.height / 2;
    this.arrY = [this.birdY, this.birdY, this.birdY];
    this.arrWidth = [34, 34, 34];
    this.arrHeight = [24, 24, 24];
    this.index = 0;
    this.count = 0;
    this.speed = 0.5;
    this.time = 0;
  }
  draw() {
    this.srcX = this.arrSrcX[this.index];
    this.srcY = this.arrSrcY[this.index];
    this.srcW = this.arrSrcW[this.index];
    this.srcH = this.arrSrcH[this.index];
    this.x = this.arrX[this.index];
    this.y = this.arrY[this.index];
    this.width = this.arrWidth[this.index];
    this.height = this.arrHeight[this.index];
    super.draw();
    this.count += this.speed;
    if (this.count >= 3) {
      this.count = 0;
    }
    this.index = Math.floor(this.count);
     
     const g=0.98/50;
     const offset=g*this.time*(this.time-40)/2;
     this.arrY[this.index]=this.y+offset;
     this.time++;
  }

}