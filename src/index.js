module.exports = function check(str, bracketsConfig) {
 var brack = [ ];
    bracketsConfig.forEach(element => {
    brack.push(element.join('')); });
   for(var i = 0; i < brack.length; i++) {
    if (str.includes(brack[i] ) ) {
      str = str.replace(brack[i], "");
      i = -1;
    }
  }
    if (str.length === 0) return true;
    else return false;
}
