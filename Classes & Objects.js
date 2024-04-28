class HondaCar{

    constructor(brand,milage){
        console.log('Welcome to Carbooking...')
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log('car can start');
    }

    stop(){
        console.log('car can stop');
    }
        // As brand is defined in constructor no need to define here
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

let Civic=new HondaCar("civic",10);//Constructr will first initilize by default...
console.log(Civic)



let Accord=new HondaCar("brand",50);//Constructr will first initilize by default...
Accord.brand="Accord" //Contructor argument brand is not define while on creating object it can assign after object like this
console.log(Accord)

console.clear();

class Pc{
    
    Lcd(){
        console.log('required LCD...')
    }
}

class laptop extends Pc{
    power(){
        console.log('No Need for CPU')
    }
}

let n=new laptop()
console.log(n.Lcd());
 




console.clear()

class Person{
    constructor(){
        this.gender="male or female"
    }
    eat(){
        console.log('Can Eat');
    }
    sleap(){
        console.log('can sleep')
    }
    work(){
        console.log('Let assign  him some work...')
    }
}

class Engineer extends Person{
   
     constructor(branch){
        super();// to invoke parent class constructor
        this.branch=branch;
    }

    degree(){
        console.log('Should be gratuated ')
    }

    work(){
        console.log('Built Apps and website')
    }
    
}

let hiring=new Engineer("Computer Science");
console.clear();

class User{
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    viewData(){
        console.log('Here is the data of user...')
    }
}

let Studen1=new User("Ali",'ali@gmail.com');
let Studen2=new User("Salman",'salman@gmail.com');

class Admin extends  User{
    constructor(name,email,rollno){
        super(name,email)
        this.rollno=rollno;
    }
    
        editData(){
            console.log('Admin can edit Data...')
        }
}

let superAdmin= new Admin('admin','admin@gmail.com',123);