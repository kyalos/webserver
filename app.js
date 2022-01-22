const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  //status code 200
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }

    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.error("something isnt right", error);
  } else {
    console.log("server listening to port: " + port);
  }
});
