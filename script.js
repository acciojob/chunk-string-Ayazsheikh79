function stringChop(str, size) {
  // your code here
	if (!str) return []
	const regex = new RegExp(`.{1, ${size}}`, "g")
	return str.match(regex) || []
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
