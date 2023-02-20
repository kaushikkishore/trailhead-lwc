import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter = 0;

    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
        return this._currentCount;
    }
    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

    @api
    maximizeCounter() {
        this.counter += 1000000;
    }

    handleIncrement() {
        this.counter++;
    }
    handleDecrement() {
        this.counter--;
    }

    handleMultiply(event) {
        console.log(`Handle multiply factor ${event.detail}`);
        const factor = event.detail;

        this.counter *= factor;
    }

    handleDivide(event) {
        console.log(`Handle divide factor ${event.detail}`);
        const factor = event.detail;

        this.counter /= factor;

    }
}