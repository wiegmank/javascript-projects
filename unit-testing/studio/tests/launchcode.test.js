// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("contains key 'organization' with value 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("contains key 'executiveDirector' with value 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  
  test("contains key 'percentageCoolEmployees' with value 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("contains key 'programsOffered' with value of array of length 3 containing 'Web Development', 'Data Analysis', & 'Liftoff'", function() {
    expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
    expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true);
    expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("contains a method called 'launchOutput()' that returns a string", function() {
    expect(typeof launchcode.launchOutput()).toBe('string');
  });
  
});