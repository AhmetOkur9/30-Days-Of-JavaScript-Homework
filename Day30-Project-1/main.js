const infoDiv = document.querySelector('#info-div')
infoDiv.style.display = 'grid'
infoDiv.style.margin = '4rem 0 0 0'
infoDiv.style.padding = '4rem 2rem 0 2rem'
infoDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(170px, 1fr))'
infoDiv.style.gap = '20px'

const searchBar = document.querySelector('#search-bar')
const nameButton = document.querySelector('#name-btn')
const capitalButton = document.querySelector('#capital-btn')
const populationButton = document.querySelector('#population-btn')

searchBar.addEventListener('keyup',searchCountry)
nameButton.addEventListener('click',pressNameButton)
capitalButton.addEventListener('click',pressCapitalButton)
populationButton.addEventListener('click',pressPopulationButton)

let value = 0;
function pressNameButton(){
    value = 1
    buttonColorSettigs()
}
function pressCapitalButton(){
    value = 2
    buttonColorSettigs()
}
function pressPopulationButton(){
    value = 3
    buttonColorSettigs()
}

function buttonColorSettigs(){
    if(value == 1){
        nameButton.style.backgroundColor = '#c77a07'
        capitalButton.style.backgroundColor = '#F2A93B'
        populationButton.style.backgroundColor = '#F2A93B'
    }else if(value ==2){
        nameButton.style.backgroundColor = '#F2A93B'
        capitalButton.style.backgroundColor = '#c77a07'
        populationButton.style.backgroundColor = '#F2A93B'
    }else{
        nameButton.style.backgroundColor = '#F2A93B'
        capitalButton.style.backgroundColor = '#F2A93B'
        populationButton.style.backgroundColor = '#c77a07'
    }
}


function searchCountry(){
    //search
    let word = searchBar.value.toLowerCase()
    let filtedArray = []
    if(value == 0){
        countries.forEach(function(country){
            if(country.name.toLowerCase().startsWith(word)){
                filtedArray.push(country)
            }
        })
        infoDiv.innerHTML = ''
        createCountryUI(filtedArray)
    }
    else if(value==1){
        countries.forEach(function(country){
            if(country.name.toLowerCase().startsWith(word)){
                filtedArray.push(country)
            }
        })
        filtedArray.sort((a, b) => a.name.localeCompare(b.name));
        infoDiv.innerHTML = ''
        createCountryUI(filtedArray)
    }else if(value == 2){
        countries.forEach(function(country){
            if(country.name.toLowerCase().startsWith(word)){
                filtedArray.push(country)
            }
        })
        filtedArray.sort((a, b) => a.capital.localeCompare(b.capital));
        infoDiv.innerHTML = ''
        createCountryUI(filtedArray)
    }else{
        countries.forEach(function(country){
            if(country.name.toLowerCase().startsWith(word)){
                filtedArray.push(country)
            }
        })
        filtedArray.sort((a,b) =>  b.population - a.population )
        infoDiv.innerHTML = ''
        createCountryUI(filtedArray)
    }

   
    myChart.data.labels = []
    myChart.data.datasets[0].data = []
    for(i=0 ;i<filtedArray.length ; i++){ 
        myChart.data.labels.push(filtedArray[i].name)
        myChart.data.datasets[0].data.push(filtedArray[i].population)
    }
    myChart.update();
}


createCountryUI(countries)






function createCountryUI(showCountry) {
    showCountry.forEach(function (country) {
        const countryDiv = document.createElement('div')
        infoDiv.appendChild(countryDiv)
        countryDiv.style.border = '1px solid black'
        countryDiv.style.backgroundColor = 'white'
        countryDiv.style.height = '350px'
        countryDiv.style.border = 'none'

        const countryImg = document.createElement('img')
        countryDiv.appendChild(countryImg)
        countryImg.src = country.flag
        countryImg.width = 150;
        countryImg.height = 100;
        countryImg.style.padding = '20px 0 0 0'

        const countryName = document.createElement('h3')
        countryDiv.appendChild(countryName)
        countryName.textContent = country.name.toUpperCase()
        countryName.style.color = '#F2A93B'
        countryName.style.fontWeight = '100'
        countryName.style.padding = '10px 0 0 0'

        const capital = document.createElement('p')
        countryDiv.appendChild(capital)
        capital.textContent = `Capital: ${country.capital}`
        capital.style.padding = '10px 0 0 0'

        const languages = document.createElement('p')
        countryDiv.appendChild(languages)
        languages.textContent = `Languages: ${country.languages}`
        languages.style.padding = '10px 0 0 0'

        const population = document.createElement('p')
        countryDiv.appendChild(population)
        population.textContent = `Population: ${country.population}`
        population.style.padding = '10px 0 0 0'

    })
}


const canvas = document.createElement('canvas')
canvas.getContext('2d')
document.body.querySelector('#canvas-div').appendChild(canvas)
let myChart = new Chart(canvas, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Languages',
            data: [],
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

