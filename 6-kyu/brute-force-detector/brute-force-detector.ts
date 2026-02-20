export function detectBruteForce(logs: string[]): string[] {
  const failCount = new Map<string, number>();
  const suspicious = new Set<string>();
​
  for (const log of logs) {
    const parts = log.split(" ");
    const ip = parts[0];
    const status = parts[1];
​
    if (status === "LOGIN_FAIL") {
      const count = (failCount.get(ip) || 0) + 1;
      failCount.set(ip, count);
​
      if (count >= 3) {
        suspicious.add(ip);
      }
    } else if (status === "LOGIN_SUCCESS") {
      failCount.set(ip, 0); // reset streak
    }
  }
​
  return Array.from(suspicious).sort();
}