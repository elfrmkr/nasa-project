const app = require("./app");

const PORT = process.env.PORT || 8000;
const http = require("http");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
