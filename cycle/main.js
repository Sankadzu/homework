// Задача 1
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// Задача 2
const num = +prompt("Введите число");
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(factorial);

// Задача 3

let board = "";

for (let i = 1; i <= 8; i++) {
  let row = "";
  if (i % 2 !== 0) {
    for (let j = 1; j <= 8; j++) {
    if (j % 2 === 0) {
      row += "Б ";
      continue;
    }
    row += "Ч ";
    }
  } else {
    for (let j = 1; j <= 8; j++) {
    if (j % 2 === 0) {
      row += "Ч ";
      continue;
    }
    row += "Б ";
    }
  }
  console.log(row);
}

