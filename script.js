function firstNonRepeatedChar(str) {
 // Write your code here
	let charFrequency = {};
	  for(let i=0; i<str.length; i++){
		  
    let char = str[i];
    if(charFrequency[char]){
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
