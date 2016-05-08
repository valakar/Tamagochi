const TamagochiModel = require('./Tamagochi.model');

class Storage {
    constructor() {

    }

    get(masterId) {
        return TamagochiModel.findOne({masterId: masterId});
    }

    create(name, masterId) {
        return TamagochiModel.create({name: name, masterId: masterId});
    }

    update(masterId, data) {
        return TamagochiModel.findOneAndUpdate({masterId: masterId}, data);
    }
}

module.exports = new Storage();