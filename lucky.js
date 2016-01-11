"use strict"
// Find the lucky number before and after an interger
// Vars
// interger
var intg = 50;
// Max
var max = 10500;
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
//var writeln = console.log;
// get odds
for (var i = 0; i < max; i++) {
  if (i % 2 != 0) {
    odd.push(i);
  }
}

// Get lucky numbers
for (var i = 0; i < odd.length; i++) {
  if (i !== 0) {
    // Cross off numbers
    var numbz = odd[i] - 1;
    var numbzx = odd[i];
    for (var z = i; z < odd.length; z++) {
      var x = z + 1;
      if (x % odd[i] === 0) {
        odd[z] = undefined;
      }
    }
  }
}
/*
for (var a = 0; a < odd.length; a++) {
  if (a !== 0 && a !== 1) {
    for (var b = a; b < odd.length; b++) {
      if (odd[b] % a == 0) {
        odd[b] = undefined;
      }
    }
  }
}*/

// Get final lucky numbers
for (var c = 0; c < odd.length; c++) {
  if (odd[c] !== undefined) {
    luck.push(odd[c]);
  }
}

// Find lowest luck number
for (var d = 0; d < intg; d++) {
    if (luck[d] - intg < hbcn && luck[d] - intg <! 0) {
      bcn = luck[d];
      hbcn = intg - luck[d];
    }
}

// highest
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
