class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertLast(data) {
    let current = this.head;
    if (this.head === null) {
      this.head = new Node(data, this.head);
      this.size++;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
      this.size++;
    }
  }
  deleteFirst() {
    if (this.size>0) {
      this.head = this.head.next;
      this.size = this.size - 1;
    }else{
      return;
    }
  }
  deleteLast() {
    let current = this.head;
    if( this.size>1){
      for (let i = 1; i < this.size-1; i++) {
        current=current.next;
      }
      current.next= null;
      this.size= this.size-1
    }else{
      this.deleteFirst();
    }

  }
  indexOf(data){
    let current= this.head;
    let index = 0;
    while(current){
      if(current.data===data){
        return index;
      }
      index++
      current=current.next;
    }
    return -1;
  }
  printListData() {
    let currentData = this.head;
    while (currentData) {
      console.log(currentData.data);
      currentData = currentData.next;
    }
  }
}

const n1 = new Node(100);
const ll1 = new LinkedList();
ll1.insertFirst(200);
ll1.insertFirst(400);
ll1.insertFirst(600);
ll1.insertLast(23);


ll1.indexOf(23);

ll1.printListData();



console.log(ll1.indexOf(23));


console.log(n1);
console.log(ll1);

