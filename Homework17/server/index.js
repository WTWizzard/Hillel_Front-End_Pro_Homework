const {readJSON, writeJSON, deleteJSON, editJSON} = require('./utils/utils')
const {join} = require('path');
const http = require('http')

const userAddr = join(__dirname, './users.json');
const levelAddr = join(__dirname, './levels.json');


//delete User by id
/*
readJSON(userAddr, (_, data)=>{
    const users = [...data]
    
    const updateUsers = deleteJSON(users, 3)
    
    writeJSON(userAddr, updateUsers, ()=>{
        console.log('Data saved')
    })
    console.log(updateUsers);
});
*/

// edit User
readJSON(userAddr, (_, data)=>{
    const users = [...data]
    
    const updateUsers = editJSON(users, 2, 'name', 'Joker')
    
    writeJSON(userAddr, updateUsers, ()=>{
        console.log('Data saved')
    })
    console.log(updateUsers);
});



//create new User
/*
readJSON(userAddr, (_, data)=>{
    const users = [...data]
    const lastUser = users[users.length -1];
    const nextId = (lastUser?.id || 0) +1;
    const newUser = {
        id: nextId,
        name: `User ${nextId}`,
        level: Math.ceil(Math.random() * 3)
    };
    const updateUsers = [...users, newUser];
    writeJSON(userAddr, updateUsers, ()=>{
        console.log('Data saved')
    })
    console.log(updateUsers);
})
*/