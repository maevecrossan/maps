// EXECUTES A FUNCTION ON ALL ELEMENTS.
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

// maps challenge

let students1 = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];


let [john, ...rest] = students1.map( students1 => [students1.name, students1.results]);

console.log(john);
console.log(rest);