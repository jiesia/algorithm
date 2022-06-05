export class ArrayUtils {

  // * 交换数组两个下标位置的元素
  public static swap<T>(arr: T[], a: number, b: number) {
    if (a >= arr.length || b >= arr.length) {
      throw new Error('out of bound');
    }
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
}
