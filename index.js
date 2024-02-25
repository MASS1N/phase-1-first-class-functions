function receivesAFunction(callback) {
  // Call the callback function
  callback();
  return "it doesn't matter, xd";
}




receivesAFunction(() => console.log("Callback function called!"));
// Output should be: "Callback function called!"

function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function.");
  }
  return namedFunction;
}
const myFunction = returnsANamedFunction();
myFunction(); // Output: "This is a named function."

 




function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("This is an anonymous function.");
  };
}

const myFunction1 = returnsANamedFunction();
myFunction1(); // Output: "This is a named function."
