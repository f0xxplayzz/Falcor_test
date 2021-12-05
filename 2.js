var express = require('express');
const path = require('path');

const app = express();

app.get('/',function(req,res){
    return res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/app.js',function(req,res){
    return res.sendFile(path.join(__dirname+'/app.js'));
});

app.get('/1',(req,res) => {
    return res.send("testtesttesttesttesttesttesttesttesttesttest");
});

app.get('/2',(req,res) => {
    return res.send("testtesttesttesttesttesttesttesttesttesttest");
});

app.get('/3',(req,res) => {
    return res.send("testtesttesttesttesttesttesttesttesttesttest");
});

app.get('/4',(req,res) => {
    return res.send("testtesttesttesttesttesttesttesttesttesttest");
});

app.listen(3000);