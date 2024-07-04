//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color,legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs
    }


}


//Create a Dog and Cat child class from the Animal Class.
const dog = new Animal('Maya',11,'white',4);
const cat = new Animal('Yumak',10,'grey',4);



//Override the method you create in Animal class
class human extends Animal{
    constructor(name,age,color,legs,gender){
        super(name,age,color,legs)
        this.gender = gender
        
    }
}



//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
//In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
//You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    constructor(data){
        this.data = data
        this.convertArray = [...this.data]
    }

    

    try(){
        return this.convertArray
    }

    count(){
        return this.data.length;
    }

    sum(){
        return this.data.reduce((acc,value) => acc + value , 0 )
    }

    min(){
        return Math.min(...this.data)
    }

    max(){
        return Math.max(...this.data)
    }

    range(){
        return Math.max(...this.data) - Math.min(...this.data)
    }

    mean(){
        return this.sum() / this.count()
    }

    median(){
        const sorted = this.data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

}

let statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
