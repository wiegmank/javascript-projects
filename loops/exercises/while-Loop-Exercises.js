const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, 
//and the third for the altitude the shuttle reaches.

let startFuel;
let crew;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but 
  less than 30000. */

startFuel = input.question("Enter the starting fuel between 5,000 and 30,000:\n");
startFuel = Number(startFuel);
while (startFuel < 5000 || startFuel > 30000 || isNaN(startFuel)) {
  startFuel = input.question("That fuel level is out of bounds. Please enter a fuel level (number) between 5,000 and 30,000:\n");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

crew = input.question("Enter the number of crew members (no more than 7): \n");
crew = Number(crew);
while (crew < 1 || crew > 7 || isNaN(crew)) {
  crew = input.question("That crew size is out of bounds; please enter a crew size between 1 and 7: \n")
}
      
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 
//100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startFuel > 0) {
  startFuel = (startFuel - (100*crew));
  altitude = altitude + 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let result = `The shuttle gained an altitude of ${altitude} km.`;
if (altitude >= 2000) {
  console.log(result + " Orbit acheived!")
} else {
  console.log(result + " Failed to reach orbit.")
}