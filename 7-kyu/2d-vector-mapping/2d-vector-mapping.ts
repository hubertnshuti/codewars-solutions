export function mapVector(
  vector: [number, number], 
  circle1: [number, number, number], 
  circle2: [number, number, number]
): [number, number] {
  const [vx, vy] = vector;
  const [c1x, c1y, r1] = circle1;
  const [c2x, c2y, r2] = circle2;
​
  // Calculate the ratio between the two radii
  const scale = r2 / r1;
​
  // Find the distance of the vector from the center of circle 1
  const dx = vx - c1x;
  const dy = vy - c1y;
​
  // Scale those distances and add them to the center of circle 2
  const newX = c2x + (dx * scale);
  const newY = c2y + (dy * scale);
​
  // Return coordinates rounded to 2 decimal places
  return [
    Number(newX.toFixed(2)),
    Number(newY.toFixed(2))
  ];
}