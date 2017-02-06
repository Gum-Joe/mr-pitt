"use strict"
// Find the lucky number before and after an interger
// Vars
// interger
var intg = 399;
// Max
var max = 10500;
// Odd numbers & lucky numbers with undefined
var odd = [];
var other = [];
// Lucky numbers final
//var luck = [];
var lucky = [];
var nluck = [];
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
// XXX!
var unc = 0;
var count = odd.length;
var oc = odd.length;
for (var i = 1; i < odd.length; i++) {
  //if (true) {
    for (var a = 0; a < odd.length; a++) {
      var x = a + 1
      var oddi = odd[i]
        if (x % oddi !== 0) {
          other.push(odd[a]);
        }
    }
    // set
    odd = other;
  //}
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
    lucky.push(odd[c]);
  }
}
for (var i = 0; i < 20; i++) {
  console.log(odd[i]);
}

// Find lowest luck number
for (var d = 0; d < intg; d++) {
    if (lucky[d] - intg < hbcn && lucky[d] - intg <! 0) {
      if (lucky[d] !== intg) {
        bcn = lucky[d];
        hbcn = intg - lucky[d];
      }
    }
}

// highest
for (var e = 0; e < lucky.length; e++) {
  if (hacn === 0) {
    if (lucky[e] - intg > 0) {
      acn = lucky[e];
      hacn = lucky[e] - intg;
    }
  } else {
    if (lucky[e] - intg < hacn && lucky[e] - intg > 0) {
      acn = lucky[e];
      hacn = lucky[e] - intg;
    }
  }
}
writeln("Input: "+intg);
writeln("Lucky number before: "+bcn+"\nLucky Number after: "+acn);
