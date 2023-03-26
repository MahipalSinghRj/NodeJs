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
//server.use(express.urlencoded());
//server.use(morgan('dev'));
server.use(morgan('default'));
server.use(express.static("public"));


// server.use("/", (req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("USer-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
//   console.log(req.method);
//   if (req.body.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
next();
};

//server.use(auth);

server.get("/product/:id", auth, (req, res) => {
    console.log(req.params);
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/", (req, res) => {
  //res.send('Hello')
  //const filePath=path.join('C:/Users/Softserv.mahipal/Desktop/nodejstutorial/data.json')
  //res.sendFile(filePath)
  //res.json(products)
});

server.listen(8080, () => {
  console.log("Server started with ExpressJS");
});
