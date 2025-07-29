// Given Promise-based code:
// function getUserById(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('User not found');
//       }
//       return response.json();
//     })
//     .then(user => {
//       console.log(`Found user: ${user.name} (${user.email})`);
//       return user;
//     })
//     .catch(error => {
//       console.error('Error fetching user:', error.message);
//       return null;
//     });
// }


async function getUserById(userId) {
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok){
            throw new Error('User not found');
        }
        let user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    }catch(error){
        console.error('Error fetching user:', error.message);
        return null;
    }
}

getUserById(10).then(console.log);
