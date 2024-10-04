import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(a) {
    if (typeof a !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = a;
  }

  get amount() {
    return this._amount;
  }

  set currency(c) {
    if (!(c instanceof Currency)) {
      throw TypeError('Currency must be a Currency object');
    }
    this._currency = c;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
