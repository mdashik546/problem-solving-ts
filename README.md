1.What are some differences between interfaces and types in TypeScript?

Ans:- interface শুধু মাত্র array, object এবং function নিয়ে কাজ করে। আর অন্যদিকে types (type alias) primitives, non-primitives, function সব কিছুর সাথে কাজ করতে পারে।

2.What is the use of the keyof keyword in TypeScript? Provide an example.

Ans:- আমরা যদি কোনো object type এর key গুলোকে union string type বানাতে চাই, তাহলে আমরা keyof ব্যবহার করি।

example:

interface UserRole{
admin:string;
user:string;
viewer:string
}

type Role = keyof UserRole
