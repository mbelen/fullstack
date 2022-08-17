const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

/*
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
*/

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hola estoy funcionando.");
});

// GET - POST - DELETE - PUT - PATCH 

app.post("/",(req,res) => {
    res.send("Llamada post");
});

// Get de todos los usuarios
app.get("/users",(req,res) =>{
    res.send("Get Users");
});

// Get Info de un usuario

app.get("/users/:id",(req,res) =>{

    let userId =  req.params.id;
    console.log(userId);
    user = {"name":"Pepe","lastname":"Alegría"}
    res.json(user);
});

// Creo un nuevo usuario

app.post("/users",(req,res) =>{

    let name = req.body.name;
    let lastname = req.body.lastname;
    console.log(name);
    res.send("Creo usuario");
});

// Modifico un usuario
app.put("/users/:id",(req,res) =>{

    const userId = req.params.id;
    let name = req.body.name;
    res.send("Modifico un usuario");
});

// Elimino un usuario
app.delete("/users/:id",(req,res) =>{
    res.send("Elimmino un usuario");
});

http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
