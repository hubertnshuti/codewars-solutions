export function camelCase(str: string): string {
  return str
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => 
      word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}