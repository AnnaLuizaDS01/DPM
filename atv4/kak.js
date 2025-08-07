const express = require("express");
const app = express();
const fs = require("fs");
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/recebido", (req, res) => {
  res.redirect("/");
});
app.get("/usuarios", (req, res) => {
fs.readFile("bancodados.txt", "utf8", (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log("Arquivo bancodados.txt não encontrado. Criando um novo.");
        return res.render("lista-usuarios", { usuarios: [] });
      }
      console.error("Erro ao ler o arquivo bancodados.txt:", err);
      return res.status(500).send("Erro ao carregar a lista de usuários.");
    }

    const linhas = data.split("\n").filter(line => line.trim() !== "");
    const usuarios = [];

    linhas.forEach(linha => {
      try {
        usuarios.push(JSON.parse(linha));
      } catch (parseError) {
        console.error("Erro ao fazer parse JSON de uma linha:", linha, parseError);
      }
    });
    res.render("listausuarios", { usuarios: usuarios });
  });
});

app.get("/usuarios/:email", (req, res) => {
  const emailParam = req.params.email
  for (const linha of linhas) {
      try {
        const usuario = JSON.parse(linha);
        if (usuario.email === emailParam) {
          usuarioEncontrado = usuario;
          break;
        }
      } catch (parseError) {
        console.error("Erro ao fazer parse JSON de uma linha:", linha, parseError);
      }
    }

    if (usuarioEncontrado) {
        res.render("detalhes-usuario", { usuario: usuarioEncontrado });
    } else {
      console.log("Dados salvados!")
    }
})
app.post("/recebido", (req, res) => {
  
  let { nome, email, senha, curso, idade } = req.body;

  const dadosformulario = {
    nome: nome,
    email: email,
    senha: senha,
    curso: curso,
    idade: idade,
  };

  const dadosconvertidos = JSON.stringify(dadosformulario) + "\n";
  fs.appendFile("bancodados.txt", dadosconvertidos, (err) => {
    if (err) {
      console.error("Erro em salvar os dados no arquivo:", err);
    }
    console.log("Dados salvados!");
    res.render("recebido");
  });
});

app.listen(porta, () => {
  console.log(`Rodando na porta https://localhost:${porta}`);
});