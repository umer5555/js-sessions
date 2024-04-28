// for loop

let i=1;
for(i;i<=5;i++){
    console.log(i)
}

// While Loop

let j=10;
while(j<15){
    console.log(j);
    j++;
}

// For In

// A for-in loop is used to loop through the properties of an object.

const employee={
    name:'salman',
    salary:20000
}

for(let details in employee ){
    console.log(details + ":"+employee[details])
}

// FOR Of 

const webDeveloper=["Ali","Hamza","Sohaib","Sami","Noman"]

for(let alldeveloper of webDeveloper){
    console.log(alldeveloper)
}
console.clear();

// forEach

let taxpaeyrs=["Noman","Khalid","Shoaib","Azam","Nomi"]
taxpaeyrs.forEach((elements)=>{
    console.log(elements);
})


