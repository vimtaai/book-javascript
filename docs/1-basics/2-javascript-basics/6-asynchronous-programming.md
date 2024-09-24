# Asynchronous programming

Many operations that we do in programs take a lot of time. When executing such an operation we have two options: to run them **synchronously** or to run them **asynchronously**. Synchronous execution means that the our program will wait until the operation finishes before progressing further, **blocking** the execution of other statements. This causes the user interface to become unresponsive for the duration of the operation. The other option is to run the operation asynchronously, which means that our program **won't get blocked** while the operation is running.

In JavaScript many operations can be run in an asynchronous way. As the language evolved several ways of handling asynchronous handling appeared. The most common of these are using **callbacks**, **promises** and the the **async...await** syntax.

## Callbacks

Some asynchronous functions take a function (a.k.a. a callback) as an argument. This function will execute when the asynchronous operation finishes. The callback typically receives the result of the operation and any errors that may have occurred during execution, but the exact signature may wary for each function. Handling asynchronous operations this way is falling out of fashion as nesting many such functions results in nesting functions in functions, eventually resulting in hard to read code.

```js
firstAsynchronousOperation((firstData, error) => {
  if (error) {
    // Handle error if there is any
    return;
  }

  // Handle data if there is no error

  secondAsynchronousOperation((secondData, error) => {
    if (error) {
      // Handle error if there is any
      return;
    }

    // Handle data if there is no error
  );
});
```

:::note
Nesting too many callbacks is also known as the **pyramid of hell**.
:::

## Promises

To make handling asynchronous code easier, JavaScript introduced the `Promise` type. Promises are special objects in JavaScript that **represent a possible future value**. Asynchronous functions may return a `Promise` object that can be used to use the result of the operation or handle any errors. Promises have three states: **pending** and **resolved** (or fulfilled) and **rejected**. Pending means that we do not know the result of the promise yet, resolved means that the operation was successful and we know the result, rejected means that there was an error while executing the function.

The `then` method of the `Promise` type can be used to handle the result of a successful execution. The `then` method takes a callback as an argument that handles the result data. The true strength of using promises comes when we want to execute more than one asynchronous operations after each other. In this case the `then` method can be **chained** to handle the results of each function. To do this, the callback of the first asynchronous operation must return a new promise.

The `catch` method can be used to handle errors on rejected promises. The callback argument of the `catch` method gets executed if there is an error in any of the promises in the chain.

```js
firstAsynchronousOperation()
  .then((firstData) => {
    // Handle data
    return secondAsynchronousOperation();
  })
  .then((secondData) => {
    // Handle data
  })
  .catch((error) => {
    // Handle error from any of the asynchronous functions
  });
```

## Async...await

JavaScript has an alternative way to handle promises with the **async...await** syntax. The `await` keyword can be used to wait for the result of a `Promise` and store it in a variable. This eliminates the need of using the `then` method of promises. This makes the execution of several asynchronous operations easy as we only have to await the result of each of them.

Handling errors when using the `await` keyword can be done with a `try...catch` block. If the awaited function cannot finish it will throw an error that we can catch. For more details see the [Error handling](error-handling) section.

If we want to use `await` in a function that we declare, we have to add the `async` keyword to the function declaration. This indicates that the function is asynchronous, i.e. it contains other asynchronous within. Functions marked with `async` will always return a `Promise`. If we use the `return` keyword in an async function, the value given in the `return` statement will be the result the returned promise when it resolves. Throwing an error in an async function will make the returned promise to reject.

```js
async function myAsynchronousOperation() {
  try {
    const firstData = await firstAsynchronousOperation();
    // Handle data
    const secondData = await secondAsynchronousOperation();
    // Handle data
  } catch (error) {
    // Handle error from any of the asynchronous functions
  }
}
```

:::warning
Older browsers did not support using the `await` keyword outside of an `async` function in the top level of your code. Make sure to use an updated, modern browser to use top-level `await`.
:::

## Reference

- ["Asynchronous JavaScript" on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- ["Using promises" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- ["Promise" on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- ["Callback function" on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
