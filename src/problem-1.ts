const sumArray = (param: number[]): number => {
  let sum: number = 0;
  param.map((num: number) => {
    sum = sum + num;
  });
  return sum;
};

const sum = sumArray([1, 2, 3, 4, 5]);

console.log(sum);
