const { sum, sumOf } = require('./describe');

//여러개 묶어서 테스트 
describe('sum', () => {
  it('합계 계산', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('배열 합계 계산', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});