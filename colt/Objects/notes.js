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
