require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Raza, Temperamento } = require('../db.js');
const { Op } = require('sequelize');
const API_URL = "https://api.thedogapi.com/v1/breeds?api_key="

async function getDogs (req, res, next) {
  const { name } = req.query;

  if(!name) {
    const getApi = await axios.get(`${API_URL}${API_KEY}`)
    const getDB = await Raza.findAll({include: Temperamento})

    await Promise.all([getApi, getDB])
          .then((value) => {
            const [api, db] = value
            const dogsBreed = api.data.map((b) => b)
            const dogsApi = dogsBreed.map((dog) => {
                              return {
                                id: dog.id,
                                imagen: dog.image.url,
                                raza: dog.name,
                                temperamento: dog.temperament,
                                peso: dog.weight.metric,
                                origen: dog.origin
                              };
                            })
            let data = dogsApi.concat(db)
            res.status(200).json(data)
          })  
         .catch((reason) => next(reason))
  } else {
    const getApi = await axios.get(`${API_URL}${API_KEY}`)
    const getDB = await Raza.findAll({ 
      where: { 
        raza: {
          [Op.iLike]:`%${name}%`
        }
      },
      include: Temperamento
    })

    await Promise.all([getApi, getDB])
          .then((value) => {
            const [api, db] = value
            const dogsBreed = api.data.filter((p) => {
              if(typeof p.name === "string") {
                return p.name.toUpperCase() === name.toUpperCase()
              }
            })
            let dogsApi;
            if(dogsBreed) {
              dogsApi = dogsBreed.map((dog) => {
                                return {
                                  id: dog.id,
                                  imagen: dog.image.url,
                                  raza: dog.name,
                                  temperamento: dog.temperament,
                                  peso: dog.weight.metric,
                                  origen: dog.origin
                                };
                              })
            }
            let data = dogsApi.concat(db)
            data.length > 0 ? res.status(200).json(data) : res.status(404).json({ error: "No se encontro la raza buscada" })
          })
          .catch((reason) => next(reason))
  }
};
  
async function getDogById(req, res, next) {
  const { idRaza } = req.params;
  let finder = idRaza.includes("-")

  if(!finder) {
    await axios.get(`${API_URL}${API_KEY}`)
      .then((value) => {
        const dogsBreed = value.data.filter((p) => p.id === parseInt(idRaza))
        const dogsApi = dogsBreed.map((dog) => {
                          return {
                            id: dog.id,
                            imagen: dog.image.url,
                            raza: dog.name,
                            temperamento: dog.temperament,
                            altura: dog.height.metric,
                            peso: dog.weight.metric,
                            añosDeVida: dog.life_span
                          };
                        })
        dogsApi.length > 0 ? res.status(200).json(dogsApi) : res.status(404).send("No se encontro informacion con el id buscado")
      })
      .catch((reason) => next(reason))
  } else {
    const getBreed = await Raza.findAll({
      where: { id: idRaza },
      include: Temperamento
    })
    getBreed.length > 0 ? res.status(200).json(getBreed) : res.status(404).send("No se encontro la raza buscada")
  }
};

async function postDog (req, res, next) {
  const { raza, alturaMinima, alturaMaxima, pesoMinimo, pesoMaximo, añosDeVida, imagen, temperamentos } = req.body;

  if(!raza) return res.status(400).json({ error: "Raza no recibida" })
  if(!alturaMinima) return res.status(400).json({ error: "Altura minima no recibida" })
  if(!alturaMaxima) return res.status(400).json({ error: "Altura maxima no recibida" })
  if(!pesoMinimo) return res.status(400).json({ error: "Peso minimo no recibido" })
  if(!pesoMaximo) return res.status(400).json({ error: "Peso maximo no recibido" })
  if(!añosDeVida) return res.status(400).json({ error: "Falta enviar años de vida" }) 
  if(!imagen) return res.status(400).json({ error: "Imagen no recibiba" })
  if(!temperamentos) return res.status(400).json({ error: "Temperamentos no recibidos"})
  
  try {
    const newDog = await Raza.create({
      raza,                 
      altura: `${alturaMinima} - ${alturaMaxima}`,
      peso: `${pesoMinimo} - ${pesoMaximo}`  ,
      añosDeVida,
      imagen
    })
    const addTemps = temperamentos.map((t) => newDog.addTemperamento(t))
    Promise.all(addTemps)

    res.status(200).send("Raza creada exitosamente")
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getDogs,
  postDog,
  getDogById
};
 