export function ipToNum(ip: string): number {
  return ip.split('.').reduce((acc, val) => acc * 256 + Number(val), 0)
}
​
export function numToIp(x: number): string {
  return [
    Math.floor(x / 256 ** 3) % 256,
    Math.floor(x / 256 ** 2) % 256,
    Math.floor(x / 256) % 256,
    x % 256
  ].join('.')
}