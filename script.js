const byteSize = (str) => {
	const encoder = new TextEncoder();
  const encodedBytes = encoder.encode(str);
  return encodedBytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
