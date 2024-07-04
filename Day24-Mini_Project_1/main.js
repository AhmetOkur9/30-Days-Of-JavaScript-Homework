const header = document.querySelector('header')
const h1 = document.querySelector('h1')
const kgInput = document.querySelector('#mass')
const planetOption = document.querySelector('select')
const selectPlanet = document.querySelector('option')
const button = document.querySelector('button')

const main = document.querySelector('main')
const flexContainer = document.querySelector('.flex-container')
const img = document.querySelector('img')

document.body.style.backgroundImage = "url('images/galaxy.gif')"
h1.style.color = 'white'
h1.style.fontSize = '48px'

kgInput.style.width = '40%'
kgInput.style.height = '2rem'


planetOption.style.width = '10%'
planetOption.style.height = '2rem'

button.style.padding = '.5rem .5rem .5rem .5rem'
button.style.fontSize = '16px'
button.style.border = 'none'

let planetList = [['Earth',9.81],['Jupiter',24.79],['Mars',3.71],['Mercury',3.7],['Moon',1.62],['Neptune',11.15],['Pluto',0.62],['Saturn',10.44],['Uranus',8.69],['Venus',8.87]]
let planetList1 = ['Earth','Jupiter','Mars','Mercury','Moon','Neptune','Pluto','Saturn','Uranus','Venus']

console.log(planetList1)
function addPlanet(){
    planetList.forEach(function(planet){
        let newOption = document.createElement('option')

        newOption.text = planet[0]
        newOption.value = planet[0].toLowerCase()

        planetOption.add(newOption)
    })
}
addPlanet()

const warningDiv = document.createElement('div')
document.body.querySelector('.flex-container').appendChild(warningDiv)
//console.log(warningDiv)

//header
header.style.textAlign = 'center'
button.addEventListener('click',function(event){
    
    if(planetOption.value == 'none' || !kgInput.value || isNaN(kgInput.value)){
        warningDiv.style.display = 'block'
        warningDiv.textContent ='Please enter complete information'
        img.style.display = 'none'
    }else{
        img.style.display = 'inline'
        img.src = `images/${planetOption.value}.png`
        
        warningDiv.style.display = 'inline'
        
        planetList.forEach(function(planet){
            if(planet[0].toLowerCase() == planetOption.value){
               let output =  warningDiv.textContent = `The mass you chose on ${planet[0]} is ${planet[1] * parseInt(kgInput.value)} Newton.`
                warningDiv.textContent = output
            }
        })

    }
})


//
main.style.textAlign = 'center'
main.style.backgroundColor = 'rgba(128, 128, 128, 0.25)'
main.style.margin = '4rem 10% 0rem 10%'

flexContainer.style.color = 'white'
flexContainer.style.fontSize = '64px'