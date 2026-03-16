import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { handleHome } = require("../lib/handlers.js");
const { toWebResponse } = require("../lib/http.js");

export default {
  async fetch(request) {
    const response = await handleHome(request);
    return toWebResponse(response);
  },
};
