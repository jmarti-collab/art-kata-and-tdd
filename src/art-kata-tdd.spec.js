const artKataTdd = require('./art-kata-tdd');

describe('Art, Kata and Tdd', () => {
  it('is a function', () => {
    expect(typeof artKataTdd).toEqual('function');
  });

  it('is a function that returns another function', () => {
    const result = artKataTdd();
    expect(typeof result).toEqual('function');
  });
});
