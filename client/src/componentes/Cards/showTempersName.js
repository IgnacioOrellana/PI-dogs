export default function showTempersName(tempers, addedTempers) {
  let newTempers = []
  for(let i = 0; i <= addedTempers.length-1; i++) {
    let aux = parseInt(addedTempers[i])

    for(let j = 0; j <= tempers.length-1; j++) {
      let auxAllTempers = tempers[j].id
      
      if(aux === auxAllTempers) {
        newTempers.push(tempers[j])
        break;
      }
    }
  }
  return newTempers
};
