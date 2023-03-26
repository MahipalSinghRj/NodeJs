const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product1 = data.products;

const server = http.createServer((req, res) => {
  console.log("server started 1");
  console.log(req.url, req.method);

  if (req.url.startsWith("/product")) {
    const id = req.url.split('/')[2];
    console.log("ID is:", id);
    //const product1 = data.products;
    //console.log("Products is:", product1);
    const product = product1.find(p => p.id === (+id));
    console.log("Product is:",product);
    res.setHeader("content-Type", "text/html");
    const modifiedIndex = index
      .replace("**rating**", product.rating)
      .replace("**url**", product.thumbnail)
      .replace("**title**", product.title)
      .replace("**price**", product.price);
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    default:
      res.writeHead(404, "Page Not Found");
      res.end();
  }
});

console.log("server started 1");

server.listen(8080);
