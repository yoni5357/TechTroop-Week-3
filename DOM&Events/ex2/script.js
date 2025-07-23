const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

function checkReservation(){
    let name = document.getElementById('name').value
    let container = document.querySelector('.container')
    let text = document.getElementById('text')
    container.appendChild(text)
    if(reservations[name] && !reservations[name].claimed){
        text.innerText = `Welcome, ${name}`
    }

    else if(reservations[name] && reservations[name].claimed){
        text.innerText = "Hmm, someone already claimed this reservation"
    }

    else{
        text.innerText = "You have no reservation"
    }
}

// Add event listener when the DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('checkRes').addEventListener('click', checkReservation);
// });
