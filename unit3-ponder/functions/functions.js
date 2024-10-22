function getGrades(inputSelector) {
    const gradesString = document.getElementById(inputSelector).value;
    return gradesString.split(',').map((letterGrade) => letterGrade.trim(', ').toUpperCase());
}

function lookupGrade(grade) {
    const letterGrades = {'A' : 4, 'B' : 3, 'C' : 2, 'D' : 1, 'F' : 0}
    return letterGrades[grade]
}

function calculateGpa(grades) {
    return grades.reduce((acc, letter) => acc + lookupGrade(letter), 0) / grades.length;
}

function outputGpa(gpa, selector) {
    document.getElementById(selector).innerText = gpa;
}

function clickHandler() {
    const letterGrades = getGrades('grades');
    const gpa = calculateGpa(letterGrades);
    outputGpa(gpa, 'output');
}

const button = document.getElementById('submitButton');
button.addEventListener('click', clickHandler);