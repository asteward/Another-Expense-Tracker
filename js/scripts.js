// returns # of times a given word appears in text
var countWord = function(text, word) {  
  return text.toLowerCase().match(new RegExp(word, 'g')).length;
};

// returns an array of words in text sorted by # of appearances
// if # of appearances are equal, words are then sorted by order of appearance
var wordOrder = function(text) {
  // word in uniqueWordList[x] appears wordCountList[x] # of times
  var wordCountList = [];   
  var uniqueWordList = []; 

  var wordList = text.toLowerCase().split(/\W/);

  wordList.forEach(function(word) {
    if (uniqueWordList.indexOf(word) === -1) {
      uniqueWordList.push(word);
      wordCountList.push(countWord(text, word));
    }
  });

  // determine maximum # of times any word appears
  var maxCount = 0;
  wordCountList.forEach(function(thisCount) {
    if (thisCount > maxCount) {
      maxCount = thisCount;
    }
  });

  var sortedWords = [];
  // find each word that appears maximum # of times, then count down, pushing as we go
  for (var count = maxCount; count > 0; count--) {
    for(var index=0; index < uniqueWordList.length; index++) {
      if (wordCountList[index] === count) {
        sortedWords.push(uniqueWordList[index]);
      }
    }
  }

  return sortedWords;
};
