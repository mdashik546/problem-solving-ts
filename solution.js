"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
const users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
const formatValue = (user) => {
    if (typeof user === "string") {
        return user.toUpperCase();
    }
    else if (typeof user === "number") {
        return user * 10;
    }
    else if (typeof user === "boolean") {
        return !user;
    }
    return undefined;
};
// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));
const getLength = (input) => {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
};
// console.log(getLength('typescriptdfd'));
// console.log(getLength([10, 20, 30, 40,"dfdf"]));
class Person {
    name;
    age;
    constructor(name, age) {
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
const filterByRating = (input) => {
    return input.filter((item) => item.rating >= 4);
};
// console.log(filterByRating(books));
const filterActiveUsers = (users) => {
    const newArr = users.filter((user) => user.isActive === true);
    return newArr;
};
// console.log(filterActiveUsers(users));
const getUniqueValues = (array1, array2) => {
    const newArr = [];
};
getUniqueValues(array1, array2);
const calculateTotalPrice = (products) => {
    return products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
};
// console.log(calculateTotalPrice(products));
//# sourceMappingURL=solution.js.map