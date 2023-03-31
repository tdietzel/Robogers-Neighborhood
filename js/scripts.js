//Business Logic

function neighbor(userInput) {
  const number = userInput.trim();
  console.log(number);
  if (!Number(number)) {
    return false;
  } else {
    if (number.includes(3)) {
      console.log("Won't you be my neighbor?");
    } else if (number.includes(2)) {
      console.log("Boop!");
    } else if (number.includes(1)) {
      console.log("Beep!");
    }
  }
}