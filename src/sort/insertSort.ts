import { ArrayUtils } from '@/utils';

// * 插入排序
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
