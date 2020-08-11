export function showNotification(setter) {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  //win
  for (let letter of word) {
    if (!correct.includes(letter)) {
      status = "";
      break;
    }
  }

  if (wrong.length === 6) status = "lose";

  return status;
}
