const {readJSON, writeJSON, deleteJSON, createUserJSON} = require('./utils/utils');
const path = require('path');
const http = require('http');

const userAddr = path.join(__dirname, './users.json');
const levelAddr = path.join(__dirname, './levels.json');

const collectRequestData = (request, cb) => {
    const FORM_URLENCODED = 'application/json';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            cb(body);
        });
    }
    else {
        cb(null);
    }
}

http.createServer((req, res) =>{
    const reqMethod = req.method;
    const reqUrl = req.url;
    if(reqMethod === 'GET'){
        readJSON(userAddr, (_, data)=>{
            res.end(JSON.stringify(data))
        })
    }else if(reqMethod === 'DELETE'){
        const id = Number(reqUrl.slice(1))
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
        collectRequestData(req, (body) =>{
            readJSON(userAddr, (_, data)=>{
                const users = [...data]
                
                const updateUsers = [...users, JSON.parse(body)]
                
                writeJSON(userAddr, updateUsers, ()=>{
                    console.log('Data saved')
                })
                console.log(updateUsers);
                res.end(JSON.stringify(updateUsers))
            });
        })
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

