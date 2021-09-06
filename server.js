const express = require("express");
const cors = require("cors");

const app = express();
const routes = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 443;
// importar rotas
require("./src/routes/Routes")(app, routes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
