const http = require("http");
const { routes } = require("./routes");

const server = http.createServer((request, response) => {
    routes(request, response);
});
const port = process.env.PORT || 1337
server.listen(port, () => {
    console.log("Server is running on Port ", port);
});
