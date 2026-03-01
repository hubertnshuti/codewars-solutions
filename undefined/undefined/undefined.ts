export function timeCorrect(timestring: string | null): string | null {
  if (timestring === null || timestring === "") {
    return timestring;
  }
​
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) {
    return null;
  }
​
  let [h, m, s] = timestring.split(':').map(Number);
​
  m += Math.floor(s / 60);
  s %= 60;
  
  h += Math.floor(m / 60);
  m %= 60;
  
  h %= 24;
​
  const pad = (val: number) => String(val).padStart(2, '0');
​
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}