const Tile = require('../modules/Tile.js');
const Row = require('../modules/Row.js');
const Board = require('../modules/Board.js');

let example = new Board([
    new Row([
        new Tile(3, true),
        new Tile(4, true),
        new Tile(7, true),
        new Tile(1, true),
        new Tile(2, true),
        new Tile(8, true),
        new Tile(9, true),
        new Tile(5, true),
        new Tile(6, true),
        ]),
    new Row([
        new Tile(3, true),
        new Tile(4, true),
        new Tile(7, true)
        ])
]);
console.log(example.toJSON());
console.log(example.toString());