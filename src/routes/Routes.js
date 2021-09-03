const vagas = require("../controller/Vagas");
const candidatos = require("../controller/Candidatos");
const TotalEmail = require("../controller/TotalEmail")

module.exports = (app, routes) => {
  routes.post("/vagas", vagas.store);
  routes.post("/candidatos", candidatos.store);
  routes.get("/candidatos/:id", candidatos.find);

  routes.post('/total-email', TotalEmail.store)

  routes.get('/teste', (req, res)=> {
    res.send('servidor rodando 100%')
  })

  app.use("/api", routes);
};

// Rotas
