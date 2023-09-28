let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()

let firstLetter = function(name) {
    return name[0];
}
let firstInitials = names.map(firstLetter);

console.log(firstInitials);
