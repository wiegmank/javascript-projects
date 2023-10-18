//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores
    }

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio 
//activity.

    addScore(newScore) {
        this.scores.push(newScore);
    };

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        sum = Math.round((sum/this.scores.length) * 10) / 10;
        return sum;
    };

    status() {
        if (this.average() < 70) {
            return `Rejected`;
        } else if (this.average() < 80) {
            return `Probationary`;
        } else if (this.average() < 90) {
            return `Reserve`;
        } else {
            return `Accepted`;
        }
    };

    statusTemp() {
        if (this.average() < 70) {
            return `${this.name} scored ${this.average()} and has status Rejected`;
        } else if (this.average() < 80) {
            return `${this.name} scored ${this.average()} and has status Probationary`;
        } else if (this.average() < 90) {
            return `${this.name} scored ${this.average()} and has status Reserve`;
        } else {
            return `${this.name} scored ${this.average()} and has status Accepted`;
        }
    };

    resultString(subject) {
        return(`${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}.`)
    };
};


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to 
//reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

/*
gladGator.addScore(100);
gladGator.addScore(100);
gladGator.addScore(100);
gladGator.addScore(100);
gladGator.addScore(100);
gladGator.addScore(100);
*/

console.log(bubbaBear.resultString());
console.log(merryMaltese.resultString());
console.log(gladGator.resultString());
