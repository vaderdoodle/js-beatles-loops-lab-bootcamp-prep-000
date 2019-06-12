function theBeatlesPlay(musicians, instruments){
  var arr = [];
  
  for (var i=0; i<musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var shoutFacts = [];
  
  var i = 0;
  while (i < facts.length) {
    shoutFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return shoutFacts;
}

function iLoveTheBeatles {