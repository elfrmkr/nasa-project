
// D5rjGrVUqEadzEaz

const app = require("./app");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000;
const http = require("http");

const MONGO_URL = 'mongodb+srv://nasa-api:D5rjGrVUqEadzEaz@cluster0.skrygwa.mongodb.net/nasa?retryWrites=true&w=majority'

const { loadPlanetsData } = require("./models/planets.model");

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log("MongoDB connetion is ready!")
});

mongoose.connection.on('error', (err) => {
  console.error(err)
});

async function startServer() {
  await mongoose.connect(MONGO_URL)
  return await loadPlanetsData();
}

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

startServer();
