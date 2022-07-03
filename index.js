const express = require("express");
// const http = require("http");
const path = require("path");
// const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;
// const server = http.createServer((req, res) => {
//   const fileName = (req.url === "/" ? "/index" : req.url) + ".html";
//   fs.readFile(path.join(__dirname, fileName), "utf-8", (err, content) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         fs.readFile(
//           path.join(__dirname, "404.html"),
//           "utf-8",
//           (err, content) => {
//             if (err) throw err;
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end(content);
//           }
//         );
//       } else throw err;
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     }
//   });
// });

app.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res, next) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "404.html"));
});
app.listen(PORT, () => {
  console.log("The app is listening at PORT:", PORT);
});
