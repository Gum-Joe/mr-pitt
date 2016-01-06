// Find all the primes below a number
// Basic vars
var num = 10;
nump = num + 1
var prims = [];
var nprims = [];
var fprims = [];
var fs = require('fs');
var npr = []

// Nodejs
// writeln = console.log;
fs.openSync("log.log", "w");
// Get all numbers before
for (var i = 0; i < nump; i++) {
  // Check whether i is divisible by each number below it
  //writeln(i);
  for (var p = 0; p < i; p++) {
    if (i === 0 || i === 1 || i === p || p === 1) {

    } else {
      if (i % p === 0) {
        // Add to not prime array if not a prime
        npr.push(i)
      }
    }
  }
}

// Go through numbers and work out if prime
for (var a = 0; a < num; a++) {
  prims.push(a);
  for (var b = 0; b < npr.length; b++) {
    if (npr[b] == a) {
      if (prims[prims.length-1] == a) {
        prims[prims.length-1] = null;
      }
    }
  }
}

// Print
// get final array
for (var c = 0; c < prims.length; c++) {
  if (prims[c] !== null && prims[c] !== 0) {
    fprims.push(prims[c]);
  }
}

writeln("There are "+fprims.length+" before the number "+num)
writeln("They are:");
for (var x = 0; x < fprims.length; x++) {
  if (fprims[x] !== null) {
    writeln(fprims[x]);
  }
}
