let form = document.querySelector("form");
let numberInput = document.querySelector(".numberInput");
let answer = document.querySelector(".answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(numberInput);
  isNumberInFibonacciSequence(numberInput.value);
});

const isNumberInFibonacciSequence = (number) => {
  //Inicia a função determinando os primeiros valores

  let result = [0, 1];

  let bNumber = result[0];
  let aNumber = result[1];

  //faz o restante da sequência tendo um limite que é igual ao número passado para verificação para evitar um loop eterno

  for (i = 1; i <= number; i++) {
    //verifica se o loop já atingiu o resultado do input

    if (result[result.length - 1] >= number) {
      i++;
      break;
    }
    bNumber = result[i];
    aNumber = result[i - 1];

    //faz a soma do número anterior ao atual da sequência

    result.push(aNumber + bNumber);
  }

  //verifica se o resultado do loop está na sequência

  if (result[result.length - 1] > number) {
    answer.innerHTML = "Seu número não está na sequência.";
    return;
  } else {
    answer.innerHTML = `Seu número está na sequência: ${result
      .join(",")
      .replace(",", ", ")}.`;
  }
};
