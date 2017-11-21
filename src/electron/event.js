class Event {
    constructor(type, payload) {
        this.type = type

        for (var x in payload) {
            this[x] = payload[x];
        }
    }
}

module.exports = Event