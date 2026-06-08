import express from 'express';

const Router = express.Router();

const productos:any = [];


Router.get("/productos", (req, res)=>{
    return res.json({mensaje: productos});
});

Router.post("/productos", (req, res)=>{
    console.log(req.body);
    productos.push(req.body);
    return res.json({mensaje: productos});
});

Router.get("/productos/:id", (req, res)=>{
    return res.json({mensaje: `Se encontró el producto con id ${req.params.id}`});
});

Router.post("/productos/:id", (req, res)=>{
    return res.json({mensaje: `Producto actualizado con el id ${req.params.id}`});
});

Router.delete("/productos/:id", (req, res)=>{
    return res.json({mensaje: `Producto eliminado con el id ${req.params.id}`});
});

export default Router;