
class HashTable{
  constructor(size){
    if(!Number.isInteger(size)){
      throw new TypeError("Size must be an Integer");
    }
    this.size = size;
    this.bucket = new Array(size);
    for(let i = 0; i <size; i++){
      this.bucket[i]= new LinkedList();
    }

  }

  hash(key){
    let hash =0;
  for (let i = 0; i < key.length; i++) {
    hash= hash+ key.charCodeAt(i);
  }
  return hash % this.size;
  }

  put(key, value){
    let index = this.hash(key);
    const array = this.bucket[index].makeArray();
    const existed = array.find(e=> e.key===key);
    const linkedListIndex = this.bucket[index].indexOf(existed);
    let current= this.bucket[index]
    
    if(existed){
      for (let i = 0; i < linkedListIndex; i++) {
        current=current.next;
      }
      let copied = current.next;
      current = new Node({key,value}, copied); 
    }else{
      this.bucket[index].insertLast({key, value});
    }
    
  }
  get(key){
    let index = this.hash(key);
    const indexArray = this.bucket[index].makeArray();
    const result = indexArray.find((item)=>(item && item.key===key));
    if(result){
      return result;
    }else{
      return;
    }
  }
  remove(key){
    const details = this.get(key);
    const index = this.hash(key);
    const linkedListIndex = this.bucket[index].indexOf(details);
    this.bucket[index].deleteIndex(linkedListIndex);
    return;
  }
}

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
  insertAtIndex(data, index) {
    if (index >= this.size || index < 0 || typeof index !== "number") {
      return;
    } else if (index === 0) {
      return this.insertFirst(data);
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let copiedData = current.next;
      current.next = new Node(data, copiedData);
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
  deleteIndex(index) {
    if (index >= this.size || index < 0 || typeof index !== "number") {
      return;
    } else if(index===0){
      this.deleteFirst(index)
    }else{
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let copied = current.next;
      current.next = copied.next;
      this.size = this.size - 1;
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
  kthNOdeFromTheEnd(k){
  if (k <= this.size && k>0) {
    let a = this.head;
    let b = this.head;
    for (let i = 0; i < k-1; i++) {
      a=a.next;        
    }
    while(a){
      a=a.next;
      b=b.next;
    }
    return a.data;
  }else {
    return;
  }
  }
  reverse(){
    const array = this.makeArray();
    this.head = null;
    this.size = 0;
    array.forEach(element=>{
      this.insertFirst(element);
    })
  }
  printListData() {
    let currentData = this.head;
    while (currentData) {
      console.log(currentData.data);
      currentData = currentData.next;
    }
  }
  makeArray(){
    let array = [];
    let current = this.head;
    while(current){
      array.push(current.data);
      current=current.next;
    }
    return array;
  }

}
const miki = new HashTable(1);
miki.put(250,"Ogala");


miki.put(250,"michael")
console.log(miki.get(250));
// miki.remove(250);
console.log(miki);



;

