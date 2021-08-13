1;
let obj1 = {
  name: "pritom",
  age: 25,
  company: "Accenture",
  workHours: 9.5,
};

let obj2 = {
  name: "mohit",
  age: 29,
  company: "Accenture",
  workHours: 9.5,
};

objtemp = obj1;
objtemp.age = 45;
console.log(obj1);
console.log(objtemp);

2;

let arr1 = [123, 235, 124, 653];

let arr2 = [123, 235, 124, 653];

arrtemp = arr1;
arrtemp[2] = 145;
console.log(arr1);
console.log(arrtemp);

3; // constants behaviors in object

const objContant = {
  a: 1,
  b: 23,
  c: 90,
};
objContant.a = 4;
console.log(objContant);

// objContant = {
//   d: 23,
//   w: 34,
// }; //TypeError: Assignment to constant variable.
// console.log(arrConstant);

const arrConstant = [12, 23, 45];
arrConstant[1] = 34;
console.log(arrConstant);

// arrConstant = [1, 2, 3]; //TypeError: Assignment to constant variable.
// console.log(arrConstant);

4;

const arr = [23, 34, 56];
console.log(arr["1"]);
console.log(arr[1]);

const obj = {
  1: "asq",
  2: "1df",
  3: "ers",
  d: 34,
  "hey look at me": "??",
};
console.log(obj["1"]);
console.log(obj[1]);
console.log(obj["d"]);
// console.log(obj[d]); //ReferenceError: d is not defined
console.log(obj.d);
// console.log(obj.1); // systax
// console.log(obj.hey look at me);
console.log(obj["hey look at me"]);

5;

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};
// console.log(palette[red]);
console.log(palette["red"]);

let color = "blue";
console.log(palette["red"]);
console.log(palette[color]);
console.log(palette["color"]); // indefined
