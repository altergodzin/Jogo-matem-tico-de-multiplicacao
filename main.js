// Gera um número aleatório entre 0 e 100
function generateNumber() {
    return Math.floor(Math.random() * 101);
  }
  
  // Gera uma multiplicação aleatória
  function generateMultiplication() {
    const num1 = generateNumber();
    const num2 = generateNumber();
    const result = num1 * num2;
    return {
      num1,
      num2,
      result,
    };
  }
  
  let currentMultiplication = generateMultiplication();
  
  function newMultiplication() {
    currentMultiplication = generateMultiplication();
    document.getElementById("multiplication").textContent = `${currentMultiplication.num1} x ${currentMultiplication.num2} = `;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
  }
  
  function checkAnswer() {
    const answer = parseInt(document.getElementById("answer").value);
    if (answer === currentMultiplication.result) {
      document.getElementById("result").textContent = "Parabéns, você acertou!";
    } else {
      document.getElementById("result").textContent = "Ops, você errou. Tente novamente.";
    }
  }
  
  document.getElementById("multiplication").textContent = currentMultiplication.num1 + " x " + currentMultiplication.num2 + " = ";  