# Object References

One of the key distinctions between *primitive* and *non-primitive* data types is:

- Primitive data types are *immutable* (the values themselves can't be changed)
- Non-Primitive data types, or "Structural Types", are *mutable* (the values can be changed)

Let's write out some code to explore this concept.

## Immutable Data

In this code, the original value for the variable `one` is not changed when we reassign a new value to `alsoOne`:

```js
let one = 1
let alsoOne = one

alsoOne += 1

console.log(alsoOne)
console.log(one)
```

Here, `alsoOne` isn't being mutated; it's just being assigned to a new value. We're not modifying any underlying data (since primitive data types can't be mutated). All we're doing is assigning a new value to some variable.

## Mutable Data

With non-primitive data types, we have to be more careful about mutations and variable assignment. 

Let's look at a similar example, using an object (non-primitive) instead of a number (primitive). 

When I create a variable `alsoStudent` and assign it to the value of `student`, I'm not making a copy of the `student` object, I'm *pointing* my variable to the exact same student object:

```js
const student = {
  name: "Fred",
  age: 26
}

const alsoStudent = student
```

In this example, the `student` and `alsoStudent` variables are both *pointing* to the same *physical location in memory*. They both have *reference* to the same object.

That means any changes (mutations) I make to that object using the `alsoStudent` variable are also reflected in the `student` variable:

```js
alsoStudent.age += 1

console.log(alsoStudent)
console.log(student)
```

This is also true for arrays; if we modify the original array, any variables *pointing* to that array will also see the changes:

```js
const nums = [1,2,3]
const nums2 = nums

nums.push(4)

console.log(nums2)
```

And it's even true if we pass an object, or an array, to a function. Any changes we make to the object *inside the function* will be reflected in all the variables that reference that object:

```js
function addNumToArray(array, num) {
  array.push(num)
  return array
}

console.log(nums)

const newArray = addNumToArray(nums, 5)
// we have our new array...
console.log(newArray)

// ...but nums is also modified!
console.log(nums)
```

## Wrap Up

Issues involving object references are a really common place for Javascript developers to get tripped up, so make sure to keep this concept in the back of your mind any time you're working with objects and getting unexpected behavior. Next up, we'll finish the section on data types by talking about type coercion and equality.