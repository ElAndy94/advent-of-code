// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('./input.txt')
// });

// let adding = 0;
// let minus = 0;
// let results = [];
// let match = 0;

// counter = () => {
//     lineReader
//         .on('line', function (line) {
//             if (line.includes('+')) {
//                 let chars = line.slice(1);
//                 adding = adding + parseInt(chars);
//             }
//             if (line.includes('-')) {
//                 let chars = line.slice(1);
//                 minus = minus + parseInt(chars);
//             }
//             match = adding - minus;
//             console.log(match);

//             results.push(adding - minus);
//         })
//         .on('close', () => {
//             let count = 0;
//             for(let i = 0; i < results.length; ++i){
//                 if(results[i] == -4)
//                     count++;
//             }
//             console.log(count);
//         });
// }

// counter();

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

let lines = [];
let frequencies = [];

const parseLine = line => {
    let operator = line[0];
    let number = parseInt(line.slice(1));
    if(operator == '+') {
        return number;
    } else {
        return -Math.abs(number);
    }
}

lineReader.on('line', line => {
    lines.push(parseLine(line));
}).on('close', () => {
    let frequency = 0;
    let passes = 0;
    let found = false;

    while(!found) {
        for(let line of lines) {
            result = frequency + line;
            if(frequencies.includes(result)) {
                console.log("FOUND " + result);
                found = true;
                break;
            }

            frequencies.push(result);
            frequency = result;
        } 

        console.log("Pass: " + ++passes);
    }
});

