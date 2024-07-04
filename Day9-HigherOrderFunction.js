const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//Use forEach to console.log each country in the countries array.
countries.forEach(function(country){
    //console.log(country)
})

//Use forEach to console.log each country in the countries array.
countries.map(function(country){
    //console.log(country.toUpperCase()) 
})

//Use map to map the products array to its corresponding prices.
products.map(function(product){
    //console.log(`Product: ${product.product} , price: ${product.price}`)
})

//Use filter to filter out countries containing land.
const result = countries.filter(function(country){
   return country.toLowerCase().includes('land')
})
//console.log(result)

//Use filter to filter out only prices with values.
const result2 = products.filter(function(product){
    typeof product.price === 'number'
    //console.log(product)
})

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array = []){
    let newArray = []
    array.forEach(function(obj){
        if(typeof obj === 'string'){
            newArray.push(obj)
        }        
    })
    return newArray
}

//console.log(getStringLists(countries))


//Use reduce to sum all the numbers in the numbers array.
var result3 = numbers.reduce(function(acc,num){
    acc = num+acc
    return acc
})

//console.log(result3)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


var result4 = countries.reduce(function(acc,country,currentIndex){
    if(currentIndex == countries.length-1){
        return acc = acc + ' and ' + country + ' are north European countries'
    }else if(currentIndex ===0){
        return acc = country
    }else{
        return  acc = acc+ ' ' + country
    }

    
})

//console.log(result4)


//Use some to check if some names' length greater than seven in names array
let longWords = []
var result5 = names.some(function(name){
     
    if(name.length > 7){
        longWords.push(name)
    }
})
//console.log(longWords)


//Use every to check if all the countries contain the word land
const result6 = countries.every(function(country){
    return country.toLowerCase().includes('land')
});
//console.log(result6)


//Use find to find the first country containing only six letters in the countries array
var result7 = countries.find(country => country.length == 6)
//console.log(result7)


//Use findIndex to find the position of the first country containing only six letters in the countries array
var result8 = countries.findIndex(country => country.length == 6)
//console.log(result8)


//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
var result9 = countries.findIndex(country => country.includes('Norway'))
//console.log(result9)


//Exercises: Level 2


//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
var result10 = products.map(function(product) {
    return product.price;
}).reduce(function(acc, price) {
    if(typeof price === "number"){
        return acc =  acc+price
    }
}, 0);

//console.log(result10);


//Find the sum of price of products using only reduce reduce(callback))
var result11 = products.reduce(function(acc,product,productIndex){
    
    if(typeof product.price === "number"){
        return acc = acc + product.price
    }
    return acc
},0)

//console.log(result11)

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(search){
    let resultArray = []
    for(i = 0 ; i < countries.length ; i++){
        if(countries[i].toLowerCase().includes(search)){
            resultArray.push(countries[i])
        }
    }
    return resultArray
}

//console.log(categorizeCountries('mark'))


//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
let result12 = []
function startingLetters(){
    let letterCounts = {

    }
   countries.forEach(function(country){
    let firstLetter = country[0]
    if(!letterCounts[firstLetter]){
        letterCounts[firstLetter] = 1
    }else{
        letterCounts[firstLetter] ++
    }
   })
   
   for(let letter in letterCounts){
    result12.push({
        letter:letter,
        count: letterCounts[letter]
    })
   }
}

//console.log(startingLetters())
//console.log(result12)


//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
    return countries.slice(0,10)
}

//console.log(getFirstTenCountries())

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
    return countries.slice(-10); // Son on ülkeyi alır ve döndürür
}
  
//console.log(getLastTenCountries());



//*** Find the 10 most spoken languages:

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

    return topLanguages;
}

//console.log(mostSpokenLanguages(countries2,10))


//*** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(array,number){
    let resultArray = []

    array.forEach(function(country){
        resultArray.push({
            country : country.name,
            population : country.population
        })
    })

    resultArray.sort((a, b) => b.population - a.population);

    let topLanguages = resultArray.slice(0, number);

    return topLanguages;
}

//console.log(mostPopulatedCountries(countries2,10))

//*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
//In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
//You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = {
    count : function(){
        return ages.length
    },

    sum :function(){
        let result = 0
        ages.forEach(function(age){
            result = result + age
        })
        return result
    },

    min : function(){
        let result = ages.sort()
        return result[0]
    },

    max : function(){
        let result = ages.sort()
        return result[ages.length-1] 
    },

    range : function(){
        let result = ages.sort()
        return result[ages.length-1] - result[0]
    }
}


//console.log('Count:', statistics.count()) // 25
//console.log('Sum: ', statistics.sum()) // 744
//console.log('Min: ', statistics.min()) // 24
//console.log('Max: ', statistics.max()) // 38
//console.log('Range: ', statistics.range() // 14

