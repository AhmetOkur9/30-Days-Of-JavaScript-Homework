//Exercise: Level 1

//Declare an empty array;
let emptyArray = []

//Declare an array with more than 5 number of elements
let numbers1 = [1,2,3,4,5]

//Find the length of your array
console.log(numbers1.length)

//Get the first item, the middle item and the last item of the array
console.log(`number 1: ${numbers1[0]} | median number: ${numbers1[Math.ceil(numbers1.length/2)]} | last number: ${numbers1[numbers1.length-1]}`)

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    firstName = "Ahmet Kaan",
    lastName = "Okur",
    age = 22,
    languages = ["C#", "Angular" , "HTML" , "CSS" , "Javascript"],
    isMarried = false
]

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
console.log(`Company 1: ${itCompanies[0]} | Median Company: ${itCompanies[Math.floor(itCompanies.length/2)]} | Last Company: ${itCompanies[itCompanies.length-1]} `)

//Print out each company
itCompanies.forEach(function(company){
    console.log(company)
})

//Change each company name to uppercase one by one and print them out
let upperItCompanies = []

itCompanies.forEach(function(company){
    upperItCompanies.push(company.toUpperCase())
})

console.log(upperItCompanies)

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0,-1).join(', ') + " and " + itCompanies[itCompanies.length - 1 ] + " are big IT companies.")

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkCompany = "amazon"
var result = 0;

itCompanies.forEach(function(company){
    if(company.toLowerCase() == checkCompany.toLowerCase()){
        result = result + 1;
    }
})
if(result > 0){
    console.log("company found")
}else{
    console.log("company not found")
}

//Sort the array using sort() method
itCompanies.sort();

console.log(itCompanies)

//Sort the array using sort() method
itCompanies.reverse()
console.log(itCompanies)

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,-3))

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length/2) , -Math.floor(itCompanies.length/2)))

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

//Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length/2)-1,2)
console.log(itCompanies)

//Remove the middle IT company or companies from the array
itCompanies.pop()
console.log(itCompanies)

//Remove all IT companies
console.log(itCompanies.splice())

//Exercise: Level 2

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file



//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ')
console.log(words)
console.log(words.length)



//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')

//remove 'Honey' if you are allergic to honey
var deleteItemIndex = 0

deleteItemIndex = shoppingCart.indexOf('Honey')
shoppingCart.splice(deleteItemIndex)

//modify Tea to 'Green Tea'
var item = 'Green Tea'
var modifyItem = shoppingCart.indexOf('Tea')
shoppingCart[modifyItem] = item

console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]


if(countries.includes('Ethiopia')){
    var countryIndex = countries.indexOf('Ethiopia')
    countries[countryIndex] = 'ETHIOPIA'
}else{
    countries.push('Ethiopia')
}

console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

if(webTechs.includes('Sass')){
    console.log(`Sass is a CSS preprocess`)
}else{
    webTechs.push('Saas')
    console.log(webTechs)
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

//Exercise: Level 3

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort()
console.log(`min age: ${ages[0]} | max age: ${ages[ages.length-1]}`)

//Find the median age(one middle item or two middle items divided by two)
if(ages.length%2 === 0 ){
    console.log(`median: ${ages[ages.length/2]} and ${ages[ages.length/2+1]}`)
}else{
    console.log(`median: ${ages[ages.length/2]}`)
}

//Find the average age(all items divided by number of items)
var averageAge = 0
ages.forEach(function(age){
    averageAge = averageAge + age
})
console.log(`Avarage age: ${averageAge / ages.length}`)

//Find the range of the ages(max minus min)
console.log(`range of the age: ${ages[0]} - ${ages[ages.length-1]}`)

console.log(ages)

//Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

//Find the middle country(ies) in the countries array
if(countries.length%2 === 0){
    console.log(`middle countries: ${countries[countries.length/2]} and ${countries[countries.length/2 + 1]}`)
}else{
    console.log(`middle country: ${countries[Math.floor(countries.length/2)]}`)
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
var middleIndex = countries.length/2
if(countries.length%2 === 0){
    var firstHalf = countries.slice(0,middleIndex)
    var lastHalf = countries.slice(middleIndex)
}else{
    var firstHalf = countries.slice(0,Math.floor(middleIndex) )
    var lastHalf = countries.slice(Math.floor(middleIndex))
}

console.log(firstHalf)
console.log(lastHalf)