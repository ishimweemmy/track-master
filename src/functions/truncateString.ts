export const truncateString = (word: string, charNumber: number) => {
  if (word.length > charNumber && word.length >= 13) {
    return `${word.slice(0, charNumber)}...`;
  }
  return word;
};
