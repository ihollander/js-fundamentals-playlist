# Scope

In Javascript, there is a set of rules to be aware of when you're working with functions that determines how those functions access variables. These rules are known as 'scope'. Let's go through another Ruby example. If we were to run this Ruby code, we'd get an error message because of Ruby's scope rules:

```js
/*
name = "Andrew"

def say_name
  puts name
end

say_name() 
# => NameError (undefined local variable or method `name' for main:Object)

*/ 
```

We can't access local variables outside of a method; only instance variables and class variables are shared between methods.

In Javascript, this works:

```js
const name = "Andrew"

function sayName() {
  console.log(name)
}

sayName()
```

Because of Javascript's scope rules. Variables declared outside of any function are declared in the *global scope*, meaning they can be accessed from anywhere.

Variables can also be declared inside of functions, which gives them *function scope*. If I make a new variable name *inside* the `sayName` function, it is now *scoped* to that function. 

```js
// global scope (Execution Context) 

// global variable
const name = "Andrew"

function sayName() {
  // function scope (Execution Context)

  // local variable
  const name = "Ian"
  console.log(name)
}

sayName()
```

So when I `console.log` the name variable, Javascript will look *up the scope chain* to find that variable. Any function has access to variables declared *higher in scope* than itself.

1. Is there a variable with this name inside of the function? If so, I'll use it.
2. If not, is there a variable with that name in the *outer scope* (higher up) that I can access? If so, I'll use that one.

To break down how that works:

*When I run my application*, Javascript creates the *Global Execution Context* with any variables that are created in the global scope (not inside a function), then it starts executing our code line-by-line with the *execution thread*. 

*Whenever I execute a function*, Javascript creates an *Execution Context* for that function, which tells it what variables it has access to (from the parameters, the function's scope, or from the outer scope). So when I run `sayName`, this creates a new Execution Context that has memory set aside for variables defined inside the function, as well as variables defined in the outer scope.

Keep the term *Execution Context* in the back of your mind - we'll return to that later!

We can also define functions *inside of other functions* and create Nested Functions! This might sound a bit "exotic" but it's actually something you'll find yourself doing frequently in Javascript, so it's important to understand how Javascript treats nested functions and variable access. This is a contrived example, but we'll see more practical uses of this in the future.

If I define a new function inside my `sayName` function like this:

```js
// global scope (Execution Context) 

// global variable
const name = "Andrew"

function sayName() {
  // function scope (Execution Context)

  // local variable
  const name = "Ian"

  function greet() {
    const greeting = "Hello"
    console.log(`${greeting}, ${name}`)
  }
  
  // invoke the greet function INSIDE the sayName function
  greet()
}

sayName()
```

My `greet` function is defined *inside* of the `sayName` function, which is why it has access to the `name` variable: `name` is in the *outer scope* of `greet`. You can see it's in the outer scope due to the nesting/indentation; this is why it's very important to properly indent your code in Javascript so you can more easily keep track of variable scope.

If I remove the `name` variable from `sayHi`, `greet` will still have access to it from the global scope.

```js
const name = "Andrew"

function sayName() {
  function greet() {
    const greeting = "Hello"
    console.log(`${greeting}, ${name}`)
  }
  
  // invoke the greet function INSIDE the sayName function
  greet()
}

sayName()
```

Note that I can't call `greet` from the global scope, because it's only defined in the function scope:


```js
const name = "Andrew"

function sayName() {
  function greet() {
    const greeting = "Hello"
    console.log(`${greeting}, ${name}`)
  }
}

// this breaks; greet isn't defined in the global scope
greet()
```

## Wrap Up

We've seen some of the rules for how Javascript treats scope (how it looks up variables); there's one other kind of scope, *block scope*, which you're encouraged to research on your own if you're interested.

