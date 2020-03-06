module.exports = function reverse (n) {
     if (n >= 0) {
        n = n + ' ';
    return +n.split('').reverse().join('');
     }
        else {
            n = Math.abs(n);
             n = n + ' ';
     return +n.split('').reverse().join('');
        }
}


