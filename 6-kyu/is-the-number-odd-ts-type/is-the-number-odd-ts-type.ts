export type IsOdd<N extends number> =
  `${N}` extends `${string}${1 | 3 | 5 | 7 | 9}`
    ? true
    : false;