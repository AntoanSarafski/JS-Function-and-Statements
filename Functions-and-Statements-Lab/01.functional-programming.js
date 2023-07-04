function createGreeting(greetingText) {
  function greet(name) {
    return greetingText + " " + name;
  }
  return greet;
}
// closure example !
// GREET has closure on the PARENT FUNCTION(createGreeting)
// CLOSURE - WHEN ONE NASTED FUNCTION CAN REMEMBER FOR THE SCOPE.

function createGreeting(greetingText) {
  function greet(name) {
    const greetingText = "Hey";
    // EXAMPLE FOR SHADOWING !
    return greetingText + " " + name;
  }
  return greet;
}

const morningGreeting = createGreeting("Good morning");
const eveningGreeting = createGreeting("Good evening");
console.log(eveningGreeting("Gosho"));
