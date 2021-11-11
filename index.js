let arrCopy = input.split("\n").slice(1);
arrCopy.forEach((str) => {
  let evenString = "";
  let oddString = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      oddString += str[i];
    } else {
      evenString += str[i];
    }
  }
  console.log(evenString + " " + oddString);
});
