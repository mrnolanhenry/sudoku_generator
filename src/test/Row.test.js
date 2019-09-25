const Tile = require('../modules/Tile.js');
const Row = require('../modules/Row.js');

let example = new Row(new Tile(7,true));
console.log(example.toJSON());
console.log(example.toString());