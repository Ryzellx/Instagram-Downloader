function json(data, init = {}) {
  const { status = 200, headers = {} } = init;

  return {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers,
    },
    body: JSON.stringify(data),
  };
}

function empty(status = 204, headers = {}) {
  return {
    status,
    headers,
    body: "",
  };
}

function methodNotAllowed(allowedMethods) {
  return json(
    { error: "Method Not Allowed" },
    {
      status: 405,
      headers: {
        Allow: allowedMethods.join(", "),
      },
    }
  );
}

function notFound() {
  return json({ error: "Not Found" }, { status: 404 });
}

function sendNodeResponse(res, response) {
  res.writeHead(response.status, response.headers);
  res.end(response.body);
}

function toWebResponse(response) {
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

module.exports = {
  empty,
  json,
  methodNotAllowed,
  notFound,
  sendNodeResponse,
  toWebResponse,
};
