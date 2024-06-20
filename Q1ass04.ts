async function fetchGreeting(): Promise<string>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Hello, How are you");
            }, 2000);
        });
    }
    let str=await fetchGreeting();
    console.log(str);
    
    