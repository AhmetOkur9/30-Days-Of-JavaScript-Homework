
//Exercise: Level 1
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const h1 = document.querySelector('h1')
console.log(h1)

//Get each of the the paragraph using document.querySelector('#id') and by their id
const h2 = document.querySelector('#header-2')
console.log(h2)

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const list = document.querySelectorAll('li')
console.log(list)

//Loop through the nodeList and get the text content of each paragraph
list.forEach(function(p){
    console.log(p.innerHTML)
})

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
console.log(list[3].innerHTML = list[3].innerText + " Text ");

//Exercise: Level 2
//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const li = document.getElementsByTagName('li');
[...li].forEach(function(e,index){
    e.style.border = '1px solid'
    e.style.padding = '10px'
})
console.log(li)

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

let color = "black";
[...li].forEach(function(e,index){
    if(index%2 == 0){
        color = "green";
    }else{
        color = "red";
    }
    e.style.backgroundColor = `${color}`
})
console.log(li)

//Exercise: Level 3
//This exercise is in day21-mini-project