    // Seleciona elementos HTML com as classes e IDs necessários
const result = document.querySelector('.result');
const yourScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

    // Inicializa as variáveis de pontuação para o jogador humano e a máquina
let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Função que representa a jogada do jogador humano
const playHuman = (humanChoice) => {
    
    const machineChoice = playMachine();  // Chama a função playMachine para obter a escolha aleatória da máquina
    
    playTheGame(humanChoice, machineChoice); // Chama a função playTheGame com as escolhas do jogador humano e da máquina
};

// Função que simula a jogada da máquina, retornando uma escolha aleatória entre 'rock', 'paper' e 'scissors'
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

// Função principal que determina o resultado do jogo com base nas escolhas do jogador humano e da máquina
const playTheGame = (human, machine) => {
    
    console.log('Humano: ' + human + ' Máquina: ' + machine);  // Exibe as escolhas no console (pode ser útil para depuração)

    // Verifica se as escolhas são iguais, resultando em um empate
    if (human === machine) {
        result.innerHTML = 'Empate!';
        
    } else if (
        
        // Verifica se o jogador humano ganha com base nas combinações de escolhas possíveis
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {

        // Incrementa a pontuação do jogador humano e atualiza o HTML correspondente
        humanScoreNumber++;
        yourScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou!';

    } else {
        // Incrementa a pontuação da máquina e atualiza o HTML correspondente
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu!';
    }
};
