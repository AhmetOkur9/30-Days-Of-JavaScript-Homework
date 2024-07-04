//Declare a function fullName and it print out your full name.
function fullName(){
    var firstName = 'Ahmet Kaan'
    var lastName = 'Okur'
    console.log(`First Name: ${firstName} | Last Name: ${lastName}`)
}
//fullName()


//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName,lastName){
    console.log(`First Name: ${firstName} | Last Name: ${lastName}`)
}
//fullName1('Ahmet Kaan','Okur')


//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addition(number1 , number2){
    return number1 + number2
}
//console.log(addition(10,20))


//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    return length * width
}
//console.log(areaOfRectangle(10,20))


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    return 2 * (length + width)
}
//console.log(perimeterOfRectangle(10,20))


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,height,weight){
    return length * height * weight
}
//console.log(volumeOfRectPrism(10,20,30))


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    return 3.14 * r * r
}
//console.log(areaOfCircle(10))


//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    return 2 * 3.14 * r
}
//console.log(circumOfCircle(10))


//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume){
    return mass / volume
}
//console.log(density(10,20))

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function bodyMassIndex(weight,height){
    var bmi = weight / (height * height)
    if(bmi <= 18.5){
        return `${bmi} - Underweight`
    }else if(bmi> 18.5 && bmi <= 24.9){
        return `${bmi} - Normal weight`
    }else if(bmi < 24.9 && bmi >= 29.9){
        return `${bmi} - Overweight`
    }else{
        return `${bmi} - Obese`
    }
}
//console.log(bodyMassIndex(75,1.75))


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(number1,number2,number3){
    let numberArray = [number1,number2,number3]
    numberArray.sort((a,b) =>a-b);
    return `min number: ${numberArray[0]} || medium number: ${numberArray[1]} || max number: ${numberArray[2]}`
}
//console.log(findMax(19,23,7))


//Exercises: Level 2
//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c){
    var x = (-c - (b)) / a
    var y = (-c - (a*x)) /b 
    return `x: ${x} | y:${y}`
    
}

//console.log(solveLinEquation(10,20,30))


//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a,b,c){
    //ax^2 + bx + c
    var x1 = -b + Math.sqrt((b^2) - 4*a*c)
    var x2 = -b - Math.sqrt((b^2) - 4*a*c)
    var discriminant = (b^2) - 4*a*c
    
    if(discriminant > 0){
        return `x1: ${x1} || x2: ${x2}`
    }else if(discriminant = 0){
        var x = -b / (2 * a)
        return `x: ${x}`
    }else{
        return `There are 2 complex roots`
    }
}

//console.log(solveQuadEquation(1,4,-2))


//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    var date = new Date()
    if( date.getDate() < 10 && date.getMonth() < 10 ){
        return `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }else if(date.getDate() < 10 && date.getMonth() > 10  ){
        return `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }else if( date.getDate() > 10 && date.getMonth() < 10 ){
        return `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }else{
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }
    
}
//console.log(showDateTime())


//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array1){
    let reverseArray1 = []
    for(i = array1.length -1 ; i >= 0 ; i--){
        reverseArray1.push(array1[i])
    }
    return reverseArray1
}

//console.log(reverseArray([1,2,45,6,653,43,5]))


//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array2 = [],deleteItem){
    array2.splice(deleteItem,1)
    return array2
}
//console.log(removeItem([1,23,21,4,10] , 2))


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number1,number2){
    var acc = 0
    if(number1 < number2){
        for(i=number1 ; i<=number2 ; i++){
            acc = acc + i
        }
    }else{
        for(i=number2 ; i<=number1 ; i++){
            acc = acc + i
        }
    }
    return acc
}

//console.log(sumOfNumbers(10,20))


//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(min,max){
    var acc = 0
    for(i = min ; i < max ; i++){
        if(i%2 === 0){
            acc = acc + i
        }
    }
    return acc
}

//console.log(sumOfEven(10,20))


//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
//evensAndOdds(100);
//The number of odds are 50.
//The number of evens are 51.


function evensAndOdds(number){
    var odd = 0
    var even = 0
    if(number > 0){
        for(i = 0 ; i <= number ; i++){
            if(i%2 === 0){
                even = even +1
            }else{
                odd = odd +1
            }
        }
        return `the number of odds are ${odd} || the number of evens are ${even}`
    }else{
        return `please enter the positive number`
    }
}

//console.log(evensAndOdds(100))


//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(number){
    var hexadecimalNumber ='#'+ number.toString(16)
    return hexadecimalNumber
}

//console.log(randomHexaNumberGenerator(12331))

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    var num1 = Math.floor(Math.random() * 255)
    var num2 = Math.floor(Math.random() * 255)
    var num3 = Math.floor(Math.random() * 255)

    return `rgb(${num1},${num2},${num3})`
}
//console.log(rgbColorGenerator())


//Exercises: Level 3

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(red,green,blue){
    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    if(red.length < 1){ 0 + red}
    if(green.length < 1){ 0 + green}
    if(blue.length < 1){ 0 + blue}

    return `#${red+green+blue}`
}
//console.log(convertRgbToHexa(123,213,212))


//Write a function generateColors which can generate any number of hexa or rgb colors.
//console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
//console.log(generateColors('hexa', 1)) // '#b334ef'

function generateColors(kind,number){
    let colors = []
    function colorGenerator(){
        var red = Math.floor(Math.random() * 255)
        var green = Math.floor(Math.random() * 255)
        var blue = Math.floor(Math.random() * 255)
        if(kind === 'rgb'){
            return `${red},${green},${blue}`
        }else if(kind === 'hexa'){
            red = red.toString(16)
            green = green.toString(16)
            blue = blue.toString(16)

            if(red.length < 1){ 0 + red}
            if(green.length < 1){ 0 + green}
            if(blue.length < 1){ 0 + blue}

            return `#${red + green + blue}`
        }
    }
    if(kind === 'hexa'){
        for(i=number ; i>0 ; i--){
            colors.push(colorGenerator())
        }
        return colors
    }else if(kind === 'rgb'){
        for(i = number ; i > 0 ; i--){
            colors.push(`rgb(${colorGenerator()})`)
        }
        return colors
    }else{
        return "please select a valid type"
    }
}

//console.log(generateColors('hexa',3))


//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array = []){
    var averageNumber = 0
    for(i = 0 ; i < array.length ; i++){
        if(array.every(item => typeof item === 'number')){
            averageNumber = averageNumber + array[i]
        }else{
            return "error"
        }
    }
    var result = averageNumber / array.length
    return result
}

//console.log(average([1,2,3,4,]))


//Write a function called isPrime, which checks if a number is prime number.
function isPrime(number){
    if( number == 2 || number == 3 ){
        return `${number} is a prime number`
    }else if(number%2 ==  0 || number%3 == 0){
        return `${number} is a not prime number`
    }else{
        return `${number} is a prime number`
    }
}

//console.log(isPrime(14))


//Write a function which checks if all the items of the array are the same data type.
function dataTypeController(dataArray = []){
    var type = typeof dataArray[0]
    for(i = 0 ; i<dataArray.length ; i++){
        if(typeof dataArray[i] !== type){
            return `There are different types of data in the array`
        }
    }
    return `There are no different data types in the array`
}

//console.log(dataTypeController([1,23,4,213,4,2]))


//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(data){
    for(i = 0 ; i<data.length ;i++){
        if(data[i] === '$' || data[i] === '_'){
            return `Invalid character`
        }
    }
    return `All characters are valid`
}

//console.log(isValidVariable('$naber'))


//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers(){
    let array = []
    var number = 0
    var i = 0

    while(i<7){
        number = Math.floor(Math.random() * 10)
        if(!array.includes(number)){
            array.push(number)
            i++
        }
    }
    return array
}

//console.log(sevenRandomNumbers())


//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
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

function reverseCountries(){
    var copyCountries = countries.slice()
    return countries.reverse()
}
//console.log(reverseCountries())