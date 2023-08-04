let d = parseInt(prompt("Enter a number: "));
let flag = true;

for (let i = 2; i < d; i++) {
  if (d % i == 0) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}