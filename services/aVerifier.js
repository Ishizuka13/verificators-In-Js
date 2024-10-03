const aVerifier = (string) => {
  let getP = document.querySelector("p");
  let p = document.querySelector("p");
  if (string.includes("a")) {
    const lowerCaseString = string.toLowerCase().split("");

    const verify = lowerCaseString.filter((word) => word === "a");

    const countA = verify.length;

    p.innerHTML += ` ${countA} ${countA == 1 ? "letra A" : "letras A's"}`;
  } else {
    p.innerHTML("Por favor informe uma string que contenha a letra 'a'.");
  }
};
const string = prompt("Insira sua string: ");

aVerifier(string);
