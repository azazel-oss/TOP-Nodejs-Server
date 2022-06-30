const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileName = (req.url === "/" ? "/index" : req.url) + ".html";
  fs.readFile(path.join(__dirname, fileName), "utf-8", (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "404.html"),
          "utf-8",
          (err, content) => {
            if (err) throw err;
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content);
          }
        );
      } else throw err;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("The application is listening on port:", PORT);
});
