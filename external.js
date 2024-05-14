// ## Exercise3

// from Exercise1 or Exercise2
// Instead of printing the day of the week, your program should **print whether it is the weekend or  weekday**. for example "Wednesday" then show "It is the weekday!"
// Use the logical operators.

// EX3

const dayNumber = 2;
switch (dayNumber) {
  case 0:
  case 6:
    console.log("It is the weekend!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It is the weekday!");
    break;

  default:
    console.log("Invalid day number");
}
