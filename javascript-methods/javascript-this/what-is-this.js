/* exported whatIsThis, someObject */

function whatIsThis() {
  return this;
}

// returns the global window object

var someObject = {
  aProperty: 'hullo there',
  getThis: function () {
    return this;
  }
};

// returns someObject
