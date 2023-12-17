const stats = require('./stats');

//테스트 생성 -> 실패 ->  구현 -> 성공 순으로 만들자
describe('최소, 최댓값 테스트', () => {
  it('최댓값 계산', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it('최솟값 계산', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
  it('평균값 계산', () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });
  //describe 내부에 descirbe 구현 가능 it은 불가
  describe('중앙값', () => {
    it('오름차순 정렬', () => {
      expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
    it('1,2,3,4,5인경우 3', () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });
    it('[1,2,3,4,5,6] 처럼 숫자가 6개면, 중앙에 있는 값 3 + 4 / 2 의 결과인 3.5가 중앙값', () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });
});