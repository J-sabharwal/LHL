const instructorWithLongestName = function(instructors) {

 let instruct = 0;
 let longest;

  for (var x in instructors) {
    if (instructors[x].name.length > instruct) {
      instruct = instructors[x].name.length;
      longest = instructors[x];
    };
  };
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


