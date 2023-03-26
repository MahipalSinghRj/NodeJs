const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

//To create server with expreee
const express = require("express");
//Morgan is a third party middleware
const morgan = require("morgan");

const server = express();

//Body parser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));

//API _Endpoint -Routes
//Products
//In our case the base url is http://localhost:8080 + api is products
//API ROOT, base URL, google.com/api/v2/ +.......

//Create POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

//Read GET /produts/:id
server.get("/products/:id", (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = products.find((p) => p.id === +id);
  res.json(product);
});

//Update PUT /produts/:id
server.put("/products/:id", (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === +id);
 products.splice(productIndex, 1, { ...req.body,id:id });
  res.status(201).json( );
});

//Update API PATCH /produts/:id
server.patch("/products/:id", (req, res) => {
    console.log(req.params);
    const id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id === +id);
    const product=products[productIndex];
    products.splice(productIndex, 1, {...product,...req.body});
    res.status(201).json( );
  });



  //Delete DELETE /produts/:id
server.delete("/products/:id", (req, res) => {
    console.log(req.params);
    const id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id === +id);
    const product=products[productIndex];
   products.splice(productIndex, 1);
    res.status(201).json( product);
  });

//Read GET /produts
server.get("/products", (req, res) => {
  console.log(req.params);
  res.json(products);
});
//Read GET /produts/:id
server.get("/products/:id", (req, res) => {
  console.log(req.params);
  //String id to convert in numaric id then put + sign
  const id = +req.params.id;
  const product = products.find((p) => p.id === +id);

  res.json(product);
});

 
 
//To send Files in response
server.get("/", (req, res) => {
  //res.send('Hello')
  //const filePath=path.join('C:/Users/Softserv.mahipal/Desktop/nodejstutorial/data.json')
  //res.sendFile(filePath)
  //res.json(products)
});

server.listen(8080, () => {
  console.log("Server started with ExpressJS");
});
