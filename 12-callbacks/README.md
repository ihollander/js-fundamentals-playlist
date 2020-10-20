# Callback Functions

One of the most important concept to understand involving functions in Javascript is *callback functions*. A callback function is defined as:

```js
// A callback function is a function passed into another function as an argument
```

A function like this is an example:

```js
// fnCaller takes in a CALLBACK FUNCTION (a function definition)
function fnCaller(fn) {
  // it INVOKES the callback function
  fn()
}

function sayHi() { console.log("hi") }
function sayBye() { console.log("bye") }

// sayHi is a CALLBACK FUNCTION (a function passed into another function as an argument)
fnCaller(sayHi)
```

Callback functions are used all over the place in Javascript; we've seen one example with the `.forEach` method on an array, but they're also used for things like event handling, timers, and making network requests, so they're truly one of the most important things to understand. They're also one key source of confusion for new Javascript developers. So make sure you're following along, and do some extra research if you're still unclear on the subject!

## Generalizing Functions

First let's talk about one great use case for callback functions, and that is generalizing our code. Take a look at these three functions:

```js
function printEachElementTripled(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const tripled = element * 3
    console.log(tripled)
  }
}

function printEachElementHalved(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const halved = element / 2
    console.log(halved)
  }
}

function printEachElementWithExcitedly(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const excited = `${element}!!!`
    console.log(excited)
  }
}

const numbers = [1,2,3]
printEachElementTripled(numbers)
printEachElementHalved(numbers)
printEachElementWithExcitedly(numbers)
```

They all do something pretty similar - iterate over the length of the array; access one element, and do something with that element. Our code isn't very DRY; we're repeating ourselves a lot! What if we could *generalize* a function to take in some *instructions* in addition to performing the iteration?

This is what a callback lets us do! We can take the skeleton of our function to perform the iteration, and then leave the procedure available as a parameter that can be filled in later:

```js
// instructions is a CALLBACK FUNCTION: a function definition that we pass into the iterate function
function iterate(array, instructions) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // we can CALL the callback function and pass in each element to it
    instructions(element)
  }
}

const numbers = [1,2,3]

function printDoubled(number) { 
  console.log(number * 2)
}

iterate(numbers, printDoubled)
```

It's *extremely* important to remember: when you're using a function as a callback, you should pass the function *definition*, not the *invocation*, to the function expecting a callback:

```js
// bad news bears
iterate(numbers, printDoubled())
```

If it helps remember you're using a function definition for a callback, you can also define the callback function *inline*:

```js
iterate(numbers, function printDoubled(number) { 
  console.log(number * 2)
})
```

Also, in case you didn't noticed - the `iterate` function we defined above gives us the exact same functionality as the `.forEach` method we saw before! Here's how we could use the `.forEach` method instead:

```js
numbers.forEach(printDoubled)
// or
numbers.forEach(function printDoubled(number) { 
  console.log(number * 2)
})
```

## setInterval/setTimeout

To demonstrate one more common place you'll encounter callback functions, we can take a look at a couple of ways of running timers in Javascript: `setInterval` and `setTimeout`. 

`setTimeout` takes two arguments: a callback function, and an amount of time in milliseconds after which it will run the callback function. Again, you can write the callback function two ways: as an inline function definition, or as a reference to a named function:

```js
function getCurrentTime() {
  console.log(new Date)
}
setTimeout(getCurrentTime, 5000)

setTimeout(function ding() {
  console.log("Timer's done!")
}, 3000)
```

And `setInterval` also takes two arguments - a callback and a number of milliseconds; and it will keep running the callback function every X number of milliseconds:

```js
counter = 1
setInterval(function count() {
  console.log(counter)
  counter++
}, 1000)
```

## Wrap Up

We've seen some use cases for callback functions. They will also come up frequently throughout the rest of your time as a Javascript developer - particularly with event handling and with asynchronous code, like network requests - so make sure to come back to this lesson if you need a refresher, or seek out other materials to help further your understanding!
