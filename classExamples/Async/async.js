async function processOrder(orderId) {
    const order = await fetch(`/api/orders/${orderId}`).then(r => r.json());
    const product = await fetch(`/api/inventory/${order.productId}`).then(r => r.json());
    if(product.stock > 0){
        return { success: true, message: 'Order processed' };
    }
    else {
        return { success: false, message: 'Out of stock' };
    }

    //  .then(response => response.json())
    //  .then(order => {
    //     return fetch(`/api/inventory/${order.productId}`);
    //  })
    //  .then(response => response.json())
    //  .then(inventory => {
    //  if (inventory.stock > 0) {
    //      return { success: true, message: 'Order processed' };
    //  } else {
    //     return { success: false, message: 'Out of stock' };
    //  }
    // });
}

processOrder(1).then(data => console.log(data.message)).catch(data => console.log(data.message))

//doesnt work maybe