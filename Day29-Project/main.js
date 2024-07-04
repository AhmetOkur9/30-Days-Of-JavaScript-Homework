const text = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENAH YETAYEH'


const div = document.querySelector('div')

div.style.minHeight = '40rem'


const h1 = document.querySelector('h1')
h1.style.padding = '50px 0 0 50px'
h1.style.fontSize = '64px'
h1.style.letterSpacing = '20px'

const h1Array = Array.from(text)

console.log(h1Array)

h1Array.forEach(function(e){
    h1.innerHTML = h1.innerHTML + `<span>${e}</span>`
})

let spanList = document.querySelectorAll('span')

setInterval(()=>{
    for(i=0 ; i <spanList.length ; i++){
        spanList[i].style.color = colorArray[Math.floor(Math.random() * 50) + 1]
    }
    div.style.backgroundColor = `${colorArray[Math.floor(Math.random() * 50) + 1]}`
},1900)

