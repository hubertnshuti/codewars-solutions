export function isIsogram(str: string): boolean{
    const lower = str.toLowerCase();
    const unique = new Set(lower);
    return unique.size === lower.length;
}