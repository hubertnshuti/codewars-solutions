export function hist(s: string): string {
  const errors = ["u", "w", "x", "z"];
​
  return errors
    .map(ch => {
      const count = [...s].filter(c => c === ch).length;
      return count > 0 ? `${ch}  ${count.toString().padEnd(6, " ")}${"*".repeat(count)}` : "";
    })
    .filter(Boolean)
    .join("\r");
}