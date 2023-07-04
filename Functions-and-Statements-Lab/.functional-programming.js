function greet(getMessage, name) {
  return getMessage() + " " + name;
}

function sayGoodMorning() {
  return "Good morning";
}

const greeting = greet(sayGoodMorning, "Pesho");

const greetingWithAnonymousFuncion = greet(function () {
  return "Good morning";
}, "Pesho");

console.log(greetingWithAnonymousFuncion);
