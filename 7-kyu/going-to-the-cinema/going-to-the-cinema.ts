export function movie(card: number, ticket: number, perc: number): number {
  let n = 0;
​
  let costA = 0;
  let costB = card;
​
  let currentTicketPrice = ticket * perc;
​
  while (Math.ceil(costB) >= costA) {
    n++;
​
    costA += ticket;
    costB += currentTicketPrice;
​
    currentTicketPrice *= perc;
  }
​
  return n;
}