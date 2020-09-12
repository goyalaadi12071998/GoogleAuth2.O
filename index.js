const express = require('express');
const app = express();

app.get('/',async (req,res) => {
    res.send({msg: 'Nikal Bsdk Sale Corona'}); 
});

const PORT = process.env.PORT || 6500;

app.listen(PORT,async () => {
    console.log('Server Started');
});