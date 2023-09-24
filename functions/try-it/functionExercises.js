function makeLine(size, char = "#") {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

function makeSquare(size, char = "#") {
    return makeRectangle(size, size, char = "#");  
}

function makeRectangle(width, height, char = "#") {
    let line = "\n" + makeLine(width, char);
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += line;
    }
    return rectangle;
}

function makeDownwardStairs(height, char = "#") {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine((i+1), char) + '\n';
    }
    return stairs;
}

function makeSpaceLine(numSpaces, numChars, char = "#") {
    //return line with # of spaces, then number of hases, then num spaces again
    let charString = '';
    for (let i = 0; i < numSpaces; i++) {
        charString += '-';
    }
    charString = charString + makeLine(numChars, char) + charString;
    return charString;
}

function makeIsoscelesTrinagle(height, char = "#") {
    let triangelLine = '';
    
    for (let i = 0; i < height; i++) {
        let numSpaces = (height - i - 1);
        let numHash = (2 * i + 1);
        triangelLine += "\n" + makeSpaceLine(numSpaces, numHash, char);
    }
    return triangelLine;
}


function reverse(str) {
    let lettersArray = str.split('\n');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('\n')
}


function makeDiamond(height, char = "#") {
    let topTriangle = makeIsoscelesTrinagle(height, char);
    
    let bottomTriangle = reverse(makeIsoscelesTrinagle(height, char));

    let diamond = topTriangle + '\n' + bottomTriangle;
    return diamond;
}
