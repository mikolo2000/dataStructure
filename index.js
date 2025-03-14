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
function contigiousArray(array,x,y){
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(typeof(element)!=="number"){
      throw new TypeError("array must be numbers");
    }
  }
  const checkX=array.findIndex((e)=>(e===x))
  const checkY= array.findIndex((e)=>(e===y))
  if (checkX===-1||checkY===-1){
    throw new Error("x and y must be in array");
  }

  const xArray = [];
  const yArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if(element===x){
      xArray.push(element);
    }
    if(element===y){
      yArray.push(element);
    }
  }
  if(xArray.length<=yArray.length){
    return xArray.length*2;
  }else if(xArray.length>yArray.length){
    return yArray.length*2;
  }
}

console.log(contigiousArray([1,2,3,2,3,1,3,2,1],2,3));
