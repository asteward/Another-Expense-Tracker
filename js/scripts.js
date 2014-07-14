var wordOrder = function(text) {
 
  text = text.toLowerCase();

  // split was returning empty elements, filter those out.
  var words = text.split(/\W/).filter(function(element) { return element.length !== 0;});

  return words;

};