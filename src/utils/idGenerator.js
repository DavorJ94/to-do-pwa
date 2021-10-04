function IdGenerator(currentState) {
  let idArray = [];
  currentState.forEach((item) => idArray.push(item.id));
  let parsedArray = idArray.map((x) => +x); // converting to integers

  let i = 1;
  while (true) {
    if (parsedArray.includes(i)) i++;
    else break;
  }
  return i.toString();
}

export default IdGenerator;
