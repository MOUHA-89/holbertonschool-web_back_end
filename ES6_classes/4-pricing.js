export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newvalue) {
    if (typeof newvalue !== 'number') {
      throw new TypeError('amount must be an Number');
    }
    this._amount = newvalue;
  }

  set currency(value) {
    if (typeof value !== 'string') {
      throw new TypeError('currency must be an Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency_name} (${this._currency_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
