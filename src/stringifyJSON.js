// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if(Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  if (obj !== null && typeof obj === 'object') {
   if(Object.keys(obj).length === 0) {
     return '{}';
   }

   var result = [];

   for (var key in obj) {
    if(obj[key] === undefined || typeof obj[key] === 'function') {
      continue;
    }
    result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
   }

  //  var objectKeys = Object.keys(obj);

  //  for(var k = 0; k < objectKeys.length; k++) {
  //   if(objectKeys[k] === undefined || typeof objectKeys[k] === 'function') {
  //     continue;
  //   }
  //    result.push(stringifyJSON(objectKeys[k]) + ':' + stringifyJSON(obj[objectKeys[k]]));
  //  }

   return "{" + result + "}";
  }

  if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }

};
