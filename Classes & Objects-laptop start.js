// Object

const student={
    name:"Salman",
    marks:"554",
    year:2024,
    printmarks:function(){
        console.log("marks",this.marks)//student.marks
    }
}
// write student in console to print student object
// console.log(student)

const employee={
    caltax(){
        console.log('calculate tax 10%....')
    }
}

const karanarjun={
    salary:9000
}
const karanarjun2={
    salary:9000
}
const karanarjun3={
    salary:9000
}
const karanarjun4={
    salary:9000
}
karanarjun.__proto__=employee;
karanarjun2.__proto__=employee;
karanarjun3.__proto__=employee;
karanarjun4.__proto__=employee;


//on console. karanajrun.caltax();


// Class

class ToyotaCar{
    start(){
        console.log('car can start')
    }

    stop(){
        console.log('car can stop')
    }
}

let myCar= new ToyotaCar();

console.log(myCar.start())