type T = {
  name: string;
  age: number;
  email: string;
};
const validateKeys = (obj: T, keys: (keyof T)[]) => {
  for (let key of keys) {
    if (key in obj) {
      return true;
    } else {
      return false;
    }
  }
};

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
