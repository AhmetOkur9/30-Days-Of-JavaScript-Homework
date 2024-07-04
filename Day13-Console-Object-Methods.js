//Exercises:Level 1

//Display the countries array as a table
console.log(countries2)

//Display the countries object as a table
console.table(countries2)

//Use console.group() to group logs
console.group('Countries')
console.log(countries2)
console.groupEnd()

//Exercises:Level 2

//0 > 2 * 10 use console.assert()
console.assert(0 > 2 * 10, "20 is not greater than 0")

//Write a warning message using console.warn()
console.warn("You have made to many transactions")

//Write an error message using console.error()
console.log("You exceeded the transaction limit")


//Exercises:Level 3
//Check the speed difference among the following loops: while, for, for of, forEach

let result = new Array(1000).fill().map((value,index) => index);

console.time("calculate while")
i=0
while(i<1000){
    i++
}
console.timeEnd("calculate while")

console.time("calculate for")
for(i=0;i<1000;i++){

}
console.timeEnd("calculate for")

console.time("calculate forEach")
result.forEach(function(number){

})
console.timeEnd("calculate forEach")

console.time("calculate forOf")
for(const number of result){

}
console.timeEnd("calculate forOf")

