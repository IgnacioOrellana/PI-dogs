const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const middlewareDog = require('../middlewares/dogs.js')
const middlewareTempers = require('../middlewares/temper.js')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", middlewareDog)
router.use("/temperaments", middlewareTempers)

router.get("/", (req, res) => {
  res.status(200).send("Proyecto individual - perros")
})

module.exports = router;
