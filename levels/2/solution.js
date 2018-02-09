var rawInput = require('./input').default;

// First get every row of the input
var rows = rawInput.split(/\n/);

// For every row get the columns
var input = [];
for(var i = 0; i < rows.length; i++) {
    input.push(rows[i].split(/\t/));
}

// Now input contains our matrix
// So we define checksum, that's 0 initially

var checksum = 0;

// For every row I calculate the difference between the maximum and the minimum number
// Then I sum the difference to the checksum
for(var ri = 0; ri < input.length; ri++) {
    checksum += getDifference(input[ri]);
}

// Output the result to console :)
console.log(checksum);

/**
 * Gets the difference between the minimum and the maximum string inside the array
 * @param arr Array
 */
function getDifference(arr) {
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        var num = Number.parseInt(arr[i]);
        if(num < min) min = num;
        if(num > max) max = num;
    }
    return max-min;
}
