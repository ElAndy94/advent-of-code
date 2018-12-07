/////////////////// FAILED ATTEMPT ////////////

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

let adding = 0;
let minus = 0;
let results = [];
let match = 0;

counter = () => {
    lineReader
        .on('line', function (line) {
            if (line.includes('+')) {
                let chars = line.slice(1);
                adding = adding + parseInt(chars);
            }
            if (line.includes('-')) {
                let chars = line.slice(1);
                minus = minus + parseInt(chars);
            }
            match = adding - minus;
            console.log(match);

            results.push(adding - minus);
        })
        .on('close', () => {
            let count = 0;
            for(let i = 0; i < results.length; ++i){
                if(results[i] == -4)
                    count++;
            }
            console.log(count);
        });
}

counter();

/////////////////// FAILED ATTEMPT ////////////