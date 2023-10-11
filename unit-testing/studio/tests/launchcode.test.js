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

  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function() {
    expect(launchcode.launchOutput(2)).toEqual('Launch!')
  });

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", function(){
    expect(launchcode.launchOutput(3)).toEqual('Code!')
  });

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", function(){
    expect(launchcode.launchOutput(5)).toEqual('Rocks!')
  });

  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'", function(){
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!')
  });

  test("When passed a number that is divisible by 2 AND 5, launchOutput() returns 'Launch Rocks!'", function(){
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)')
  });

  test("When passed a number that is divisible by 3 AND 5, launchOutput() returns 'Code Rocks!'", function(){
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!')
  });

  test("When passed a number that is divisible by 2, 3, AND 5, launchOutput() returns 'LaunchCode Rocks!'", function(){
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!')
  });

  test("When passed a number that is NOT divisible by 2, 3, or 5, launchOutput() returns 'Rutabagas! That doesn't work.'", function(){
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.")
  });

});