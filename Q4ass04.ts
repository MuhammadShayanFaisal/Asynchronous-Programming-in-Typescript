async function fetchWithError(): Promise<string>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random()*10+1) >5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
let str=fetchWithError();
str.then( (response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})