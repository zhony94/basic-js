const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const convertNum = Number(sampleActivity)
  if (typeof(sampleActivity) === 'string' && sampleActivity !== '' && convertNum > 0 && convertNum !== Infinity ){
    const k = 0.693 / 5730;
    const result = Math.ceil((Math.log(MODERN_ACTIVITY/convertNum)) / k);
    if(result > 0){
      return result
    }else {
      return false
    }
    
  }else {
    return false
  }
}

module.exports = {
  dateSample
};
