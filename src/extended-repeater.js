const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strRepTime = 1
  let addRepTime = 1
  let separatorSign = '+'
  let addSeparatorSign = '|'
  let additionStr = ''
  let mainStr = String(str)
  if(options.hasOwnProperty('repeatTimes')){
    strRepTime = options.repeatTimes
  }
  if(options.hasOwnProperty('additionRepeatTimes')){
    addRepTime = options.additionRepeatTimes
  }
  if(options.hasOwnProperty('separator')){
    separatorSign = options.separator
  }
  if(options.hasOwnProperty('additionSeparator')){
    addSeparatorSign = options.additionSeparator 
  }
  if(options.hasOwnProperty('addition')){
    additionStr = String(options.addition)
  }
  
  let additionText = []
  for (i=0; i<addRepTime; i++){
    additionText[i] = additionStr
  }
  const finalAddText = additionText.join(addSeparatorSign)
  
  let mainText = []
  for (i=0; i<strRepTime; i++){
    mainText[i] = mainStr + finalAddText
  }
  const finalMainText = mainText.join(separatorSign)
  return finalMainText  
}

module.exports = {
  repeater
};
