import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
export class StartButton extends Sprite{
  constructor() {
    const img = Sprite.getImg("StartButton");
    const canvas = DataStore.canvas;
    const land = DataStore.getInstance().get("Land");
    super(img, 0, 0, img.width, img.height, (canvas.width - img.width) / 2, (canvas.height - land.height - img.height) / 2, img.width, img.height);
  }
}