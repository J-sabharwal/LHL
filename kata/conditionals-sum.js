const conditionalSum = function(values, condition) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
   let evenArr = 0;
   let oddArr = 0;
  
  if (condition === 'even') {
    for (i = 0; i < values.length; i++){
      if (i % 2 === 0) {
       evenArr += i;
       console.log(evenArr)
      }
    }  
  } else if (condition === "odd"){
    for (i = 0; i < values.length; i++){
      if (i % 2 !== 0) {
       oddArr += i;
       console.log(oddArr);
      }
    }
  } else {
      for (i = 0; i < values.length; i++){
       return i;
      }
  }
 

console.log(conditionalSum([1, 2, 3, 4, 5], "even"))
