const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/rest_api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;