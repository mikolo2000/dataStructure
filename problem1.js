class Node {
  constructor(data,next=null){
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(){
    this.head = this.tail = null;
    
  }

  add(data){
    let node = new Node(data);
    if (this.head== null){
      this.head = node;
      this.tail = node;
    }
    if (this.head !== null){
      this.tail.next = node;
      this.tail= node
    }
  }
  remove(){
    if(this.head!==null){
      this.head=this.head.next;

    }
    if(this.head===null){
      this.tail=null;
      return;
    }
  }
  peek(){
    if(this.head===null)
      return;
    return this.head.data;
  }
}


let miki = new Queue();

miki.add(23);
miki.add(15);
miki.add(39);
miki.remove();
// miki.remove();
// miki.remove();

console.log(miki.peek());

console.log(miki);
