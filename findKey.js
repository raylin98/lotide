const findKey = function(object, cb) {
  for (let key in object) {
    if (cb(object[key])) {
      return key;
    }
  }
};

module.exports = findKey