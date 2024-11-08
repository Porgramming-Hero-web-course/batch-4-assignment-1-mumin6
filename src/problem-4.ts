type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type BothCircleAndRectangle = Circle | Rectangle;

const calculateShapeArea = (param: BothCircleAndRectangle) => {
  if (param.shape === "circle") {
    const { radius } = param;
    const area = Math.PI * radius ** 2;
    return area;
  } else if (param.shape === "rectangle") {
    const { width, height } = param;
    const area = width * height;
    return area;
  }
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea);
