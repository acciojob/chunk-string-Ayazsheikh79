function stringChop(str, size) {
  // your code here
	return (str.match(/.{1,5}/g))
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
