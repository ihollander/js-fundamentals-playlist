# `var` and Hoisting

One note before we get started. Consider this section "bonus" material; it's good to know, but if it doesn't click right away, don't spend too much time on it. 

Let's see a couple examples of some behavior related to 'hoisting' and then we'll talk about why this happens.

Here, we have some Ruby code. If we try to call a method in Ruby before it's been declared, we get an error (as you might expect).

```js
/*
say_hi("Ian")

def say_hi(name)
  puts "Hi, #{name}!"
end

# => undefined method `say_hi' for main:Object (NoMethodError)
*/
```

Writing the equivalent code in Javascript would look like this:

```js
sayHi("Ian")

function sayHi(name) {
  console.log(`Hi, ${name}!`)
}
```

If we run this Javascript code, it works! Ok, so something is happening with the function keyword.

Let's see an example with variable declarations. Here's some more failing Ruby code:

```js
/*
puts name

name = "Ian"
# => undefined local variable or method `name' for main:Object (NameError)
*/
```

Writing the equivalent in Javascript doesn't throw an error, if we use `var`:

```js
console.log(name)

var name = "Ian"

console.log(name)
```

It does print out 'undefined' though; this gives us a hint as to what's happening when Javascript runs our code. If we change the variable declaration to a `let` or a `const`, we'll get a nice error message instead (phew, thanks for errors).

## How Javascript Runs Our Code

To understand this behavior, we have to look into how Javascript runs our code. It goes through two phases:

- compilation phase - space is set aside for variables; function invocations are ignored
- execution phase - values are assigned to variables and function invocations are executed

The terminology for 'hoisting' came about because thinking about variable declarations being 'hoisted' to the top of the file can help to have a mental image for what's happening (even though that isn't what Javascript is doing under the hood). You can imagine Javascript reading our code like this:

```js
// variable declaration is 'hoisted'
var name

console.log(name)

// variable assignment
name = "Ian"

console.log(name)
```

You can (and should) use `const` or `let` so you don't have to worry about variable hoisting. Function hoisting can also be avoided with `const` or `let` and saving a function definition to a variable:

```js
sayHi("Ian")

const sayHi = function (name) {
  console.log(`Hi, ${name}!`)
}
```

But function declarations with the `function` keyword are still very common, so don't worry about this as much, unless this pattern is helpful to you when you organize your code.

## Var & Block Scope

While we're talking about `var`, let's cover one other bit of strange behavior around scope that `let` and `const` can help us with.

`let` and `const` are both block scoped, which means that any variables created in a block (like in an `if` statement) are distinct from the variables in the outer scope. For example, in this code:

```js
let time = 12

let whatImEating = "snacks"
if (time >= 12 && time <= 18) {
  let whatImEating = "dinner"
  console.log(`Time for some ${whatImEating}!`)
}

console.log(`Time for some ${whatImEating}!`)
```

The `whatImEating` variable in the `if` block is distinct from the global `whatImEating` variable. If I change it to a `var` though, `whatImEating` in the `if` block reassigns the variable from the outer scope!

```js
let time = 12

var whatImEating = "snacks"
if (time >= 12 && time <= 18) {
  var whatImEating = "dinner"
  console.log(`Time for some ${whatImEating}!`)
}

console.log(`Time for some ${whatImEating}!`)
```

Again, another reason to use `let` and `const` to keep your code predictable.

## Wrap Up
Lastly: this is kinda bonus material! It's not too crucial to understand, but may be useful for interview trivia & such (if you really want to go deep on the subject of variable declaration, look into the 'Temporal Dead Zone'). Don't spend too much mental energy thinking about hoisting; stick with `let` and `const` for predictable behavior and you'll be fine.