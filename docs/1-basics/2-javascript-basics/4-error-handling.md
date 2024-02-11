# Error handling

When a JavaScript statement fails, or an expression is invalid or some other semantic error occurs, an error is thrown. By default errors cause the script to stop, and the error is shown on the JavaScript console. Default errors are objects of the a specific error type, such as `TypeError`, `RangeError`, `ReferenceError`, etc. These are all subtypes of the generic `Error` type.

When a piece of code is expected to throw an error, a **try...catch** block can be used to catch and handle the error manually. Errors thrown by statements in the `try` block do not cause to script to stop, they are **caught** and passed to the `catch` block. Statements in the `catch` block only run if an error was thrown in the `try` block.

The `catch` statement may **bind** the thrown error object to a variable. If the error is bound, we can access details about the thrown error. The variable binding is optional if the `Error` object is not needed in the `catch` block.

```js
try {
  let object = {};
  object.foo(); // The `foo` method is not defined, thus a `TypeError` is thrown
} catch (error) {
  // The thrown error obejct is bound to the `error` variable
  console.log(error.message);
}

try {
  let object = {};
  object.foo();
} catch {
  // The thrown error obejct is not bound
  console.log("An error occured");
}
```

A `finally` block can also be added to a **try...catch** block. Statements in the `finally` block run both if an error is thrown in the `try` block and if not. Statements here will always execute, even if the code **try..catch** statement would exit, like when `return` is called in either the `try` or the `catch` block.

It is also possible to manually throw an error with the `throw` statement. Although the `throw` keyword can be followed by any value (the error object), it is recommended to throw an instance of the `Error` object. A message describing the error can be passed to the constructor of the `Error` object.

```js
function checkIfEverythingIsOk(isEverythingOk) {
  try {
    if (!isEverythingOk) {
      throw new Error("The input is invalid");
    }
    return true;
  } catch (error) {
    console.log(error.message); // "The input is invalid
    return false;
  } finally {
    // Statements here will execute despite the `return` statements
    console.log("Check complete");
  }
}
```

In a complex application error handling can be further improved by creating custom error types to differentiate between various kinds of errors. Defining a new class that extends the `Error` class can be used to create specific error types with custom behavior. If the `constructor` is defined of the new error type, it must call the `super()` method at the start of the `constructor` with the error message passed to it.

```js
class ValidationError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}
```

## References

- More details on Error types  
  ["Error" on MDN][24MDNError]
- More details on the try...catch block  
  ["try...catch" on MDN][24MDNTryCatch]

[24MDNError]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[24MDNTryCatch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch