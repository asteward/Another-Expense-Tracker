var countWord = function(text, word) {

  if (text.indexOf(word) === -1) {
   
    return 0;
  }

  var count = 0;
  var nextIndex = 0;
 
  while (nextIndex !== -1) {
    text = text.substr(nextIndex+1);
    nextIndex = text.indexOf(word);
    count++;
  } 

  return count;
};

var wordOrder = function(text) {
  

  text = text.toLowerCase();

  // split was returning empty elements, filter those out.
 // var words = text.split(/\W/).filter(function(element) { return element.length !== 0;});
 // var sortedWords = words.slice();
  //sortedWords.sort();



  return [[]];
};
