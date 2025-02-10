import { fetchData } from "./fetch";

const getUsers = async () => {
    
    const url = 'http://127.0.0.1:3000/api/users';
    const getUsers = await fetchData(url)

    if (getUsers.error) {
        console.log('tapahtui virhe fetch haussa');
        return;
    }

    console.log(getUsers);
    

    const tableBody = document.querySelector('#taulukko');
    tableBody.innerHTML = ''; // tyhjennetään taulukko

    getUsers.forEach((user) => {
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td><button class="check" data-id="${user.id}">Info</button></td>
          <td><button class="del" data-id="${user.id}">Delete</button></td>
          <td>${user.id}</td>
        `;
    
        tableBody.appendChild(row);
    });


};

// Get user by id 1 funktio
const getUserById = async () => {
    const url = 'http://127.0.0.1:3000/api/users/1';
    const user = await fetchData(url);
  
    if (user.error) {
      console.log('Tapahtui virhe fetch haussa');
      return;
    }
  
    alert('Käyttäjän tiedot:\nUsername: ${user.username}\nEmail: ${user.email}\nId: ${user.id}');
  };
  
  document.querySelector('#userByIdButton').addEventListener('click', getUserById);

const addUser = async () => {
    event.preventDefault();


    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();

    const bodyData = {
        "username": username,
        "password": password,
        "email": email,
        }
        
    
    
    const url = 'http://127.0.0.1:3000/api/users';

    const options = {
        body: JSON.stringify(bodyData), 
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      };
      console.log(options);
    
      const response = await fetchData(url, options); 

    if (response.error) {
        alert('sinun täytyy muistaa täyttää kaikki kentät');
        console.log(response.error);
        return;
    }

    if (response.message) {
        alert(response.message);
        return;
    }

    console.log(response);
    document.querySelector('.addform').reset();
    getUsers();
};

export { getUsers, addUser,getUserById };