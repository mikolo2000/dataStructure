class MinHeap {
  constructor() {
      this.heap = [];
  }

  size() {
      return this.heap.length;
  }

  peek() {
      return this.heap[0];
  }

  push(item) {
      this.heap.push(item);
      this.bubbleUp();
  }

  pop() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
  }

  bubbleUp() {
      let idx = this.size() - 1;
      while (idx > 0) {
          let pIdx = Math.floor((idx - 1) / 2);
          if (this.compare(this.heap[pIdx], this.heap[idx]) <= 0) break;
          [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
          idx = pIdx;
      }
  }

  bubbleDown() {
      let idx = 0;
      const length = this.size();
      while (true) {
          let leftIndex = 2 * idx + 1;
          let rightIndex = 2 * idx + 2;
          let smallest = idx;

          if (leftIndex < length && this.compare(this.heap[leftIndex], this.heap[smallest]) < 0) {
              smallest = leftIndex;
          }
          if (rightIndex < length && this.compare(this.heap[rightIndex], this.heap[smallest]) < 0) {
              smallest = rightIndex;
          }
          if (smallest === idx) break;
          [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
          idx = smallest;
      }
  }

  compare(a, b) {
      if (a.freq === b.freq) {
          return b.word.localeCompare(a.word); 
      }
      return a.freq - b.freq;
  }
}

var topKFrequent = function(words, k) {
  let wordCount = new Map();
  for (let word of words) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }
  let heap = new MinHeap();
  for (let [word, freq] of wordCount) {
      heap.push({ word, freq });
      if (heap.size() > k) heap.pop(); 
  }

  let result = [];
  while (heap.size()) {
      result.push(heap.pop().word);
  }
  return result.reverse();
};

