import { ArrayUtils } from '@/utils';

// * 冒泡排序
export function bubbleSort(nums: number[]) {
  const { length } = nums;
  
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        ArrayUtils.swap(nums, j, j + 1);
      }
    }
  }
}
