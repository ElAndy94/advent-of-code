var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});

let adding = 0;
let minus = 0;

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
        })
        .on('close', () => {
            getSum(adding, minus)
        });
}

getSum = (adding, minus) => {
    const result = adding - minus;
    console.log(result);
}

counter();
