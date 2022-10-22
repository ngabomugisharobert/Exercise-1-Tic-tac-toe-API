const { getHandler, defaultHandler } = require("./controller");

const routes = (request, response) => {
  const reqURL = request.url;
  const reqMethod = request.method;

  switch (reqMethod) {
    case "GET": {
      if (true) {
        getHandler(request, response);
      }
    }
      break;
    default: {
      defaultHandler(request, response);
    }
  }
};

module.exports = { routes };
