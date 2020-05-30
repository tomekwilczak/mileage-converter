// Sleep function for delaying console output
const sleep = function (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

// Built-in function for reading user's input from console.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Setting variables for options (strings)
const convertMilesToKm = "Convert miles to kilometers";
const convertKmToMiles = "Convert kilometers to miles";
const convertMPGToLitres = "Convert MPG to l/km";

rl.question(
  `\nWhat do you want to do?\n1) ${convertMilesToKm}\n2) ${convertKmToMiles}\n3) ${convertMPGToLitres}\n\nEnter your choice:`,
  function (answer) {
    if (answer == "") {
      console.log("No choice has been made. Please enter the option number");
      return answer;
    }
    if (answer == 1) {
      console.log(`\nSelected option: ${convertMilesToKm}`);
      sleep(500);
      rl.question("\nWhat is the current mileage in miles? ", function (
        mileageMiles
      ) {
        mileageKilometres = mileageMiles * 1.609344;
        mileageKilometres = mileageKilometres.toFixed(0);
        console.log(
          `\nYour current mileage is ${mileageKilometres} kilometres`
        );
        process.exit(0);
      });
    } else if (answer == 2) {
      console.log(`\nSelected option: ${convertKmToMiles}`);
      sleep(500);
      rl.question("\nWhat is the current mileage in kilometres? ", function (
        mileageMiles
      ) {
        mileageKilometres = mileageMiles / 1.609344;
        mileageKilometres = mileageKilometres.toFixed(0);
        sleep(500);
        console.log(`\nYour current mileage is ${mileageKilometres} miles`);
        process.exit(0);
      });
    } else if (answer == 3) {
      console.log(`Placeholder for ${convertMPGToLitres}`);
      process.exit(0);
    } else {
      console.log(`\nSelected option: ${answer}`);
      sleep(500);
      console.log("\nOption not defined. Start again");
      process.exit(0);
    }
  }
);
