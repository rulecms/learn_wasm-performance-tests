export function fibonacciJS(n: number): number {
  if (n <= 1) return n;
  return fibonacciJS(n - 1) + fibonacciJS(n - 2);
}

export function isPrimeJS(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

export function sortArrayJS(arr: number[]): void {
  arr.sort((a, b) => a - b);
}

export function generateRandomArray(size: number): Int32Array {
  const arr = new Int32Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 1000000);
  }
  return arr;
} 