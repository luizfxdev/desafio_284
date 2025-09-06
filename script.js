// Elementos do DOM
const asciiInput = document.getElementById('asciiInput');
const decipherBtn = document.getElementById('decipherBtn');
const returnBtn = document.getElementById('returnBtn');
const calculationSteps = document.getElementById('calculationSteps');
const finalResult = document.getElementById('finalResult');

// Função para decifrar os códigos ASCII
function decipherAscii() {
  const inputText = asciiInput.value.trim();

  // Verifica se o campo está vazio
  if (!inputText) {
    calculationSteps.innerHTML = '<span style="color: #ff6b6b;">Por favor, insira códigos ASCII para decifrar.</span>';
    finalResult.innerHTML = '';
    return;
  }

  // Divide a entrada em valores separados por vírgula
  const asciiArray = inputText.split(',').map(item => item.trim());
  let stepsHTML = '<strong>Processo de Decodificação:</strong><br><br>';
  let result = '';

  // Processa cada código ASCII
  asciiArray.forEach((code, index) => {
    // Verifica se é um número válido
    if (isNaN(code) || code === '') {
      stepsHTML += `<span style="color: #ff6b6b;">Código inválido na posição ${index + 1}: "${code}"</span><br>`;
      return;
    }

    const asciiCode = parseInt(code, 10);

    // Verifica se está na faixa ASCII válida
    if (asciiCode < 0 || asciiCode > 255) {
      stepsHTML += `<span style="color: #ff6b6b;">Código ASCII inválido na posição ${
        index + 1
      }: ${asciiCode}</span><br>`;
      return;
    }

    // Converte o código ASCII para caractere
    const char = String.fromCharCode(asciiCode);
    result += char;

    // Adiciona o passo ao log
    stepsHTML += `Código: ${asciiCode} → Caractere: "${char}"<br>`;
  });

  // Exibe os passos e o resultado final
  calculationSteps.innerHTML = stepsHTML;

  if (result) {
    finalResult.textContent = result;
  } else {
    finalResult.innerHTML = '<span style="color: #ff6b6b;">Nenhum código válido para decifrar</span>';
  }
}

// Função para limpar o campo de entrada e resultados
function clearFields() {
  asciiInput.value = '';
  calculationSteps.innerHTML = 'Insira os códigos e clique em DECIFRAR para ver o processo de decodificação.';
  finalResult.textContent = '';
  asciiInput.focus();
}

// Adiciona event listeners aos botões
decipherBtn.addEventListener('click', decipherAscii);
returnBtn.addEventListener('click', clearFields);

// Permite decifrar pressionando Enter no campo de input
asciiInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    decipherAscii();
  }
});

// Foca no input ao carregar a página
asciiInput.focus();
