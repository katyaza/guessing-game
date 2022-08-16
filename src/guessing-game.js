class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.mean = Math.round((this.max + this.min) / 2);
        return this.mean
    }

    lower() {
        this.max= this.mean

    }

    greater() {
        this.min = this.mean
    }
}

module.exports = GuessingGame;
