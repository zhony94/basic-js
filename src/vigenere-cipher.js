const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directMachine = true){
    this.directMachine = directMachine
  }

  encrypt(plainMsg, key ) {
    if(plainMsg === undefined || key === undefined || typeof(plainMsg) !== "string" || typeof(key) !== "string") throw new Error('Incorrect arguments!')
    let encrypted  = "";
    let j=0;
    for(let i = 0; i < plainMsg.length; i++){
      let currentLetter = plainMsg[i];
      let pi = currentLetter.toUpperCase().charCodeAt()
      let ki = key[j%key.length].toUpperCase().charCodeAt()
      if(pi >= 65 && pi <= 90){
        let upperLetter = (((pi + ki) % 26) + 26) % 26;
        encrypted  += String.fromCharCode(upperLetter + 65);
        j++;
      }else{
         encrypted  += currentLetter;
      }    
    };

    return (this.directMachine) ? encrypted : encrypted.split('').reverse().join('')
  }
  decrypt(plainMsg, key) {

    if(plainMsg === undefined || key === undefined || typeof(plainMsg) !== "string" || typeof(key) !== "string") throw new Error('Incorrect arguments!')


    let decrypted   = "";
    let j=0;
    for(let i = 0; i < plainMsg.length; i++){
      let currentLetter = plainMsg[i];
      let ci = currentLetter.toUpperCase().charCodeAt()
      let ki = key[j%key.length].toUpperCase().charCodeAt()
      if(ci >= 65 && ci <= 90){
        let upperLetter = (((ci - ki) % 26) + 26) % 26;
        decrypted   += String.fromCharCode(upperLetter + 65);
        j++;
      }else{
        decrypted   += currentLetter;
      }    
    };

    return (this.directMachine) ? decrypted : decrypted.split('').reverse().join('') 
  }
}

module.exports = {
  VigenereCipheringMachine
};
