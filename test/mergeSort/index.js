let assert = require('assert').strict;
let mergeSort = require('../../dist').mergeSort;

describe('归并排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + mergeSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(mergeSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});