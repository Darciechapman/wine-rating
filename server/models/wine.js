const { Schema, model } = require('mongoose');

const wineSchema = new Schema({
  title: [
    {
      type: String,
    },
  ],
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  description: {
    type: String,
  },
  wineId: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

const Wine = model('wine', wineSchema);

module.exports = Wine;