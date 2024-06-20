async function fetchGreeting(): Promise<string>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Hello, How are you");
            }, 2000);
        });
    }
    let str=fetchGreeting();
    console.log(await str);
    
    