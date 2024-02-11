# Working with data

Part of every programming task is to create an in-memory representation of the data that the program uses. In JavaScript we can create variables to store these values. While objects, arrays and primitive values are very powerful on their own, it is also possible to create more complex data structures by nesting objects and arrays into each other.

```js
const inventory = [
  { id: 152, name: "yamok sauce", amount: 42, tags: ["condiment", "cardassian"] },
  { id: 142, name: "jumja stick", amount: 47, tags: ["sweets", "bajoran"] },
  { id: 242, name: "prune juice", amount: 13, tags: ["drink", "federation"] },
  { id: 426, name: "hasperat", amount: 55, tags: ["sandwitch", "bajoran"] },
  { id: 124, name: "kanar", amount: 12, tags: ["drink", "cardassian"] }
]
```

In the above example we represent an inventory of a restaurant, by listing food items in an array, where each food item is an object with various properties. The `tags` property itself is an array of strings.

Working with such complex data structures is easy using array methods such as `map`, `filter` and `reduce`. These methods all return a new array that has these methods as well. This means that we can **chain** these methods to create a more complex logic. The example below shows how we could use these to calculate the total amount of drinks in our inventory.

```js
inventory
  .filter((item) => item.tags.includes("drink"))
  .reduce((sum, item) => sum + item.amount, 0);
```

:::tip
When chaining methods it is recommended to break each method call into a new line. It keeps the code readable and maintainable.
:::

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
  occupations: ['liason', 'supervisor'],
};

const weyoun5 = {...weyoun4};                        // "shallow" copy
const weyoun6 = JSON.parse(JSON.stringify(weyoun5)); // "deep" copy
```

In JavaScript data with primitive types are stored as values, when we pass them to functions the value is copied to the variable within the function. If we want to use primitives as references we can wrap them in an object and pass the object to a function.

:::tip
When writing array and object literals in multiple rows the comma after the last element is optional. If you are using a version control system such as [Git](https://git-scm.com/) it is recommended to include the comma after the last row, as it will generate a smaller footprint in the diff between commits if a new item is added.
:::

:::note
The [JSON data format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) is based on the object and array syntax of JavaScript. JSON is primarily used as a data transfer format on the Web, but is also used as a data storage and metadata description format as well.
:::
