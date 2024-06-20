async function simulateTask(){
     let status=new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task started");
        }, 1000);
    });
    console.log(await status);
    console.log("Task Completed");

}
simulateTask();