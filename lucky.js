"use strict"
// Find the lucky number before and after an interger
// Vars
// interger
var intg = 940;
var max = 10000;
// Odd numbers & lucky numbers with undefined
var odd = [];
// Lucky numbers final
var luck = [];
// Number which is below and close and how many away it is
var bcn = 0;
var hbcn = 0;
// Number which is above and close and how many away it is
var acn = 0;
var hacn = 0;

// Nodejs
var writeln = console.log;
// get odds
for (var i = 0; i < max; i++) {
  if (i % 2 != 0) {
    odd.push(i);
  }
}

// Get lucky numbers
for (var a = 0; a < odd.length; a++) {
  if (a !== 0 && a !== 1) {
    for (var b = a; b < odd.length; b++) {
      if (odd[b] % a == 0) {
        odd[b] = undefined;
      }
    }
  }
}

// Get final lucky numbers
for (var c = 0; c < odd.length; c++) {
  if (odd[c] !== undefined) {
    luck.push(odd[c]);
  }
}

// Find lowest luck number
for (var d = 0; d < intg; d++) {
  if (d === 0 && hbcn === 0) {
    // Do nothing
  } else {
    if (luck[d] - intg < hbcn && luck[d] - intg <! 0) {
      bcn = luck[d];
      hbcn = intg - luck[d];
    }
  }
}

// highest
// XXX: Does not work. Return's 0.
for (var e = 0; e < luck.length; e++) {
  if (hacn === 0) {
    if (luck[e] - intg > 0) {
      acn = luck[e];
      hacn = luck[e] - intg;
    }
  } else {
    if (luck[e] - intg < hacn && luck[e] - intg > 0) {
      acn = luck[e];
      hacn = luck[e] - intg;
    }
  }
}
writeln("Input: "+intg);
writeln("Lucky number before: "+bcn+"\nLucky Number after: "+acn);
