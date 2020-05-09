const artKataTdd = require('./art-kata-tdd');

describe('Art, Kata and Tdd', () => {
  it('is a function', () => {
    expect(typeof artKataTdd).toEqual('function');
  });

  it('is a function that returns another function', () => {
    const result = artKataTdd();
    expect(typeof result).toEqual('function');
  });

  it('the returned functions should return a number', () => {
    const result = artKataTdd();
    expect(typeof result()).toEqual('number');
  });

  it('is a function that returns a function that return an odd number', () => {
    const result = artKataTdd();
    expect(result() % 2).toEqual(1);
  });
});
