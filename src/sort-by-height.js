const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let forSort = []
  let indexes = []
   for (let i = 0; i<arr.length; i++){
     if (arr[i] === -1){
       indexes.push(i)
     }else{
       forSort.push(arr[i])
     }
   }
  let sorted = forSort.sort(function(a,b){return a-b})
  for (let j=0; j<indexes.length; j++){
    sorted.splice(indexes[j],0,-1)
  }
  return sorted
}

module.exports = {
  sortByHeight
};
