# JavaScript Basics

In this section you can find information about the JavaScript programming language. It serves a reference for the learning journeys presented in Part II of this guide.

## About JavaScript

JavaScript is an **interpreted script language**. This means that the program code runs directly in a **runtime** without a separate compilation step (aka. JIT or "just-in-time" compilation). This runtime can be a graphical interface such as a web browser (e.g. Google Chrome or Microsoft Edge) or a desktop environment (e.g. Electron), or it can be a command-line environment (e.g. Node.js, Deno, Bun). Each of these runtimes uses a **JavaScript engine** to run JavaScript code as well as their own APIs (programming interfaces).

The syntax of JavaScript belongs to the "C style" family of programming languages. This means that its syntax bears a close resemblance to other "C style" languages, such as C, C++, C#, and Java. In addition to the syntax being similar, JavaScript for the most part also uses the same keywords as other popular languages. This makes it easy to transition to other similar languages after learning the basics of programming with JavaScript.

```js
let x = 1;
for (let i = 2; i < 10; i += 1) {
  x = x * i;
}
```

```js
int x = 1;
for (int i = 2; i < 10; i += 1) {
  x = x * i;
}
```

JavaScript identifiers such as function and variable names are **case-sensitive**. There are well-established best practices for using different letter casing for different language constructs. Variables, local constants, function and class method names use camel case (e.g. `camelCase`) while class names use Pascal case (e.g. `PascalCase`). Global constants may use upper snake case (e.g. `UPPER_SNAKE_CASE` ) but this is not a universally accepted convention.

The language is also **dynamically typed**, which means that the type of a variable or constant is determined by the value that they currently hold. This also means that the types of variables are not declared in advance and can changes as the value of the variable changes.

```js
let variable;    // type: undefined
variable = 47;   // type: number
variable = true; // type: boolean
```

> The standard that defines the capabilities of the JavaScript language is called ECMAScript. Versions of JavaScript are usually referenced by the version of the ECMAScript standard that defines them (e.g. ECMAScript 2023)

### References

- Official JavaScript documentation  
  ["JavaScript" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Additional code conventions  
  ["Guidelines for writing JavaScript code examples" page on MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript).

## Types

Like most programming languages, JavaScript has built-in types to work with. Even though variables are not declared with a static type, they still have types during runtime.

Types can be split to two larger categories: primitive and complex types. Values of primitive types are **immutable**, meaning that the content of the value cannot change (variables holding primitive values can receive new values though). In contrast complex types are **mutable**, so their content can change after they have been initialized.

### Primitive types

#### Number

Any arbitrary number has the `number` type. Unlike some other programming languages JavaScript does not differentiate between integer and float numbers.

Special values for the `number` type are `NaN` (Not a Number) and `Infinity`. The `NaN` value is the result of invalid number operations (e.g. `Math.sqrt(-1)`) while `Infinity` is returned by mathematical formulas that would converge to infinity (e.g. `1/0`).

Number literals can be written in several formats, such as decimal (`10.71`), scientific notation (`7.4656e4`), octal (`0220735`), or hexadecimal (`0x1272F`).

#### String

Arbitrary text values are denoted by either single (`'`) or double quotes (`"`). A special kind of string denoted with the backtick (`` ` ``) symbol is called a **template string**. It allows variables and other JavaScript expressions to be interpolated within the string with the `${}` syntax.

JavaScript does not have a separate character type. Characters are simply strings with a length of one.

```js
let temperature = "hot";
`Tea, Earl Grey, ${name}.` // "Tea, Earl Grey, hot."
```

#### Boolean

Like in most programming languages the Boolean type has two possible values: `true` and `false`.

#### Undefined

Special type with only a single possible value: `undefined`. It indicates a missing value. This is the starting value of variables until a value is assigned to them, the value of non-existent properties of objects, and the value returned by functions without an explicit `return` statement or an empty `return`;

#### Null

Null is also a type with a single value: `null`. Similarly to `undefined` it indicates a missing value, but is used to indicate a missing object rather than a missing primitive.

> In JavaScript primitive values (with the exception of `null` and `undefined`) have so-called **wrapper objects**. These allow them to behave like objects and have their own properties and methods, such as the `.length` property of strings or the `.toPrecision()` method of numbers.

### Complex types

#### Object

Objects are a collection of key-value pairs where keys are strings (a.k.a. associative array or dictionary). Values in objects are referred to as "methods" if they hold function type values, "properties" otherwise.

The contents of an object can be changed dynamically, keys can be added, removed and values can be changed.

Object literals are defined by listing key-value pairs between curly braces (`{}`).

```js
let enterprise = {
  class: "Constitution",
  registry: "NCC-1701",
  commissionYear: 2245
};
```

Values in an object can be accessed by referencing them with the dot notation or the `[]` notation. Accessing any non-existent key returns `undefined`;

```js
enterprise.class;       // "Constitution"
enterprise["registry"]; // "NCC-1701"
enterprise.isActive;    // undefined
```

#### Array

Arrays are special objects that store a list of values indexed by incremental integers starting from `0`. Values in an array can have different types and can be changed by assigning a new value to the given index.

The size of an array can be changed dynamically, values can be added, removed and  values can be changed. This dynamic nature of arrays makes it possible to use them as other data structures as well, such as [queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) and [stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)).

Array literals are defined by listing values between square brackets (`[]`).

```js
let starships = ["Enterprise", "Defiant", "Voyager"];
```

Values in an array can be accessed by referencing them with their index and the `[]` notation or the `.at()` method. Accessing any non-existent index returns `undefined`;

```js
starships[2];    // "Voyager"
starships.at(0); // "Enterprise"
starships[10];   // undefined
```

> The JSON data format is based on the object and array syntax of JavaScript. JSON is primarily used as a data transfer format on the Web, but is also used as a data storage and metadata description format as well.

### References

- More details on JavaScript types  
  ["JavaScript data types and data structures" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

> JavaScript has dialects that support static typing and type definitions. The most popular of these dialect is [TypeScript](https://www.typescriptlang.org/). Using types can be beneficial from an educational point of view if we want to put more emphasis on the concept of types in the learning process. Some runtimes like Deno have TypeScript support built in.
