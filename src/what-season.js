const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof(date) !== 'undefined'){
    if(isValidDate(date)){
      let monthSelector = date.getMonth();
  if (typeof(date)==='object' && date !== ''){
    
    if(monthSelector >= 0 && monthSelector <=1 || monthSelector === 11){
      return 'winter'
    }else if (monthSelector > 1 && monthSelector <5){
      return 'spring'
    }else if (monthSelector>4 && monthSelector<8){
      return 'summer'
    }else if (monthSelector>7 && monthSelector<11){
      return 'autumn'
    }
  }
    }else{
      return "Invalid date!"
    }
    
  }else {
    return 'Unable to determine the time of year!'
  }
 
 
}
function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

module.exports = {
  getSeason
};
