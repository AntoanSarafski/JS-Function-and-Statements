function solve(target, chunk) {
  while (chunk > target) {
    // CUT ...
    if (chunk / 4 >= target) {
      let counter = 0;
      while (chunk / 4 >= target) {
        chunk /= 4;
        counter++;
      }
      chunk = Math.floor(chunk);
      console.log(`Cut x${counter}`);
      console.log("Transporting and washing");
      continue;
    }

    // Lap ...
    if (chunk - chunk * 0.2 >= target) {
      let counter = 0;
      while (chunk - chunk * 0.2 >= target) {
        chunk -= chunk * 0.2;
        counter++;
      }
      chunk = Math.floor(chunk);
      console.log(`Cut x${counter}`);
      console.log("Transporting and washing");
      continue;
    }
    // Gride...
    if (chunk - 20 >= target) {
      let counter = 0;
      while (chunk - 20 >= target) {
        chunk -= 20;
        counter++;
      }
      chunk = Math.floor(chunk);
      console.log(`Cut x${counter}`);
      console.log("Transporting and washing");
      continue;
    }
  }
}
