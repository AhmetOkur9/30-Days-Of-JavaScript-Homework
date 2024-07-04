document.body.style.textAlign = 'center'

const h1 = document.body.querySelector('h1')
h1.style.fontSize = '48px'
h1.style.color = '#64C082'

const h2 = document.body.querySelector('h2')
h2.style.fontWeight = 'normal'
h2.style.fontSize = '32px'

const h3 = document.body.querySelector('h3')
h3.style.fontWeight = 'normal'
h3.style.fontSize = '24px'

const textBox = document.createElement('input')
document.body.querySelector('.wrapper').appendChild(textBox)
textBox.type = 'text'
textBox.style.width = '40%'
textBox.style.height = '2rem'
textBox.style.marginRight = '2rem'
textBox.placeholder = 'Generate more numbers'


const button = document.createElement('button')
document.body.querySelector('.wrapper').appendChild(button)
button.textContent = 'Generate Numbers'
button.style.padding = '.5rem .5rem .5rem .5rem'
button.style.color = 'white'
button.style.backgroundColor = '#5BBC7A'
button.style.fontSize = '16px'
button.style.border = 'none'

const numbersDiv = document.createElement('div')
document.body.querySelector('.wrapper').appendChild(numbersDiv)
numbersDiv.classList.add('numbers-div')
numbersDiv.style.margin = '4rem 10% 1rem 10%'





function isPrime(num) {
    if (num <= 1) return false; // 1'den küçük veya eşit sayılar asal değildir
    if (num <= 3) return true; // 2 ve 3 asaldır

    if (num % 2 === 0 || num % 3 === 0) return false; // 2 ve 3'e bölünen sayılar asal değildir

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}






let number = 0;
let numbers = []

button.addEventListener('click', function (e) {
    let a = textBox.value
    if (isNaN(a) || a.trim() === "" ) {
        alert('Please enter a valid number')
        a = 0
        number = 0
        textBox.value = ''
    } else {
        number = parseInt(a)
        numbers.push(number)
        textBox.value = ''
        let index = numbers.length - 1
        let div = document.createElement('div')
        if (numbers[index] == 2 || numbers[index] == 3 || numbers[index] == 5 || numbers[index] == 7 || numbers[index] == 11 || numbers[index] == 13) {
            div.style.backgroundColor = '#EB695B'
            div.style.display = 'inline-block'
            div.style.padding = '.5rem 2rem .5rem 2rem'
            div.style.margin = '.2rem'
            div.style.fontSize = '24px'
            document.body.querySelector('.numbers-div').appendChild(div)
            div.textContent = `${numbers[index]}`

        } else if (numbers[index] % 2 == 0 || numbers[index] % 3 == 0) {
            if (numbers[index] % 3 == 0 || numbers[index] == 1) {
                div.style.backgroundColor = '#F7DC5C'
                div.style.display = 'inline-block'
                div.style.padding = '.5rem 2rem .5rem 2rem'
                div.style.margin = '.2rem'
                div.style.fontSize = '24px'
                document.body.querySelector('.numbers-div').appendChild(div)
                div.textContent = `${numbers[index]}`
            } else {
                div.style.backgroundColor = '#5BBC7A'
                div.style.display = 'inline-block'
                div.style.padding = '.5rem 2rem .5rem 2rem'
                div.style.margin = '.2rem'
                div.style.fontSize = '24px'
                document.body.querySelector('.numbers-div').appendChild(div)
                div.textContent = `${numbers[index]}`
            }
        } else {
            div.style.backgroundColor = '#EB695B'
            div.style.display = 'inline-block'
            div.style.padding = '.5rem 2rem .5rem 2rem'
            div.style.margin = '.2rem'
            div.style.fontSize = '24px'
            document.body.querySelector('.numbers-div').appendChild(div)
            div.textContent = `${numbers[index]}`
        }
    }


})


console.log(textBox)