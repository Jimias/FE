import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items.js';
import { getUsers } from './users.js';
import { getData } from './test.js';
import { addUser } from './users.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';


    getData();

    // haetaan get all items nappi ja tehdään rajapintahaku
    const getItembtn = document.querySelector('.get_items');
    getItembtn.addEventListener('click', getItems);
    //getItems();

    const getUserbtn = document.querySelector('.get_users');
    getUserbtn.addEventListener('click', getUsers);

    const addUserForm = document.querySelector('.formpost');
    addUserForm.addEventListener('click', addUser);