// 建立统一的数据库存放数据
export class DataStore{
  constructor(){
    this.map=new Map();
  }
  static getInstance(){
    if(!DataStore.instance){
      return DataStore.instance=new DataStore();
    }
    return DataStore.instance;
  }
  get(key){
    return this.map.get(key); 
  }
  set(key,value){
    this.map.set(key,value);
    return this;
    // 链式
  }
  destroy(){
    for(var value in this.map){
      value=null;
    }
  }
}