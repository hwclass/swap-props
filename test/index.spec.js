import * as Index from '../src/';

describe('#swapProps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should return the object with two swapped props', () => {
    const expected = {a: 'a', b: 'b'}
    const actual = Index.swapProps({a: 'b', b: 'a'}, ['a'], ['b']);
    expect(expected).toEqual(actual)
  });

  it('should return the object with more than two swapped props', () => {
    const expected = {a: 'a', b: 'b', c: 'c', d: 'd'}
    const actual = Index.swapProps({a: 'b', b: 'a', c: 'd', d: 'c'}, ['a', 'c'], ['b', 'd']);
    expect(expected).toEqual(actual)
  });
});