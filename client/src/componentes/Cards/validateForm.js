export default function validateForm(input) {
  let errors = {};

  if(!input.raza) errors.breed = "Nombre requerido"
  else if(input.raza.length < 4) errors.breed = "Debe contener 4 caracteres minimamente"
  else if(!/^[a-zA-Z\s]*$/.test(input.raza)) errors.breed = "No debe contener simbolos y/o numeros"
  
  let messageError = "Debe ser un numero entero"
  if(!input.alturaMinima) errors.altMin = "Altura minima requerida"
  else if(!/^\d+$/.test(input.alturaMinima)) errors.altMin = messageError
  else if(input.alturaMinima < 10) errors.altMin = "Debe mayor o igual a 10 cm"
  else if(input.alturaMinima > 100) errors.altMin = "Debe ser menor o igual a 100 cm"

  if(!input.alturaMaxima) errors.altMax = "Altura maxima requerida"
  else if(!/^\d+$/.test(input.alturaMaxima)) errors.altMax = messageError
  else if(input.alturaMaxima < 11) errors.altMax = "Debe mayor o igual a 11 cm"
  else if(input.alturaMaxima > 100) errors.altMax = "Debe ser menor o igual a 100 cm"
  
  if(parseInt(input.alturaMaxima) <= parseInt(input.alturaMinima)) errors.altMax = "Debe ser mayor que la altura minima"
 
  if(!input.pesoMinimo) errors.pesoMin = "Peso minimo requerido"
  else if(!/^\d+$/.test(input.pesoMinimo)) errors.pesoMin = messageError
  else if(input.pesoMinimo < 1) errors.pesoMin = "Debe ser mayor o igual a 1 kg"
  
  if(!input.pesoMaximo) errors.pesoMax = "Peso maximo requerido"
  else if(!/^\d+$/.test(input.pesoMaximo)) errors.pesoMax = messageError
  else if(input.pesoMaximo < 2) errors.pesoMax = "Debe ser mayor o igual a 2 kg"

  if(parseInt(input.pesoMaximo) <= parseInt(input.pesoMinimo)) errors.pesoMax = "Debe ser mayor que el peso minimo"

  if(!input.añosDeVida) errors.años = "Edad requerida"
  else if(!/^\d+$/.test(input.añosDeVida)) errors.años = messageError
  else if(input.añosDeVida <= 0) errors.años = "Debe ser mayor a 0"
  else if(input.añosDeVida > 20) errors.años = "Debe ser menor o igual 20 años"

  if(!input.imagen) errors.imagen = "URL de la imagen requerida"
  else if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/.test(input.imagen)) errors.imagen = "URL invalida"

  if(input.temperamentos.length <= 0) errors.temperamentos = "Temperamentos requeridos"
  else if(input.temperamentos.length < 3) errors.temperamentos = "Debe ser mayor o igual a 3"
  else if(input.temperamentos.length > 8) errors.temperamentos = "Debe ser menor o igual a 8"

  return errors;
};
