export function show(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(selectedWord, wrongLetters, correctLetters) {
  let word = [...new Set(selectedWord.split(""))];
  if (correctLetters.length === word.length) {
    return "won";
  }
  if (wrongLetters.length === 6) {
    return "lost";
  }
}
