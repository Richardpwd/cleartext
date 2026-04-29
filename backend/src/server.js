const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const textRoutes = require('./routes/text.routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/_/backend/api/text', textRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`ResolveTexto API rodando em http://localhost:${port}`);
  });
}

module.exports = app;
