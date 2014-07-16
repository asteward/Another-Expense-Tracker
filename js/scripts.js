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
  var wordList = [];

  text = text.toLowerCase();
  wordList = text.split(/\W/);

  wordList.sort();
  
  return wordList;
};
