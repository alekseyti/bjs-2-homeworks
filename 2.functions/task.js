function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));


  // let min = Math.min(...arr);
  // let max = Math.max(...arr);
  // let sum = arr.reduce((acc, num) => acc + num, 0);
  // let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }
  
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;   // Сумма чётных элементов
  let countEvenElement = 0; // Количество чётных элементов
  
  // Перебираем все элементы массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент чётный
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];      // Добавляем элемент к сумме
      countEvenElement += 1;         // Увеличиваем счётчик чётных элементов
    }
  }
  
  // Возвращаем среднее значение (сумма делённая на количество)
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {
  // Инициализация переменной для максимального результата
  let maxWorkerResult = -Infinity;

  // Проходим по всем массивам в arrOfArr
  for (let i = 0; i < arrOfArr.length; i++) {
    // Вычисляем результат для каждого массива с помощью функции-насадки
    const result = func(...arrOfArr[i]);

    // Если результат больше текущего максимума, обновляем его
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  // Возвращаем максимальный результат
  return maxWorkerResult;
}
