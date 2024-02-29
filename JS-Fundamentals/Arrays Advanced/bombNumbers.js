function bombNumbers(arr1, arr2) {

   let bomb = arr2[0];
   let power = arr2[1];
   let sum = 0;

   while(arr1.includes(bomb)) {
    let idx = arr1.indexOf(bomb);
    arr1.splice(Math.max(0, idx - power), Math.min(arr1.length -1, 2  * power) + 1);
   }

   for(let num of arr1) {
    sum += num;
   }

   console.log(sum);

}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
