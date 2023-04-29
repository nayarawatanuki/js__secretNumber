class SecretNumber {

    constructor() {

        this._minValue = 1;
        this._maxValue = 1000;

        this._secretNum = parseInt(Math.random() * 100);
    }

    get minValue() {
        return this._minValue;
    }

    get maxValue() {
        return this._maxValue;
    }

    get secretNum() {
        return this._secretNum;
    }

}

export { SecretNumber }