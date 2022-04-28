const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {   
  let result = []
  let origin = String(n).split('');
  for (let i=0; i<origin.length; i++){
    let newVal = String(n).split('');
    newVal.splice(i,1)
    result.push(parseInt(newVal.join('')))
  }
  return Math.max.apply(null, result)
}

module.exports = {
  deleteDigit
};
