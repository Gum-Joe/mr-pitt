// Find the maximum value in a list of numbers
var num = [];
var prim = [];
var n = 30
numb = function(a) {
    for (var i = 0; i < n; i++) {
        num[i] = i;
    }
}
numb()
// Prime numbers up-to 40
pr = [1,2,3,5,7,11,13,17,19,23,29,31,37,39,41,43,47,53,59,61,67,71,73,79,83,89,97]
pri = function(nu) {
    for (var j = 0; j < num.length; j++) {
        for (var a = 0; a < pr.length; a++) {
          if (num[j] === pr[a]) {
            prim[a] = num[j]
          }
        }
    }
}

pri()

console.log("There are "+prim.length+" prime numbers before "+n)
console.log("They are:");
for (var b = 0; b < prim.length; b++) {
  console.log(prim[b]);
}
