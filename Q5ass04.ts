function fetchData():Promise<string>{
    return new Promise((resolve)=>{
        console.log("The function 'fetchData()' has to be executed");
        resolve("fetchData result");
    });}
function processData(): Promise<string> {
    return new Promise((resolve) => {
        console.log("The function 'processData()' has to be executed");
        resolve("processData result");
    });}
function executeSequentially() {
    fetchData()
        .then(fetchDataResult => {
            console.log(fetchDataResult);
            return processData();
        })
        .then(processDataResult => {
            console.log(processDataResult);
        });}
executeSequentially();
