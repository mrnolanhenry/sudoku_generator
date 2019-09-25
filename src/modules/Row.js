const Tile = require('./Tile.js');

module.exports = class Row {
    constructor(tiles) {
        this.tiles = tiles;
    }

    toJSON(key) {
        return {
            tiles: this.tiles
        };
    }

    toString() {
        return JSON.stringify(this,null,4);
    }
}

// let example = new Tile(7,true);
// console.log(example.toJSON());
// console.log(example.toString());