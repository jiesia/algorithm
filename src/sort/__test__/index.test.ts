import { deepEqual } from 'assert';
import { bubbleSort, insertSort, merge, mergeSort } from '@/index';

describe('Sort', () => {
  const origin = [5, 3, 7, 9, 0, 4, 6, 8, 2, 1];
  const correct = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let nums = [...origin];

  beforeEach(() => {
    nums = [...origin];
  });

  describe('BubbleSort', () => {
    it('should be sorted correctly', () => {
      bubbleSort(nums);
      deepEqual(nums, correct);
    });
  });

  describe('InsertSort', () => {
    it('should be sorted correctly', () => {
      insertSort(nums);
      deepEqual(nums, correct);
    });
  });

  describe('MergeSort', () => {
    it('should merge two sorted array correctly', () => {
      const nums1 = [1, 3, 5, 7, 9];
      const nums2 = [0, 2, 4, 6, 8];
      const result = merge(nums1, nums2);
      deepEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should be sorted correctly', () => {
      const result = mergeSort(nums);
      deepEqual(result, correct);
    });
  });

});
