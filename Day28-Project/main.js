const formElement = document.body.querySelectorAll('input')
const playerList = document.body.querySelector('#player-list')


const form = document.querySelector('.form')
const formName = formElement[0]
const formLastName = formElement[1]
const formCountry = formElement[2]
const formPlayerScore = formElement[3]
const submitButton = formElement[4]




form.addEventListener('submit', function (event) {
    addPlayerUI()


    
    event.preventDefault()
})


playerList.addEventListener('click',function(event){
    deletePlayerUI(event)
    playerScoreUp(event)
    playerScoreDown(event)
})

function playerScoreDown(event){
    if(event.target.className.includes('player-down-button')){
        const div = event.target.parentElement.parentElement
        const scoreDiv = div.querySelector('.score')
        let score = parseInt(scoreDiv.textContent)
        score = score - 5
        scoreDiv.textContent = score
    }
}

function playerScoreUp(event){
    if(event.target.className.includes('player-up-button')){
        const div = event.target.parentElement.parentElement
        const scoreDiv = div.querySelector('.score')
        let score = parseInt(scoreDiv.textContent)
        score = score + 5
        scoreDiv.textContent = score
    }
}

function deletePlayerUI(event){
    if(event.target.className.includes('player-delete-button')){
        event.target.parentElement.parentElement.remove()
    }
}

function addPlayerUI() {
    const playerDiv = document.createElement('div')
    playerList.appendChild(playerDiv)
    playerDiv.classList.add('player-div')
    playerDiv.style.display = 'flex'
    playerDiv.style.justifyContent = 'space-between'
    playerDiv.style.alignItems = 'center'
    playerDiv.style.padding = '1.5rem 2rem 1.5rem 2rem'
    playerDiv.style.margin = '0 0 1rem 0'
    playerDiv.style.borderRadius = '4px'
    playerDiv.style.backgroundColor = '#E5C9C5'

    const playerInfoDiv = document.createElement('div')
    playerDiv.appendChild(playerInfoDiv)
    playerInfoDiv.classList.add('player-info-div')

    const playerName = document.createElement('h2')
    playerInfoDiv.appendChild(playerName)
    playerName.fontWeight = '100'
    playerName.textContent = `${formName.value} ${formLastName.value}`
    formName.value = ''
    formLastName.value = ''


    const playerDate = document.createElement('h2')
    playerInfoDiv.appendChild(playerDate)
    const nowDate = new Date()
    playerDate.textContent = `${nowDate.getMonth()} ${nowDate.getDay()}, ${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()} `
    playerDate.style.fontWeight = '100'
    playerDate.style.fontSize = '16px'


    const playerCountryDiv = document.createElement('div')
    playerDiv.appendChild(playerCountryDiv)
    playerCountryDiv.classList.add('player-country-div')

    const playerCountry = document.createElement('h2')
    playerDiv.appendChild(playerCountry)
    playerCountry.style.fontWeight = '100'
    playerCountry.textContent = formCountry.value
    formCountry.value = ''


    //score
    const playerScoreDiv = document.createElement('div')
    playerDiv.appendChild(playerScoreDiv)
    playerScoreDiv.classList.add('player-score-div')

    const playerScore = document.createElement('h2')
    playerDiv.appendChild(playerScore)
    playerScore.classList.add('score')
    playerScore.style.fontWeight = '100'
    playerScore.textContent = parseInt(formPlayerScore.value)
    formPlayerScore.value = ''

    const playerEditDiv = document.createElement('div')
    playerDiv.appendChild(playerEditDiv)
    playerEditDiv.classList.add('player-edit-div')

    const deleteButton = document.createElement('button')
    playerEditDiv.appendChild(deleteButton)
    deleteButton.classList.add('player-button')
    deleteButton.classList.add('player-delete-button')
    deleteButton.classList.add('fa-solid')
    deleteButton.classList.add('fa-trash')
    deleteButton.classList.add('fa-xl')

    const scoreUpButton = document.createElement('button')
    playerEditDiv.appendChild(scoreUpButton)
    scoreUpButton.classList.add('player-button')
    scoreUpButton.classList.add('player-up-button')
    scoreUpButton.classList.add('fa-solid')
    scoreUpButton.classList.add('fa-up-long')
    scoreUpButton.classList.add('fa-xl')

    const scoreDownButton = document.createElement('button')
    playerEditDiv.appendChild(scoreDownButton)
    scoreDownButton.classList.add('player-button')
    scoreDownButton.classList.add('player-down-button')
    scoreDownButton.classList.add('fa-solid')
    scoreDownButton.classList.add('fa-down-long')
    scoreDownButton.classList.add('fa-xl')

    const playerButton = document.body.querySelectorAll('.player-button')
    playerButton.forEach(function (btn) {
        btn.style.backgroundColor = 'white'
        btn.style.border = 'none'
        btn.style.padding = '16px 8px'
        btn.style.margin = '0 4px'
        btn.style.borderRadius = '50%'
    })
    
}




