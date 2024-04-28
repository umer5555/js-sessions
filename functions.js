// Named Function
function employee(name){
    return name;
}

console.log(employee("Ali"))

// Anonymous Function

let multiply=function(a,b){
    return a*b;
}

console.log(multiply(3,5))
// console.clear();

// Arrow Function 

let square=(x)=>{
    return x*x
}
console.log(square(4))
// console.clear();

const getRollNo=(student)=>{
    return student.rollNo;
}
const student={
    name:'Ali',
    rollNo:555
}
console.log(getRollNo(student)); 

// Imediately Invoked Function Expression IIFE

// Anonymous IIFE

(function(){
    var message="Hello I am an IIFE";
    console.log(message);
})();

(function(x){
    
    console.log(x*x)
})(10);


// Named IIEF
(function greeting(){
    var name="Ali"
    console.log("Welcome " + name);
})();
console.clear();
// Returning Values
const result=(function(){
    var x=10;
    var y=20;
    return x+y;
})();
console.log(result);

// High Order Function
// Map, Filter & Reduce in High Order Function
let array=[10,20,36]
let newarray=array.map((element)=>element+10);
console.log(newarray);

// Constructor Function

function person(name,place){
    this.name=name;
    this.place=place;
}
let user1=new person("Adam","Canada")
console.log(`Hello! My name is ${user1.name} and I am from ${user1.place}`)