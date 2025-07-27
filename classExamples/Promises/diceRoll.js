function rollDice(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let rand = Math.random();
            if(rand <= 0.1){
                reject("dice fell off");
            }
            else if(rand <= 0.25){
                resolve("1");
            }
            else if(rand <= 0.4){
                resolve('2');
            }
            else if(rand <= 0.55){
                resolve('3');
            }
            else if(rand <= 0.7){
                resolve('4');
            }
            else if(rand <= 0.85){
                resolve('5');
            }
            else{
                resolve('6');
            }            
        },500);
    });
}

rollDice().then(data => console.log(data)).catch(err => console.log(err));

function oldAsyncFunction(callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
             callback(null, "Success");
         } else {
             callback(new Error("Failed"));
         }
     }, 1000);
}

function promiseWrappedFunction() {
  return new Promise((resolve, reject) => {
    oldAsyncFunction((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

promiseWrappedFunction()
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });