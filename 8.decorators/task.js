//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = args.join(','); // создаём хэш от аргументов
    let objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      return `Из кеша: ${objectInCache.value}`;
    }

    const result = func(...args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift(); // удаляем первый элемент
    }

    return `Вычисляем: ${result}`;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  
  function wrapper(...args) {
    wrapper.allCount++; // увеличиваем общее число вызовов
    if (!timeoutId) {
      func.apply(this, args);
      wrapper.count++; // только когда функция реально вызывается
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, delay);
  }

  // обязательные свойства на возвращаемую функцию
  wrapper.count = 0;     // количество реальных вызовов func
  wrapper.allCount = 0;  // количество вызовов обёртки wrapper

  return wrapper;
}
