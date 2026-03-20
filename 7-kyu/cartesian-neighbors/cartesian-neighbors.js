function cartesianNeighbor(x, y) {
  const result = [];
​
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue; 
      result.push([x + dx, y + dy]);
    }
  }
​
  return result;
}