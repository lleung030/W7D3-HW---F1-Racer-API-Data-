// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// ("great blue heron", "garlic naan"), True)
// ("chickadee", "chocolate cake"), True)("brown bear", "bear claw"), False


// '''pass two parameters
// split into list
// loop through first String
// loop through second
// '''checking the first letter 1st parameter last
// '''same with second
// if they are equal
// return true

("great blue heron", "garlic naan")


function dinner(param1, param2){
    let lstA = param1.split('')
    let lstB = param2.split('')
    console.log(lstA) 
    console.log(lstB)
  
    if(lstA[0]==lstB[0] && lstA[lstA.length-1]==lstB[lstB.length-1]){
    return true
    } else {
    return false
    }
}
    

function dinners(param1, param2){
    if(param1.charAt(0)==param2.charAt(0) && param1.charAt(param1.length-1)==param2.charAt(param2.length-1)){
        return true
    } else {
        return false 
    }
}


console.log(dinner("great blue heron", "garlic naan"))
console.log(dinners("chickadees", "chocolate cake"))