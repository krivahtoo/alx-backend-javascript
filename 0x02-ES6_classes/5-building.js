export default class Building {
  constructor(sqft) {
    if (new.target !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  set sqft(sq) {
    if (typeof sq !== 'number') {
      throw TypeError('Square feet must be a number');
    }
    this._sqft = sq;
  }
  
  get sqft() {
    return this._sqft;
  }
}
