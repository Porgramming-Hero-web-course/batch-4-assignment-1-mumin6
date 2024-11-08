const countWordOccurrences = (sentence: string, word: string): number => {
  const upperCaseSentence = sentence.toUpperCase();
  const upperCaseWord = word.toUpperCase();
  const count = upperCaseSentence.split(upperCaseWord).length - 1;
  return count;
};

console.log(countWordOccurrences("I love TypeScript ", "Typescript"));
