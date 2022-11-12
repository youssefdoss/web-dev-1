'use strict';

describe("#findMultiples", function () {
  it("finds all values of the input that appear more than the minimum number of times", function () {
    expect(findMultiples([5, 6, 7, 5, 6, 5], 1)).toEqual([5, 6, 7]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 2)).toEqual([5, 6]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 3)).toEqual([5]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 4)).toEqual([]);
  });
  it("handles an empty array", function () {
    expect(findMultiples([])).toEqual([]);
  });
});

describe("#findNumFreqs", function () {
  it("creates a frequency counter of the input array", function () {
    expect(findNumFreqs([5, 6, 7, 5, 6, 5])).toEqual({5: 3, 6: 2, 7: 1});
    expect(findNumFreqs([5, 6, 7])).toEqual({5: 1, 6: 1, 7: 1});
    expect(findNumFreqs([-1, 0, 1])).toEqual({'-1': 1, 0: 1, 1: 1});
  });
  it("handles an empty array for frequency counter", function () {
    expect(findNumFreqs([])).toEqual({});
  });
});
