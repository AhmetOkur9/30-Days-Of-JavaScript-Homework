const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')


const headerDiv = document.createElement('div')
headerDiv.classList.add('header')
document.body.appendChild(headerDiv)

headerDiv.appendChild(h1)
headerDiv.appendChild(h2)

document.body.style.fontFamily = 'Arial'

headerDiv.style.backgroundImage = "url('images/globe-2.jpg')"
headerDiv.style.minHeight = '30rem'
headerDiv.style.backgroundSize = 'cover'
headerDiv.style.backgroundPosition = 'center'



h1.textContent = 'WORLD COUNTRIES LIST'
h1.style.textAlign = 'center'
h1.style.color = 'white'
h1.style.letterSpacing = '10px'
h1.style.padding = '13% 0 0 0'

h2.style.textAlign = 'center'
h2.style.color = 'white'


const buttonDiv = document.createElement('div')
buttonDiv.classList.add('button-div')
document.body.querySelector('.header').appendChild(buttonDiv)
buttonDiv.style.textAlign = 'center'

const button1 = document.createElement('button')
button1.classList.add('button')
button1.id = 'button-1'
document.body.querySelector('.button-div').appendChild(button1)
button1.textContent = 'STARDING WORLD'
button1.style.marginRight = '2px'

const button2 = document.createElement('button')
button2.classList.add('button')
button2.id = 'button-2'
document.body.querySelector('.button-div').appendChild(button2)
button2.textContent = 'SEARCH WITH ANY WORLD'
button2.style.marginRight = '2px'

const button3 = document.createElement('button')
button3.classList.add('button')
button3.id = 'button-3'
document.body.querySelector('.button-div').appendChild(button3)
button3.textContent = 'Z'

const buttonClass = document.body.querySelectorAll('.button')
buttonClass.forEach(function (e) {
    e.style.backgroundColor = '#8257DC'
    e.style.color = 'white'
    e.style.padding = '1rem'
    e.style.border = 'none'
})


const searchDiv = document.createElement('div')
searchDiv.classList.add('search-div')
document.querySelector('.header').appendChild(searchDiv)
searchDiv.style.textAlign = 'center'
searchDiv.style.margin = '1.5rem 0 0 0'

const searchBar = document.createElement('input')
document.querySelector('.search-div').appendChild(searchBar)
searchBar.id = 'search-bar'
searchBar.type = 'text'
searchBar.placeholder = 'Search country'
searchBar.style.width = '35%'
searchBar.style.height = '40px'
searchBar.style.textAlign = 'center'
searchBar.style.margin = '0 10px 0 0'
searchBar.style.borderRadius = '10rem'
searchBar.style.border = 'none'

const searchButton = document.createElement('i')
searchButton.classList.add('search-button')
document.querySelector('.search-div').appendChild(searchButton)
searchButton.classList.add('fa-solid')
searchButton.classList.add("fa-magnifying-glass")
searchButton.classList.add('fa-2xl')
searchButton.style.color = 'white'
console.log(document.querySelector('.search-div'))

console.log(document.body)

const dataDiv = document.createElement('div')
document.body.appendChild(dataDiv)
dataDiv.classList.add('data-div')
dataDiv.style.display = 'grid'
dataDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))'
dataDiv.style.gap = '50px'
dataDiv.style.margin = '4rem 10rem 0 10rem'

function createCountryElement(array) {
    array.forEach(function (country) {
        const countryElement = document.createElement('div')
        document.querySelector('.data-div').appendChild(countryElement)
        countryElement.textContent = country
        countryElement.style.minWidth = '20%'
        countryElement.style.minHeight = '200px'
        countryElement.style.display = 'flex'
        countryElement.style.justifyContent = 'center'
        countryElement.style.alignItems = 'center'
        countryElement.style.backgroundImage = "url('images/map_image.jpg')"
        countryElement.style.backgroundSize = 'cover'
        countryElement.style.backgroundPosition = 'center'
        countryElement.style.fontSize = '18px'
        countryElement.style.color = 'black'
        countryElement.style.filter = 'brightness(100%) contrast(61%) grayscale(0%) invert(0%) opacity(86%) saturate(182%)';
    })
}
createCountryElement(countries)
let value = 0;
searchBar.addEventListener('keyup', function (event) {
    let filterArray = []
    const data = document.body.querySelector('#search-bar').value.toLowerCase()
    const dataDiv = document.querySelector('.data-div')
    dataDiv.innerHTML = ''
    if (value==1) {
        countries.forEach(function(e){
        if(e.toLowerCase().includes(data)){
            filterArray.push(e)
        }
        createCountryElement(filterArray)
    })
    }else if(value==0){
        const filteredCountries = countries.filter(country =>
            country.toLowerCase().startsWith(data)
        );
        createCountryElement(filteredCountries)
    }

})

button1.addEventListener('click', function (event) {
    if (button1.style.backgroundColor == 'rgb(130, 87, 220)') {
        button1.style.backgroundColor = 'rgb(90, 10, 180)'
        button2.style.backgroundColor = 'rgb(130, 87, 220)'
        value = 0;
    } else {
        button1.style.backgroundColor = 'rgb(130, 87, 220)'
        button2.style.backgroundColor = 'rgb(90, 10, 180)'
        value = 1;
    }
})

button2.addEventListener('click', function (event) {
    if (button2.style.backgroundColor == 'rgb(130, 87, 220)') {
        button2.style.backgroundColor = 'rgb(90, 10, 180)'
        button1.style.backgroundColor = 'rgb(130, 87, 220)'
        value = 1;
    } else {
        button2.style.backgroundColor = 'rgb(130, 87, 220)'
        button1.style.backgroundColor = 'rgb(90, 10, 180)'
        value = 0;
    }
})

button3.addEventListener('click', function (event) {
    if (button3.style.backgroundColor == 'rgb(130, 87, 220)') {
        button3.style.backgroundColor = 'rgb(90, 10, 180)'
        countries.sort().reverse()
        const clearDiv = document.querySelector('.data-div')
        clearDiv.innerHTML = ''
        createCountryElement(countries)
    } else {
        button3.style.backgroundColor = 'rgb(130, 87, 220)'
        countries.sort()
        const clearDiv = document.querySelector('.data-div')
        clearDiv.innerHTML = ''
        createCountryElement(countries)
    }
})

