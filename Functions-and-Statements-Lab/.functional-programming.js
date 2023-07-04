function greet(getMessage, name) {
  return getMessage() + " " + name;
}

function getGreetingBasedOnHour() {
  const currentHour = new Date().getHours();
  if (currentHour >= 20) {
    return "Good evening";
  }

  if (currentHour >= 12) {
    return "Good day";
  }

  return "Good morning";
}

const greeting = greet(getGreetingBasedOnHour, "Pesho");

console.log(greeting);
