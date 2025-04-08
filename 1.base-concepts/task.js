"use strict";

function solveEquation(a, b, c) {

  const roots = [];

  // Проверяем, что входные данные являются числами
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return roots;
  }

  const d = Math.pow(b, 2) - 4 * a * c; // Вычисляем дискриминант



  if (Number.isNaN(d)) {
    return roots;
  }

  // Если дискриминант равен 0, то один корень
  if (d === 0) {
    const x = -b / (2 * a);
    roots.push(x);
  } 
  // Если дискриминант больше 0, то два корня
  else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    roots.push(x1, x2);
  }

  // Если корней нет, возвращаем пустой массив
  return roots;
}

// Пример использования:
console.log(solveEquation(1, -3, 2));  // [2, 1]
console.log(solveEquation(1, 2, 1));   // [-1]
console.log(solveEquation(1, 0, 1));   // []


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = (percent / 100) / 12; // месячная процентная ставка
  const creditBody = amount - contribution;   // тело кредита

  if (creditBody <= 0) {
    return 0;
  }

  // Расчёт ежемесячного платежа по формуле
  const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  // Общая сумма выплат
  const totalPayment = monthlyPayment * countMonths;

  // Округляем до двух знаков после запятой и возвращаем число
  return Number(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));    // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));    // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));    // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));    // 12479.52
