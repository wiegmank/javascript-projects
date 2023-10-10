const processor = require('../processor.js');

describe("transmission processor", function() {

   test("takes a string and returns an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
   });

   test("returns -1 if transmission has no '::'", function(){
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
   });

   test("returned object has a property 'id'", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
   });

   test("id property should be type 'Number'", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
   });

   test("returned object has property 'rawData'", function(){
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
   });

   test("returns '-1' if rawData is missing < at position 0", function(){
    let result = processor("9701::489584872710>");
    expect(result.rawData).toBe(-1);
   });

   test("returns '-1' for rawData if missing > at end", function(){
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
   });

   test("returns '-1' if transmission id cant be converted to a #", function(){
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
   });
 
 });