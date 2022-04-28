const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = {}
  for (let i=0; i<str.length; i++){ 
    if(result.hasOwnProperty(str[i])){
      result[str[i]] = result[str[i]] + 1
    }else{
      result[str[i]] = 1
    }
  }
  let ans = ''
  for (key in result){
    if(result[key] !== 1){
      ans = ans + result[key] + key
    }else {
      ans = ans + key
    }
    
  }  
  return ans
}

module.exports = {
  encodeLine
};
