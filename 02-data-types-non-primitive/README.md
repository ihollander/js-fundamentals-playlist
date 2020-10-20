# Data Types - Non Primitives

Now that we've covered the primitive data types in Javascript, let's learn about its one (*very important*) non-primitive data type: the Object.

In Javascript, everything that isn't a primitive data type is an Object. Objects describe key-value pairs, like hashes in Ruby. They also describe arrays, functions, prototypes, and other complex data types.

## Object Literals 

Let's start with the most basic kind of object, aka a 'Plain Old Javascript Object'. We can create a new object using the object literal syntax `{}` much like a hash in Ruby. Objects are used to group together related data in a structured format, so instead of creating separate variables:


```js
const studentName = "Fred"
const studentAge = 26
```

We can create an object to group this data together:

```js
const student = { 
  name: 'Fred', 
  age: 26 
}
```

There are a few ways of accessing information from objects: using the bracket notation `[]` or the dot notation `.`. The dot notation is much more common.

```js
console.log(student.name)
console.log(student["age"])
```

You can also re-assign property values on an object, or add new ones:

```js
student.age = student.age + 1
student.school = "Flatiron"
```

## Arrays

Arrays in JavaScript are similar to arrays in Ruby. Arrays can contain any data type. Arrays in JS are technically *also objects*, which gives us a hint as to why `array["1"]` works.

```js
const arr = [1,2,3]

console.log(typeof arr)

console.log(arr[1])
// or
console.log(arr["1"])
```

Like Ruby, JS give us a lot of built-in methods for iterating over arrays (not quite as many as Ruby, but still, a decent amount). Here's what the syntax looks like for `forEach` compared to a Ruby `each`:

```js
/*

## Ruby .each ##
arr = [1,2,3]
arr.each do |num|
  puts num * 2
end

*/

const arr = [1,2,3]
arr.forEach(function(num) {
  console.log(num * 2)
})
```

Some other common/important iterator methods in Javascript are: `.map`, `.filter` (equivalent of `.select` in Ruby), and `.find`. We'll cover those in more depth later.

## Functions

One of the biggest differences between Javascript and Ruby is in the way that Javascript treats functions. *Functions in Javascript are a special kind of object*, which means that whatever we can do with objects, we can also do with functions. Put another way, *functions in Javascript are first-class citizens of the language*. 

We'll go into more detail on working with functions later, but for now, a couple key things to know. 

First, make sure you understand the difference between a function *definition* and a function *invocation*:

```js
// function definition
function iLikePancakes() {
  return 'Pancake technology is truly incredible. What a time to be alive!'
}

// reference to the function definition
console.log(iLikePancakes)

// function invocation ()
console.log(iLikePancakes())
```

In Javascript, I can refer to a function without calling/executing/running/invoking it. In order to invoke a function (run the code inside the function) you *must* add parentheses a the end.

Also, to demonstrate that functions are just a special kind of object in Javascript, you can actually assign properties to functions the same way you would with objects!

```js
function functionsAreObjects() {
  return 'nice'
}

functionsAreObjects.someNewProperty = 'a function object'

console.log(functionsAreObjects.someNewProperty)
```

There aren't many times when you'll do this yourself, but it's important to know because we'll see later how Javascript takes advantage of this to give functions more special abilities.

## Wrap up

That covers all the content for now on non-primitive data types. We'll explore objects, arrays and functions in more depth later. Next up we'll talk about variables and an important distinction between the primitive and non-primitive data types.
