/*
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Titus");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


//variable conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Progammer";
let myCurrentJob = "teacher";

let job1 = "Progammer";
let job2 = "Teacher";

console.log(myFirstJob);

let javasciptIsFun = true;
console.log(javasciptIsFun);

// console.log(typeof true);
console.log(typeof javasciptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");
// console.log(typeof javasciptIsFun);

javasciptIsFun = 'YES';
console.log(typeof javasciptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// Math operators
const now = 2037;
const ageTitus = now - 2005;
const ageSarah = now - 2018;
console.log(ageTitus, ageSarah);

console.log(ageTitus * 2, ageTitus / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4  = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparion operators
console.log(ageTitus > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; 

console.log(now - 1991 > now - 2018); 
*/

/*
const now = 2037;
const ageTitus = now - 2005;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageSarah + ageTitus) / 2;
console.log(ageSarah, ageTitus, averageAge);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(jonasNew);

console.log(`Just a regular string ...`);

console.log("string with \n\
multiphe \n\
lines");

console.log(`String 
multiple
lines`)
*/

/*
const age = 19;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving lincese");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 fasly value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 123;
if(height) {
  console.log("YAY, height is defined");
} else {
  console.log("Heigh is UNDEFINED");
}