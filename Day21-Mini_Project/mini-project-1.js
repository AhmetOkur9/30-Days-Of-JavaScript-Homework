// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red


// The year color is changing every 1 second
const h1 = document.querySelector('h1')
const date = h1.textContent.match(/2020/)
h1.innerHTML = h1.innerHTML.replace(/(2020)/g , '<span>2020</span>')

const span = document.getElementsByTagName('span')
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

let count = 1
const colorInterval = setInterval(() => {
   count = count +1;
   if(count == colors.length){
    count = 0
   }
   span[0].style = `color:${colors[count]}`
   

   
}, 1000);


// The date and time background color is changing every on seconds
const time = document.createElement("h2")
document.querySelector('h2').appendChild(time)
const months = ["","January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const now = new Date();
time.textContent = `${months[now.getMonth()]} ${now.getDate()},${now.getFullYear()} ${now.getHours()};${now.getMinutes()};${now.getSeconds()}`

let count2 = 4
const colorInterval2 = setInterval(()=>{
    count2 = count2 +1;
    if(count2 == colors.length){
        count = 0
    }
    time.style = `color:${colors[count2]};font-size:24px`
},1000)

// Completed challenge has background green
const li = document.getElementsByTagName('li');

for(i=0 ; i < li.length ; i++){
    li[i].style.padding = '1rem 1rem 1rem 1rem'
    li[i].style.margin = 'margin:0 0 10px 0'
    li[i].style.maxWidth = '60%'
    li[i].style.border = '1px solid white'
    li[i].style.listStyleType = 'none'

    if(li[i].textContent.includes('Done')){
        li[i].style.backgroundColor = '#21BF73'
    }else if(li[i].textContent.includes('Ongoing') ){
        li[i].style.backgroundColor = '#F7DC5C'
    }else{
        li[i].style.backgroundColor = '#FD5E53'
    }
}

//


