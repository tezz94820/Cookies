const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //setting the headeer from the server side by passing the header set-cookie.
    res.setHeader('set-cookie', ['setByServer=2',"httponlyCookie=12; httponly"])
    //creating a cookie by javascript
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/path1',(req,res) => {
    res.send(`Path1 : you have sent me cookies ===>> ${req.headers.cookie}`)
})

app.get('/path2',(req,res) => {
    res.send(`Path2 : you have sent me cookies ===>> ${req.headers.cookie}`)
})

app.listen(3000 , () => console.log("Server listening on port 3000") );