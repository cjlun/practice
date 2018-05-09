import { ResourceLoader } from "base/ResourceLoader.js";
import { DataStore } from "base/DataStore.js";
import { Background } from "runtime/Background.js";
import { Director } from "Director.js";
import { Land } from "runtime/Land.js";
import { Bird } from "player/Bird.js"
import {StartButton} from "player/StartButton.js";
import {Score} from "player/Score.js";
export class Main {
  constructor() {
    var resourceLoader = ResourceLoader.create();
    resourceLoader.loadComplete((map) => {
      this.canvas = wx.createCanvas();
      this.ctx = this.canvas.getContext("2d");
      this.director = Director.getInstance();
      DataStore.res = map;
      DataStore.canvas = this.canvas;
      DataStore.ctx = this.ctx;
      this.dataStore = DataStore.getInstance();
      this.init();
    });

  }

  init() {
    wx.onTouchStart(() => {
      if (!this.director.isGameOver) {
        this.dataStore.get("Bird").time = 0;
      } else {
        this.director.isGameOver = false;
        this.init();
      }

    })
    this.dataStore.set("Background", new Background())
      .set("Land", new Land())
      .set("Pencils", [])
      .set("Bird", new Bird())
      .set("StartButton",new StartButton())
      .set("Score",new Score());
    this.director.createPencil();
    this.director.run();
  }
}