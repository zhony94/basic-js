const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let loop = true;
    let depth = 0 
    while(loop){
      for (let i=0; i<array.length; i++){
          if(Array.isArray(array[i])){
            loop = true
            break
          }else{
            loop = false
          }
        }
      depth = depth + 1;
      array = array.flat()  
    };
    return depth
  }  
}

module.exports = {
  DepthCalculator
};
