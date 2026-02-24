export function findRoutes(routes: string[][]): string {
  const routeMap = new Map<string, string>();
  const destinations = new Set<string>();
​
  for (const [start, end] of routes) {
    routeMap.set(start, end);
    destinations.add(end);
  }
​
  let currentLocation = "";
  for (const [start] of routes) {
    if (!destinations.has(start)) {
      currentLocation = start;
      break;
    }
  }
​
  const result: string[] = [currentLocation];
​
  while (routeMap.has(currentLocation)) {
    currentLocation = routeMap.get(currentLocation)!;
    result.push(currentLocation);
  }
​
  return result.join(", ");
}