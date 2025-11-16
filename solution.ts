type FormatType = string | number | boolean;

interface BooksType {
  title: string;
  rating: number;
}
interface Users {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const books: BooksType[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const users: Users[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

type ArrayType = number[];
const array1: ArrayType = [1, 2, 3, 4, 5];
const array2: ArrayType = [3, 4, 5, 6, 7];

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const products: Products[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

const formatValue = (user: FormatType): FormatType | undefined => {
  if (typeof user === "string") {
    return user.toUpperCase();
  } else if (typeof user === "number") {
    return user * 10;
  } else if (typeof user === "boolean") {
    return !user;
  }
  return undefined;
};

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));

const getLength = <T>(input: T): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

// console.log(getLength('typescriptdfd'));
// console.log(getLength([10, 20, 30, 40,"dfdf"]));

class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());
// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

const filterByRating = (input: BooksType[]): BooksType[] => {
  return input.filter((item: BooksType) => item.rating >= 4);
};

// console.log(filterByRating(books));

const filterActiveUsers = (users: Users[]) => {
  const newArr = users.filter((user: Users) => user.isActive === true);
  return newArr;
};

// console.log(filterActiveUsers(users));

const getUniqueValues = (array1: ArrayType, array2: ArrayType) => {
  const newArr = [];
 
};
getUniqueValues(array1, array2);

const calculateTotalPrice = (products: Products[]) => {
  return products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};

// console.log(calculateTotalPrice(products));
