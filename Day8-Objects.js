//Exercises: Level 1
//Create an empty object called dog
const dog = {

}

//Print the the dog object on the console
console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name ='Casper'
dog.legs = 4
dog.color ='White'
dog.age = 6
dog.bark = 'woof woof'
//console.log(dog)

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

//Set new properties the dog object: breed, getDogInfo
dog.breed = false
dog.getDogInfo = function(){
    return `The dog named Casper is ${dog.age} years old. If you call him he says ${dog.bark}.`
}



//Exercises: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}


//Find the person who has many skills in the users object.
let maxSkills = 0;
let skilledPerson = null;

for (const user in users) {
  const currentUser = users[user]
  if(currentUser.skills.length > maxSkills){
    maxSkills = currentUser.skills.length
    skilledPerson = user
  }
}

//console.log(`${skilledPerson} has the most skills with ${maxSkills} skills.`);


//Count logged in users, count users having greater than equal to 50 points from the following object.
const successfulStudents = []
for(const user in users){
  const currentUser = users[user]
  if(currentUser.isLoggedIn || currentUser.points == 50){
    successfulStudents.push(user)
  }
}

//console.log(successfulStudents)


//Set your name in the users object without modifying the original users object
const newUsers = {...users};

newUsers.Kaan ={
  email: 'okur.ahmetkaangg@gmail.com',
  skills : ['HTML' , 'CSS' , 'Javascript' , 'C#'],
  age: 22,
  isLoggedIn : true,
  points : 60
}

//console.log(newUsers)


//Get all keys or properties of users object
const keys = Object.keys(users)
//console.log(keys)

const values = Object.values(users)
//console.log(values)

//Use the countries object to print a country name, capital, populations and languages.
let infoCountry = []

for(i = 0 ; i < countries.length ; i++){
  infoCountry.push({
    name : countries[i].name,
    capital : countries[i].capital,
    populations : countries[i].population,
    languages : countries[i].languages
  })
}
//console.log(infoCountry)

//Exercises : Level 3
const personAccount = {
  firstName: 'Ahmet Kaan',
  lastName: 'Okur',
  incomes: '$5500',
  expenses: '$2000',
  properties: [],
  totalInCome: function(){

  },
  totalExpensive: function(){

  },
  accountInfo:function(){

  },
  addInCome:function(){

  },
  addExpensive: function(){

  },
  accountBalance:function(){

  }
}

//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users1 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(id){
  for(i=0;i<users1.length;i++){
    if(users1[i]._id === id){
      return `Id is being used` 
    }
  }
  return `Registration Successful`
}

//console.log(signUp('ghderc'))

//b. Create a function called signIn which allows user to sign in to the application
function signIn(id,password){
  for(i=0 ; i<users1.length ;i++){
    if(users1[i]._id === id && users1[i].password === password){
      users1[i].isLoggedIn = true
      return 'Login is successful'
    }
  }
  return `Invalid id or password`
}

console.log(signIn('ghderc','123333'))

//a.Create a function called rateProduct which rates the product
function rateProduct(userId,productId,rate){
  for(i = 0 ; i<products.length ; i++){
    if(productId === products[i]._id){
      products[i].ratings.push({
        userId : userId,
        rate : rate
      })
      console.log('successful')
    }
  }
}

//rateProduct('eefamr','aegfal',4)


//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(){
  for(i = 0 ; i < products.length ; i++){
    let totalRate = 0
    let commentsNumber = 0
    products[i].ratings.forEach(function(user){
      totalRate = totalRate + user.rate
      commentsNumber = commentsNumber + 1
    })
    if(commentsNumber > 0){
      console.log(`Product: ${products[i].name} , Rate: ${totalRate / commentsNumber}`)
    }else{
      console.log(`Product: ${products[i].name} , Rate: ${0}`)
    }
  }
}
//averageRating()

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userId,productId,isLike){
  
  for(i=0 ; i<products.length ; i++){
    if(products[i].likes.forEach((userId)) === userId){
      isLike = false
    }else{
      isLike = true
    }
    if(isLike){
      
    }
  }
  
}

