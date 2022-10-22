const { play } = require("./playService");
const getHandler = (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const query = url.searchParams.get("board");

  const responseBoard = play(query);

  response.writeHead(200, {
    "Content-Type": "application/text",
  });
  response.write(responseBoard);
  response.end();

};

const defaultHandler = (request, response) => {
  response.writeHead(400, {
    "Content-Type": "application/json",
  });
  response.write(
    JSON.stringify({
      message: `Bad Request`,
    })
  );
  response.end();
};

module.exports = {
  getHandler,
  defaultHandler,
};
