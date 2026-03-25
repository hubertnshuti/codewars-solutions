    }
    res.push(line)
  }
​
  return res.join('\n')
}
​
export function selfieDiag2Counterclock(strng: string): string {
  const original = strng.split('\n')
  const diag = diag2Sym(strng).split('\n')
  const rot = rot90Counter(strng).split('\n')
​
  const res: string[] = []
​
  for (let i = 0; i < original.length; i++) {
    res.push(original[i] + '|' + diag[i] + '|' + rot[i])
  }
​
  return res.join('\n')
}
​
export function oper(fct: (s: string) => string, s: string): string {
  return fct(s)
}