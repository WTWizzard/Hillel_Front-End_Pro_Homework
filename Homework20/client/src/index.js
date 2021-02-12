import { div } from './utils'

const url = "http://localhost:3000";

const getUsers = (url) => fetch(url + "/get");

const app = document.getElementById('app');

const getJsonFromResponse = (response) => response.json();

const data = getUsers(url).then(getJsonFromResponse);

data.then((users) => {
    users.map((user) =>{
        app.appendChild(div(user))
    })
});
