// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Função para verificar o chute do jogador
  function verificarChute(chute) {
    const numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 3;
  
    while (chute !== numeroSecreto) {
      if (chute > numeroSecreto) {
        console.log("O número secreto é menor.");
      } else {
        console.log("O número secreto é maior.");
      }
      chute = parseInt(prompt("Tente novamente:"));
      tentativas++;
    }
  
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
  }
  
  // Iniciando o jogo
  verificarChute(parseInt(prompt("Digite um número entre 1 e 100:")));
