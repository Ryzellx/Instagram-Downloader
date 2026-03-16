const http = require("node:http");
const { empty, notFound, sendNodeResponse } = require("./lib/http");
const { handleHome, handleIgdl } = require("./lib/handlers");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer(async (req, res) => {
  const request = {
    method: req.method || "GET",
    url: new URL(req.url || "/", `http://${req.headers.host || "localhost"}`).toString(),
  };

  let response;

  if (request.url.endsWith("/favicon.ico")) {
    response = empty();
  } else {
    const pathname = new URL(request.url).pathname;

    if (pathname === "/") {
      response = await handleHome(request);
    } else if (pathname === "/igdl") {
      response = await handleIgdl(request);
    } else {
      response = notFound();
    }
  }

  sendNodeResponse(res, response);
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
