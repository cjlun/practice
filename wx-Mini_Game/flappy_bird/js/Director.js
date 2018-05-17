// 导演类，负责掌管游戏的逻辑
import { DataStore } from "base/DataStore.js";
import { UpPencil } from "runtime/UpPencil.js";
import { DownPencil } from "runtime/DownPencil.js";
export class Director {
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.isGameOver = false;
    this.stopAcculate=false;
  }
  static getInstance() {
    if (!Director.instance) {
      return Director.instance = new Director();
    }
    return Director.instance;
  }
  createPencil() {
    const maxTop = DataStore.canvas.height / 2;
    const minTop = DataStore.canvas.height / 8;
    const top = minTop + (maxTop - minTop) * Math.random();
    const upPencil = new UpPencil(top);
    const downPencil = new DownPencil(top);
    this.dataStore.get("Pencils").push(upPencil);
    this.dataStore.get("Pencils").push(downPencil);
  }
  isCreatePencil(pencils) {

    if (pencils[0].x <= (DataStore.canvas.width - pencils[0].width) / 2 && pencils.length == 2) {
      return true;
    }
  }
  isDeletePencil(pencils) {

    if (pencils[0].x + pencils[0].width <= 0 && pencils.length == 4) {
      return true;
    }
  }
  isStrikeLand() {
    const bird = this.dataStore.get("Bird");
    const land = this.dataStore.get("Land");
    if (bird.y + bird.height >= land.y) {
      return true;
    }
  }
  isStrikePencil(birdBorder,pencilBorder){
       var isStrike=true;;
       if (birdBorder.right < pencilBorder.left || birdBorder.left > pencilBorder.right || birdBorder.top > pencilBorder.bottom || birdBorder.bottom < pencilBorder.top) {
        isStrike=false;

       }
       return isStrike;
  }
  checkLand(){
    if (this.isStrikeLand()) {
      console.log("撞到陆地");
      this.isGameOver = true;
    }
  }
  checkPencil() {
 
    const bird = this.dataStore.get("Bird");
    const birdBorder = {
      left: bird.x,
      right: bird.x + bird.width,
      top: bird.y,
      bottom: bird.y + bird.height
    }
    const pencils = this.dataStore.get("Pencils");
    for (var p in pencils) {
      const pencilBorder = {
        top: pencils[p].y,
        bottom: pencils[p].y + pencils[p].height,
        left: pencils[p].x,
        right: pencils[p].x + pencils[p].width
      }
      if(this.isStrikePencil(birdBorder,pencilBorder)){
        console.log("碰撞铅笔");
        this.isGameOver=true;
      }
      if(birdBorder.left > pencilBorder.right && !this.stopAcculate){
        this.dataStore.get("Score").acculateScore++;
        this.stopAcculate=true;
      }
     
    }
  }
  checkScore(){

  }
  check() {
    this.checkLand();
    this.checkPencil();
  }
  run() {
    this.check();
    if (!this.isGameOver) {
      this.dataStore.get("Background").draw();
      const pencils = this.dataStore.get("Pencils");
      pencils.forEach(function (value, index, array) {
        value.draw();

      })

      this.dataStore.get("Land").draw();
      this.dataStore.get("Bird").draw();
      this.dataStore.get("Score").draw();
      if (this.isCreatePencil(pencils)) {
        this.createPencil();
      }
      if (this.isDeletePencil(pencils)) {
        pencils.shift();
        pencils.shift();
        this.stopAcculate=false;
      }
      let timer = requestAnimationFrame(() => {
        this.run();
      })
      this.dataStore.set("timer", timer);
    } else {
      this.dataStore.get("StartButton").draw();
      cancelAnimationFrame(this.dataStore.get("timer"));
      this.dataStore.destroy();
    }

  }

}