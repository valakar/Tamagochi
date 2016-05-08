const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TamagochiSchema = new Schema({
    name: String,
    satiety: Number,
    masterId: String
});

module.exports = mongoose.model('Tamagochi', TamagochiSchema);