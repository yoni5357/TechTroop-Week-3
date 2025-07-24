function validate(e){
    e.preventDefault(); 

    const container = document.getElementById('button-container');
    const form = document.getElementById('form-container');
    const name = document.getElementById('name');
    const salary = document.getElementById('salary');
    const birthday = document.getElementById('birthday');
    const phone = document.getElementById('phone');
    const errorMessage = ""

    container.querySelectorAll('.error').forEach(el => el.remove());

    if(name.value.length < 2){
        errorMessage = "Name must be longer than 2 characters";
    }
    else if(parseInt(salary.value) < 10000 || parseInt(salary.value) > 16000){
        errorMessage = "Salary must be greater than 10,000 but less than 16,000";
    }
    else if(!birthday.value){
        errorMessage = "Birthday may not be null";
    }
    else if(phone.value.length < 10){
        errorMessage = "Phone must be 10 digits long";
    }

    if(errorMessage){
        const error = document.createElement('p');
        error.className = "error"
        error.style.color = "red";
        error.textContent = errorMessage
        container.appendChild(error)
        return;
    }

    
    form.style.display = "none";

    const successMsg = document.createElement('h2');
    successMsg.textContent = `Welcome, ${name.value.trim()}! 🎉`;

    form.parentNode.appendChild(successMsg);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', validate);
});