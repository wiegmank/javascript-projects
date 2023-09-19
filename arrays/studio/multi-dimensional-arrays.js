const input = require('readline-sync')

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cab1 = food.split(",").sort();
//console.log(food);

cab2 = equipment.split(",").sort();
//console.log(equipment);

cab3 = pets.split(",").sort();
//console.log(pets);

cab4 = sleepAids.split(",").sort();
//console.log(sleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

userCabinet = input.question(`\nPlease choose a cabinet (0-3) from the cargohold: `);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userCabinet < 0 || userCabinet > 3) {
    console.log("That is an invalid option. ")
} else {
console.log(`\nYou have selected cabinet ${userCabinet}, which contains: \n${cargoHold[userCabinet]}.`)

    userItem = input.question('\nPlease enter an item from the cabinet: \n');
    if (cargoHold[userCabinet].includes(userItem)) {
        console.log(`\nCabinet ${userCabinet} DOES contain ${userItem}.`)
    } else {
            console.log(`\nCabinet ${userCabinet} DOES NOT contain ${userItem}.`)
    }

}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check 
//if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


