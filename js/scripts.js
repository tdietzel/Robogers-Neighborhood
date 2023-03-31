//Business Logic

function neighbor(userInput) {
  const number = userInput.trim();
  console.log(number);
  if (!Number(number)) {
    return false;
  } else {
    return true;
  }
}