export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sortedAnagram = anagram.split('').sort().join('');
​
  return dictionary.filter(word => 
    word.length === anagram.length &&
    word.split('').sort().join('') === sortedAnagram
  );
}
​