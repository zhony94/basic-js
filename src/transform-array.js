const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let result = []  
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  if(typeof(arr) === 'object' && arr !== null){
      for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    if(arr[i] === '--discard-next'){
      i=i+2
      continue      
    }else if(arr[i] === '--discard-prev'){
      result.pop()    
    }else if(arr[i] === '--double-next'){
        if(arr[i+1] !== undefined){
        result.push(arr[i+1])
      }   
    }else if(arr[i] === '--double-prev'){
      if(arr[i-1] !== undefined && arr[i-2] !== '--discard-next'){
        result.push(arr[i-1])
      }else{
        continue
      }      
    }else {
      result.push(arr[i])
    }
  }
  return result    
}
 }

module.exports = {
  transform
};
