const router = require('express').Router();

const { getAllWines, saveWine, deleteWine } = require('../../controllers/wine-controller');

//for GET and POST /api/wines
router
    .route('/')
    .get(getAllWines)
    .post(saveWine);

//for DELETE /api/wines/:id
router
    .route('/:id')
    .delete(deleteWine);

module.exports = router;