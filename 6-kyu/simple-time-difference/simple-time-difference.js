function solve(arr) {
  const MINUTES_IN_DAY = 1440;
​
  // Remove duplicates
  const unique = [...new Set(arr)];
​
  // Convert "HH:MM" → total minutes
  const minutes = unique.map(time => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  });
​
  // Sort ascending
  minutes.sort((a, b) => a - b);
​
  let maxGap = 0;
​
  // Check gaps between consecutive alarms
  for (let i = 1; i < minutes.length; i++) {
    const gap = minutes[i] - minutes[i - 1] - 1;
    maxGap = Math.max(maxGap, gap);
  }
​
  // Check circular gap (last → first across midnight)
  const circularGap =
    (MINUTES_IN_DAY - minutes[minutes.length - 1] + minutes[0]) - 1;
​
  maxGap = Math.max(maxGap, circularGap);
​
  // Convert back to HH:MM
  const hours = Math.floor(maxGap / 60);
  const mins = maxGap % 60;
​
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}
​