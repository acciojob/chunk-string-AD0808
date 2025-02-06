function stringChop(str, size) {
if (!str) return []; // Return empty array if input is null or empty
  
  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size)); // Extract chunks of given size
  }
  
  return result;	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
