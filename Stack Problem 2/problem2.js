class Stack{
  constructor(){
    this.stack =[];
    this.minStack = [];
  }

  push(num){
    if(typeof(num)!== "number"){
      throw new TypeError(`${num} must be a number`);
    }
    this.stack.push(num);
    if(this.minStack.length===0){
      this.minStack.push(num);
    }else{
      this.minStack.push(num);
      this.minStack.sort((a,b)=>a-b);
    }
  }
  pop(){
    if(this.stack.length===0){
      return null
    }else{
      const toBeDeleted = this.stack[this.stack.length-1];
      this.stack.pop();
      this.minStack=this.minStack.filter((e)=> e!==toBeDeleted);
    }
  }

  min(){
    
    return this.minStack[0];
  }
}



const miki = new Stack();

miki.push(7);
miki.push(4);
miki.push(6);
miki.push(1)
miki.push(23)
miki.push(35)
miki.pop();
console.log(miki.min());