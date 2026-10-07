const http = require("http");

const server = http.createServer((req, res) => {
  let statusCode = 200;
  let pageContent;

  // Choose a page based on the URL requested by the browser.
  if (req.url === "/") {
    pageContent = `
      <h1>Home Page</h1>
      <p>Welcome to my page</p>
    `;
  } else if (req.url === "/about") {
    pageContent = `
      <h1>About Page</h1>
      <p>This server is created using Node.js HTTP module.</p>
    `;
  } else if (req.url === "/contact") {
    pageContent = `
      <h1>Contact Page</h1>
      <p>Email: example@gmail.com</p>
    `;
  } else {
    statusCode = 404;
    pageContent = `
      <h1>404 - Page Not Found</h1>
    `;
  }

  res.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8" });
  res.write(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Node.js Server</title>
  </head>
  <body>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    ${pageContent}
  </body>
</html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});