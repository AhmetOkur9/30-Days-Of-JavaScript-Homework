
for (i = 0; i <= 101; i++) {
    let h1 = document.createElement('h1')
    h1.textContent = `${i}`
    let wrapper = document.querySelector('.wrapper').appendChild(h1)
    if (i == 2 || i == 3) {
        h1.style.backgroundColor = '#FD5E53'
        h1.style.display = 'inline-block'
        h1.style.minWidth = '15%'
        h1.style.padding = '5% 0 5% 0'
        h1.style.margin = '0'
        h1.style.border = '4px solid white'
        h1.style.textAlign = 'center'
    } else if (i % 2 == 0 || i % 3 == 0) {
        if (i % 2 == 0) {
            h1.style.backgroundColor = '#21BF73'
            h1.style.display = 'inline-block'
            h1.style.minWidth = '15%'
            h1.style.padding = '5% 0 5% 0'
            h1.style.margin = '0'
            h1.style.border = '4px solid white'
            h1.style.textAlign = 'center'
        } else {
            h1.style.backgroundColor = '#FDDB3A'
            h1.style.display = 'inline-block'
            h1.style.minWidth = '15%'
            h1.style.padding = '5% 0 5% 0'
            h1.style.margin = '0'
            h1.style.border = '4px solid white'
            h1.style.textAlign = 'center'
        }
    } else {
        h1.style.backgroundColor = '#FD5E53'
        h1.style.display = 'inline-block'
        h1.style.minWidth = '15%'
        h1.style.padding = '5% 0 5% 0'
        h1.style.margin = '0'
        h1.style.border = '4px solid white'
        h1.style.textAlign = 'center'
    }
}

