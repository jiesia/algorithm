// * 归并排序
export function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const middle = nums.length >> 1;

  const left = mergeSort(nums.slice(0, middle));
  const right = mergeSort(nums.slice(middle));

  return merge(left, right);
}

export function merge(nums1: number[], nums2: number[]) {
  const result: number[] = [];

  const { length: length1 } = nums1;
  const { length: length2 } = nums2;

  let i = 0, j = 0;
  while (true) {

    if (i >= length1) {
      result.push(...nums2.slice(j));
      break;
    }

    if (j >= length2) {
      result.push(...nums1.slice(i));
      break;
    }

    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  return result;
}

