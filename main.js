let characters = [
    ["Luke Skywalker", 177, "male", 77, "brown",],
    ["Leia Organa", 160, "female", 56, "blue",],
    ["Han Solo", 180, "male", 80, "brown",],
    ["Chewie", 222, "male", 190, "black",],
    ["kevien", 106, "male", 32.2, "red",],
];

let names = characters.map(function (currentValue) {
    return currentValue[0]
});
console.log(names);

let height = characters.map((currentValue) =>
    currentValue[1]
);
console.log(height);

let sumHeight = characters.reduce((sum, currentValue) => sum + currentValue[1], 0);
console.log(sumHeight);

console.log("the names with height less than 200 ", characters.filter((currentValue) => currentValue[1] <= 200));

console.log("the male ", characters.filter((currentValue) => currentValue[2] === "male"));

console.log("sort by mass", characters.sort((a, b) => a[3] - b[3]));

console.log("sort by height", characters.sort((a, b) => a[1] - b[2]));

console.log("does every characters have mass more than 40", characters.every((currentValue) => currentValue[3] > 40));

console.log("does every character shorter than 200?", characters.every((currentValue) => currentValue[1] > 200));

console.log("does there at least one character with blue eyes?", characters.some((currentValue) => currentValue[4] === "blue"));

console.log("does there at least one character taller than 210?", characters.some((currentValue) => currentValue[1] >= 210));
