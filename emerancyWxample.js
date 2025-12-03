


// 1) doubleValues - מכפיל כל מספר במערך
function doubleValues(arr) {
  return arr.map(num => num * 2);
}

// 2) onlyEvenValues - מחזיר רק ערכים זוגיים
function onlyEvenValues(arr) {
  let result = [];
  arr.forEach(num => {
    if (num % 2 === 0) result.push(num);
  });
  return result;
}

// 3) showFirstAndLast - מחזיר רק את האיבר הראשון והאחרון אם הם מחרוזות
function showFirstAndLast(arr) {
  let result = [];
  if (typeof arr[0] === "string") result.push(arr[0]);
  if (typeof arr[arr.length - 1] === "string") result.push(arr[arr.length - 1]);
  return result;
}

// 4) vowelCount - סופר תנועות במילה ומחזיר אובייקט ספירה
function vowelCount(str) {
  let vowels = "aeiou";
  let count = {};

  str.toLowerCase().split("").forEach(char => {
    if (vowels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  });

  return count;
}

// 5) capitalize - מחזיר טקסט באותיות גדולות
function capitalize(str) {
  return str.toUpperCase();
}

// 6) shiftLetters - מזיז כל אות באלפבית צעד אחורה
function shiftLetters(str) {
  return str
    .split("")
    .map(char => {
      if (/[a-zA-Z]/.test(char)) {
        let code = char.charCodeAt(0);
        return String.fromCharCode(code - 1);
      }
      return char;
    })
    .join("");
}

// 7) swapCase - כל מילה שנייה באותיות גדולות
function swapCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index % 2 === 0 ? word : word.toUpperCase()
    )
    .join(" ");
}








//////////////////////////////////////////////


const data = [ 
  { 
    name: "John", 
    birthday: "1-1-1995", 
    favoriteFoods: { 
      meats: ["hamburgers", "sausages"], 
      fish: ["salmon", "pike"], 
    }, 
  }, 
  { 
    name: "Mark", 
    birthday: "10-5-1980", 
    favoriteFoods: { 
      meats: ["hamburgers", "steak", "lamb"], 
      fish: ["tuna", "salmon", "barracuda"], 
    }, 
  }, 
  { 
    name: "Mary", 
    birthday: "1-10-1977", 
    favoriteFoods: { 
      meats: ["cow", "chicken"], 
      fish: ["pike"], 
    },
  }, 
  { 
    name: "Thomas", 
    birthday: "1-10-1990", 
    favoriteFoods: { 
      meats: ["bird", "rooster"], 
      fish: ["salmon"], 
    }, 
  }, 
  { 
    name: "Mary", 
    birthday: "1-10-1977", 
    favoriteFoods: { 
      meats: ["hamburgers", "lamb"], 
      fish: ["bass", "tuna"], 
    }, 
  }, 
];

// 1) פונקציה שמחזירה את כל השמות
function getAllNames(arr) {
  // map יוצרת מערך חדש על ידי המרה של כל איבר במערך המקורי
  // כאן אנחנו מחלצים רק את ה-name של כל אדם
  return arr.map(person => person.name);
}

// 2) פונקציה שמחזירה אנשים שנולדו לפני 1990
function bornBefore1990(arr) {
  return arr.filter(person => {
    // חותכים את תאריך הלידה לפי "-"
    const year = parseInt(person.birthday.split("-")[2]);
    // מחזירים רק אם השנה קטנה מ-1990
    return year < 1990;
  });
}

// 3) פונקציה שמחזירה אובייקט עם ספירת כל המזונות
function countAllFoods(arr) {
  const foodCount = {}; // אובייקט ריק לאחסון ספירת המזונות

  arr.forEach(person => {
    // שולפים את המוצרים האהובים למתאים שלהם
    const { meats, fish } = person.favoriteFoods;
    // מאחדים את כל הבשרים והדגים למערך אחד
    [...meats, ...fish].forEach(food => {
      // אם המזון כבר קיים במפה, מגדילים ב-1, אחרת מגדירים ל-1
      foodCount[food] = (foodCount[food] || 0) + 1;
    });
  });

  return foodCount;
}

// --- דוגמאות שימוש ---
console.log(getAllNames(data)); 
// ["John", "Mark", "Mary", "Thomas", "Mary"]

console.log(bornBefore1990(data));
/* מחזיר את כל האנשים שנולדו לפני 1990:
[
  { name: 'Mark', birthday: '10-5-1980', ... },
  { name: 'Mary', birthday: '1-10-1977', ... },
  { name: 'Mary', birthday: '1-10-1977', ... }
]
*/

console.log(countAllFoods(data));
/* מחזיר את כל המזונות עם מספר הפעמים שהם מופיעים:
{
  hamburgers: 3,
  sausages: 1,
  salmon: 3,
  pike: 2,
  steak: 1,
  lamb: 2,
  tuna: 2,
  barracuda: 1,
  cow: 1,
  chicken: 1,
  bird: 1,
  rooster: 1,
  bass: 1
}
*/


//////////////////////////


// 1.1 Function that prints a greeting
function sayHello() {
  console.log("Hello from the function");
}
sayHello(); // קריאה לפונקציה

// 1.2 Function that prints numbers 1–3
function printOneToThree() {
  for (let i = 1; i <= 3; i++) {
    console.log(i);
  }
}
printOneToThree();

// 1.3 Function that prints an array length
function printLength() {
  const names = ["Dana", "Noa", "Yossi", "Ali"];
  console.log(names.length);
}
printLength();

// 1.4 Function that prints a fixed object
function printStudent() {
  const student = { name: "Dana", age: 16 };
  console.log(student.name, student.age);
}
printStudent();

// 1.5 Function that prints even numbers up to 10
function printEvensToTen() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvensToTen();

// 1.6 Function with return: sum of 2 numbers
function sumTwoNumbers() {
  const a = 5;
  const b = 7;
  return a + b;
}
const result = sumTwoNumbers();
console.log("The sum is:", result);

// 1.7 Function with return: total array length
function getNamesLength() {
  const names = ["Dana", "Noa", "Yossi", "Ali"];
  return names.length;
}
const len = getNamesLength();
if (len >= 4) console.log("Big class");
else console.log("Small class");

// 1.8 Function with return: is passing grade
function getGrade() {
  const grade = 72;
  return grade;
}
const studentGrade = getGrade();
console.log(studentGrade >= 60 ? "Passed" : "Failed");

// 1.9 Function with return: product of 3 fixed numbers
function getProduct() {
  const x = 2, y = 3, z = 4;
  return x * y * z;
}
const prod = getProduct();
console.log("Product is:", prod);

// 1.10 Function with return: total price with fixed discount
function calculateFinalPrice() {
  const price = 200, discount = 20;
  return price - discount;
}
const finalPrice = calculateFinalPrice();
console.log("Final price:", finalPrice);
//////////////////////////////////////////////////////////////
// 2.1 Parameter used inside
function printScore(score) {
  console.log("Score is:", score);
}
let score = 80;
printScore(score); // הפלט הוא הפרמטר של הפונקציה, לא המשתנה החיצוני

// 2.2 Parameter vs outer variable
let grade = 50;
function increaseGrade(grade) {
  grade += 10;
  console.log("Inside function:", grade);
}
increaseGrade(grade); // inside: 60
console.log("Outside function:", grade); // outside stays 50

// 2.3 Modify outer variable inside function
let counter = 0;
function incrementCounter() {
  counter++;
  console.log(counter);
}
incrementCounter(); // 1
incrementCounter(); // 2
incrementCounter(); // 3
console.log("Final counter:", counter); // 3

// 2.4 Parameter shadows outer variable
let name = "Outer";
function printName(name) {
  console.log(name); // inner parameter
}
printName("Inner"); // Inner
console.log(name); // Outer

// 2.5 Local variable only inside function
function createSecret() {
  let secret = 1234;
  console.log(secret);
}
createSecret(); // 1234
// console.log(secret); // Error: not accessible

// 2.6 Function with 2 params
function sum(a, b) {
  return a + b;
}
let a = 100;
console.log(sum(5,7)); // 12, outer a לא משפיע

// 2.7 Object parameter, modify inside
function modifyStudent(student) {
  student.grade = 100;
  console.log(student);
}
let student = { grade: 70 };
modifyStudent(student); // outer object גם משתנה
console.log(student.grade); // 100

// 2.8 Array parameter
function sumArray(numbers) {
  const sum = numbers.reduce((acc,val)=>acc+val,0);
  console.log(sum);
}
let numbers = [1,2,3,4];
sumArray(numbers); // 10
console.log(numbers); // [1,2,3,4] - לא השתנה

// 2.9 Parameter with default thinking
function printMessage(message = "No message") {
  console.log(message);
}
printMessage("Hi"); // Hi
printMessage(); // No message

// 2.10 Outer vs inner with const
const baseScore = 50;
function addBonus(baseScore) {
  console.log(baseScore + 20);
}
addBonus(baseScore); // 70
console.log(baseScore); // 50
//////////////////////////////////////////////////
// 3.1
const sayHi = () => console.log("Hi from arrow function");
sayHi();

// 3.2
const doubleNumber = n => n*2;
console.log(doubleNumber(5)); // 10

// 3.3
const sumThree = (a,b,c) => a+b+c;
console.log(sumThree(1,2,3)); // 6

// 3.4
const getFirstElement = arr => arr[0];
console.log(getFirstElement(["a","b","c"])); // "a"

// 3.5
const isAdult = age => age >= 18;
console.log(isAdult(16), isAdult(20)); // false true

// 3.6
const square = n => n*n;
for(let i=1;i<=3;i++) console.log(square(i)); // 1,4,9

// 3.7
const getLength = str => str.length;
console.log(getLength("hello")); // 5

// 3.8
const toUpperArray = arr => arr.map(s => s.toUpperCase());
console.log(toUpperArray(["a","b","c"])); // ["A","B","C"]

// 3.9
const sumArray = arr => arr.reduce((acc,val)=>acc+val,0);
console.log(sumArray([10,20,30])); // 60

// 3.10
const createStudent = (name,age) => ({ name, age });
console.log(createStudent("Dana",16)); // {name: "Dana", age:16}
///////////////////////////////////////////////////////////////////////
// Data
const grades = [70,85,90,55,100];
const settings = { passGrade: 60, excellentGrade: 90 };

// a) calculate average
function calculateAverage(gradesArray) {
  const sum = gradesArray.reduce((acc,val)=>acc+val,0);
  return sum / gradesArray.length;
}

// b) count passed
function countPassed(gradesArray, passGrade) {
  return gradesArray.filter(g => g >= passGrade).length;
}

// c) get excellent grades
function getExcellentGrades(gradesArray, excellentGrade) {
  return gradesArray.filter(g => g >= excellentGrade);
}

// d) print report
function printReport(gradesArray, settings) {
  const avg = calculateAverage(gradesArray);
  const passed = countPassed(gradesArray, settings.passGrade);
  const excellent = getExcellentGrades(gradesArray, settings.excellentGrade);
  
  console.log("Average:", avg);
  console.log("Passed:", passed, "students");
  console.log("Excellent grades:", excellent);
  
  if (avg > 85) console.log("Great class!");
}

// Run the report
printReport(grades, settings);

































// ---------- Exercise 1 ----------
function extractNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    return arr.filter(n => typeof n === "number" && !isNaN(n));
}

// ---------- Exercise 2 ----------
function sumNumbersSafe(arr) {
    try {
        const nums = extractNumbers(arr);
        return nums.reduce((sum, n) => sum + n, 0);
    } catch (err) {
        console.warn("Warning:", err.message);
        return 0;
    }
}

// ---------- Exercise 3 ----------
function filterLargeSums(arrList, minTotal) {
    return arrList.filter(subArr => {
        const sum = sumNumbersSafe(subArr);
        return sum >= minTotal;
    });
}

// ---------- Exercise 4 ----------
function summaryStats(arrList) {
    const validGroups = filterLargeSums(arrList, 10);

    return validGroups.map(group => {
        const sum = sumNumbersSafe(group);
        const avg = sum / extractNumbers(group).length;
        return { sum, average: avg };
    });
}

// ---------- Exercise 5 ----------
function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new Error("Operands must be same type");
    }

    switch (operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": return b !== 0 ? a / b : Infinity;
        default: throw new Error("Unknown operation");
    }
}

/////////////////


// -------- Exercise 1 --------
function createGreeterFactory() {
    return function(greeting) {
        return function() {
            console.log(greeting);
        }
    }
}

// -------- Exercise 2 --------
function invoiceFactory(startNumber) {
    let current = startNumber;
    return function() {
        current++;
        return current;
    };
}

// -------- Exercise 3 --------
function productFactory(category) {
    let id = 0;
    return function(name, price) {
        id++;
        return {
            id,
            name,
            price,
            category
        };
    }
}

// -------- Exercise 4 --------
function createSession(username) {
    let token = Math.random().toString(36).slice(2, 18);

    function regenerateToken() {
        token = Math.random().toString(36).slice(2, 18);
    }

    return {
        getUsername() {
            return username;
        },
        getTokenPreview() {
            return token.slice(0, 4);
        },
        validateToken(t) {
            return t === token;
        },
        regenerateToken
    };
}

///////////////////////////////

// -------- Exercise 1 --------
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// -------- Exercise 2 --------
function createGreeter(name) {
    return function() {
        console.log(`Hello ${name}!`);
    };
}

// -------- Exercise 3 --------
function createBankAccount(startingBalance) {
    let balance = startingBalance;

    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount <= balance) balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };
}

// -------- Exercise 4 --------
function createCountdown(start) {
    let num = start;
    return function() {
        if (num === 0) return "Done!";
        return num--;
    };
}

// -------- Exercise 5 --------
function spellFactory(spellName) {
    let level = 0;
    return function() {
        level++;
        console.log(`${spellName} - Level ${level}`);
    };
}


/////////////////////////////////////////////

// 1. math.js
module.exports = {
    add: (a,b)=>a+b,
    sub: (a,b)=>a-b
};

// app.js
const math = require("./math");
console.log(math.add(5,3));
console.log(math.sub(10,4));

// 2. greetings.js
module.exports.sayHello = name => console.log(`Hello ${name}`);

// main.js
const g = require("./greetings");
g.sayHello("Dana");

// 3. config.js
module.exports = { appName:"MyApp", version:"1.0" };

// index.js
const cfg = require("./config");
console.log(`${cfg.appName} v${cfg.version}`);

// 4. students.js
module.exports = ["Avi", "Dana","Ron","Sari"];

// showStudents.js
const students=require("./students");
students.forEach(s=>console.log(s));

// 5. logger.js
module.exports = {
    info: msg=>console.log("INFO:",msg),
    error: msg=>console.error("ERROR:",msg)
};

// server.js
const log = require("./logger");
log.info("Server up");
log.error("Something failed");

// 6. calc.js
exports.multiply = (a,b)=>a*b;
exports.divide = (a,b)=>a/b;

// useCalc.js
const c=require("./calc");
console.log(c.multiply(3,4));
console.log(c.divide(10,2));

// 7. data.js
module.exports=[10,20,30,40];

// sum.js
const arr=require("./data");
console.log(arr.reduce((a,b)=>a+b,0));

// 8. user.js
module.exports = {
    name:"Noa",
    age:21,
    sayHi(){console.log("Hi I am Noa")}
};

// useUser.js
const u=require("./user");
u.sayHi();

// 9. utils.js
exports.isEven=n=>n%2===0;
exports.isOdd=n=>n%2!==0;

// checkNumber.js
const u=require("./utils");
console.log(u.isEven(7),u.isOdd(7));

// 10. mathBase.js
exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;

// mathAdvanced.js
const base=require("./mathBase");
module.exports=base;

// testMath.js
const m=require("./mathAdvanced");
console.log(m.add(2,3));

///////////////////////////

// 1. math.js
export const add=(a,b)=>a+b;
export const sub=(a,b)=>a-b;

// app.js
import {add,sub} from "./math.js";
console.log(add(4,3), sub(9,5));

// 2. greetings.js
export default name => `Hello ${name}`;

// main.js
import greet from "./greetings.js";
console.log(greet("Dana"));

// 3. config.js
export const API_URL="https://api";
export const TIMEOUT=5000;

// client.js
import {API_URL,TIMEOUT} from "./config.js";
console.log(API_URL,TIMEOUT);

// 4. messages.js
export default function logInfo(msg){console.log("INFO:",msg);}
export function logError(msg){console.error("ERROR:",msg);}

// useMessages.js
import logInfo,{logError} from "./messages.js";
logInfo("ok"); logError("fail");

// 5. students.js
export const students=[{name:"A",grade:90},{name:"B",grade:80}];

// report.js
import {students} from "./students.js";
students.forEach(s=>console.log(s.name,s.grade));

// 6. mathHelpers.js
export function add(a,b){return a+b}

// index.js
export * from "./mathHelpers.js";

// test.js
import {add} from "./index.js";
console.log(add(2,3));

// 7. colors.js
export const RED="#f00";
export const GREEN="#0f0";

// ui.js
import {RED as primary, GREEN as ok} from "./colors.js";
console.log(primary, ok);

// 8. settings.js
export default {theme:"dark",lang:"en"};

// loadSettings.js
import config from "./settings.js";
console.log(config);

// 9. mathMore.js
export const add=(a,b)=>a+b;
export const multiply=(a,b)=>a*b;

// calculator.js
import {add,multiply} from "./mathMore.js";
console.log(add(3,2), multiply(4,3));

// 10. strings.js
export function upper(s){return s.toUpperCase()}

// useStrings.js
import * as strings from "./strings.js";
console.log(strings.upper("hi"));
