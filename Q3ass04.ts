async function fetchData(): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
let str=fetchData();
console.log(await str);