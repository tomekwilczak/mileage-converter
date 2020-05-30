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

rl.question(
  "Choose option:\n1) Convert miles to KM\n2) Convert KM to miles\n3) Other\n\nEnter your choice:",
  function (answer) {
    if (answer == "1") {
      rl.question("What is the current mileage in miles? ", function (
        mileageMiles
      ) {
        mileageKilometres = mileageMiles * 1.609344;
        mileageKilometres = mileageKilometres.toFixed(0);
        console.log(`Your current mileage is ${mileageKilometres} kilometres`);
        process.exit(0);
      });
    } else if (answer == "2") {
      console.log(`\nSelected option: ${answer}: Convert KM to miles`);
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
    } else if (answer == "3") {
      console.log("Placeholder for Converter MPG to l/km");
      process.exit(0);
    } else {
      console.log(`\nSelected option: ${answer}`);
      sleep(500);
      console.log("\nOption not defined. Start again");
      process.exit(0);
    }
  }
);
