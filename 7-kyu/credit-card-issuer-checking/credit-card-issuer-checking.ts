import { Issuer } from "./preloaded";
​
export const getIssuer = (x: number): Issuer => {
  const s = x.toString();
​
  // VISA
  if (s.startsWith("4") && (s.length === 13 || s.length === 16)) {
    return Issuer.VISA;
  }
​
  // AMEX
  if (
    (s.startsWith("34") || s.startsWith("37")) &&
    s.length === 15
  ) {
    return Issuer.AMEX;
  }
​
  // Mastercard
  const firstTwo = Number(s.slice(0, 2));
  if (firstTwo >= 51 && firstTwo <= 55 && s.length === 16) {
    return Issuer.Mastercard;
  }
​
  // Discover
  if (s.startsWith("6011") && s.length === 16) {
    return Issuer.Discover;
  }
​
  return Issuer.Unknown;
};