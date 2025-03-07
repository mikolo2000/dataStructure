class Node {
  constructor(data, left=null, right=null){
    this.data= data;
    this.left= left;
    this.right= right;
  }
}

class Tree{
  constructor(){
    this.root=null;
  }

  validate(data){
    if(!Number.isInteger(data)){
      throw new TypeError("data must be an integer")
    }
  }
  searching(tree,data){
    if(data<tree.data){
      if(tree.left===null){
        tree.left= new Node(data);
      }else{
        this.searching(tree.left,data)
      }
    }else if(data>tree.data){
      if(tree.right===null){
        tree.right= new Node(data)
      }else{
        this.searching(tree.right,data);
      }
    }else{
      return;
    }
  }
  add(data){
    this.validate(data);
    if(this.root===null){
      this.root=new Node(data);
      return;
    }else{
      this.searching(this.root,data)
    }
  }
  findMin(){
    let current = this.root;
    while(current.left!==null){
      current = current.left;
    }
    
    
    return current.data;
  }
  findMax(){
    let current = this.root;
    while(current.right!==null){
      current= current.right;
    }
    
    return current.data;
  }
  isPresent(data){
    let current = this.root;
    while(current){
      if(data===current.data){
        return true;
      }
      if(data< current.data){
        current=current.left
      }else{
        current = current.right;
      }
    }
    return false;
  }
  
}

const miki = new Tree();
miki.add(50);
miki.add(23);
miki.add(58);
miki.add(32);
miki.add(76);
miki.add(53);
miki.add(23);
console.log(miki.findMin());
console.log(miki.findMax());
console.log(miki.isPresent(58))
console.log(miki);
