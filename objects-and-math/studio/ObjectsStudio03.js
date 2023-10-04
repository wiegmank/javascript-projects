// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];


// Code your crewMass function here:
function crewMass(someArray) {
  let totalCrewMass = 0;
  for (let i = 0; i < someArray.length; i++) {
    totalCrewMass += someArray[i].mass;
  }
  totalCrewMass = Math.round(totalCrewMass * 10)/10;
  return totalCrewMass;
};

// Code your fuelRequired function here:
let rocketPlusSuppliesMass = 75000;

function fuelRequired(rocketMass, crew) {
  let fluffyFuel = 0;
  for (let i=0; i<crew.length; i++) {
    if (crew[i].species.toLowerCase() === 'dog') {
      fluffyFuel += 200;
    } else if (crew[i].species.toLowerCase() === 'cat') {
      fluffyFuel += 100;
    }
  }

  let fuelNeeded = Math.ceil(((rocketMass + crewMass(crew)) * 9.5) + fluffyFuel);

  return fuelNeeded;
}
 
 console.log(`The mission has a launch mass of ${crewMass(crew) + rocketPlusSuppliesMass} kg and requires ${fuelRequired(rocketPlusSuppliesMass, crew)} kg of fuel.`)