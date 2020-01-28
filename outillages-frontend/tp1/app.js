var express = require("express");
var app = express();


app.set('engine view', 'ejs');


app.get("/", function(req, res){
    res.render('index.ejs',{listenom : ["Jean", "Paul", "Rene", "Fabienne", "Lucie"]} );
});

app.get("/profil/:nom", function(req, res){
    res.render("profile.ejs", {nom : req.params.nom});
});

app.listen(3000, function(){
    console.log("Adresse du serveur : http://localhost:3000");
});