const sliderIcon = document.body.querySelector('#slider-icon')
const sliderWord = document.body.querySelector('#slider-word')
const animation = document.body.querySelector('.animation')
const courseKey = document.body.querySelector('#course-key')

sliderIcon.textContent = titles[0][0]
sliderWord.textContent = titles[0][1]



let sliderCount = 1
let keyCount = 1
let colorCount = 0

const sliderInterval = setInterval(()=>{
    // animation.classList.toggle('reset-animation')
    
    sliderIcon.textContent = titles[sliderCount][0]
    sliderWord.textContent = titles[sliderCount][1]
    

    sliderCount = sliderCount + 1
    keyCount = keyCount + 1
    colorCount = colorCount + 1

    
    courseKey.style.color = colorArray[colorCount]
    courseKey.textContent = keywords[keyCount]

    if(sliderCount == titles.length){
        sliderCount = 0
    }

    if(keyCount == keywords.length){
        keyCount = 0
    }

    if(colorCount == colorArray.length){
        colorCount = 0
    }

},2000) 




console.log(titles[1][0])