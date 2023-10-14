// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        this.title = title;
        this.author = author,
        this.copyright = copyright,
        this.isbn = isbn,
        this.numPages = numPages,
        this.numCheckouts = numCheckouts,
        this.timeToDiscard = timeToDiscard
    }

    checkout(uses){
        this.numCheckouts += uses;
    }
};

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        super(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard);
    }

    timeToToss(currentYear) {
        if ((currentYear - this.copyright) > 5)
        this.timeToDiscard = true;
    };
};

class Novel extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        super(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard);
    }

    timeToToss(){
        if (this.numCheckouts > 100) {
            this.timeToDiscard = true;
        }
    }
};

// Declare the objects for exercises 2 and 3 here:
sampleNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false)
sampleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", "2013", "0000000000000", 1147, 1, false)

console.log(sampleNovel.numCheckouts);
console.log(sampleManual.timeToDiscard);

// Code exercises 4 & 5 here:
sampleManual.timeToToss(2023);
sampleNovel.checkout(5)

console.log(sampleNovel.numCheckouts);
console.log(sampleManual.timeToDiscard);