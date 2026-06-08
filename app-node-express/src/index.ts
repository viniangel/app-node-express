import express from 'express';
import Router from './routes/index'

const app = express();
const PORT:number = 3009;

app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res)=>{
    res.send("Hola Mundo");
});

app.listen(PORT, ()=>{
    console.log("servidor corriendo en ", PORT);
});