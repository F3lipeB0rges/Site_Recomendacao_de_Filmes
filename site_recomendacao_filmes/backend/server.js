const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o MongoDB e a Porta do Servidor
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
