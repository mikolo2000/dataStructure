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

  
}

const games = new Arrray();
games.insert(9);
games.insert(20);
games.insert("t");
games.removeAt(2);
games.indexOf(19);
games.insert(4);
games.indexOf(500);
games.print();
games.max();
console.log(games);

console.log(games);


