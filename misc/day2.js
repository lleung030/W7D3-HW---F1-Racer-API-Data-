//map reduce filter .forEach



// nums = nums.map((x => x * 2))

// console.log(nums)


//thats really smart 

function customMap(arr, callback){
    for (let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return arr
}

// console.log(customMap(nums, (x) => x *2))


//reduce
//x = previous value
//y = current value
//e.g x = 1
//e.g y = 2
//then x = 3
//y = 3...
// let sum = nums.reduce((x, y) => {
//     // console.log(x,y)
//     return x + y
// })






let nums = [1,2,3,4]

// function customReduce(arr, callback){
//     let acc = arr[0]
    
//     for (let i = 1; i < arr.length; i++){
//         acc = callback(acc, arr[i])
//     }
//     return acc
// }


// console.log(customReduce(nums, (x, y) => x + y))




function customReduce(arr, callback, initialValue = 0){
    let acc = initialValue
    
    for (let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i])
    }
    return acc
}


// console.log(customReduce(nums, (x, y) => x + y))




// console.log(sum)




//filter 
//return true keep value
//return false kick value

let nums2 =[2,3,4,5,6]

let evens = nums2.filter((x) => x%2 == 0)

console.log(evens)

function customFilter(arr, callback){
    let resultArr = []
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}

// console.log(customFilter(nums2, (x) => x % 2 == 0))

//in looping through indices
//of lopping through items


//forEach

let nums3 = [1,2,3,4,5,6,7]


nums3.forEach((val, idx) =>{
    // console.log(`The current value is ${val} and the current index is ${idx}`)
})

// function customFilter(arr, callback){
//     resultArr = []

//     arr.forEach((val) => {
//         if (callback(val)) {
//             resultArr.push(val)
//         }
//     })
//     return resultArr
// }

// console.log(customFilter(nums3, (x) => x*2==0))







/* 
* Exercises
*/

// Map:
// Take in an array of names, and convert each index to the string, "Hello NAME" using the map method
let names = ["Lucas", "John", "Charles", "Brendan", "Devon", "Hayden"]

//Solution 1
names.forEach((val) =>{
    console.log(`Hello ${val}`)
})

//Solution 2
names = names.map((name => `Hello ${name}`))
console.log(names)

// Filter:
// Take in an array of words and filter out any alphabetically AFTER the word "Coding Temple"
let words = ["Apple", "Banana", "Chicken", "Zebra"]

let word = words.filter((x) => x <= 'Coding Temple')
console.log(word)

// Reduce:
// Use reduce to multiply each number in a list and find the total product
let nums4 = [1,2,4,5,6,7,8]    

function customReduce(arr, callback){
    let acc = arr[0]
    
    for (let i = 1; i < arr.length; i++){
        acc = callback(acc, arr[i])
    }
    return acc
}

console.log(customReduce(nums4, (x, y) => x * y))
