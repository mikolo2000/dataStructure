function longestSubarray(array,x,y){
  let indexMap = new Map();
  indexMap.set(0,-1);
  let countX = 0;
  let countY = 0;
  let startPoint = -1;
  let endPoint = -1;
  let maxLength = 0;

  for (let i = 0; i < array.length; i++) {
    const e = array[i];
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
    let subArray = array.slice(startPoint,endPoint+1)
  
  if(startPoint===-1){
    return 0;
  }else{
    return  {subArray ,maxLength};
  }
  
}

const nums3 = [1, 2,3,3,3,2];
const x3 = 2, y3 = 3;
console.log(longestSubarray(nums3, x3, y3));