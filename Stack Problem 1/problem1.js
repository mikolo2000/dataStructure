class Node{
  constructor(data, next=null){
    this.data= data;
    this.next= next;
  }
}
class Stack{
  constructor(){
    this.head=this.tail=null;
  }

  push(data){
    let node = new Node(data)
    if (this.head===null){
      this.head =node;
      this.tail=node;
      return;
    }
    if(this.head!==null){
      this.head= new Node(data,this.head);
    }
  }
  pop(){
    if(this.head===null){
      return;
    }else{
      this.head=this.head.next;
      if(this.head===null){
        this.tail=null;
      }
    }
  }
  peek(){
    if(this.head===null){
      return;
    }else{
      return this.head.data;
    }
  }
}


let miki= new Stack();
const balanceExpression= (string)=>{
  let stringArray = string.split("");

  const stack = new Stack();
  let specialCharacters = [["(",")"],["{","}"],["[","]"],["<",">"]];

  function checkSpecialIndex1(element){
    const result = specialCharacters.findIndex(e=> element===e[0]);
    return result
  }
  function checkSpecialIndex2(element){
    const result = specialCharacters.findIndex(e=> element===e[1]);
    return result
  }
  for (let i = 0; i < stringArray.length; i++) {
    let element = stringArray[i];
    if(stack.head===null){
      if(checkSpecialIndex1(element)!==-1){
        stack.push(element);
      }
      if(checkSpecialIndex2(element)!==-1){
        return false;
      }
    }else {
      if(checkSpecialIndex1(element)!==-1){
        stack.push(element)
      }if(checkSpecialIndex2(element)!==-1){
        const opposite = specialCharacters[checkSpecialIndex2(element)][0];
        if(stack.head.data === opposite){
          stack.pop();
        }else{
          return false;
        }
      }
    }
  };

  if (stack.head===null){
    return true;
  }else {
    return false;
  }
}



console.log("now");
console.log(balanceExpression("{(2+1){}"));


miki.push(43);
miki.push(74);
miki.push(93);
// miki.pop();
// miki.pop();
console.log(miki.peek());


console.log(miki);