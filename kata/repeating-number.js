let repeatNumbers = function(data) {
  let arrRep = [];

  for (i = 0; i < data.length; i++) {
    let elem1 = data[i][0];
    let elem2 = data[i][1];
    let arrString = "";

    for(j = 0; j < elem2; j++) {
      arrString += elem1;
    };
    arrRep.push(arrString);
  };
  return arrRep.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
