// Candidate data & crew array.
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

let crew = [candidateA,candidateC,candidateE];

// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  circumference = Math.round(2 * (Math.PI) * radius)
  return circumference;
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  orbitTime = Math.round(numOrbits * (orbitCircumference(orbitRadius) / orbitSpeed) * 100)/100
  console.log(`The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${orbitTime} hours to complete.`)
  return orbitTime;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(someArray) {
  let index = Math.floor(Math.random()*someArray.length);
  return someArray[index]; //chooses random entry from an array
};
let chosenAstronaut = selectRandomEntry(crew);

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius, orbitSpeed) {
  let spacewalkTime = missionDuration(3, orbitRadius, orbitSpeed);
  let oxygenGone = Math.round((candidate.o2Used(spacewalkTime))*1000)/1000;
  //console.log(oxygenGone)
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${oxygenGone} kg of oxygen.`
}

console.log(oxygenExpended(chosenAstronaut));