export function tribonacci(s: Array<number>, n: number): number[] {
  for (let i = 0; s.length < n; i++) {
    s.push(s[i] + s[i + 1] + s[i + 2]);
  }
  return s.slice(0, n);
}
