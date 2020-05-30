let mileageKilometres = "";
let fuelConsumptionMPG = "";
let fuelConsumptionLitres = "";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the current mileage in miles? ", function (mileageMiles) {
  mileageKilometres = mileageMiles * 1.609344;
  mileageKilometres = mileageKilometres.toFixed(2);
  console.log(`${mileageKilometres}`);
  process.exit(0);
});

rl.question("What is the fuel consumption in MPG? ", function (mileageMiles) {
  mileageKilometres = mileageMiles * 1.609344;
  mileageKilometres = mileageKilometres.toFixed(2);
  console.log(`${mileageKilometres}`);
  process.exit(0);
});
