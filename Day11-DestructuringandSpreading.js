const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

//Exercises: Level 1

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// /const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
//console.log(`e:${e}, pi:${pi}, gravity:${gravity}, humanBodyTemp:${humanBodyTemp}, waterBoilingTemp:${waterBoilingTemp}`)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries
//console.log(fin,est,sw,den,nor)


//Destructure the rectangle object by its properties or keys.
let { width: genislik, height: yukseklik, area: alan, perimeter: cevre } = rectangle
//console.log(genislik,yukseklik,alan,cevre)


//Exercises: Level 2
//Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
    //console.log(`name:${name} scores:${scores} skills:${skills} age:${age}`)
}

//Find the persons who have less than two skills
let haveLessSkillsUsers = []
for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        haveLessSkillsUsers.push(name, scores, skills, age)
    }
}
//console.log(haveLessSkillsUsers)

//Exercises: Level 3
//Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of countries2) {
    //console.log(`country:${name}, capital:${capital}, population:${population}, languages:${languages}`)
}

//A junior developer structure student name, skills and score in array of arrays which may not easy to read.
//Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, [html, css, js, react], [htmlPoint, cssPoint, jsPoint, reactPoint]] = student

let studentInfo = {
    name: name,
    skills: student[1],
    "Javascript Point": jsPoint,
    "React Point": reactPoint
}
//console.log(studentInfo)


//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array) {
    let result = []

    array.forEach(function(student){
        let [name,skills,points] = student
        result.push({
            name:name,
            skills:skills,
            scores:points 
        })
    })
    return result
}
//console.log(convertArrayToObject(students))

//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//96.satirda name var
let [ ,skills,scores] = student

let david = {
    name:name,
    skills:
    frontend=[
        {skill:html,level:10},
        {skill:css,level:8},
        {skill:js,level:8},
        {skill:react,level:9}
    ],
    scores:scores
}

const newStudent = {...david}
//console.log(david)
console.log(newStudent)

const ahmet = {
    name: 'Ahmet',
    age: 22,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

//In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
const { skills:{frontEnd}} = ahmet
frontEnd.push({ skill: 'Bootstrap', level: 8 });

//console.log(ahmet)

//Add Express with level 9 to the back end skill sets
const {skills:{backEnd}} = ahmet
backEnd.push({ skill: 'Express', level: 9 });

//Add SQL with level 8 to the data base skill sets
const {skills:{dataBase}} = ahmet
dataBase.push({skills:'SQL',level: 8})

//Add SQL without level to the data science skill sets
const {skills:{dataScience}} = ahmet
dataScience.push({skills:"SQL",level: undefined})

console.log(ahmet)