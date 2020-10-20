# Variables

One of the fundamental tools Javascript gives us is a way to manage data, using our computer's memory. Whenever we create a new piece of data in a Javascript program, we're really using memory on our computer. In order to access that same place in memory, we can give it a label. That's one way to understand what a variable is: a label for a place in memory in our computer. 

## var/let/const

Javascript give us three different labels to work with: `var`, `let` and `const`. `var` is the oldest, and has some tricky behavior that we'll talk about in a future video; it's not used very frequently at all nowadays, so we'll only be using `let` and `const` going forward.

The difference between `let` and `const` is:

- Variables assigned with `let` can be reassigned
- Variables assigned with `const` cannot be reassigned

For example, running this code will throw an error because we are trying to *reassign* the variable `name` (using the equals sign):

```js
const name = "ian"
name = "Ian"
console.log(name)
```

If we wanted our code to work, we'd have to use `let` instead:

```js
let name = "ian"
name = "Ian"
console.log(name)
```

Note that `const` doesn't prevent data from being *modified* - if we have an object (or an array) saved to a `const` we can still change its properties:

```js
const student = {
  name: "Fred",
  age: 26
}
student.age += 1
console.log(student)
```

We just can't reassign the `student` variable to a new value, as that will thrown an error:

```js
const student = {
  name: "Fred",
  age: 26
}

student = { 
  name: "Not Fred",
  age: 99
}

console.log(student)
```

One rule of thumb you can use when you're deciding whether to use `let` or `const`: Choose `const` by default; if you decide later you need to reassign the variable, use `let` instead. (This isn't a hard and fast rule, and there are many different opinions in the JS community about it - you are encouraged to make your own opinion, as long as you can back it up!)

