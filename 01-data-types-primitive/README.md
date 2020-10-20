# Data Types - Primitives

In this video, we're going to learn about the different primitive data types in Javascript. There are seven primitive data types:

  1. Symbol
  2. Undefined
  3. Null
  4. Boolean
  5. Number
  6. String
  7. BigInt (new as of ES2020)

And one non-primitive data type: 

  1. Object  

In a future lecture we'll talk about the reason for this distinction between primitive and non-primitive data types; for now, let's see some examples of each and get a sense of the syntax, starting with primitives.

## Number

Javascript treats both integers and floating point values as numbers, so both of these are valid numbers. We can also use math operators on them just as you'd expect.

```js
const one = 1
const onePointFive = 1.5

console.log(2 + 2.5)
```

You can always check what type something is with the `typeof` operator, we'll show a couple 'edge cases' but it's a useful tool to see what data you're working with

```js
console.log(typeof 1)
```

## String

Strings in JS can be declared using single quotes, double quotes, or backticks (the character to the left on the 1 on your keyboard). Backticks will let you do string interpolation (you can write JS code inside of a string template):

```js
const name = "Ian"
const say = 'Ian says "Learn Javascript"'
const math = `Two plus two is ${2 + 2}`

console.log(math)
```

## Boolean

Boolean values are just `true` or `false`; not much to talk about here yet - we'll go into more depth in the type coercion section:

```js
console.log(true)
console.log(typeof true)
```

## Undefined / Null

Javascript has two different data types that both represent the *absence* of a value: `undefined` and `null`. `null` is the equivalent of `nil` in Ruby; it's a value that represents "nothing":

```js
let nothingHere = null
```

Using `typeof` with null gives us an object, which is actually just a bug of the Javascript language (but since it's existed since the beginning, we can't 'fix' the bug) - so beware!

```js
console.log(typeof nothingHere)
```

`undefined` is the value of a variable that has been declared but not assigned:

```js
let assignMeLater
console.log(assignMeLater)
console.log(typeof assignMeLater)
```

It's also the value returned by a function when there's no `return` keyword:

```js
function returnUndefined() {
  // no return keyword here
}

console.log(returnUndefined())
```

## Symbol

This is almost never used; you'll sometimes see it used in advanced code (like JS libraries) for defining a "hidden" property for an object. You don't have to worry about this one.

```js
const id = Symbol("id")
console.log(id)
```

## BigInt

Like the Symbol datatype, this is very rarely used and is only shown here for completeness. It is a very recent addition to JS and is used to represent whole numbers larger than 2^53 - 1. It's worth remembering for interview trivia (how would you handle very large numbers?) but you'll almost never see it; in fact, Scrimba doesn't yet support this data type. We represent a BitInt by adding an 'n' at the end of a number:

```js
const theBiggestInt = 9007199254740991n
console.log(typeof theBiggestInt) // will throw an error in Scrimba
```

## Wrap Up

That covers our primitive data types. In the next video, we'll talk about the one non-primitive data type - the Object - and some of the other common types related to it.