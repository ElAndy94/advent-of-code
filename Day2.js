const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./inputDay2.txt')
});

boxIds = [];

// Returns true if same letter appears n times, otherwise false
const sameLetterAppearsNTimes = (str, n) => {
    let result = false; 

    str.split("").map(character => {
        if(countCharacter(character, str) == n) {
            result = true;
        }
    });

    return result;
}

// Returns number of occurrences of character in string
const countCharacter = (character, str) => {
    return str.match(new RegExp(character,"g")).length;
}

lineReader.on('line', line => {
    boxIds.push(line);
}).on('close', () => {

    let appearsTwice = 0;
    let appearsThreeTimes = 0;

    for(id of boxIds) {
        if(sameLetterAppearsNTimes(id, 2)) appearsTwice++;
        if(sameLetterAppearsNTimes(id, 3)) appearsThreeTimes++;
    }

    console.log("Appears twice: " + appearsTwice);
    console.log("Appears three times: " + appearsThreeTimes);
    console.log("Total checksum: " + appearsTwice * appearsThreeTimes);
      
});