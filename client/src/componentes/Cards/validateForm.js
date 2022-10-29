export default function validateForm(input) {
  let errors = {};

  if(!input.raza) errors.breed = "Nombre de la nueva raza requerida"
  else if(!/^[a-zA-Z]*$/.test(input.raza)) errors.breed = "El nombre de la raza no puede contener simbolos y/o numeros"
  else if(input.raza.length < 4) errors.breed = "El nombre de la raza debe contener 4 caracteres minimamente"
  
  if(!input.alturaMinima) errors.altMin = "Altura minima requerida"
  else if(!/^\d+$/.test(input.alturaMinima)) errors.altMin = "La altura minima debe ser un numero entero"
  else if(input.alturaMinima < 10) errors.altMin = "La altura minima debe ser al menos 10 cm"
  else if(input.alturaMinima > 100) errors.altMin = "La altura minima no puede excederse de los 100 cm"

  if(!input.alturaMaxima) errors.altMax = "Altura maxima requerida"
  else if(!/^\d+$/.test(input.alturaMaxima)) errors.altMax = "La altura maxima debe ser un numero entero"
  else if(input.alturaMaxima < 11) errors.altMax = "La altura maxima no puede ser menor que 11 cm"
  else if(input.alturaMaxima > 100) errors.altMax = "La altura maxima no puede excederse de los 100 cm"
  
  if(input.alturaMaxima <= input.alturaMinima) errors.altMax = "La altura maxima no puede ser menor o igual que la altura minima"
 
  if(!input.pesoMinimo) errors.pesoMin = "Peso minimo requerido"
  else if(!/^\d+$/.test(input.pesoMinimo)) errors.pesoMin = "El peso minimo debe ser un numero entero"
  else if(input.pesoMinimo < 1) errors.pesoMin = "El peso minimo debe ser al menos 1kg"
  
  if(!input.pesoMaximo) errors.pesoMax = "Peso maximo requerido"
  else if(!/^\d+$/.test(input.pesoMaximo)) errors.pesoMax = "El peso maximo debe ser un numero entero"
  else if(input.pesoMaximo < 2) errors.pesoMax = "El peso maximo debe ser al menos 2kg"

  if(input.pesoMaximo <= input.pesoMinimo) errors.pesoMax = "El peso maximo no puede ser menor o igual que el peso minimo"

  if(!input.añosDeVida) errors.años = "Edad requerida"
  else if(!/^\d+$/.test(input.añosDeVida)) errors.años = "La edad debe ser un numero entero"
  else if(input.añosDeVida <= 0) errors.años = "La edad minima debe ser 1 año"

  if(!input.imagen) errors.imagen = "URL de la imagen requerida"
  else if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/.test(input.imagen)) errors.imagen = "URL invalida"

  console.log(input.temperamentos.length)
  if(input.temperamentos.length <= 0) errors.temperamentos = "Temperamentos requeridos"
  else if(input.temperamentos.length < 3) errors.temperamentos = "Debe seleecionar al menos 3 temperamentos"

  return errors;
};
