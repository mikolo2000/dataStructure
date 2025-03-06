


class HashTable{
  constructor(size){
    this.validate(size)
    this.size =size;
    this.buckets = new Array(size).fill(null);
  }
  validate(key){
    if(!Number.isInteger(key)){
      throw new TypeError(`${Size}  must be an integer`)
    }
  }
  hash(int){
    return int % this.size;
  }
  put(key, value){
    if(!Number.isInteger(key) || typeof(value)!== "string"){
      throw new TypeError("key must be an integer and value must be a string");
    }
    let existed = this.buckets.find(e=>e && key===e.key);
    if(existed){
      existed.value=value;
      return;
    }
    let index = this.hash(key);
    if(!this.buckets.includes(null)){
      console.log("buckets are filled up");
      return;
    }else{
      let currentIndex = this.buckets[index];
      let i = 0
      while (currentIndex){
        index=this.linearProbing(key,i);
        i++
        currentIndex =this.buckets[index];
      }
      this.buckets[index]={key,value};
    }
  }

  get(key){
    this.validate(key);
    const result = this.buckets.find(e=>e && e.key===key);
    return result;
  }
  remove(key){
    this.validate(key);
    const index = this.buckets.findIndex(e=>key===key);
    if (index!==-1){
      this.buckets[index]= null;
    }
  }
  linearProbing(key,i){
    return (this.hash(key)+i) % this.size
  }
  size(){
    return this.size;
  }

}

const miki = new HashTable(3);
miki.remove(25);
miki.get(23);
miki.put(23, "mikolo");
// miki.put(21, "iroh");

miki.put(22,"peter");
miki.put(1, "daddy");
miki.put(1,"emmy");
miki.put(34,"cornelius");
console.log(miki.get(34));
// miki.put(12, "prince")

console.log(miki);

console.log("yes")