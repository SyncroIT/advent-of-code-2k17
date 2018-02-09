var input = require('./input').input;
var sum = 0;

for(var x = 0; x < input.length; x++) {
    // We get modulo of (current index + 1) to make the last entry compare to the first one.
    if(input[x] === input[(x+1)%(input.length)]) sum += Number.parseInt(input[x]);
}

console.log(sum);
// Answer is 1390