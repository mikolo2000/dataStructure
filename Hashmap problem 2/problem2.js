function check(array,k){
  let count = 0;
 array.forEach(element => {
   let filtered = array.filter((num)=>(num!==element));
    filtered.forEach(value=>{
      if (value-element===k){
        count++;
      }
    })
 });
 return count;
}


console.log(check([1, 7, 5, 9, 2, 12, 3],2));