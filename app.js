const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());

// Endpoint para autenticar o login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Aqui você pode adicionar sua lógica de autenticação
    // Por exemplo, verificar se o usuário e a senha estão corretos
    if (username === "usuario" && password === "senha") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});