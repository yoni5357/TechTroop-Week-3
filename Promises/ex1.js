function checkLuckyNumber(num) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(num <= 0){
                reject(new Error("Invalid number"));
            }
            else if(!(num % 7)){
                resolve("Lucky!");
            }
            else if(num % 7){
                resolve("Not Lucky");
            }
        },800)
    })
}


checkLuckyNumber(5).then(console.log).catch(console.error)