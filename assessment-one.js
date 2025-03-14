const solution = (arr = [], x, y) => {
  let indexMap = new Map();
  indexMap.set(0,-1);
  let countX = 0;
  let countY = 0;
  let startPoint = -1;
  let endPoint = -1;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if(e===x) countX++;
    if(e===y) countY++;
    let diff = countX-countY;
    if(indexMap.has(diff)){
      let prevIndex = indexMap.get(diff)
      if(i-prevIndex+1>maxLength){
        startPoint= prevIndex+1
        endPoint=i;
        maxLength=endPoint-startPoint+1;
      }else {
        continue
      }
    }else{
      indexMap.set(diff,i)
    }
  }
    let subArray = arr.slice(startPoint,endPoint+1)
  
  if(startPoint===-1){
    return 0;
  }else{
    return  {subArray ,maxLength};
  }
};

const arr = [1, 2,3,3,3,2];
const arr2 = [4, 5, 4, 6, 4, 5, 5, 4, 5, 6, 5, 4, 6, 1, 2, 7, 5, 4, 5, 4, 6, 4, 5, 4, 5, 5, 6, 5, 7, 8, 9, 5];
console.log(solution(arr, 2, 3));
console.log(solution(arr2, 4, 5));
