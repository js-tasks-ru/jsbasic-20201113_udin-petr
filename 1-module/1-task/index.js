/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let f = 1;
  for(let i = 2; i <= n; i++){
    f = f * i;
  }
  return f;
}
