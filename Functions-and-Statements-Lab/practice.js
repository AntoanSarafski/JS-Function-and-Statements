function createGreeting(greetingText) {
  function greet(name) {
    return greetingText + " " + name;
  }
  return greet;
}

const morningGreeting = createGreeting("Good morning");
const eveningGreeting = createGreeting("Good evening");
console.log(eveningGreeting("Gosho"));
