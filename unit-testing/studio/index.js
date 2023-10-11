
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(someNumber){
        if (someNumber % 2 == 0) {
            if (someNumber % 3 == 0) {
                if (someNumber % 5 == 0) {
                    return `LaunchCode Rocks!`
                }
                return `LaunchCode!`
            } else if (someNumber % 5 == 0) {
                return `Launch Rocks! (CRASH!!!!)`
            }
            return `Launch!`
        } else if (someNumber % 3 == 0) {
            if (someNumber % 5 == 0 ) {
                return `Code Rocks!`
            } 
            return `Code!`
        } else if (someNumber % 5 == 0) {
            return `Rocks!`
        } else {
            return `Rutabagas! That doesn't work.`
        }
    }
};

module.exports = launchcode;
