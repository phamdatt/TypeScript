/*ReturnType in typescript*/

function ExampleReturnType(a: number, b: number) {
  return {
    a: `${a}`,
    b: `${b}`,
  };
}

type DataTypeExample = ReturnType<typeof ExampleReturnType>;

function consoleLogData(data: DataTypeExample) {
  console.log(data);
}
let stringifyNumbers = ExampleReturnType(1, 2);
consoleLogData(stringifyNumbers);
