//link click event handler to add items to the shopping list
document.getElementById('add-item').addEventListener('click', function() {
    const input = document.querySelector('.shopping-list input');
    const itemText = input.value.trim();
    
    if (itemText) {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        document.querySelector('.shopping-list ul').appendChild(listItem);
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter an item.');
    }
});