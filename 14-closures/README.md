# Closure

Along with callbacks, closures are one of the more daunting things to understand in all of Javascript, which is one reason to get exposure to them early! Understanding closures is *truly* one of the most important things to master if you want to pursue a career as a Javascript developer, so even if the concept seems intimidating, there's no running from it! It also gives you some superpowers and lets you write some extremely powerful code. So let's dive right in.

## Higher Order Functions

To get at the topic of closures, first we need to understand higher-order functions. A higher-order function is a function that does at least one of the following:

- takes one or more functions as arguments
- returns a function as its result

We've already seen one example of a higher-order function: functions that take in  *callback functions*, like `.forEach`.

To understand closures, we'll learn about the other kind of higher-order function: a function that returns a function as its result.

Again, let's see an example of the kind of problem we might be able to solve using a higher-order function. Take these three functions as an example:

```js
function double(num) {
  return num * 2
}

function triple(num) {
  return num * 3
}

function quadruple(num) {
  return num * 4
}
```

We could generalize this by making our function take in another argument, like this:

```js
function multiply(num, x) {
  return num * x
}

const doubled = multiply(3, 2)
const tripled = multiply(3, 3)
```

But we could *also* generalize this by making a *higher order function* to return a new version of our function every time we call it, like a function factory:

```js
function createMultiplier(x) {
  function multiply(num) {
    return num * x
  }
  return multiply
}

const doubleFunction = createMultiplier(2)

console.log(typeof doubleFunction)

console.log(doubleFunction(5))
```

Stepping through this code, we see that:

- First, we define a function `createMultiplier` that accepts one parameter
- Next, we create a variable `doubleFunction`
- To determine what gets saved to that variable, we call `createMultiplier` with a value of 2
- Calling `createMultiplier` now moves our *execution thread* into the `createMultiplier` function
  - Inside the `createMultiplier` function, we define a function `multiply` that accepts one parameter
  - Remember, because of our scope rules, `multiply` has access to the value of `x` from its outer scope! This is the key to the closure: `multiply` will "remember" the value of `x` from when we first called `createMultiplier`.
  - Then, we *return* a reference to that `multiply` function!
- `doubleFunction` now has a value assigned: the `multiply` function that was returned!
  - we can see that `doubleFunction` holds a reference to a function in our console.log statement (not yet any value)
- `doubleFunction(5)` will call the `doubleFunction` (which is really a reference to a *version of the multiply function* with some extra information - it knows that `num` is 2)
- so we now move our *execution thread* into that multiply function, and run the code, which returns `2 * 5`

Calling `createMultiplier` returns a new *function definition* each time we call it; so we can make as many 'versions' of our multiplier function as we need:

```js
const tripleFn = createMultiplier(3)
const quadrupleFn = createMultiplier(4)

console.log(tripleFn(5))
console.log(quadrupleFn(5))
```

Put another way, this function gives me a *reference* to the *inner function* `multiply` by returning it from the *outer function* `createMultiplier`. The *inner function* keeps access to any variables it had access to from the *outer function* - this concept of a function "remembering" values from its outer scope is known as *closure*. Think of it as though the `multiply` function has a "backpack" with all the variables it has available in scope when we called `createMultiplier`!

## Counter

Let's see another example of working with a closure. Suppose I wanted to make a function for creating students:

```js
function createStudent(name, age) {
  return {
    name: name,
    age: age
  }
}

const fred = createStudent("Fred", 26)


```

If I want to assign each student a new ID, I can make a *higher order function* and take advantage of a *closure* to make an auto-incrementing ID:

```js
function generateStudentCreatorFunc() {
  let id = 0

  function createStudent(name, age) {
    id++

    return {
      id: id,
      name: name,
      age: age
    }
  }

  return createStudent
}

const generatedFunc = generateStudentCreatorFunc()

const fred = generatedFunc("Fred", 26)
const duane = generatedFunc("Duane", 46)
console.log(fred)
console.log(duane)
```

`generateStudentCreatorFunc` will return a function definition - a reference to the inner function `createStudent`. Since the inner function is defined *inside* `generateStudentCreatorFunc`, it has access to the variables in that function's scope. It *remembers* those variables - its "backpack" of data.

Therefore, since `createStudent` has access to the `id` variable, and any time I call that returned function, it will increment the `id` variable by 1!

## Wrap Up

Scope and closures are definitely a tricky topic, but I promise that understanding this will unlock a whole lot for you in Javascript! Give yourself some time, and don't worry if it doesn't click right away; but when you encounter a problem involving scope and closure again, come back to this lesson or seek other resources to make sure you have a good mental model of what's happening!

