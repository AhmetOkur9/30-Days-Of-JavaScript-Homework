//Exercises: Level 1

//Calculate the total annual income of the person from the following text.
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const sentence1 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let regex1 = /\d+/g
let result1 = 0
sentence1.match(regex1).forEach(function(number){
    result1 = result1 + parseInt(number)
})
//console.log(result1)

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 
//4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const sentence2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."
let regex2 = /-?\d+/g
let array1 = []
sentence2.match(regex2).forEach(function(number){
    array1.push(number)
})
function maxDistance(){
    let sortedArray = array1.sort(function(a,b){a-b})
    let result = 0
    result = Math.abs(sortedArray[0]) + Math.abs(sortedArray[sortedArray.length-1])
    return result
}
//console.log(maxDistance())


//Write a pattern which identify if a string is a valid JavaScript variable

let regex3 = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
function isTrueVarible(sentence){
    let result = regex3.test(sentence)
    return result
}
//console.log(isTrueVarible("Ahmetokur15"))


//Exercises: Level 2


//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

let regex4 = /[A-Za-z]+/g
let result2 = paragraph.match(regex4)



function tenMostFrequentWords(array,number){
    let result = []
    array.forEach(function(word){
        let existWord = result.find(a => a.word === word)
        if(existWord){
            existWord.count++
        }else{
            result.push({
                word:word,
                count:1
            })
        }
    })
    result.sort((a,b) => b.count-a.count)
    let topTenWord = result.slice(0,number)
    return topTenWord
}
//console.log(tenMostFrequentWords(result2,10))


//Exercises: Level 3
//Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let fixedSentence = sentence.replace(/[%@\$#&]/g,'')
//console.log(tenMostFrequentWords(fixedSentence.split(" "),3))