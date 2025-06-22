// Задание 1. Функции

function square(num) {
    return num * num;
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  function subtractAndDivide(a, b, c) {
    return (a - b) / c;
  }
  
  function dayOfWeek(n) {
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return days[n - 1] || 'Некорректное значение';
  }
  
  // Задание 2. Флаги
  
  function hasFive(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 5) return 'да';
    }
    return 'нет';
  }
  
  function isPrime(num) {
    if (num <= 1) return 'false';
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return 'true';
    }
    return 'false';
  }
  
  function hasConsecutiveDuplicates(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) return 'да';
    }
    return 'нет';
  }
  
  // Примеры вызовов
  
  console.log('Квадрат 4:', square(4));
  console.log('Сумма 3 и 5:', sum(3, 5));
  console.log('Вычесть 10 - 4 и поделить на 2:', subtractAndDivide(10, 4, 2));
  console.log('День недели (3):', dayOfWeek(3));
  
  console.log('Массив содержит 5:', hasFive([1, 2, 3, 4, 5]));
  console.log('Число 31 делится:', isPrime(31));
  console.log('Есть подряд одинаковые:', hasConsecutiveDuplicates([1, 2, 3, 3, 4]));
  