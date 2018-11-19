/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x; // result = result * x;
    }

    return result;
}

let x = +prompt('Enter a number', 1);
let n = +prompt('Enter a base', 1);

if ((!isNaN(x)) && (isFinite(x)) && (!isNaN(n)) && (isFinite(n)) && (x > 1) && (n > 1) && (x % 1 == 0) && (n % 1 == 0)) {
    pow(x, n);
} else {
    alert('enter correct number format');
}