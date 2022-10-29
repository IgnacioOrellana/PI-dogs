const { Router } = require('express');
const router = Router();
const { 
    getDogs, 
    postDog, 
    getDogById
} = require('../controllers/dogsControllers.js')

router.get("/", getDogs);
router.get("/:idRaza", getDogById)
router.post("/", postDog);

module.exports = router;
