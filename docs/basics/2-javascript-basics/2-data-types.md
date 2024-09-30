# Data types

Like most programming languages, JavaScript has built-in types to work with. Even though variables are not declared with a static type, they still have types during runtime.

Types can be split to two larger categories: **primitive** and **complex** types. Values of primitive types are **immutable**, meaning that the content of the value cannot change (variables holding primitive values can receive new values though). In contrast complex types are **mutable**, so their content can change after they have been initialized.

## Primitive types

### Number

Any arbitrary number has the `number` type. Unlike some other programming languages JavaScript does not differentiate between integer and float numbers.

Special values for the `number` type are `NaN` (Not a Number) and `Infinity`. The `NaN` value is the result of invalid number operations (e.g. `Math.sqrt(-1)`) while `Infinity` is returned by mathematical formulas that would converge to infinity (e.g. `1/0`).

Number literals can be written in several formats, such as decimal (`10.71`), scientific notation (`7.4656e4`), octal (`0220735`), or hexadecimal (`0x1272F`).

### String

Arbitrary text values are denoted by either single (`'`) or double quotes (`"`). A special kind of string denoted with the backtick (`` ` ``) symbol is called a **template string**. It allows variables and other JavaScript expressions to be interpolated within the string with the `${}` syntax.

JavaScript does not have a separate character type. Characters are simply strings with a length of one.

```js
let temperature = "hot";
`Tea, Earl Grey, ${name}.` // "Tea, Earl Grey, hot."
```

### Boolean

Like in most programming languages the Boolean type has two possible values: `true` and `false`.

### Undefined

Special type with only a single possible value: `undefined`. It indicates a missing value. This is the starting value of variables until a value is assigned to them, the value of non-existent properties of objects, and the value returned by functions without an explicit `return` statement or an empty `return`;

### Null

Null is also a type with a single value: `null`. Similarly to `undefined` it indicates a missing value, but is used to indicate a missing object rather than a missing primitive.

:::note
In JavaScript primitive values (with the exception of `null` and `undefined`) have so-called **wrapper objects**. These allow them to behave like objects and have their own properties and methods, such as the `.length` property of strings or the `.toPrecision()` method of numbers.
:::

## Complex types

### Object

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

### Array

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

## Functions

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

:::warning[Important]
If you want to return an object literal from an arrow function, you have to wrap the curly braces of the object with parentheses, otherwise the interpreter would assume that the braces indicate a new code block.
:::

If you want your function to accept an unspecified number of arguments, you can create a [variadic function](https://en.wikipedia.org/wiki/Variadic_function) with the rest operator (`...`).

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

:::tip
For easier understanding and better readability it is recommended to use the `function` keyword to declare functions, unless you want to create a [lambda function](https://en.wikipedia.org/wiki/Anonymous_function). For lambda functions you should use the double arrow syntax if the expression is not overly complex.
:::

:::note
Functions can be called with more or even less arguments than what is defined in the function signature. Additional arguments are not bound to any local variable (but can still be accessed through the special `arguments` variable in the functions that are defined with the `function` keyword), missing arguments will get the `undefined` value.
:::

## Classes

Similarly to other object-oriented programming languages it is possible to create classes in JavaScript. A class can include fields (properties) and methods. Unlike many other programming languages, you don't have to define all fields in advance, you can extend the instance of your class with any field or method. Within the class fields and methods are accessed with the `this` keyword.

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

:::note
In JavaScript classes are actually special functions behind the scenes. The `class` keyword is a syntax sugar for creating such functions.
:::

## References

- ["JavaScript data types and data structures" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- ["Functions" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- ["Working with objects" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- ["Using classes" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
- ["Queue (abstract data type)" on Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
- ["Stack (abstract data type)" on Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

:::note
JavaScript has dialects that support static typing and type definitions. The most popular of these dialects is [TypeScript](https://www.typescriptlang.org/). Using types can be beneficial from an educational point of view if we want to put more emphasis on the concept of types in the learning process. Some runtimes like Deno have TypeScript support built in.
:::
