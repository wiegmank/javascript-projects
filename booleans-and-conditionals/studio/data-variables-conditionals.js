// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

//extra variables
let line = "######################################################################"
let noLaunch = "Not all required conditions have been met - LAUNCH SCRUBBED!"

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {

// add logic below to verify all astronauts are ready
    if (astronautStatus === "ready") {
// add logic below to verify the total mass does not exceed the maximum limit of 850000
        if (totalMassKg < maximumMassLimit) {
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
            if (fuelTempCelsius <= -150 && fuelTempCelsius >= -300) {
// add logic below to verify the fuel level is at 100%
                if (fuelLevel === "100%") {
// add logic below to verify the weather status is clear
                    if (weatherStatus === "clear") {
// Verify shuttle launch can proceed based on above conditions
                        console.log("All systems are a go! Initiating space shuttle launch sequence.\n" + line + `\nDate: ${date}` 
                        + `\nTime: ${time}` + `\nAstronaut Count: ${astronautCount}` + `\nCrew Mass: ${crewMassKg} kg` 
                        + `\nFuel Mass: ${fuelMassKg} kg` + `\nShuttle Mass: ${shuttleMassKg} kg` + `\nTotal Mass: ${totalMassKg} kg` 
                        +`\nFuel Temperature: ${fuelTempCelsius} C\u00B0` + `\nWeather Status: ${weatherStatus}\n` + line 
                        + `\nHave a safe trip astronauts!`);
                    } else {
                        console.log(noLaunch);
                    }
                } else {
                    console.log(noLaunch);
                }
            } else {
                console.log(noLaunch);
            }
        } else {
            console.log(noLaunch);
        }
    } else {
        console.log(noLaunch);
    }
} else {
    console.log(noLaunch);
}