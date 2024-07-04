//Exercises: Level 1

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age =21
//let age = prompt("Enter your age : ")

if(age >= 18 && age<100){
    console.log("You are old enough to drive")
}else if(age > 100 || age < 0){
    console.log('Please enter a valid age')
}
else{
    console.log(`You are left with ${18 - age} years to drive`)
}


//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 22
//let yourAge = prompt('Please enter a your age : ')
let yourAge = 28

if(myAge < yourAge){
    console.log(`You are ${yourAge - myAge} years older than me.`)
}else{
    console.log(`I am ${myAge - yourAge} years older than you`)
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//ternary operator

let a = 5
let b = 6

let result = (a > b ) 
? "a is greater than b"
: "a is less than b"

console.log(result)

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//let number1 = prompt('Enter a number')
let number1 = 22

if(number1 / 2 === Math.floor(number1/2)){
    console.log(`${number1} is an even number`)
}else{
    console.log(`${number1} is an odd number`)
}

//Exercises: Level 2

//Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

//var examResult = prompt('enter the exam result')
var examResult = 22

if(examResult >= 80 && examResult <=100){
    console.log(`Your exam result: ${examResult} | Your letter grade: A`)
}else if(examResult < 80 && examResult >= 70){
    console.log(`Your exam result: ${examResult} | Your letter grade: B`)
}else if(examResult < 70 && examResult >= 60){
    console.log(`Your exam result: ${examResult} | Your letter grade: C`)
}else if(examResult < 60 && examResult > 0){
    console.log(`Your exam result: ${examResult} | Your letter grade: F`)
}else{
    console.log(`Please enter a valid letter grade`)
}
