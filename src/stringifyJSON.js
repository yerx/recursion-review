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
    console.log("here");
   if(Object.keys(obj).length === 0) {
     return '{}';
   }

   var result = [];

   var objectKeys = Object.keys(obj);

   for(var k = 0; k < objectKeys.length; k++) {
     result.push(stringifyJSON(objectKeys[k]) + ':' + stringifyJSON(obj[objectKeys[k]]));
     console.log(result)
   }

   return "{" + result + "}";
  }


  if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }

};
