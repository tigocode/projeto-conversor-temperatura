const express =  require('express');
const app = express();

const { converteTemperatura } = require('./service');


app.get('/', (req, res) => {
  let temperatura = req.query.temperatura;
  let conversor = req.query.conversor;

  let temperaturaConvertida = converteTemperatura(temperatura, conversor);

  let json = {temperatura: temperaturaConvertida};

  res.json(json);

});

app.listen(3333, () => {
  let data = new Date();
  console.log("O servidor está funcionado desde: " + data);
});
