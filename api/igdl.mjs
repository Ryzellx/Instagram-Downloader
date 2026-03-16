import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { handleIgdl } = require("../lib/handlers.js");
const { toWebResponse } = require("../lib/http.js");

export default {
  async fetch(request) {
    const response = await handleIgdl(request);
    return toWebResponse(response);
  },
};
