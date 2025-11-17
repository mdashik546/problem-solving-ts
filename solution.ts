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
type ArrayType = number[];

type ArrayTypeTwo = (number | undefined)[];
interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

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

const getLength = <T>(input: T): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

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

const filterByRating = (input: BooksType[]): BooksType[] => {
  return input.filter((item: BooksType) => item.rating >= 4);
};

const filterActiveUsers = (users: Users[]) => {
  const newArr = users.filter((user: Users) => user.isActive === true);
  return newArr;
};

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;
  const available = isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${available}`
  );
};

const getUniqueValues = (
  array1: ArrayType,
  array2: ArrayType
): ArrayTypeTwo => {
  const uniqueArray: ArrayTypeTwo = [];
  const newArr: ArrayType = [...array1, ...array2];
  for (let i = 0; i < newArr.length; i++) {
    let isDuplicate: boolean = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (newArr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(newArr[i]);
    }
  }
  return uniqueArray;
};

const calculateTotalPrice = (products: Products[]): number => {
  return products.reduce((total: number, product: Products) => {
    const originalPrice = product.price * product.quantity;
    const hasDicount = product.discount ? product.discount / 100 : 0;
    const discountPrice = originalPrice - originalPrice * hasDicount;
    return total + discountPrice;
  }, 0);
};
