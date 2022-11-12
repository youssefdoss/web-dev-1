describe("#sortAlmostSorted", function () {
  it("sorts the array correctly", function () {
    expect(sortAlmostSorted([1, 2, 3, 7, 5, 6, 4])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(sortAlmostSorted([4, 2, 3, 1, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(sortAlmostSorted([1, 2, 5, 4, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(sortAlmostSorted([1, 2, 4, 3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(sortAlmostSorted([-1, 1, 0, 2])).toEqual([-1, 0, 1, 2]);
    expect(sortAlmostSorted([2, 1])).toEqual([1, 2]);
  });
  it("handles a sorted array", function () {
    expect(sortAlmostSorted([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(sortAlmostSorted([1])).toEqual([1]);
    expect(sortAlmostSorted([])).toEqual([]);
  });
});

