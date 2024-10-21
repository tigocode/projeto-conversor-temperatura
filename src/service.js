function converteCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  
  return celsius;
}

function converteFahrenheit(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  
  return fahrenheit;
}

function converteTemperatura(temperatura, conversor) {
  let resultado;

  if(conversor == 'C') {
    resultado = converteCelsius(temperatura);
  } else if(conversor == 'F') {
    resultado = converteFahrenheit(temperatura);
  }

  return resultado;
}

exports.converteTemperatura = converteTemperatura;
