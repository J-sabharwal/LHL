let numberOfVowels = function(data) {
  let sum = 0;

  for (let i = 0; i <= data.length; i++){
    switch (data[i]) {
      case 'e':
      case 'a':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        sum++;
        break;
    }
  }
 return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/* Alternative code

let numberOfVowels = function(data) {
  let sum = 0;

  for (let i = 0; i <= data.length; i++){
    if ((data[i] === "a") || (data[i] === "e") || (data[i] === "i") || (data[i] === "o") || (data[i] === "u")){
      sum++;
    }
  }
 return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

*/
