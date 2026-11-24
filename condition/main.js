// Задача 1

const number = +prompt("Введите число", 0);

if (number % 2 === 0) {
  console.log("Четное число");
} else {
  console.log("Нечетное число");
}

// Задача 2

const age = +prompt("Введите возраст", 0);
const discount_10 = "Скидка 10%";
const discount_20 = "Скидка 20%";
const discount_30 = "Скидка 30%";

const discount = (age < 18) ? discount_10 : (age >= 18 && age <= 65) ? discount_20 : (age > 65) ? discount_30 : "Ошибка";

console.log(discount);

// switch case* (работает только если одинаковый возраст в два окна вводить, иначе у свитч ошибка. итс окей или нет я не знаю зато работает!! аххахва)

switch (true) {
  case (age < 18):
    console.log(discount_10);
    break;
  case (age >= 18 && age <= 65):
    console.log(discount_20);
    break;
  case (age > 65):
    console.log(discount_30);
    break;
  default:
    console.log("Ошибка");
}

// Задача 3

const username = prompt("Введите имя пользователя");
const password = +prompt("Введите пароль");

if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// Задача 4

const weight = +prompt("Введите вес посылки");
const delivery = prompt("Введите тип доставки: Стандарт/Экспресс/Премиум");

const baseCost_5 = 5;
const baseCost_10 = 10;
const baseCost_15 = 15;

if (weight <= 0) {
  console.log("Некорректный вес посылки");
} else {
  const baseCost = (weight < 1) ? baseCost_5 : (weight >= 1 && weight <= 5) ? baseCost_10 : (weight > 5) ? baseCost_15 : "Ошибка заполнения полей ввода";
  let coefficient;
  switch (delivery) {
    case "Стандарт":
      coefficient = 1;
      break;
    case "Экспресс":
      coefficient = 1.5;
      break;
    case "Премиум":
      coefficient = 2;
      break;
      default:
        console.log("Неверный тип доставки");
        coefficient = null;
  }
  if (coefficient !== null) {
  const totalCost = baseCost * coefficient;
  alert (`Итоговая стоимость доставки: ${totalCost}$`);
  }
}

// if (delivery === "Стандарт" || delivery === "Экспресс" || delivery === "Премиум") {
//   console.log(delivery);
// } else {
//   console.log("Неверный тип доставки");
// }

// const coefficientStandard = 1;
// const coefficientExpress = 1.5;
// const coefficientPremium = 2;







// ((delivery === "Стандарт") ? coefficientStandard : (delivery === "Экспресс") ? coefficientExpress : (delivery === "Премиум") ? coefficientPremium : "Ошибка подсчета итоговой стоимости")

