function firstNonRepeatedChar(str) {
  let charFrequency = {};
  for(let i=0; i<str.length; i++){
    let char = str[i];
    if(charFrequency[char]){
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  for(let i=0; i<str.length; i++){
    if(charFrequency[str[i]] == 1){
      return str[i];
    }
  }

  return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
