import { createHash } from "crypto";
​
export function crack(hash: string): string {
  for (let i = 0; i <= 99999; i++) {
    const pin = i.toString().padStart(5, "0");
​
    const md5 = createHash("md5")
      .update(pin)
      .digest("hex");
​
    if (md5 === hash) {
      return pin;
    }
  }
​
  return "";
}