
//Exercises: Level 1
//Create a closure which has one inner function
function counter(){
    count=0;
    function up(){
        count++
        return count
    }
    function reset(){
        count = 0
        return count
    }
    return{
        up:up,
        reset:reset
    }
}

let counter1 = counter()

// console.log(counter1.up())
// console.log(counter1.up())
// console.log(counter1.reset())


//Exercises: Level 2
//Create a closure which has three inner functions
function bankAccount(){
    mySalary = 3000;
    money = 2000;
    function buy(){
        money = money - 100;
        return money
    }
    function salary(){
        money = money + mySalary
        return money
    }
    function payment(){
        money = money - 1500
        return money
    }

    return{
        buy:buy,
        salary:salary,
        payment:payment
    }
}

let myBankAccount = bankAccount();

// console.log(myBankAccount.buy())
// console.log(myBankAccount.salary())
// console.log(myBankAccount.payment())
// console.log(myBankAccount.salary())


//Exercises: Level 3
//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(){
    const firstName="Ahmet Kaan"
    const lastName="Okur"
    let incomes= 20000
    let expenses = 5000

    function totalIncome(){
        return `Your total income this month is ${incomes} TL`
    }
    function totalExpense(){
        return `Your total expenditure this month is ${expenses} TL`
    }
    function addIncome(addIncome){
        incomes = incomes + addIncome
        return `${addIncome} TL added to your account. `
    }
    function addExpense(addExpense){
        expenses = expenses + addExpense
        return  `You have successfully spent ${addExpense} TL`
    }
    function accountBalance(){
        return `${incomes-expenses} TL left in your account`
    }
    function accountInfo(){
        return `First Name: ${firstName}, Last Name: ${lastName}, Balance: ${incomes-expenses}, Incomes:${incomes} , Expenses:${expenses}`
    }

    return{
        totalIncome:totalIncome,
        totalExpense:totalExpense,
        addIncome:addIncome,
        addExpense:addExpense,
        accountBalance:accountBalance,
        accountInfo:accountInfo
    }
}

const person1 = personAccount();
console.log(person1.totalIncome())
console.log(person1.totalExpense())
console.log(person1.addIncome(3000))
console.log(person1.addExpense(1250))
console.log(person1.accountBalance())
console.log(person1.accountInfo())