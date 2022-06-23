/*Partial*/

/*Tạo một kiểu với tất cả thuộc tính Type được đặt thành optional*/

type Gender = "Male" | "Female" | "Other";

interface PersonInterface {
  name: string;
  age: number;
  address: string;
}

function TestPartial(params: Partial<Record<Gender, PersonInterface>>) {
  console.log(params);
}

TestPartial({
  Male: {
    name: "Pham Tien Dat",
    age: 28,
    address: "21 Bis Hau Giang",
  },
});

/*Example02*/

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Grab bike",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  title: "Beamin",
});
