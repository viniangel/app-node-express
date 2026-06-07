import express from 'express';

const app = express();
const PORT:number = 3009;

app.get("/", (req, res)=>{
    res.send("Hola Mundo");
});

app.listen(PORT, ()=>{
    console.log("servidor corriendo en 3309", PORT);
});