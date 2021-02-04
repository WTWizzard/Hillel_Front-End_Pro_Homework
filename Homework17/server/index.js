const {readJSON, writeJSON, deleteJSON, editJSON, createUserJSON} = require('./utils/utils');
const path = require('path');
const http = require('http');

const userAddr = path.join(__dirname, './users.json');
const levelAddr = path.join(__dirname, './levels.json');


http.createServer((req, res) =>{
    const reqMethod = req.method;
    const reqUrl = req.url;
    if(reqMethod === 'GET'){
        readJSON(userAddr, (_, data)=>{
            res.end(JSON.stringify(data))
        })
    }else if(reqMethod === 'DELETE'){
        const id = reqUrl
        readJSON(userAddr, (_, data)=>{
            const users = [...data]
            
            const updateUsers = deleteJSON(users, id)
            
            writeJSON(userAddr, updateUsers, ()=>{
                console.log('Data saved')
            })
            console.log(updateUsers);
            res.end(JSON.stringify(updateUsers))
        });
    }else if(reqMethod === 'PATCH'){
        readJSON(userAddr, (_, data)=>{
            const users = [...data]
            
            const updateUsers = editJSON(users, 4, 'name', 'Poker)')
            
            writeJSON(userAddr, updateUsers, ()=>{
                console.log('Data saved')
            })
            console.log(updateUsers);
            res.end(JSON.stringify(updateUsers))
        });
    }else if(reqUrl === '/add'){
        readJSON(userAddr, (_, data)=>{
            const users = [...data]
            
            const updateUsers = createUserJSON(users)
            
            writeJSON(userAddr, updateUsers, ()=>{
                console.log('Data saved')
            })
            console.log(updateUsers);
            res.end(JSON.stringify(updateUsers))
        });
    }else{ 
        res.end('Hello');
    }

}).listen(3000);

