const express = require("express");
const cors = require("cors");

const app = express();
const routes = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = 3000;
// importar rotas
require("./src/routes/Routes")(app, routes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
