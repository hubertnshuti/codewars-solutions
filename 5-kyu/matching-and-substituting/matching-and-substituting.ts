export function change(s: string, prog: string, version: string): string {
  let lines = s.split("\n")
  let phone = ""
  let ver = ""
​
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("Phone:")) phone = lines[i].slice(6).trim()
    if (lines[i].startsWith("Version:")) ver = lines[i].slice(8).trim()
  }
​
  if (!/^\+1-\d{3}-\d{3}-\d{4}$/.test(phone) || !/^\d+\.\d+$/.test(ver)) {
    return "ERROR: VERSION or PHONE"
  }
​
  if (ver !== "2.0") ver = version
​
  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${ver}`
}