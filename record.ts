/*Record in typescript*/

const enum GenderEnum {
  Male = 0,
  Female,
  Other,
}
type GenderType = GenderEnum.Female | GenderEnum.Male | GenderEnum.Other;

interface Person {
  name: string;
  age: number;
  address: string;
}

/*Record*/

let person: Record<GenderType, Person> = {
  [0]: {
    name: "",
    address: "",
    age: 0,
  },
  [1]: {
    name: "",
    address: "",
    age: 0,
  },
  [2]: {
    name: "",
    address: "",
    age: 0,
  },
};
/*Example*/
person[0].name = "Pham Tien Dat";
console.log(person[0].name)