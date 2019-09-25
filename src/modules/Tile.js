module.exports = class Tile {
    constructor(number, shown) {
        this.number = number;
        this.shown = shown;
    }

    toJSON(key) {
        return {
            number: this.number,
            shown: this.shown
        };
    }

    toString() {
        return JSON.stringify(this,null,4);
    }
}
