const { checkWinner } = require("./services/checkingWinner");
const { play } = require('./services/play');
const { chunk, isValid } = require("./utils");
const getHandler = (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const board = url.searchParams.get("board");

  if (!isValid(board)) {
    response.statusCode = 400;
    response.end("Invalid Board");
  }
  else {

    const chunkedBoard = chunk(board)
    console.log(chunkedBoard)
    const res = checkWinner(chunkedBoard)
    console.log(res, 'res')
    if (res === "tie") {
      response.statusCode = 200;
      response.end("tie");
    }

    if (res === "x") {
      response.statusCode = 200;
      response.end("Player Win");
    }

    if (res === "o") {
      response.statusCode = 200;
      response.end("Computer Win");
    }

    if (res === "+") {
      //play
      const newBoard = play(chunkedBoard)
      response.statusCode = 200;
      response.end(newBoard);
    }
  }
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
