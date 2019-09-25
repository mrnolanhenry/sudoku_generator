const Tile = require('./Tile.js');
const Row = require('./Row.js');

module.exports = class Board {
    constructor(rows) {
        this.rows = rows;
    }

    toJSON(key) {
        return {
            rows: this.rows
        };
    }

    toString() {
        return JSON.stringify(this,null,4);
    }
}