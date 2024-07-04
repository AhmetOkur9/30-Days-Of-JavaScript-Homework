//Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//create an empty set
let emptySet = new Set()
//console.log(emptySet)


//Create a set containing 0 to 10 using loop
let result1 = new Set()
for(i = 1 ; i < 11 ; i++){
    result1.add(i)
}
//console.log(result1)


//Remove an element from a set
result1.delete(10)
//console.log(result1)


//Clear a set
result1.clear()
//console.log(result1)


//Create a set of 5 string elements from array
let acceptorsList = ["Ahmet Okur", "Kenan Demir", "Ibrahim Cayiroglu", "Mehmet Okur", "Erol Okur"]
let result2 = new Set(acceptorsList)
//console.log(result2)


//Create a map of countries and number of characters of a country
let countriesData = [
    ['Turkey',6],
    ['Finland',7],
    ['Norway',6],
    ['Sweden',6]
]

const countriesInfo = new Map(countriesData)
//console.log(countriesInfo)



//Exercises:Level 2

//Find a union b
let A = new Set(a)
let B = new Set(b)

let c = a.filter(num => !B.has(num))
let C = new Set(c)
//console.log(c)

let d = a.filter(num => B.has(num))
let D = new Set(d)
//console.log(D)

let e = [...a,...b]
//console.log(e)
let E = new Set(e)
//console.log(E)


//Exercises:Level 3

//How many languages are there in the countries object file.
function mostSpokenLanguages(array,number){
    let resultArray = [
        
    ]

    array.forEach(function(country){
        country.languages.forEach(function(language){
            let existingLanguage = resultArray.find(item => item.language === language);
            if(!existingLanguage){
                resultArray.push({
                    language : language,
                    count : 1
                })
            }else{
                existingLanguage.count++;
            }
        })
    })

    resultArray.sort((a, b) => b.count - a.count);
    let topLanguages = resultArray.slice(0, number);

    let result = new Map()
    for(i = 0 ; i < number ; i++){
        result.set(topLanguages[i].language,topLanguages[i].count)
    }
    return result
}

//console.log(mostSpokenLanguages(countries2,10))
