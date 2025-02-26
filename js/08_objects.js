// объект - контейнеры, который могут хранить моножество значений
// которые могут хранить множество значений в виде пар ключ-значние
// они помогают ораганизовать данные и добавлять к ним функции (методы)

let user = {
  name: "Петя",
  age: 25,
  isStudent: true,
  // внутри метода имеется ключевое слово this, которое используется
  // чтобы обратиться к другим свойтсвам объета
  greet: function () {
    console.log("Привет, меня зовут " + this.name + "!");
  },
};

console.log(user);
console.table(user);
console.log(user.name);
console.log(user.age);
console.log(user.isStudent);
user.greet();

// к свойствам объекта можно обращаться также и через квадратные скобки
// не только через точку
console.log(user["name"]);
console.log(user["age"]);
console.log(user["isStudent"]);

user.age = 30;
console.log(user.age);
user.hasPermission = true;
// можно добавлять новое свойство к объекту
console.table(user);