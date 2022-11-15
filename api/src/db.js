require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, 
  DB_PASSWORD, 
  DB_HOST, 
  DB_NAME,
  DB_PORT 
} = process.env;

const USER = process.env.PGUSER || DB_USER
const PASSWORD = process.env.PGPASSWORD || DB_PASSWORD
const HOST = process.env.PGHOST || DB_HOST
const PORT = process.env.PGPORT || DB_PORT
const DATA_BASE = process.env.PGDATABASE || DB_NAME

const sequelize = new Sequelize(`postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATA_BASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Raza, Temperamento } = sequelize.models;
// Aca vendrian las relaciones

Raza.belongsToMany(Temperamento, { through: "Raza_temperamento"})
Temperamento.belongsToMany(Raza, { through: "Raza_temperamento"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
