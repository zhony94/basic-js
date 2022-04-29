const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let original = []
  let obj = {}
  for (let j=0; j<names.length; j++){
    original[j] = names[j]
  }  
  for (let i=0; i<names.length; i++){
    let numbers = []
    if(!obj.hasOwnProperty(names[i])){
      
      for(let m=0; m<names.length; m++){        
        if(names[m] === names[i]){          
          numbers.push(m)
        }        
      }
      obj[names[i]] = numbers;
      numbers = []
    }    
  }  
  for (let key in obj){
    for (let k=0; k<obj[key].length; k++){ 
        if(k===0){
          console.log(key)
            console.log(key.slice(0,-3))
              console.log(obj.hasOwnProperty(key.slice(0,-3)))
          if(key.includes('(') && obj.hasOwnProperty(key.slice(0,-3)) && key.slice(0,-3).length>1){
            original[obj[key][k]] = key + '(1)'
          }else{
            original[obj[key][k]] = key
          }        
        }else{
        original[obj[key][k]] = key+'('+k+')'
        }               
      }
    } 
  return original
}

module.exports = {
  renameFiles
};
