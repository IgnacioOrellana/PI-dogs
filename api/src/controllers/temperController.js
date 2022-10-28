require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Temperamento } = require('../db.js')

const API_URL = "https://api.thedogapi.com/v1/breeds?api_key=";

async function getTemper (req, res, next) {
  const tempersDB = await Temperamento.findAll();

  if(tempersDB.length > 0) {
    res.status(200).json(tempersDB)
  } else {
    const getApi = await axios.get(`${API_URL}${API_KEY}`)
    const tempers = getApi.data.map((breed) => breed.temperament)
    
    let newArr = []
    for(let i = 0; i < tempers.length; i++) {
      if(typeof tempers[i] === "string"){ 
      newArr.push(tempers[i].split(","))
      }
    }
  
    let allTempers = []
    for(let i = 0; i < newArr.length; i++) {
      let aux = newArr[i]
      for(let j = 0; j < aux.length; j++) {
        allTempers.push(aux[j])
      }
    }
    const removeSpace = allTempers.map(t => t.replace(/\s/g, ''))
    const filterRepetead = removeSpace.filter((elem, index, array) => {
      return index === array.indexOf(elem)
    })
    
    const addTempers = filterRepetead.sort().map((temper) => Temperamento.create({
      name: temper
    }))
   
    Promise.all(addTempers)
      .then((value) => res.status(201).json(value))
      .catch((reason) => next(reason))
  }
};

module.exports = {
  getTemper
};
