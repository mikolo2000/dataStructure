var MyCircularQueue = function(k) {
  this.array = new Array(k).fill(null);
  this.count = 0;
  this.endPosition =0;
  this.headPosition = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.count===this.array.length){
    return false;
  }
  if (this.count<this.array.length){
    if(this.count===0){
      this.array[0]=value;
      this.headPosition=1
      this.endPosition=1
      this.count++
    }else{
    if(this.endPosition===this.array.length){
      this.endPosition=0;
      this.array[this.endPosition]=value;
      this.endPosition++
      this.count++
    }else{
      this.array[this.endPosition]=value;
      this.count++
      this.endPosition++
    }
  }
    
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.count === 0){
      return false;
    }
    if(this.count>0 ){
      if(this.headPosition<this.array.length){
      this.array[this.headPosition-1]=null;
      this.headPosition++
      this.count--
      return true;
      }
      if(this.headPosition===this.array.length){
        this.array[this.headPosition-1]=null;
        this.headPosition=1
        this.count--
        return true;
      }
    }

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.count===0){
      return -1;
    }else{
      return this.array[this.headPosition-1];
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.count===0){
      return -1;
    }else{
      return this.array[this.endPosition-1]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.count===0){
      return true;
    }else{
      return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.count===this.array.length){
      return true;
    }else {
      return false;
    }
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */