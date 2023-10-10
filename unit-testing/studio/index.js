
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(someNumber){
        if (someNumber % 2 == 0 && someNumber % 3 == 0 && someNumber % 5 == 0) {
            return "LaunchCode Rocks!"
        } else if (someNumber % 2 != 0 || someNumber % 3 != 0 || someNumber % 5 != 0) {
            return "Rutabagas! That doesn't work."
        }
        
        
        
        if (someNumber % 2 == 0) {
            return "Launch!"
        } else if (someNumber % 3 == 0) {
            return "Code!"
        } else if (someNumber % 5 == 0) {
            return "Rocks!"
        }
        return `This is a string`
    }
};

module.exports = launchcode;

