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

```cpp
int x = 1;
for (int i = 2; i < 10; i += 1) {
  x = x * i;
}
```

Much like other similar languages, in JavaScript every statement is followed by a semicolon (`;`), however unlike most languages it is optional. While JavaScript interpreters are capable of [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), it is still recommended to use semicolons, as there are edge-cases that may cause unintended behavior (or syntax error) if we omit it.

JavaScript identifiers such as function and variable names are **case-sensitive**. There are well-established best practices for using different letter casing for different language constructs. Variables, local constants, function and class method names use camel case (e.g. `camelCase`) while class names use Pascal case (e.g. `PascalCase`). Global constants may use upper snake case (e.g. `UPPER_SNAKE_CASE` ) but this is not a universally accepted convention.

The language is also **dynamically typed**, which means that the type of a variable or constant is determined by the value that they currently hold. This also means that the types of variables are not declared in advance and can changes as the value of the variable changes.

```js
let variable;    // type: undefined
variable = 47;   // type: number
variable = true; // type: boolean
```

> The standard that defines the capabilities of the JavaScript language is called ECMAScript. Versions of JavaScript are usually referenced by the version of the ECMAScript standard that defines them (e.g. ECMAScript 2023)

### References for JavaScript

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
  commissionYear: 2245,
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

Values in an array can be accessed by referencing them with their 0-based index and the `[]` notation or the `.at()` method. Accessing any non-existent index returns `undefined`;

```js
starships[1];     // "Defiant"
starships.at(-1); // "Voyager"
starships[10];    // undefined
```

#### Working with complex data structures

Complex data types such as objects and arrays are always handled as references. This means that when we create a new reference to a complex data structure it will not be copied. Modifying the second reference will modify the original object.

```js
const titanA = {
  class: "Constitution III",
  registry: "NCC-80102-A",
  commissionYear: 2396,
};

const enterpriseG = titanA;
enterpriseG.registry = "NCC-1701-G";
titanA.registry; // "NCC-1701-G"
```

If you want to create a copy of an object or array, you can use the spread operator (`...`) to create a new object with the same properties or an array with the same values. Be careful however, as this operator only creates a "shallow-copy". This means that if the values in your data structure are complex data structures themselves, then those won't get copied, only a new reference will be created. If you want to create a "deep-copy" of an object, you can use the `JSON.stringify()` and `JSON.parse()` methods to do so.

```js
const weyoun4 = {
  name: "Weyoun",
  race: "Vorta",
  occupations: ['liason', 'supervisor']
};

const weyoun5 = {...weyoun4};                        // "shallow" copy
const weyoun6 = JSON.parse(JSON.stringify(weyoun5)); // "deep" copy
```

> When writing array and object literals in multiple rows the comma after the last element is optional. If you are using a version control system such as [Git](https://git-scm.com/) it is recommended to include the comma after the last row, as it will generate a smaller footprint in the diff between commits if a new item is added.

> The [JSON data format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) is based on the object and array syntax of JavaScript. JSON is primarily used as a data transfer format on the Web, but is also used as a data storage and metadata description format as well.

### Functions

Functions are first class objects in JavaScript. Instead of being a separate language construct, functions are values with the `Function` type. They can be defined with either the `function` keyword or with the "double arrow syntax" (`=>`);

Functions can have any number of arguments, these arguments can have default values. Functions may return a value with the `return` keyword. The function will return with `undefined` if no `return` statement is present or the `return` statement has no parameter.

```js
function engage(destination, warpFactor = 5) {
  const eta = calculateEta(destination, warpFactor);

  setDestination(destination);
  setSpeed(warpFactor);

  return eta;
}
```

While arrow functions can have their own function body defined within a block within curly braces (`{}`), they are most powerful when they only contain a return statement. In this case we don't have to include the curly braces at all. Such arrow function are most commonly used with array methods such as `map`, `filter`, `some`, or `every`.

```js
const registries = ["NCC-1701", "NX-2000", "NX-74205", "NCC-74656"];

const experimentalRegistries = registries.filter((registry) =>
  registry.startsWith("NX-")
);
```

> If you want to return an object literal from an arrow function, you have to wrap the curly braces of the object with parentheses, otherwise the interpreter would assume that the braces indicate a new code block.

If you want your function to accept an unspecified number of arguments, you can create a [variadric function](https://en.wikipedia.org/wiki/Variadic_function) with the rest operator (`...`).

```js
function beamUp(...crewMembers) {
  // crewMembers is an array of all arguments
}

beamUp("Kirk", "Spock", "McCoy");
```

When a function has optional arguments or we want to accept arguments in any order it is commonplace to pass these arguments as properties a single object. In this case we can reference the optional arguments by name. These arguments can be automatically bound to local variables by using object destructuring in the function signature

```js
function calibrateWarpCore({ dilithiumAlignment, containmentFieldStrength }) {
  if (dilithiumAlignment !== undefined) {
    setDilithiumAlignment(dilithiumAlignment);
  }

  if (containmentFieldStrength !== undefined) {
    setContainmentFieldStrength(containmentFieldStrength);
  }
}

calibrateWarpCore({ dilithiumAlignment: 47 });
```

> When teaching with functions it is recommended to use the `function` keyword, unless we want to create a [lambda function](https://en.wikipedia.org/wiki/Anonymous_function). For lambda functions we should use the double arrow syntax if the expression is not overly complex.

> Functions can be called with more or even less arguments than what is defined in the function signature. Additional arguments are not bound to any local variable (but can still be accessed through the special `arguments` variable in the functions that are defined with the `function` keyword), missing arguments will get the `undefined` value.

### Classes

Similarly to other object-oriented programming languages it is possible to create classes in JavaScript. The class can include fields and methods. Unlike many other programming languages, you don't have to define all fields in advance, you can extend the instance of your class with any field or method. Within the class fields and methods are accessed with the `this` keyword.

Classes can be instantiated with the `new` keyword. This will call the `constructor()` method of the class if defined. It is also possible to create private fields and methods with the `#` prefix in JavaScript.

Classes may also have getters and setters. These are special methods that allow special logic to be applied when a property is accessed or modified. If only one of the two accessor methods is defined, then the other functionality won't be available (e.g. if the setter is missing then the property cannot be modified);

```js
class Starship {
  // Public fields
  name = "";
  registry = "";

  // Private fields
  #crew = [];

  constructor(name, registry) {
    this.name = name;
    this.registry = registry;
  }
  
  // Public methods, getters, setters
  get crewComplement() {
    return this.#crew.length;
  }

  set isExperimental(value) {
    if (value === true) {
      this.#setRegistryPrefix("NX");
    } else {
      this.#setRegistryPrefix("NCC");
    }
  }

  // Private methods, getters, setters
  addCrewMember(crewMember) {
    this.#crew.push(crewMember);
  }

  get #registryPrefix() {
    const indexOfDash = this.registry.indexOf("-");
    return this.registry.substring(0, indexOfDash);
  }

  // Private methods
  #setRegistryPrefix(newPrefix) {
    this.registry = this.registry.replace(this.#registryPrefix, newPrefix);
  }
}

const excelsior = new Starship("USS Excelsior", "NX-2000");
excelsior.addCrewMember("Hikaru Sulu");
excelsior.crewComplement; // 1
excelsior.isExperimental = false;
excelsior.registry; // NCC-2000
```

> In JavaScript classes are actually special functions. The `class` keyword is a syntax sugar for creating such functions.

### References for types

- More details on JavaScript types  
  ["JavaScript data types and data structures" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- More details on JavaScript functions  
  ["Functions" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- More details on JavaScript classes  
  ["Using classes" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)

> JavaScript has dialects that support static typing and type definitions. The most popular of these dialects is [TypeScript](https://www.typescriptlang.org/). Using types can be beneficial from an educational point of view if we want to put more emphasis on the concept of types in the learning process. Some runtimes like Deno have TypeScript support built in.
