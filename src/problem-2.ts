const removeDuplicates = (param: number[]) => {
  let noDuplicate: number[] = [];
  param.forEach((num: number) => {
    if (!noDuplicate.includes(num)) {
      noDuplicate.push(num);
    }
  });
  return noDuplicate;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
