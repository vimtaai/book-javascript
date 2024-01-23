# About JavaScript

JavaScript is an **interpreted script language**. This means that the program code runs directly in a **runtime** without a separate compilation step (aka. JIT or "just-in-time" compilation). This runtime can be a graphical interface such as a web browser (e.g. Google Chrome or Microsoft Edge) or a desktop environment (e.g. Electron), or it can be a command-line environment (e.g. Node.js, Deno, Bun). Each of these runtimes uses a **JavaScript engine** to run JavaScript code as well as their own APIs (programming interfaces).

JavaScript is a multi-paradigm programming language, which means that it supports a variety of programming styles and paradigms, such as **imperative**, **functional**, and **object-oriented**. While it is possible to use a single paradigm exclusively, the true power of JavaScript is the ability to combine these various programming styles.

> The multi-paradigm nature of JavaScript makes it ideal for showcasing and combining multiple programming paradigms and approaches for students.

## Syntax

Syntax-wise JavaScript belongs to the "C style" family of programming languages. This means that its syntax bears a close resemblance to other "C style" languages, such as C, C++, C#, and Java. In addition to the syntax being similar, JavaScript for the most part also uses the same keywords as other popular languages. This makes it easy to transition to other similar languages after learning the basics of programming with JavaScript.

```js
// JavaScript
let x = 1;
for (let i = 2; i < 10; i += 1) {
  x = x * i;
}
```

```cpp
// C++
int x = 1;
for (int i = 2; i < 10; i += 1) {
  x = x * i;
}
```

Much like other similar languages, in JavaScript every statement is followed by a semicolon (`;`), however unlike most languages it is optional. While JavaScript interpreters are capable of [automatic semicolon insertion][1bMDNSemicolon], it is still recommended to use semicolons, as there are edge-cases that may cause unintended behavior (or syntax error) if we omit it.

JavaScript identifiers such as function and variable names are **case-sensitive**. There are [well-established best practices][1bMDNBestPractices] for using different letter casing for different language constructs. Variables, local constants, function and class method names use camel case (e.g. `camelCase`) while class names use Pascal case (e.g. `PascalCase`). Global constants may use upper snake case (e.g. `UPPER_SNAKE_CASE` ) but this is not a universally accepted convention.

## Variables and constants

In JavaScript variables are declared with the `let` keyword. Unless a variable is given an initial value when declared its default value will be `undefined`.

Constant variables can also be created with the `const` keyword. Constant variables must have an initial value and it is not possible to assign them a new one. While making a variable constant prevents assigning it a new value, but it is still possible to change the properties of complex data structures (e.g. arrays and objects) stored in constants.

JavaScript is **dynamically typed**, which means that the type of a variable or constant is determined by the value that they currently hold. This also means that the types of variables are not declared in advance and can changes as the value of the variable changes.

```js
let variable;    // type: undefined
variable = 47;   // type: number
variable = true; // type: boolean

const contant = "initial value";
```

> The legacy `var` keyword can also be used to create variables in JavaScript, however using it is not recommended as it creates "function-scope" variables as opposed to the more common "block" scope variables created by the `let` and `const` keywords.

## Control Structures

Basic control structures in JavaScript are virtually identical to those found in other C-style programming languages. JavaScript supports conditional statements (**"if...else"**), multiway branches (**"switch..case"**), for-loops (**"for"**), and condition controlled loops (**"while"**, **"do...while"**).

### If...else statements

If...else statements allow branching the logic of code execution into two branches based on a condition. If the condition in the brackets is `true` or some other "truthy" value, the code in the block for the `if` statement is executed. If present, the code in the `else` block is executed if the condition is `false` or some other "falsy" value.

```js
if (condition) {
  // statements
} else {
  // statements
}
```

It is also possible to have multiple branches grouped together by combining the `else` branch with another `if` statement.

```js
if (conditionA) {
  // statements
} else if (conditionB) {
  // statements
} else {
  // statements
}
```

> While it is possible, it is not recommended to group together several `else if` branches as it makes the code harder to read. This is also true for nesting `if` statements.

### Switch...case statements

Switch case statements can be used to branch your code multiple ways based on the value of a variable. Code in a `case` branch will execute if the value if the specified variable strictly equals to the value specified in the `case` branch. Once the value of the variable matches any given value in a `case` branch all statements after the given case will be executed unless we use the `break` keywork to stop further execution.

```js
switch (variable) {
  case "valueA":
    // statements
    break;
  case "valueB":
    // statements
    break;
  default:
    // statements
}
```

> While there are some good use-cases, switch...case statements are rarely used in practice. The reliance on the `break` keyword to achieve true multi-branch execution makes is prone to coding errors and the syntax is quite dissimilar to other JavaScript control structures. If the number of branches is low, it can be replaced with an `if...else` statement with multiple branches. For branching in a lot of ways we can use JavaScript objects as "hash maps" with functions as values.
>
> ```js
> const hashMap = {
>   valueA() { /* statements */ }
>   valueB() { /* statements */ }
> }
> 
> hashMap[variable]();
> ```

### While and do...while loops

Condition loops are used to repeatedly execute a block of statements until a certain condition is met. The `while` loop checks the condition **before** every iteration, the `do...while` loop checks the condition **after** every iteration. This also means that the `do...while` loop always executes at least once.

```js
while (condition) {
  // statements
}

do {
  // statements
} while (condition);
```

### For loop

For loops are typically used for iterating over a range of numbers. In the bracket two statements and a condition are presented separated by a semicolon (`;`):

1. Initialization (statement): This statement will run once when the loop starts. Typically used to set a variable (loop variable) to an initial value.
2. Exit condition: The loop will exit if the condition is `true` at the start of an iteration. Typically used to check the value of the loop variable.
3. Afterthought (statement): This statement will be executed after every iteration. Typically used to modify the loop variable.

```js
for (let i = 1; i < 5; i += 1) {
  // statements
}
```

JavaScript also has two special variants of the `for` loop for iterating over collections. The `for...of` loop can be used to iterate over the values of in an array (or other iterable data structures, such as a `Set`). The `for...in` loop is used to iterate over the keys of an object.

```js
for (const value of array) {
  // statements
}

for (const key in object) {
  // statements
  // values in object: object[key]
}
```

> When checking conditions JavaScript will automatically tries to convert the specified value to a `boolean`. Values that evaluate to the `boolean` value of `true` are called "truthy", while values that evaluate to `false` are called "falsy". This automatic conversion can cause unexpected behavior, so it is recommended to make sure that conditions contain `boolean` values. One way to do this to use the strict comparison operator (`===`) in conditions to compare variables to expected values.
>
> ```js
> // Recommended
> if (myString.length > 1) {
>   // statements
> }
> 
> // Not recommended
> // we depend on any non-zero number value to be converted to true
> if (myString.length) {
>   // statements
> }
> ```

## References

- Official JavaScript documentation  
  ["JavaScript" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Code conventions for writing JavaScript  
  ["Guidelines for writing JavaScript code examples" page on MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript).
- Lexical grammar of JavaScript
  ["Lexical grammar - JavaScript" on MDN][1bMDNSemicolon]
- More details on JavaScript control flow  
  ["Control flow and error handling" on MDN][1bMDNControlFlow]
- Support tables for JavaScript features  
  ["Can I Use..."][1bCanIUse]

[1bMDNJavaScript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[1bMDNBestPractices]: https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
[1bMDNSemicolon]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
[1bMDNControlFlow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
[1bCanIUse]: https://caniuse.com/

> The standard that defines the capabilities of the JavaScript language is called ECMAScript. Versions of JavaScript are usually referenced by the version of the ECMAScript standard that defines them (e.g. ECMAScript 2023). New language features may arrive to various JavaScript engines in different times. It is recommended to check if your runtime of choice supports a new feature before using it. Support tables can be found in the [official documentation][1bMDNJavaScript] and on the [Can I Use][1bCanIUse] website.
