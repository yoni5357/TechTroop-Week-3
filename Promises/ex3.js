// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        for(let item of items){
            if(inventory[item].stock === 0){
                return reject(new Error(`${item} is out of stock`));
            }
        }
        resolve(items);
    }, 500)
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        let subtotal = 0;
        let tax = 0;
        let total = 0;
        for(let item of items){
            subtotal += inventory[item].price;
            tax += inventory[item].price * 0.08;
            total += inventory[item].price * 1.08;
        }
        resolve({'subtotal': subtotal, 'tax':tax, 'total':total})
    }, 200);
  })
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        let chance = Math.random();
        let transactionId = Math.trunc(chance * Math.random() * 100);
        if(chance >= 0.9){
            reject(new Error("payment failed"));
        }
        else{
            resolve({'transactionId': transactionId, 'amount': amount, 'status': "success"})
        }
    }, 1500);
  })
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        for(let item of items){
            let stock = inventory[item].stock;
            inventory[item].stock = stock > 0 ? stock-=1 : 0;
        }
        resolve(inventory)
    }, 300);
  })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
    return checkInventory(itemNames)
    .then(calculateTotal)
    .then(resault => processPayment(resault.total)
        .then(payment => updateInventory(itemNames)
            .then(()=> ({
                payment,
                items: itemNames,
                summary: resault
            }))
        )
    );
}


// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));
