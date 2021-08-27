// random numbers between 1-100

let n1 = Math.floor(Math.random(1,100) * 100) + 1;

let n2 = Math.floor(Math.random(1,100) * 100) + 1;

let n3 = Math.floor(Math.random(1,100) * 100) + 1;



// put variables into an array

let array = [n1,n2,n3]



// output

console.log(array)

console.log(findSum(array))

console.log(findMin(array))

console.log(findMax(array))



// loop for sum the value in an array 

function findSum(array){

    let sum = 0

    for (let i = 0; i < array.length; i++) {

         sum += array[i];

    }

    return sum 

}



// use Math.min to find the minimum value in an array

function findMin(array){

    return Math.min(...array)

}



// use Math.max to find the maximum value in an array

function findMax(){

    return Math.max(...array)

}