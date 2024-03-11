const checkButton = document.getElementById("check-btn");
const divResult = document.getElementById("result");

const checkWord = () => {
  const textInput = document.getElementById("text-input");
  const word = textInput.value;

  const nakedWord = word.replace(/[.%$&",\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, "").replace(String.fromCharCode(92), "").toLowerCase();
  const backwardWord = nakedWord.split("").reverse().join("");

  if (word === "") {
    divResult.innerHTML = `<p>Please input a value</p>`;
  } else {
    if (backwardWord === nakedWord) {
      divResult.innerHTML = `<p><strong class="green">${word}</strong> is a palindrome</p>`;
    } else {
      divResult.innerHTML = `<p><strong class="red">${word}</strong> is not a palindrome</p>`;
    }
  }
  textInput.value = "";


}

checkButton.addEventListener("click", checkWord);


