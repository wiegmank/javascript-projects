const whoWon = require("../RPS.js");

describe("whoWon", function(){

    test("returns TIE! if both players choose same option", function(){
        let output = whoWon('rock','rock');
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins' if Player 2 selects rock and Player 1 selects scissors", function(){
        let output = whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 1 wins' if Player 1 selects paper and Player 2 selects rock", function(){
        let output = whoWon("paper", "rock");
        expect(output).toBe("Player 1 wins!");
    });

    test("returns 'INVALID SELECTION' when a player chooses anything other than rock, paper, or scissors", function(){
        let output = whoWon("rock", "abcd");
        expect(output).toBe("INVALID SELECTION")
    });
});