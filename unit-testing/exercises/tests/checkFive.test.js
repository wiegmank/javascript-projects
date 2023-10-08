const checkFive = require("../checkFive.js");
//const test = require("../checkFive.js");

describe("checkFive", function(){
    
    test("returns 'num is less than 5' when num < 5", function(){
        let output = checkFive(4);
        expect(output).toEqual("4 is less than 5.");
    });

});