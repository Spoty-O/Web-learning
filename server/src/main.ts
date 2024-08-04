let number: number = 10; // типизация (числа целые и с остачей)
let text: string = "Hello, world"; // типизация (текстовые строки)
let my_status: boolean = true; // типизация (булиан)

interface IObject {
  name: string;
  last_name: string;
  age: number;
}

let obj: IObject = { name: "Denys", last_name: "OK", age: 10 }; // типизация объектов

let date = new Date();

// обычная функция
function myFunc(x: number, text: string): void {
  console.log(`${x} ${text}`);
  return;
}
// стрелочная функция
const newFunc = (x: number, text: undefined): void => {};

setTimeout(() => {
  myFunc(10, "ok");
}, 2000);

