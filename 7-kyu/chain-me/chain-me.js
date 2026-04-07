function chain(input, fs) {
  return fs.reduce((acc, fn) => fn(acc), input)
}