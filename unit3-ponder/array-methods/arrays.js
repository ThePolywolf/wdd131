const steps = ["one", "two", "three"];
const listTemplate = function(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');


const letters = ['A', 'B', 'A'];
const gpaFromLetter = function(letter) {
    const letterGrades = {'A': 4, 'B' : 3, 'C': 2, 'D': 1, 'F': 0}
    return letterGrades[letter];
}
const gradesHtml = letters.map(gpaFromLetter).map(listTemplate);
document.querySelector('#gradeList').innerHTML = gradesHtml.join('');

const gpa = letters.map(gpaFromLetter).reduce((acc, grade) => acc + grade, 0) / letters.length;
console.log(gpa);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const validFruit = function(fruit) {
    return fruit.length > 6;
}
const validFruits = fruits.filter(validFruit);
console.log(validFruits);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
console.log(numbers.indexOf(luckyNumber));