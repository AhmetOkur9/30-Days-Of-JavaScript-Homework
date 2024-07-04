//Exercises: Level 1
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
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(i = 0 ; i < 11 ; i++){
    //console.log(i)
}

let q = 0
while(q< 11){
    //console.log(q)
    q++
}

w = 0
do{
    //console.log(w)
    w++
}while(w<11){
    
}

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(e = 10 ; e > 0 ; e-- ){
    //console.log(e)
}

let r = 10
while(r>0){
    //console.log(r)
    r--
}

t = 10
do{
    //console.log(t)
    t--
}while(t>0){

}

//Write a loop that makes the following pattern using console.log():
//#
//##
//###
//####
//#####
//######
//#######

var line = ' '
for(y = 0 ; y < 7 ; y++){
    line = line + '#'
    //console.log(line)
}

//Use loop to print the following pattern:
//0 x 0 = 0
//1 x 1 = 1
//2 x 2 = 4
//3 x 3 = 9
//4 x 4 = 16
//5 x 5 = 25
//6 x 6 = 36
//7 x 7 = 49
//8 x 8 = 64
//9 x 9 = 81
//10 x 10 = 100

for(number1 = 0 ; number1 < 11 ; number1++){
    //console.log(`${number1} x ${number1} = ${number1 * number1}`)
}

//Using loop print the following pattern
//i    i^2   i^3
//0    0     0
//1    1     1
//2    4     8
//3    9     27
//4    16    64
//5    25    125
//6    36    216
//7    49    343
//8    64    512
//9    81    729
//10   100   1000

//console.log(`i      i^2     i^3`)
for(number2 = 0 ; number2 < 11 ; number2++){
    //console.log(`${number2}      ${number2 * number2}       ${number2 * number2 * number2}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(u = 0 ; u<101 ; u++){
    if(u%2 === 0){
        //console.log(u)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(o = 0 ; o<101 ; o++){
    if(o%2 != 0){
        //console.log(o)
    }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
number3 = 0
for(p = 0 ; p<101 ; p++){
    number3 = number3 + p
}
//console.log(number3)


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
number4 = 0
for(a = 0 ; a < 101 ; a++){
    if(a%2 === 0){
        number4 = number4 + a
    }
}
//console.log(number4)

//Develop a small script which generate array of 5 random numbers
let array1 = []
for(s = 0 ; s < 5 ; s++){
    array1.push(Math.floor(Math.random() * 100))
}
//console.log(array1)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let array2 = []
var number5 = 0;
var d = 0;

while(array2.length < 6){
    number5 = Math.floor(Math.random() * 100)
    var numberAllreadyExist = array2.includes(number5)
    if(!numberAllreadyExist){
        array2.push(number5)
    }
}
//console.log(array2)


//Exercises: Level 2

//Write a script which generates a random hexadecimal number.
//#ee33df

var number6 = Math.floor(Math.random() * 1000 + 250)
var hexadecimalNumber ='#'+ number6.toString(16)
//console.log(hexadecimalNumber)

//Write a script which generates a random rgb color number.
//rgb(240,180,80)

//console.log(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)

//Using the above countries array, create the following new array.

let array3 = []

countries.forEach(function(country){
    array3.push(country.toUpperCase())
})

//console.log(array3)


//Using the above countries array, create an array for countries length'.
let array4 = []
countries.forEach(function(country){
    array4.push(country.length)
})
//console.log(array4)

//Use the countries array to create the following array of arrays:
//[
//    ['Albania', 'ALB', 7],
//    ['Bolivia', 'BOL', 7],
//    ['Canada', 'CAN', 6],
//    ['Denmark', 'DEN', 7],
//    ['Ethiopia', 'ETH', 8],
//    ['Finland', 'FIN', 7],
//    ['Germany', 'GER', 7],
//    ['Hungary', 'HUN', 7],
//    ['Ireland', 'IRE', 7],
//    ['Iceland', 'ICE', 7],
//    ['Japan', 'JAP', 5],
//    ['Kenya', 'KEN', 5]
//]


let array5 = countries.map(function(country){
    {
        return{
            countryName: country , shortCountry: country.toUpperCase().slice(0,3) , countryLenght: country.length
        }
    }
})

//console.log(array5)

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let array6 = []

countries.forEach(function(country){
    var isCorrect = country.toUpperCase().includes('LAND')
    if(isCorrect){
        array6.push(country)
    }
})

//console.log(array6)


//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let array7 = []

countries.forEach(function(country){
    if(country.endsWith('ia')){
        array7.push(country)
    }
})
//console.log(array7)


//Using the above countries array, find the country containing the biggest number of characters.
let maxLengthCountry = ' '
maxLength = 0

countries.forEach(function(country){
    if(country.length > maxLength){
        maxLength = country.length
        maxLengthCountry = country
    }
})
//console.log(maxLengthCountry)


//Using the above countries array, find the country containing only 5 characters.
let array8 = []

countries.forEach(function(country){
    if(country.length === 5){
        array8.push(country)
    }
})

//console.log(array8)

//Find the longest word in the webTechs array
let maxLengthLanguage = ' '
let maxLength2 = 0
webTechs.forEach(function(obj){
    if(obj.length > maxLength2){
        maxLength2 = obj.length
        maxLengthLanguage = obj
    }
})

//console.log(maxLengthLanguage)

//Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let result = webTechs.map(function(obj){
    {
        return{
            language:obj , languageLength:obj.length
        }
    }
})

//console.log(result)

//Exercises: Level 3
//Copy countries array(Avoid mutation)
let countriesCopy = []

for(i = 0 ; i < countries.length-1 ; i++){
    countriesCopy.push(countries[i]) 
}

//console.log(countriesCopy)

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
countriesCopy.sort()

//console.log(countriesCopy)

//Extract all the countries contain the word 'land' from the countries array and print it as array
var result1 = countries.filter(function(country){
    return country.toLowerCase().includes('land')
})

//console.log(result1)

//Extract all the countries containing only four characters from the countries array and print it as array

var result2 = countries.filter(function(country){
    return country.length > 4
})

//console.log(result2)

//Extract all the countries containing only four characters from the countries array and print it as array
let array9 = []

for(i = 0 ; i < countries.length ; i++){
    if(countries[i].length < 4){
        array9.push(countries[i])
        countries.splice(i,1)
        i--
    }
}
//console.log(array9)
//console.log(countries)

//Reverse the countries array and capitalize each country and stored it as an array
let array10 = []
for(i = countries.length -1 ; i>=0 ; i--){
    array10.push(countries[i].toUpperCase())
}
//console.log(array10)