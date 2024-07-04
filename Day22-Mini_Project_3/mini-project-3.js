let wrapper = document.querySelector('.wrapper')

let conteiner1 = document.createElement('div')
document.body.querySelector('.wrapper').appendChild(conteiner1)
conteiner1.className = 'container-1'
console.log(conteiner1)

let tittle = document.createElement('h1')
document.body.querySelector('.container-1').appendChild(tittle)

let span = document.getElementsByTagName('span')

let h2 = document.createElement('h2')
document.body.querySelector('.container-1').appendChild(h2)

let time = document.createElement('h3')
document.body.querySelector('.container-1').appendChild(time)



let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

//wrapper
wrapper.style.textAlign = 'center'

//title
tittle.className = 'header'
tittle.innerHTML = 'Asabeneh Yetayeh challenges in <span>2020</span>'
tittle.style.fontSize = '48px'
tittle.style.fontWeight = 'bolder'

//span

let count = 1
const colorInterval = setInterval(() => {
   count = count +1;
   if(count == colors.length){
    count = 0
   }
   span[0].style = `color:${colors[count]}`
   span[0].style.fontSize = '80px'

}, 1000);


//h2
h2.textContent = '30DaysOfJavaScript Challenge'
h2.style.fontWeight = 'Normal'
h2.style.textDecoration = 'underline'


//time
const months = ["","January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const now = new Date();
time.textContent = `${months[now.getMonth()]} ${now.getDate()},${now.getFullYear()} ${now.getHours()};${now.getMinutes()};${now.getSeconds()}`
time.style.fontSize = '24px'
time.style.display = 'inline'

let count2 = 4
const colorInterval2 = setInterval(()=>{
    count2 = count2 +1;
    if(count2 == colors.length){
        count = 0
    }

    time.style = `display:inline; padding: .10px 1rem .10px 1rem; background-color:${colors[count2]};font-size:24px`
},1000)


//list
const container2 = document.createElement('div')
document.body.querySelector('.wrapper').appendChild(container2)
container2.classList.add('container-2')
container2.style.margin = '4rem 10% 0 10%'



for(i=0 ; i < asabenehChallenges2020.challenges.length ; i++){
    let container2Div = document.createElement('div')
    document.body.querySelector('.container-2').appendChild(container2Div)
    container2Div.classList.add('container-2-div')
    container2Div.style.display = 'flex'
    container2Div.style.justifyContent ='space-between'
    container2Div.style.backgroundColor = '#5BBC7A'
    container2Div.style.margin = '.4rem'
}


let divCount = document.body.querySelectorAll('.container-2-div')
divCount.forEach(function(e,index){
    //h2
    const challengeHeader = document.createElement('h2')
    challengeHeader.classList.add('challenge-header')   
    e.appendChild(challengeHeader)
    challengeHeader.textContent = `${asabenehChallenges2020.challenges[index].name}`
    //h2 style
    challengeHeader.style.padding = '40px 0 0 5%'


    //list
    const challengeList = document.createElement('ul')
    challengeList.classList.add('challenge-list')
    challengeList.classList.add('toggle-list')
    e.appendChild(challengeList)
    const challengeListCount = asabenehChallenges2020.challenges[index].topics
    let listItems = ''
    for(i=0 ; i < challengeListCount.length ; i++){
        listItems += `<li>${challengeListCount[i]}</li>`
    }
    challengeList.innerHTML = listItems
    const courseName = document.querySelectorAll('.challenge-header')
    courseName.forEach(function(e,index){
        const sentenceArray = e.textContent.split(' ')
        lastWord = sentenceArray[sentenceArray.length-1]
        
    })
    
    


    
    //info
    const challengeInfo = document.createElement('h2')
    challengeInfo.classList.add('challenge-info')
    e.appendChild(challengeInfo)
    challengeInfo.textContent = `${asabenehChallenges2020.challenges[index].status}`
    challengeInfo.style.padding = '40px 5% 0 0'
    
})


const challengeDiv = document.body.querySelectorAll('.container-2-div')
challengeDiv.forEach(function(e,index){
    e.style.padding = '0 0 2rem 0'
    if(e.textContent.includes('Done')){
        e.style.backgroundColor = '#5BBC7A'
    }else if(e.textContent.includes('Ongoing')){
        e.style.backgroundColor = '#F7DC5C'
    }else{
        e.style.backgroundColor = '#EB695B'
    }
})


const courseList = document.querySelectorAll('.challenge-list')
    courseList.forEach(function(e,index){
    e.addEventListener("click", ()=>{
        e.classList.toggle('toggle-list')
    })
})

const toggleListClass = document.querySelectorAll('.toggle-list')
console.log(toggleListClass)





console.log(container2)

const container3 = document.createElement('div')
document.body.querySelector('.wrapper').appendChild(container3)
container3.classList.add('container-3')

const container2Tittle = document.createElement('h2')
document.body.querySelector('.container-3').appendChild(container2Tittle)
container2Tittle.textContent = 'Asabeneh Yetayeh'

const container2p = document.createElement('p')
document.body.querySelector('.container-3').appendChild(container2p)
container2p.textContent = 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my Linkedin or Github profile. Thank you so much for joining in my quest of changing everyone to developer'


container3.style.textAlign = 'center'
container3.style.margin = '4rem 15% 0 15%'
container3.style.fontSize = '20px'


const container4 = document.createElement('div')
document.body.querySelector('.wrapper').appendChild(container4)
container4.classList.add('container-4')

const container4Titles = document.createElement('div')
document.body.querySelector('.container-4').appendChild(container4Titles)
container4Titles.classList.add('container-4-titles')

const container4Skill = document.createElement('div')
document.body.querySelector('.container-4').appendChild(container4Skill)
container4Skill.classList.add('container-4-skills')

const container4Qualifications = document.createElement('div')
document.body.querySelector('.container-4').appendChild(container4Qualifications)
container4Qualifications.classList.add('container-4-Qualifications')
console.log(container4Skill)


//asabenehChallenges2020.author.titles[2]
for(i=0 ; i < asabenehChallenges2020.author.titles.length ; i++){
    const containerTitle = document.createElement('div')
    document.body.querySelector('.container-4-titles').appendChild(containerTitle)
    containerTitle.textContent = `${asabenehChallenges2020.author.titles[i]}`
    
}


for(i =0 ; i<asabenehChallenges2020.author.skills.length ; i++){
    const containerSkills = document.createElement('div')
    document.body.querySelector('.container-4-skills').appendChild(containerSkills)
    
    containerSkills.textContent = `${asabenehChallenges2020.author.skills[i]}`
}


for(i =0 ; i<asabenehChallenges2020.author.qualifications.length ; i++){
    const containerQualifications = document.createElement('div')
    document.body.querySelector('.container-4-Qualifications').appendChild(containerQualifications)
    containerQualifications.textContent = `${asabenehChallenges2020.author.qualifications[i]}`
}


//container4
container4.style.display = 'flex'
container4.style.textAlign = 'center'
container4.style.justifyContent ='space-between'
container4.style.padding = '4rem 15% 4rem 15%'
container4.style.fontSize = '20px'



const container5 = document.createElement('div')
document.querySelector('.wrapper').appendChild(container5)
container5.classList.add('container-5')
container5.style.margin = '0 15% 4rem 15%'

const container5H2 = document.createElement('h2')
document.querySelector('.container-5').appendChild(container5H2)
container5H2.textContent = 'keywords'

const container5Div = document.createElement('div')
document.querySelector('.container-5').appendChild(container5Div)
container5Div.classList.add('container-5-div')

asabenehChallenges2020.keywords.forEach(function(e,index){
    const container5Keywords = document.createElement('div')
    document.querySelector('.container-5-div').appendChild(container5Keywords)
    container5Keywords.textContent = `${asabenehChallenges2020.keywords[index]}`
    container5Keywords.style.display = 'inline-block'
    container5Keywords.style.padding = '.5rem .5rem .5rem .5rem'
    container5Keywords.style.backgroundColor = `${colors[index]}`
    container5Keywords.style.margin = '.2rem .2rem .2rem .2rem'
    container5Keywords.style.borderRadius = '30%'

})

