// POLYFILLS TAKEN FROM MDN

// .includes
if (!Array.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, "includes", {
    value: function(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y))
        );
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}

// .entries
if (!Object.entries) {
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

// repeat
if (!String.prototype.repeat) {
  // eslint-disable-next-line no-extend-native
  String.prototype.repeat = function(count) {
    if (this == null) {
      // check if `this` is null or undefined
      throw new TypeError("can't convert " + this + " to object");
    }
    var str = "" + this;
    // To convert string to integer.
    count = +count;
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count === Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count |= 0; // floors and rounds-down it.
    if (str.length === 0 || count === 0) {
      return "";
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError("repeat count must not overflow maximum string size");
    }
    while ((count >>= 1)) {
      // shift it by multiple of 2 because this is binary summation of series
      str += str; // binary summation
    }
    str += str.substring(0, str.length * count - str.length);
    return str;
  };
}
