module.exports = function check(str, bracketsConfig) {
  while (str.length != 0) {
    let failCount = 0;
    bracketsConfig.forEach(config => {
      let index = str.indexOf(config[0] + config[1]);
      if (index != -1) {
        str = str.slice(0, index) + str.slice(index + 2);
      } else {
        failCount++;
      }
    });
    
    if (failCount == bracketsConfig.length) {
      return false;
    }
  }

  return true;
}