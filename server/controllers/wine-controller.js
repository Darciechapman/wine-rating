const { Wine } = require('../models');

module.exports = {
    async getAllWines(req, res){
        const wines = await Wine.find();

        return res.json(wines);
    },
    async saveWine(req, res){
        console.log(req.body);
        try {
            const savedWine = await Wine.create(req.body);
            return res.json(savedWine);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async deleteWine(req, res){
        const deletedWine = await Wine.findOneAndRemove({ _id: req.params.id });

        if (!deletedWine){
            return res.status(404).json({message: `Couldn't find wine with this id!`})
        }

        return res.json(deletedWine);
    }
};