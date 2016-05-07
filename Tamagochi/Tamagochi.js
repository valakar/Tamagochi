const MockStorage = {
    get: get
};

class Tamagochi {
    constructor(id) {
        this.entity = MockStorage.get(id);
    }

    getStatus() {
        return this.entity.status;
    }

    feed(amount) {
        return this.entity.satiety += amount;
    }
}

function get(id) {
    const status = {
        satiety: 50
    };

    return {
        name: "TestGochi",
        status: status
    }
}

module.exports = Tamagochi;