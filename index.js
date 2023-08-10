express = require('express');


server = express();


server.get("/",(req,res)=>{
   res.send("Hello world");
})

server.listen(8081, ()=>{
    console.log('listening on port 8081')
})