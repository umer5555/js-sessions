// Synchronous
console.log('one');
console.log('two');
console.log('theree');



// Asynchronous

// function hello(){
//     console.log('hello');
// }
// console.log('Where are You??')
// setTimeout(hello,2000);

// setTimeout(() => {
//    console.log("I am here") 
// }, 5000);

// console.log('i am getting late')
// console.log('how much time ???')

console.clear();

// Call Back
// aisa function jo kisi dosrey function kay andar as an argument pass hota ha usko callback function kehty hain 
function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumcallback){
    sumcallback(a,b)

}
calculator(3,6,sum)

console.clear();

// function getData(dataId){
//     console.log("data",dataId)
// }
// Callback Function is function in nested and it will call through arrow function



function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log('data',dataId);
        if(getNextData){
            getNextData()
        }
         
    },2000)
}

// CallBACK Hell
// getData(1,()=>{
//     console.log('loding data 2....');
//     getData(2,()=>{
//     console.log('loding data 3....');

//         getData(3,()=>{
//     console.log('loding data 4....');

//             getData(4);
//         })
//     })
// });

// Promise

// let promise= new Promise((resolve,reject)=>{
//     console.log('I am a promise');
//     // resolve('i am successfull');
//     reject("Some Error occured...");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('data', dataId)
//             resolve('success');
//             if(getNextData){
//                 getNextData();
//             }
//         }, 2000);
//     })
// }


// const mypromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('I am a promise...')
//         // resolve('sucess');
//         reject('Netwok error...');
//     })
// }
//  let promise=mypromise();

//  For Print resolve we use .then

//  promise.then((res)=>{
//     console.log("Program Sucessfully Executed...",res)
//  })


// for print error we use .catch
//  promise.catch((error)=>{
//     console.log('Web server not available in your region...',error)
//  })

function asyncfunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data1');
            resolve('access granted....')
        },3000)
    })
}

function asyncfunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data2');
            resolve('access granted....')
        },3000)
    })
}

// let p1=asyncfunction1();
// console.log('data loading...')
// p1.then((res)=>{
//     console.log('Data retrive successfully....',res)
//     console.log('Data 2 Loading...')
//     let p2=asyncfunction2();
//     p2.then((res)=>{

//     })
// })

// With Direct Function call .then

// console.log('data loading...')
// asyncfunction1().then((res)=>{
//     console.log('Data retrive successfully....',res)
//     console.log('Data 2 Loading...')
//         asyncfunction2().then((res)=>{

//     })
// })


// Promise Chain

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('data',dataId);
//             resolve('success');
//         }, 3000);
//     })
// }

// getData(1)
// .then((res)=>{
//     return getData(2)
// }).then((res)=>{
//         return getData(3)
// }).then((res)=>{
//     console.log(res)
// })


// Async 

async function hello(){
    console.log('i am async...')
}

// Await 
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Updating weather....');
//             resolve(200);
//         },2000);
//     })
// }

// async function getWeatherUpdate(){
//     await api();
//     await api();

    
// }



function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data',dataId);
            resolve('success');
        }, 1000);
    });
};

async function getalldata(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);

}

// the function is need to call but through IIFE (Immediately invoked function expression) we can do 

(async function getalldata(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);

})();