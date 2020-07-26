const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlewines', {

});

module.exports = mongoose.connection;