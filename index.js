const express = require('express');
const app = express();

app.get('/',async (req,res) => {
    res.send({msg: 'Hi There'}); 
});

const PORT = process.env.PORT || 6500;

app.listen(PORT,async () => {
    console.log('Server Started');
});