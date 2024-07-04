//Exercises: Level 1

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
var firstName = 'Ahmet Kaan'
var lastName = 'Okur'
var country = 'Türkiye'
var city = 'Ankara'
var age = 22
var isMarried = false

console.log(typeof(isMarried))

//Check if type of '10' is equal to 10
console.log('10' === 10)

//Check if parseInt('9.8') is equal to 10
console.log(9.8 === 10)

//Write three JavaScript statement which provide truthy value.
console.log(10 === 10)
console.log(Math.floor(9.8) === 9)
console.log(9.8 != 10)

//Write three JavaScript statement which provide truthy value.
console.log(Math.floor(9.8) === 10)
console.log(firstName == age)
console.log(age === '22')

//Use the Date object to do the following activities
const now = new Date()
//What is the year today?
console.log(now.getFullYear())

//What is the month today as a number?
console.log(now.getMonth() +1 )

//What is the date today?
console.log(now.getDate())

//What is the hours now?
console.log(now.getHours())

//What is the minutes now?
console.log(now.getMinutes())

//Exercises: Level 2

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//var base = prompt("Enter the base of the triangle")
//var height = prompt("Enter the height of the triangle")

//base = parseFloat(base)
//height = parseFloat(height)

//console.log("triangle area: " + (0.5 * base * height))

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//var a = prompt("Enter the side a")
//var b = prompt("Enter the side b")
//var c = prompt("Enter the sşde c")

//a = parseFloat(a)
//b = parseFloat(b)
//c = parseFloat(c)

//console.log("Perimeter:" + a + b + c)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//var lenght = prompt("Enter the lenght")
//var width = prompt("Enter the width")

//length = parseFloat(length)
//width = parseFloat(width)

//console.log("Area : " + (length * width))

//If the length of your name is greater than 7 say, your name is long else say your name is short.
var name1 = prompt("Enter the name")

if(name1.length > 7){
    console.log("your name is long")
}else{
    console.log("your name is short")
}

//Compare your first name length and your family name length and you should get this output.
//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

var name2 = 'Ahmet'
var lastName2 = 'Okur'

if(name2.length>lastName2.length){
    console.log('your first name, ${name2} is longer than your family name, ${lastName2}')
}else{
    console.log('your lasname, ${lastName2} is longer than your first name, ${name2} ')
}

//Exercises: Level 3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let timer = new Date()
let hours = timer.getHours()
let minutes = timer.getMinutes()
if(hours < 10){
    hours = '0' + hours.toString()
}
if(minutes < 10){
    minutes = '0' + minutes.toString()
}

console.log('hours : ' + hours + '|| minutes : ' + minutes)