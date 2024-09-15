  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */


// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
const multByTwo = function (num) {
  return num * 2
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function(num) {return num *2});
console.log(simplified);


// Simplfied w/ map() + arrow function
const arrow = nums.map( num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map( students => [students.name, students.id]);
console.log(studentsWithIds);

// Log with propertyh names. Changes format.
const rewriteProperties = students.map(student => ({
  name: student.name,
  id: student.id
}));
console.log(rewriteProperties); 

// Add ages to students.
const addAges = students.map( students => {
  let age;
    // Assign specific ages based on student id or name (or any other criteria)
  if (students.id === 1){
    age = 25;
  } else if (students.id === 2) {
    age = 26;
  } else if (students.id === 3) {
    age = 25;
  }

  return {
    ...students, //Spread OG properties
    age // Add specific age
  };
});
console.log(addAges);