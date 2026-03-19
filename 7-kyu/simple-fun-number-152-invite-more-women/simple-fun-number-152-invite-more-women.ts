export function inviteMoreWomen(L: number[]): boolean {
  let balance = 0;
​
  for (let num of L) {
    balance += num;
  }
​
  return balance > 0;
}