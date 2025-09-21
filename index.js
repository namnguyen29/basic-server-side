import { readFile } from "fs";
import { createServer } from "http";

const PORT = 5600;

const server = createServer((req, res) => {
  let path = "index.html";

  const routes = {
    "/": "index.html",
    "/index.html": "index.html",
    "/about.html": "about.html",
    "/contact-me.html": "contact-me.html",
  };

  path = routes[req.url] || "404.html";

  res.writeHead(200, { "Content-Type": "text/html" });
  readFile(path, (err, data) => {
    if (err) {
      console.error("Load page fail", err.message);
      return;
    }
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
