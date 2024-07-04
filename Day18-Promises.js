const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Exercises: Level 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
async function countriesInfo(){
    const response = await fetch(countriesAPI)
    const data = await response.json()
    console.log(data)
}
countriesInfo()

//Exercises: Level 2
//Print out all the cat names in to catNames variable.

async function catNames(){
    const response = await fetch(catsAPI)
    const data = await response.json()
    let allCatName = []
    data.forEach(function(cat){
        allCatName.push(cat.name)
    })
    console.log(allCatName)
}
//catNames()

//Exercises: Level 3
//Read the cats api and find the average weight of cat in metric unit.
async function catMetricUnit(){
    const response = await fetch(catsAPI)
    const data = await response.json()
    let count = 0
    let minValue = 0
    let maxValue = 0
    data.forEach(function(cat){
        const metricValue = cat.weight.metric
        const minMetricValue = metricValue[0]
        const maxMetricValue = metricValue[4]
        minValue = minValue + parseInt(minMetricValue)
        maxValue = maxValue + parseInt(maxMetricValue)
        count ++;
    })
    console.log("average weight of cat in metric unit." + ((maxValue-minValue)/count))
}
//catMetricUnit()


//Read the countries api and find out the 10 largest countries
async function tenlargestCountries(){
    const response = await fetch("https://restcountries.com/v2/all")
    const data = await response.json()
    data.sort((a,b) => b.area - a.area);
    let topTenCountries = data.slice(0,10);
    console.log(topTenCountries)
}

//tenlargestCountries()


//Read the countries api and count total number of languages in the world used as officials.
async function totalLanguages(){
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    let allLanguages = []
    data.forEach(function(country){
        country.languages.forEach(function(language){
            if(!allLanguages.includes(language)){
                allLanguages.push(language)
            }
        })
    })
    console.log(allLanguages)
}
totalLanguages()