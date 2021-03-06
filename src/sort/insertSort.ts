import { ArrayUtils } from '@/utils';

// * ζε₯ζεΊ
export function insertSort(nums: number[]) {
  const { length } = nums;
  
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        ArrayUtils.swap(nums, j, j - 1);
      }
    }
  }
}
