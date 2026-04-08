const chain = (input, functions) =>
  functions.reduce((result, fn) => fn(result), input)