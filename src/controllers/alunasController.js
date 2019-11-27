const Alunas = require('../model/alunas');

//GET
exports.getAlunas = (req, res) => {
  Alunas.find(function (err, alunas) {
    if (err) res.status(500).send(err);
    res.status(200).send(alunas);
  })
}

exports.getById = (req, res) => {
  const alunaId = req.params.id

  Alunas.findById(alunaId, function (err, aluna) {
    if (err) return res.status(500).send(err);

    if (!aluna) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a aluna de id: ${alunaId}` });
    }

    res.status(200).send(aluna);
  })
}

exports.getLivros = (req, res) => {
  const id = req.params.id

  Alunas.findById(id, function (err, aluna) {

    if (err) return res.status(500).send(err)

    if (!aluna) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a aluna de id: ${req.params.id}` })
    }
    const livrosAluna = aluna.livros
    const livrosLidos = livrosAluna.filter(livro => livro.leu == true)
    const tituloLivros = livrosLidos.map(livro => livro.titulo)

    res.status(200).send(tituloLivros);

  })
}

exports.getSp = (req, res) => {

  Alunas.find(function (err, alunas) {
    if (err) res.status(500).send(err)

    const nasceuSp = alunas.filter(aluna => aluna.nasceuEmSp === "true");
    const meninasSp = nasceuSp.map(aluna => aluna.nome)

    res.status(200).send(meninasSp)
  })
}

exports.getAge = (req, res) => {
  const id = req.params.id
  Alunas.findById(req.params.id, function (err, aluna) {

    if (err) return res.status(500).send(err)

    if (!aluna) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a aluna de id: ${req.params.id}` });
    }

    const dataNasc = aluna.dateOfBirth
    const arrData = dataNasc.split("/")
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const idade = calcularIdade(ano, mes, dia)
    res.status(200).send({ idade })

  })
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
  const now = new Date()
  const anoAtual = now.getFullYear()
  const mesAtual = now.getMonth() + 1
  const hoje = now.getDate()

  let idade = anoAtual - anoDeNasc

  if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
    idade -= 1
  }
  return idade
}


//POST
exports.post = (req, res) => {
  let aluna = new Alunas(req.body);

  aluna.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send({ mensagem: 'Aluna incluída com sucesso' });

  })
}

exports.postLivros = (req, res) => {
  const alunaId = req.params.id

  Alunas.findById(alunaId, function (err, aluna) {
    if (err) return res.status(500).send(err.message);

    if (!aluna) {
      return res.status(200).send({ mensagem: `Infelizmente não localizamos a aluna de id: ${alunaId}` });
    }
    const livro = req.body;
    (aluna.livros).push(livro);

    aluna.save(function (err) {
      if (err) res.status(500).send(err);
      res.status(201).send({ mensagem: 'Livro incluído com sucesso' });
    })

  });

}

//PUT
exports.update = (req, res) => {
  Alunas.update(
    { _id: req.params.id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send({ message: err });
      res.status(200).send({ mensagem: "Atualizado com sucesso" });
    })
}

//DELETE
exports.delete = (req, res) => {
  const idAluna = req.params.id

  Alunas.findById(idAluna, function (err, aluna) {
    if (err) return res.status(500).send(err);

    if (!aluna) {
      return res.status(200).send({ mensagem: 'Infelizmente não localizamos a aluna' })
    }

    aluna.remove(function (err) {
      if (!err) {
        res.status(200).send({ mensagem: 'Aluna removida com sucesso' })
      }
    })
  })
}