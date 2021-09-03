const {
  Candidato,
  Vaga,
  Experiencia,
  Capacitacao,
  Curso,
  Lingua,
} = require("../models/index");

module.exports = {
  async find(req, res) {
    const { id } = req.params;

    const candidatos = await Candidato.findByPk(id, {
      include: [
        "experiencias",
        "vagas",
        {
          model: Capacitacao,
          as: "capacitações",
          include: ["cursos", "linguas"],
        },
      ],
    });

    if (!candidatos || candidatos.length === 0) {
      res.status(400).json("Candidato não encontrado");
    }

    return res.json(candidatos);
  },

  async findAll() {},

  async store(req, res) {
    const { vagaId, candidato, experiencias, capacitacoes, curso, lingua } = {
      ...req.body,
    };

    const { cpfCandidato } = candidato;

    const vagas = await Vaga.findAll({ where: { uuid: vagaId } });

    if (vagas.length === 0) {
      res.status(400).json({ error: "vagas not found" });
    } else {
      const buscaCpf = await Candidato.findAll({
        where: { cpfCandidato },
      });

      if (buscaCpf.length !== 0) {
        res
          .status(400)
          .json({ error: "CPF ja cadastrado, cadastre outro cpf porra" });
      } else {
        const candidatos = await Candidato.create(candidato);

        await vagas.forEach((element) => {
          element.addCandidato(candidatos);
        });

        // Cadastro das experiencias - belongsto candidato - hasMany
        await experiencias.forEach((element) => {
          Experiencia.create({ ...element, candidato_id: candidatos.id });
        });

        // Cadastro de capacitações - belongsTo candidato - hasMany
        const capacita = await Capacitacao.create({
          ...capacitacoes,
          candidato_id: candidatos.id,
        });

        // Cadastro de cursos complementares - belongsTo capacitações - hasMany
        await curso.forEach((element) => {
          Curso.create({ ...element, capacita_id: capacita.id });
        });

        // Cadastro de linguas complementares - belongsTo capacitaçõe - hasMany
        await lingua.forEach((element) => {
          Lingua.create({ ...element, capacita_id: capacita.id });
        });

        return res.json("ok");
      }
    }
  },
};
