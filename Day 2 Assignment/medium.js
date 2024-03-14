const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
const randomChar = str[randomIndex];
console.log(randomChar);
const randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);
const randomNum2 = Math.floor(Math.random() * 51) + 50; 
console.log(randomNum2);
const randomNum1 = Math.floor(Math.random() * 101); 
console.log(randomNum1);
const sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon')); 
let number = parseFloat('9.8');
if (number !== 10) {
    number = 10;
}
console.log(number); 
if (typeof parseInt('10') === 'number') {
    console.log(parseInt('10') === 10); 
}
