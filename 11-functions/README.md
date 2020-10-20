# Intro to Functions

Understanding how to work with functions is probably the most important part of Javascript, and it can also be one of the more challenging parts of the language because of how it differs from languages like Ruby. 

Let's start by translating some Ruby code into its equivalent in Javascript to get an understanding of some of the key differences between working with methods in Ruby and functions in Javascript.

Here we have a method called `say_hi`. First I define the method; setting up a place in memory to refer to this method so I can run the code inside of it later.

When I run the method, it will first output "hi" to the terminal, then it will return the number 10 (in Ruby, the last line of the method is its implicit return value).

When I write `a = say_hi` I'm telling Ruby to run the `say_hi` method (remember, using parentheses to run a method is optional in Ruby) and I'm assigning its *return value* of 10 to the variable `a`. So the output at the end will be the number 10.

```js
/*
def say_hi
  puts "hi"
  10
end

a = say_hi

puts a
*/ 
```

Rewriting it in Javascript, I might end up with something like this:

```js
function sayHi() {
  console.log("hi")
  10
}

const a = sayHi()

console.log(a)
```

Again, first we define the function, and we give it a name `sayHi` which we can use to refer to that function later to run the code inside of it. Then, we *execute* the function, which moves the *execution thread* inside of that function and executes each line of code inside of it.

If I run this function now and `console.log` its output, we'll see `undefined` - in Javascript, *functions defined with the function keyword must have an explicit return*. So to get this to return 10, we have to add return in front of 10.

```js
function sayHi() {
  console.log("hi")
  return 10
}

const a = sayHi()

console.log(a)
```

Now, when we execute the function, its return value gets saved to the variable `a` and printed out.

What happens if I don't include the parentheses after the function name?

```js
function sayHi() {
  console.log("hi")
  return 10
}

const a = sayHi

console.log(a)
```

In this case, `a` saves a *reference* to the function's definition! Remember, functions are *objects* which means they are *pass-by-reference*. 

`sayHi` with *no parentheses after* will give me a reference to the function's definition.

`sayHi()` with *parentheses after* will run/invoke/call the function - it will move our *execution thread* inside the function and step through the code line-by-line.

```js
function sayHi() {
  console.log("hi")
  return 10
}

const a = sayHi
const b = sayHi()

console.log(a)
console.log(b)
```

One side effect of that is that I can now use the variable `a` to call my function!

```js
a()
```

A couple other key differences is how Javascript and Ruby treat parameters in functions. If I define a method in Ruby that expects one argument, I'll get an error if I call the method without providing one:

```js
/*
def say_hello(name)
  puts "Hello, #{name}"
end

say_hello() # => ArgumentError (wrong number of arguments (given 0, expected 1))

say_hello("Ian") # => "Hello, Ian"
*/
```

In Javascript, this won't produce an error; instead, we'll get `undefined` for any arguments we don't provide when we call the function:

```js
function sayHello(name) {
  console.log(`Hello, ${name}`)
}

sayHello()
```

## Wrap up

Next, we'll talk about callbacks!
