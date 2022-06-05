import { deepEqual } from 'assert';
import { ArrayUtils } from '@/utils';

describe('Utils', () => {
  describe('ArrayUtils', () => {

    it('should swap two element of array by index', () => {
      const array = [1, 2, 3, 4, 5];
      ArrayUtils.swap(array, 0, 1);
      deepEqual(array, [2, 1, 3, 4, 5]);
    });
  });
});
