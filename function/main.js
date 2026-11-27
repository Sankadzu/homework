// Задача 1

function calculateFinalPrice(price, discount, coefficient) {
  const discountSum = price / discount;
  const finalPriceDiscount = price - discountSum;
  const priceOfCoefficient = finalPriceDiscount * coefficient;
  const finalPrice = finalPriceDiscount + priceOfCoefficient;
  console.log(finalPrice);
  
}

calculateFinalPrice(100,10,0.2);
calculateFinalPrice(100,10,0);

// Задача 2

const logInUser = prompt("Введите имя");
const logInPassword = prompt("Введите пароль");

function checkAccess(userName, password) {
  const logIn = userName + password;
  if (logIn === logInUser + logInPassword) {
    console.log("Доступ разрешен");
  } else {
    console.log("Доступ запрещен");
  }
}

checkAccess("admin","123456");

// Задача 3

function getTimeOfDay(time) {
  const day = time <= 5 ? "Ночь" : time <= 11 ? "Утро" : time <= 17 ? "День" : time <= 23 ? "Вечер" : "Некорректное время";
  console.log(day);
}

getTimeOfDay(prompt("Введите время"));

// Задача 4

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0 && start === end) {
      console.log("Четных чисел нет");
    } else if (i % 2 === 0) {
      console.log(i);
      break;
    }
  }
}

findFirstEven(1,10);
findFirstEven(9,9);
findFirstEven(10,10);