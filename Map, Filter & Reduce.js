const salaries=[500,600,700,800,900];

// Array map method
// Creates a New Array By Peforming some operation on each array element
const arr=salaries.map((element,index,array)=>{
    console.log(element,index,array)
    return element+10;
})

console.log(arr)

// Array Filter Method
// Create a new array of elemenets that gives a true condition 

let bill=[500,1000,1500,2000,2500];
let mybill=bill.filter(element=>{
    return element>1000;
    console.log(element);
})
console.log(mybill);

// Array Reduce Method

// Perfome some operations and reduce the array to a single value


let grossery=[500,155,2500,3000,3666]
let total=grossery.reduce((element1,element2)=>{
    return element1+element2
})
console.log(total);

// Reduce as a function

const suit=[500,100,2500,6600]

const suitfunc=(element1,element2)=>{
    return element1+element2;
}
const finalSuitPrice=suit.reduce(suitfunc);
console.log(finalSuitPrice);


