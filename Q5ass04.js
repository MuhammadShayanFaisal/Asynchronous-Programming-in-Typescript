function fetchData() {
    return new Promise(function (resolve) {
        console.log("The function 'fetchData()' has to be executed");
        resolve("fetchData result");
    });
}
function processData() {
    return new Promise(function (resolve) {
        console.log("The function 'processData()' has to be executed");
        resolve("processData result");
    });
}
function executeSequentially() {
    fetchData()
        .then(function (fetchDataResult) {
        console.log(fetchDataResult);
        return processData();
    })
        .then(function (processDataResult) {
        console.log(processDataResult);
    });
}
executeSequentially();
