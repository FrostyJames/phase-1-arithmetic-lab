// Write your code here
const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // 2 * 31 = 62

const random = Math.floor(Math.random() * 100) + 1; // Generates a random integer > 0

const num3 = 28;
const num4 = 6;
const mod = num3 % num4; // 28 % 6 = 4

const max = Math.max(10, 15, 20, 5); // Returns 20 as the highest number

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}