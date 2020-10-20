# Equality and Type Coercion

When you're working with a dynamic language like Javascript, it's very important to understand how to do things like change data from one type to another, and understand how to compare two different values that may have different types.

## Converting types

One common operation you'll need to do is to change a string into a number. In Ruby, you'd use the `.to_i` or `.to_f` methods; in Javascript, we have `parseInt` and `parseFloat`.

`parseInt` takes in a string and converts it to a number:

```js
const oneString = "1"
console.log(typeof oneString)

const oneNum = parseInt(oneString)
console.log(typeof oneNum)
```

By default, `parseInt` will convert in base 10; but you can also convert from a different base (radix) by passing in a second argument. For example, here's how you would convert a binary (base 2) string to a number:

```js
const fiveInBinary = "101"
const five = parseInt(fiveInBinary, 2)
console.log(five)
```

## Truthy/Falsy values

Another common type coercion you'll have to do is converting something to its boolean equivalent. There are two common ways of doing this: using the `!!` operator or using the `Boolean` function:

```js
const truthyValue = 1
console.log(!!truthyValue)
console.log(Boolean(truthyValue))
```

In Javascript, the following values are considered 'falsy', meaning that if you convert them to a Boolean, they'll come back as false:

```js
// False: `false`
// Zero: `0`
// Empty string: `""`
// Null: `null`
// Undefined: `undefined`
// Not a number: `NaN`
```

It's very useful to know if a value is 'truthy' or 'falsy' for *conditional logic* and *control flow*; for example, let's say I wanted to run some code if an array is empty:

```js
const arr = [1,2,3]

if (arr.length > 1) {
  console.log("I'm not empty inside")
}

// we can rewrite as

if (arr.length) {
  console.log("I'm not empty inside")
}
```

## Strict vs Loose Equality

The last subject I wanted to discuss around type coercion is comparing two values. Javascript gives us to ways to compare values, the "loose equality" (`==`) and the "strict equality" (`===`) operators. The key difference is that the `===` operator will check if two values are exactly the same (same type, same value); and the `==` operator will coerce the type of one side of the operator to match the other side before comparing them.

```js
const oneStr = "1"
const oneNum = 1
console.log(oneNum === oneStr)
console.log(oneNum == oneStr)
```

It's difficult to memorize all the ways Javascript can handle type coercion (check out this chart if you want to see many of them listed out): 

```js
// https://dorey.github.io/JavaScript-Equality-Table/
```

Therefore it's recommended that you always compare values that are the same type:

```js
console.log(oneNum === parseInt(oneStr))
```

Lastly, one common 'gotcha' particularly coming from Ruby is that objects and arrays that *look* the same (have the same values inside) are not considered equal; this is because they are two different objects in memory:

```js
const arr1 = [1,2,3]
const arr2 = [1,2,3]

console.log(arr1 === arr2)
console.log(arr1 == arr2)
```

Only references to the same object are considered equal:

```js
const arr1Reference = arr1
console.log(arr1 === arr1Reference)
```

## Wrap up

Now we've seen some common approaches to converting types and some examples of how Javascript coerces types