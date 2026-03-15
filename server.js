const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended:true}));

/* allow HTML files */
app.use(express.static(__dirname));

app.post("/register",(req,res)=>{

const {name,email,password,role} = req.body;

const code =
(role==="rec"?"REC":"JOB")+"-"+Math.random().toString(36).slice(2,8).toUpperCase();

console.log(name,email,role,code);

res.redirect("/home.html");

});

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});