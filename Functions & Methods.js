console.log('Functions & Methods')

function webDeveloper(){
    console.log('I am a web developer');
    
}


webDeveloper()

function cs(course,fee){
    console.log(course,fee)
}

cs('javascript',25000);


function sum(x,y){
    z=x+y;
    return z;
}

// arraow function
console.log(sum(10,20))

const multiply=((x,y)=>{
    return x*y;

})
console.log(multiply(12,5))

const arrowfunc=(()=>{
    setTimeout(()=>{
        console.log('Arrow Function')
    },2000)
    
})

// Callback function (will be through arrays)

let food=["Apple","Bread","Meet","Milk","Lemon"]

food.forEach((element,index,arr)=>{
    console.log(element,index,arr)
})


let num=[2,4,5,9,55]
num.forEach((element,square)=>{
    square=element*element;
    console.log(square)
})

// Methods
// Map

let bill=[22,666,225,6565,6363]
bill.map((element)=>{
    console.log(element)
})
//Filter
let filterbill=bill.filter((element)=>{
    return element>6000;
})
console.log(filterbill)

//Reduce

let reducebill=bill.reduce((element1,element2)=>{
    return element1+element2
})

console.log(reducebill)


let marks=[22,60,90,99,95,96]
let filterMarks=marks.filter((element)=>{
    return element>90;
})

console.log(filterMarks)