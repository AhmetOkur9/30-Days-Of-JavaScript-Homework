//Exercises: Level 1

//Store you first name, last name, age, country, city in your browser localStorage.
let me = {
    firstName:"Ahmet Kaan",
    surname:"Okur",
    age:22,
    country:"Turkey",
    city:"Ankara"
}

localStorage.setItem("Me",JSON.stringify(me))

//Exercises: Level 2
//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.
//Store the student object in your browser localStorage.

let student = {
    firstName:"Mehmet",
    lastName:"Okur",
    age:18,
    skills:["HTML","Css","Javascript","React"],
    country:"Ankara"
}

localStorage.setItem("Student Info",JSON.stringify(student))

//Exercises: Level 3

//Create an object called personAccount. It has firstname, lastname, incomes,
//expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.



class personAccount{
    constructor(firstName,lastName,incomes,expenses){
        this.firstName = firstName,
        this.lastName = lastName,
        this.incomes = incomes,
        this.expenses = expenses
    }
}
let ahmet = new personAccount("Ahmet Kaan","Okur",[200,200,300],[100,23])


function totalIncome(user){
    if(localStorage.getItem(`${JSON.stringify(user.firstName)} incomes`)){
        return localStorage.getItem(`${JSON.stringify(user.firstName)} incomes`)
    }else{
        let acc = 0
        user.incomes.forEach(function(e){ acc = acc + e})
        localStorage.setItem(`${JSON.stringify(user.firstName)} incomes`,acc)
        return acc
    } 
}

function totalExpense(user){
    if(localStorage.getItem(`${JSON.stringify(user.firstName)} expenses`)){
        return localStorage.getItem(`${JSON.stringify(user.firstName)} expenses`)
    }else{
        let acc = 0
        user.expenses.forEach(function(e){ acc = acc + e})
        localStorage.setItem(`${JSON.stringify(user.firstName)} expenses`,acc)
        return acc
    }
}

function accountInfo(user){
    return `Fullname: ${user.firstName + " " + user.lastName} ,incomes:${user.incomes} ,expenses:${user.expenses}`
}

function addIncome(user,number){
    user.incomes.push(number)
    let currentInfo = parseInt(localStorage.getItem(`${JSON.stringify(user.firstName)} incomes`))
    localStorage.setItem(`${JSON.stringify(user.firstName)} incomes`, currentInfo + number)
    return "success"
}

function addExpense(user,number){
    user.expenses.push(number)
    let currentInfo = parseInt(localStorage.getItem(`${JSON.stringify(user.firstName)} expenses`))
    localStorage.setItem(`${JSON.stringify(user.firstName)} expenses`, currentInfo + number)
    return "success"
}

function accountBalance(user){
    let totalIncomes = user.incomes.reduce(((acc,curr) => acc + curr ),0)
    let totalExpenses = user.expenses.reduce(((acc,curr) => acc + curr),0)
    let acc = totalIncomes - totalExpenses
    saveLocalStorage("Account Balance",acc)
    return acc
}

function saveLocalStorage(key,value){
    localStorage.setItem(key,value)
}



console.log(totalIncome(ahmet))
console.log(totalExpense(ahmet))
console.log(addIncome(ahmet,200))
console.log(addExpense(ahmet,140))
console.log(accountBalance(ahmet))
// localStorage.clear()
console.log(ahmet)