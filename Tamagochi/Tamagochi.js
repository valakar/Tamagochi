const Storage = require('../Storage/Storage');

class Tamagochi {
    constructor() {
    }

    initiate(id) {
        return Storage.get(id)
            .then((tamagochi) => {
                if (tamagochi) {
                    return `${tamagochi.name}: Hello Master :)`
                }
                return 'You dont have tamagochi yet :('
            });
    }
    
    

    createNew(name, id) {
        return Storage.create(name, id)
            .then((tamagochi) => {
                if (tamagochi) {
                    return `${tamagochi.name}: Привет Хозяин:)`
                }
                return 'Рожусь позже :('
            });
    }

    getStatus(id) {
        return Storage.get(id)
            .then((tamagochi) => {
                if (tamagochi) {
                    return 'Все четко!';
                }
                return 'Я еще не вылупился :('
            })
    }

    feed(id, amount) {
    }
}

module.exports = new Tamagochi();