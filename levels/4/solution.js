var rawInput = require('./input').default;
var input = rawInput.split(/\n/);

// Here I count all the passphrases I have get from input
var passphrases = input.length;

for(var i = 0; i < input.length; i++) {
    var words = input[i].split(/\s/);
    for(var iw = 0; iw < words.length; iw++) {

        // I save the current word into word and set it null into the array
        var word = words[iw];
        words[iw] = null;

        // I search the current word into the array, if there's an occurrency I decrease the passphrases counter
        if(words.indexOf(word) >= 0) {
            passphrases--;
            break;
        }
    }
}

console.log(passphrases);