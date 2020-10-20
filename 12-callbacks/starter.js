// fnCaller takes in a CALLBACK FUNCTION (a function definition)
function fnCaller(fn) {
  // it INVOKES the callback function
  fn()
}

function sayHi() { console.log("hi") }
function sayBye() { console.log("bye") }

// sayHi is a CALLBACK FUNCTION (a function passed into another function as an argument)
fnCaller(sayHi)