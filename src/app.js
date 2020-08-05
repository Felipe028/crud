const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

//Incluindo as rotas das tarefas(Tasks)
const UserRoutes = require('./routes/UserRoutes');
app.use('/user', UserRoutes);


const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log('Servidor rodando na porta %s', port)
});
