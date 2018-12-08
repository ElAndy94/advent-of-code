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
