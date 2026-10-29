const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() { 
        console.log("ascync operation 1 complete");
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("ascync operation 2 complete");
        resolve()
    }, 1000)

}).then(function(){
    console.log("promise 2  consumed");
}) 

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ name: "john", age: 30 });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) { 
    setTimeout(function() { 
    let error = true;
    if(!error){
        resolve({username: "danny",password:"123"})
    } else {
        reject("something went wrong");
    }
    },10000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("promise is either resolved or rejected"));  

const promiseFive = new Promise(function(resolve, reject) { 
        setTimeout(function(){ 
    let error = true;
    if(!error){
        resolve({username: "javascript",password:"000"})
    } else {
        reject("something went wrong danny");
    }
    },1000)
});
async function consumePromiseFive() {
    try{
        const response = await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()