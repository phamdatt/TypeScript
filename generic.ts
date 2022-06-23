function getResponse<T = number | string>(arg1: T, arg2: T) {
  return `${arg1},${arg2}`;
}
function genericType<T = number | string, U = string | number>(
  arg1: T,
  arg2: U
) {
  return `${arg1},${arg2}`;
}

interface MyFunction {
  (a: number, b: string): any;
}

let myFunction: MyFunction = (a, b) => {
  console.log(a, b);
};

myFunction(1, "2");

const last = (arr: Array<number>) => arr[arr.length] - 1;
