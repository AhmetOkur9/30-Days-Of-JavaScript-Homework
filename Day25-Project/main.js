const header = document.body.querySelector('#countries')
const h2 = document.querySelector('h2')
const subtitle = document.querySelector('.subtitle')

const main = document.body.querySelector('main')
const wrapper = document.body.querySelector('.wrapper')
const graphButtons = document.body.querySelector('.graph-buttons')
const populationBtn = document.body.querySelector('.population')
const languagesBtn = document.body.querySelector('.languages')
const graphTitle = document.body.querySelector('.graph-title')
const h4 = document.body.querySelector('h4')

document.body.style.backgroundColor = '#F0F0F0'

header.style.textAlign = 'center'

subtitle.textContent = 'Currently, we have 250 countries'
subtitle.style.fontSize = '24px'

h2.style.color = '#F2A93B'
h2.style.fontSize = '64px'


main.style.textAlign = 'center'


graphButtons.style.backgroundColor = 'white'
graphButtons.style.borderTop = '1px solid black'
graphButtons.style.borderBottom = '1px solid black'
graphButtons.style.paddingTop = '2rem'
graphButtons.style.paddingBottom = '2rem'
graphButtons.style.marginBottom = '4rem'



populationBtn.style.padding = '.5rem 1rem .5rem 1rem'
populationBtn.style.backgroundColor = '#F2A93B'
populationBtn.style.border = 'none'

languagesBtn.style.padding = '.5rem 1rem .5rem 1rem'
languagesBtn.style.backgroundColor = '#F2A93B'
languagesBtn.style.border = 'none'

h4.style.fontSize = '24px'


//canvas olusturma
const canvas = document.createElement('canvas')
canvas.getContext('2d')
document.body.querySelector('#stat').appendChild(canvas)
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

console.log(canvas)

console.log(countries_data)
//Population
countries_data.sort((a,b) =>  b.population - a.population )
populationBtn.addEventListener('click',function(event){
    h4.textContent = `10 Most populated countries in the world`


    myChart.data.datasets[0].label = 'Population'
    myChart.data.labels = []
    myChart.data.datasets[0].data = []
    for(i=0 ;i<10 ; i++){ 
        myChart.data.labels.push(countries_data[i].name)
        myChart.data.datasets[0].data.push(countries_data[i].population)
    }
    myChart.update();
})


const languageCounts = {};
countries_data.forEach(country => {
    country.languages.forEach(language => {
        if (languageCounts[language]) {
            languageCounts[language]++;
        } else {
            languageCounts[language] = 1;
        }
    });
});
const langArray = Object.keys(languageCounts).map(language => ({
    language: language,
    count: languageCounts[language]
}));
langArray.sort((a, b) => b.count - a.count);
const top10Languages = langArray.slice(0, 10);
console.log(top10Languages)


languagesBtn.addEventListener('click',function(event){
    h4.textContent = `10 Most Spoken languages countries in the world`

    myChart.data.datasets[0].label = 'Count'
    myChart.data.labels = []
    myChart.data.datasets[0].data = []
    for(i=0 ;i<10 ; i++){ 
        myChart.data.labels.push(top10Languages[i].language)
        myChart.data.datasets[0].data.push(top10Languages[i].count)
    }
    myChart.update();
})