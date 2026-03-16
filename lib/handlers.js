const snapsave = require("../snapsave-downloader/src/index");
const { json, methodNotAllowed } = require("./http");

async function handleHome(request) {
  if (request.method !== "GET") {
    return methodNotAllowed(["GET"]);
  }

  return json({ message: "Hello World!" });
}

async function handleIgdl(request) {
  if (request.method !== "GET") {
    return methodNotAllowed(["GET"]);
  }

  const requestUrl = new URL(request.url);
  const url = requestUrl.searchParams.get("url");

  if (!url) {
    return json({ error: "URL parameter is missing" }, { status: 400 });
  }

  try {
    const downloadedURL = await snapsave(url);
    return json({ url: downloadedURL });
  } catch (error) {
    console.error("Error:", error.message);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
}

module.exports = {
  handleHome,
  handleIgdl,
};
