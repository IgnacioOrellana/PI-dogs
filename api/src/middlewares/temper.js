const { Router } = require('express');
const router = Router();
const { getTemper } = require('../controllers/temperController.js')

router.get("/", getTemper)

module.exports = router;
