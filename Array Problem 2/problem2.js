const array = [1,2,3,4,5];

console.log( "max is",Math.max(...array))




class Arrray {
  constructor(size){
    this.array= new Array(size);
    // return this.array;
  }

  insert(item) {
    const newArray = [...this.array, item];
    this.array= newArray;

  }

  removeAt(index){
    this.array.splice(index,1);
  }
  insertAt(index, value){
    if(index<0 || index>=this.array.length || !Number.isInteger(index)){
      return;
    }
    this.array.splice(index,0,value);
  }

  indexOf(value){
   const index = this.array.findIndex((element)=>(element===value));
   return index;
  }

  print() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.array[i]);      
    }
  }
  max() {
    const max = this.array.reduce((a,b)=>{
      if(a>b){
        return a;
      }else{
        return b;
      }
    })
    console.log("the Maximum of the numbers in the array is ",max);
  }

  intersect (arr){
    const result = [];
    arr.forEach(num => {
      const found = this.array.find(e => (num === e));
      if (num === found)
        result.push(num)
    });
    console.log(result);
    
  }

  reverse () {
    const reverse = [];
    for(let i= this.array.length-1 ; i>=0; i=i-1){
      reverse.push(this.array[i]);
    }
    this.array= reverse;
  }
  
}

const games = new Arrray();
games.insert(9);
games.insert(20);
games.insertAt(1,1)
games.insert("t");
games.removeAt(2);
games.indexOf(19);
games.insert(4);
games.indexOf(500);
games.print();
games.max();
console.log(games);
games.reverse();
console.log(games);
games.intersect([9,20,3,5]);

// const strings = [1, 2];

// console.log(strings);