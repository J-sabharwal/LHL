const urlEncode = function(text) {

  let string = "";
  const encode = "%20";
  let trimText = text.trim();

  for (i = 0; i < trimText.length; i++) {
    if (trimText[i] === " ") {
      string += encode;
    } else {
      string += trimText[i];
    };
  };
 return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
