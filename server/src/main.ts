let number: number = 10; // типизация (числа целые и с остачей)
let text: string = "Hello, world"; // типизация (текстовые строки)
let my_status: boolean = true; // типизация (булиан)

interface IObject {
  name: string;
  last_name: string;
  age: number;
}

let date = new Date()

let obj: IObject = { name: "Denys", last_name: "OK", age: 10 }; // типизация объектов
// обычная функция
function myFunc(x: number, text: string): void {
  console.log(`${x} ${text}`);
}
// стрелочная функция
const newFunc = (x: number, text: undefined) => {};

setTimeout(() => {
  myFunc(10, "ok");
}, 2000);
