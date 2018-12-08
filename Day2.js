var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./inputDay2.txt')
});

let lines = [];

counter = () => {
    lineReader
        .on('line', function (line) {
            lines.push(line);
        })
        .on('close', () => {
            
            // console.log(lines);
        });
}

counter();