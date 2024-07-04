//Exercises: Level 1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of Javascript'

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,7))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,21))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('word'))

//Split the string into an array using split() method
console.log(challenge.split('Of'))

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var challenge2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(challenge2.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge4 = challenge.replace('Javascript','Pyhton'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var challenge3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge3.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge3.lastIndexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge3.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Days'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Javascript'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var chal = '30 Days of'
var lenge = ' Javascript'
console.log(chal.concat(lenge))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(1))

//Exercises: Level 2

//Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' === 10)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8) === 10)

//I hope this course is not full of jargon. Check if jargon is in the sentence.
var sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
var randomNumber = Math.random() * 101
console.log(parseInt(randomNumber))

//Generate a random number between 50 and 100 inclusively.
console.log(Math.floor((Math.random() * 51 ) + 50 ))

//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255))

//Access the 'JavaScript' string characters using a random number.
var javascript = 'javascript'
console.log(Math.floor(Math.random() * javascript.length + 2))

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.substr(30,24))

//Exercises: Level 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
var sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence3.match(/love/gi))

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence4.match(/\d+/))

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var sentence5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var salary = sentence5.match(/\d+/g)
var totalSalary = 0;
console.log(salary)
salary.forEach(function(s){
    totalSalary = parseInt(s) + totalSalary
})
console.log(totalSalary)
