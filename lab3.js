//------------------------------------------lab 3 ---------------------------------------

let students = ["Ali", "Sara", "ahmed", "Lana", "Omar", "Noor"]

console.log("The students that start with A or a ", students.filter((currentValue) => currentValue[0] === "A" || currentValue[0] === "a"));

console.log("The students with more than 4 letters ", students.filter((currentValue) => currentValue.length > 4));

let studentsUP = students.map(((currentValue) => currentValue.toUpperCase()))

console.log("The list with uppercase ", studentsUP);

console.log("The first student with 'r' in their name ", students.find((currentValue) => currentValue.includes('r')));

console.log("The student sorted", students.sort());

console.log("Does the list have omar", students.includes("Omar"));

let characters = students.reduce((sum, currentValue) => sum + currentValue.length, 0);
console.log("The number of characters is", characters);

console.log("The students with even number of latters ", students.filter((currentValue) => currentValue.length % 2 === 0));

let Srevers = students.map(((currentValue) => currentValue.split('').reverse().join('')))
console.log("The list with reverse ", Srevers);

console.log("The students that dont have O ", students.filter((currentValue) => !(currentValue.includes("o") || currentValue.includes("O"))));

let studentGrade = [["Ali", [85, 90, 90]], ["Sara", [85, 29, 78]], ["ahmed", [85, 90, 78]], ["Lana", [85, 90, 78]], ["Omar", [85, 81, 78]], ["Noor", [85, 77, 78]]]

let studentsAve = studentGrade.map(([name, grade]) => {
    let ave = grade.reduce((sum, currentValue) => sum + currentValue, 0) / grade.length
    return [name, ave.toFixed(2)]
})

console.log(studentsAve);


console.log("The students above 80 ", studentsAve.filter((currentValue) => currentValue[1] >= 80));
