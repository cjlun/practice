import {DataStore} from "../base/DataStore";
export class Score {
  constructor(){
      this.canvas=DataStore.canvas;
      this.ctx=DataStore.ctx;
      this.x=this.canvas.width/2;
      this.y=this.canvas.height/7;
      this.acculateScore=0;
  }
  draw(){
    this.ctx.font="bold 25px Arial";
    this.ctx.fillStyle="red";
    this.ctx.fillText(this.acculateScore,this.x,this.y);
  }
}