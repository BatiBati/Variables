// const firstName = "Bat";
// console.log(firstName);
// const lastName = "Dorj";
// console.log(lastName);
// const maritalStatus = "Married";
// console.log(maritalStatus);
// const country = "UB";
// console.log(country);
// const age = "20";
// console.log(age);

// const ovog = "Bat";
// const ner = "Dorj";
// const gerlelt = "tiim";
// const hayag = "UB";
// const nas = "30";
// console.log(ovog, ner, gerlelt, hayag, hayag, nas);

// //True False//
// const number =1
// const stringNumber = "1"
// console.log (number === stringNumber)
// console.log (number == stringNumber)

// //Gurvaljingiin talbai//
// const aTal = "20";
// const bTal = "10";
// const cTal = "40";
// console.log (aTal * bTal * cTal)

// //m = y2-y1/x2-x1//
// const y2 = 10
// const y1 = 5
// console.log (y2-y1)

// const x2 = 20
// const x1 = 25
// console.log (x2-x1)

// console.log (x2-x1 / y2-y1)

// //huvaah uildel//
// const q2 = 50
// const q1 = 25
// console.log (q2 / q1)

// // 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно.

// const side1 = "20";
// const side2 = "50";
// const side3 = "30";
// console.log (side1, side2, side3)

// //// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

// const tsels = "20";
// console.log ((tsels * 1.8)+32);

// // 14. Хоёр багийн дундаж оноог олно уу.
// //     ( A team - 96, 108, 89; B team - 88, 91, 110 )
// const aTeam96 = "96";
// const aTeam108 = "108";
// const aTeam89 = "89";

// const bTeam88 = "88";
// const bTeam91 = "91";
// const bTeam110 = "110";
// console.log (((aTeam96 + aTeam108 + aTeam89) / 3), ((bTeam88 + bTeam91 + bTeam110) / 3));

// // 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2
// //  хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// // Өгөгдсөн 2 тооны нийлбэр нь 25
// // Өгөгдсөн 2 тооны ялгавар нь 5

// const firstNumber = "200";
// const secondNumber = "10";
// const niilber = "210";
// const yalgavar = "Yalgavar n:";
// const urjver = "2000";
// const noogdvor = "20";
// console.log (firstNumber + secondNumber);
// console.log (yalgavar, firstNumber - secondNumber);
// console.log (firstNumber * secondNumber);
// console.log (firstNumber / secondNumber);

// 1.
// Comments can make code readable

// 2.
let numberVariable = 42;
let stringVariable = "Hello, world!";
let booleanVariable = true;
let undefinedVariable;
let nullVariable = null;

console.log("Number: ", numberVariable);
console.log("String: ", stringVariable);
console.log("Boolean: ", booleanVariable);
console.log("Undefined: ", undefinedVariable);
console.log("Null: ", nullVariable);

// 3.
let myVariable;
console.log(myVariable);

// 4.
let myVariables = 10;
console.log(myVariables);

// 5.
// First name, last name, marital status, country, age in many lines
const firstName = "Bat";
const lastName = "Naraa";
const maritalStatus = "Yes";
const country = "UB";
const age = 20;
console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);

// 6.
console.log(firstName, lastName, maritalStatus, country, age);

// 7.
// Гурвалжингийн периметрийг олох
const aTal = 50;
const bTal = 8;
const cTal = 10;
let perimeter = aTal + bTal + cTal;

console.log(perimeter);

// 8. Тойргийн талбайг олох
let radius = 3;
let talbai = Math.PI * radius * radius;

console.log(talbai);

// 9. m = y2-y1/x2-x1 хариуг олох
const y1 = 3;
const y2 = 15;
const x1 = 2;
const x2 = 5;
let m = "";
m = (y2 - y1) / (x2 - x1);
console.log(m);

// 10. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүний BIT Rate-ийг олно уу.
// const data = 15;
// const seconds = 3;

// 11. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
// const side1 = 10;
// const side2 = 20;
// const side3 = 30;

// 12. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

// 13. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
const aTeam96 = 96;
const aTeam108 = 108;
const aTeam89 = 89;

const bTeam88 = 88;
const bTeam91 = 91;
const bTeam110 = 110;

console.log((aTeam89 + aTeam108 + aTeam96) / 2);
console.log((bTeam88 + bTeam91 + bTeam110) / 2);

const teamA = "";
const teamB = "";
console.log((96 + 108 + 89) / 2, (88 + 91 + 110) / 2);

// 14. 2 хувьсагч зарлан 2 тоон утга өг.
// Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
const number1 = 32;
const number2 = 10;
console.log(`Өгөгдсөн 2 тооны нийлбэр нь: ${number1 + number2}`);
console.log(`Өгөгдсөн 2 тооны ялгавар нь: ${number1 - number2}`);
console.log(`Өгөгдсөн 2 тооны үржвэр нь: ${number1 * number2}`);
console.log(`Өгөгдсөн 2 тооны ноогдвор нь: ${number1 * number2}`);
console.log(`Өгөгдсөн 2 тооны ноогдвор нь: ${number1 % number2}`);

// 15. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
const inch = 2.54;
const cm = 20;
console.log(`Инч - Сантиметр ${inch * cm}`);
console.log(`Инч - Сантиметр ${cm / inch}`);

// 16. 






