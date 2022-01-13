const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Databasee Application");
    
})

app.listen(3000,()=> {
    console.log('Server is running on https://localhost:${3000}')
});