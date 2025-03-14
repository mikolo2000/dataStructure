class Heap{
  constructor(){
    this.heap = [null];

  }

  add(data){
    this.heap.push(data);
    if(this.heap.length>2){
      let idx= this.heap.length-1;
      let pIdx = Math.floor(idx/2);
      while(this.heap[pIdx]>this.heap[idx]){
          [this.heap[pIdx],this.heap[idx]]=[this.heap[idx], this.heap[pIdx]];
        if(pIdx>1){
          idx = pIdx;
          pIdx = Math.floor(idx/2);
        }else {
          break;
        }
      }
    }
  }
  delete(x){
    const idx = this.heap.indexOf(x);
    if (idx === -1) return;

    [this.heap[idx], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[idx]];
    this.heap.pop();

    let pIdx = idx;

    while (true) {
      let lIdx = 2 * pIdx;
      let rIdx = 2 * pIdx + 1;
      let smallest = pIdx;

      if (lIdx < this.heap.length && this.heap[lIdx] < this.heap[smallest]) {
        smallest = lIdx;
      }
      if (rIdx < this.heap.length && this.heap[rIdx] < this.heap[smallest]) {
        smallest = rIdx;
      }

      if (smallest !== pIdx) {
        [this.heap[pIdx], this.heap[smallest]] = [this.heap[smallest], this.heap[pIdx]];
        pIdx = smallest;
      } else {
        break;
      }
    }
  }
  getMin(){
    return this.heap.length>1 ? this.heap[1] : null;
  }
  removeMin(){
    if(this.heap.length>1){
      if(this.heap.length===2){
        this.heap.splice(1,1);
      }
      if(this.heap.length>2){
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();
        if(this.heap.length===3){
          if(this.heap[1]>this.heap[2]){
            [this.heap[1],this.heap[2]]=[this.heap[2],this.heap[1]];
          }else {
            return;
          }
        }
        let pIdx = 1, lIdx = pIdx*2, rIdx=pIdx*2+1;
        while(this.heap[lIdx]<this.heap[pIdx] || this.heap[rIdx]<this.heap[pIdx]){
          if(this.heap[lIdx]<this.heap[rIdx]){
            [this.heap[pIdx],this.heap[lIdx]] =[this.heap[lIdx],this.heap[pIdx]];
            pIdx=lIdx;
            lIdx=pIdx*2;
            rIdx=pIdx*2+1;
          }
          if(this.heap[lIdx]>this.heap[rIdx]){
            [this.heap[pIdx],this.heap[rIdx]] =[this.heap[rIdx],this.heap[pIdx]];
            pIdx=rIdx;
            lIdx=pIdx*2;
            rIdx=pIdx*2+1;
          }
        }
      }
    }
  }
}


function processData(input) {
  let lines = input.trim().split("\n");
  let numQueries = parseInt(lines[0]);
  let heap = new Heap();
  let result = [];

  for (let i = 1; i <= numQueries; i++) {
    let parts = lines[i].split(" ");
    let type = parts[0];

    if (type === "1") {
      heap.add(parseInt(parts[1]));
    } else if (type === "2") {
      heap.delete(parseInt(parts[1]));
    } else if (type === "3") {
      result.push(heap.getMin());
    }
  }

  console.log(result.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
