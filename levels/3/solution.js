var input = 277678;

// Avoid calculating for 1
if(input > 1) {
    var rawSqrt = Math.ceil(Math.sqrt(input));
    var sqrt = rawSqrt % 2 === 0 ? rawSqrt+1:rawSqrt;
    var spiral = (sqrt-1)/2;

    // Find the center of the first side in the square
    var centers = [
        (first = Math.pow(sqrt-2, 2)+spiral),
        (first + (spiral*2)),
        (first + (spiral*4)),
        (first + (spiral*6))
    ];

    // Get closest center
    var closest = false;
    for(var i = 0; i < centers.length; i++) {
        if(!closest || Math.abs(centers[i] - input) < closest) closest = centers[i];
    }

    var steps = spiral+Math.abs(closest-input);

    console.log(steps);
}

