const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const image="https://th.bing.com/th/id/OIP.mNGLeW9uX8Y9pfAXmyWlVAHaE7?pid=ImgDet&rs=1";
const users = [
  {
    id: 1,
    name: "omar",
  },
];
const server = http.createServer(function (req, res) {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.write("Hello omar!");
      res.end();
      break;
    case "/image":
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      res.write("Hello omar!");
      res.end(image);
      break;
    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
      break;
    case "/HTML":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>holaa</h1>");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Not Found");
  }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server listening on port 3000");
  });
  
