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
  var wordList = text.split(/\W/);

  // index in one corresponds to index of the other
  var wordCountList = [];   // integers indicating # of times a word occurs
  var uniqueWordList = []; // unique words

  var sortedWords = [];

  wordList.forEach(function(word) {
    if (uniqueWordList.indexOf(word) === -1) {
      uniqueWordList.push(word);
      wordCountList.push(countWord(text, word));
    }
  });
  
  // left off here really
  // uniqueWordList[] contains each unique word
  // wordCountList[] contains the # of times those words exist

  // var maxCount = 0;

  // for(var index = 0; index < uniqueWordList.length; index++) {
  //   maxCount = wordCountList[index];

  //   for(var index2 = index; index2 < uniqueWordList.length; index++) {
  //     if 
  //   }
  // }
  
  sortedWords = uniqueWordList.slice(); // temporary, to return unique word list
  return sortedWords;
};
