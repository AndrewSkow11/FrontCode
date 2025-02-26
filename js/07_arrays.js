let fruits = [
    'яблоко', 
    'апельсин',
    'банан',
    'киви',
    'апельсин',
    'банан',
]

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// метод push() - добавление в конец массива
fruits.push('мандарин');

console.log(fruits);
console.table(fruits);
fruits.push('виноград', 'груша');

console.table(fruits);

// метод pop() удаляет первый элемент массива и возвращает его
let poppedFruit = fruits.pop();
console.log(`Удалено: ${poppedFruit}`);
console.table(fruits);

// метод slice(start, end) - срез массива, end не включается
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
console.table(fruits);

console.table(fruits.slice(6)); // если не указан end - возвращается до конца

// исходный массив не меняется - создаётся новый массив