import { rankServices } from '../services/rank.services';

describe('test rank service', () => {
  let result1 = rankServices.calculateRankPercentage(90);
  let result2 = rankServices.calculateRankPercentage(60);
  let result3 = rankServices.calculateRankPercentage(50);
  let result4 = rankServices.calculateRankPercentage(30);

  it('test case #1', () => {
    expect(result1).toBe(80);
  });
  it('test case #2', () => {
    expect(result2).toBe(56.67);
  });
  it('test case #3', () => {
    expect(result3).toBe(40);
  });
  it('test case #4', () => {
    expect(result4).toBe(26.67);
  });
});
