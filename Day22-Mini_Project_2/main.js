
const header = document.querySelector('header')
const headerH2 = header.querySelector('h2')
const headerH3 = header.querySelectorAll('h3')
const headerH4 = header.querySelector('#total-countries')


document.body.style.fontFamily = 'Arial'

header.style.textAlign = 'center'

headerH2.style.fontSize = '64px'
headerH2.style.letterSpacing = '12px'
headerH2.style.textTransform = 'uppercase'

headerH4.textContent = `Total Number of countries: ${countries2.length}`
headerH4.style.fontSize = '32px'

for(i=0 ; i<headerH3.length ; i++){
    headerH3[i].style.fontSize = '24px'
    headerH3[i].style.fontWeight = 'normal'
}
console.log(headerH2)




const wrapper = document.querySelector('.countries-wrapper')

for(i=0 ; i<countries2.length ; i++){
    const countryCard = document.createElement('h1')
    countryCard.textContent = `${countries2[i].name}`
    
    wrapper2 = document.querySelector('.countries-wrapper').appendChild(countryCard)
    
    wrapper.style.textAlign = 'center'
    wrapper.style.display = 'grid'
    wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))'
    
    countryCard.style.display = 'flex'
    countryCard.style.fontSize = '32px'
    countryCard.style.paddingTop = '2rem'
    countryCard.style.margin = '.2rem'
    countryCard.style.minHeight = '12rem'
    countryCard.style.maxWidth = '14rem'
    countryCard.style.textAlign = 'center'
    countryCard.style.justifyContent = 'center'
    countryCard.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.1)';
    countryCard.style.fontWeight = 'normal'
}

