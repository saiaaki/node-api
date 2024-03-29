const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

let data = {
    message : "Hello world!"
}

app.get('/api/data',(req,res)=>{
    res.json(data);
})
app.listen(PORT,()=>{
    console.log(`server running ${PORT}successfully`)
})
