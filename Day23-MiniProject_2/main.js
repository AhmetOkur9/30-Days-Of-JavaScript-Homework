const header = document.createElement('div')
document.body.appendChild(header)

document.body.style.textAlign = 'center'

header.textContent = `Press any keyboard key`
header.style.display = 'inline-block'
header.style.padding = '1rem 5rem 1rem 5rem'
header.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
header.style.fontSize = '64px'
header.style.margin = '4rem'

const infoDiv = document.createElement('div')
document.body.appendChild(infoDiv)
infoDiv.classList.add('info-div')


const info = document.createElement('div')
document.body.querySelector('.info-div').appendChild(info)
info.style.display = 'inline-block'
info.style.fontSize = '32px'
info.style.padding = '4rem 5rem 4rem 5rem'
info.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'



document.addEventListener('keydown',function(e){
    header.textContent = `Press any keyboard ${e.key}`
    info.textContent = `${e.code}`
})
