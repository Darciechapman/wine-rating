const router = require('express').Router();
const wineRoutes = require('./wine-routes');

router.use('/wines', wineRoutes);

module.exports = router;