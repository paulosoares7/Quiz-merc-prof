const $ = document.querySelector.bind(document);
const conteudoDasQuestoes = $('#conteudoDasQuestoes')
const pergunta = $("#pergunta")
const botoes = $('#botoes')
const botaoReiniciar = $('#reiniciar')
const conteudoDasRespostas = $('#conteudoDasRespostas')
const textoDoResultado = $('#textoDoResultado')
const textoPontuação = $('#pontuação')

//Criar uma lista de perguntas com suas respectivas respostas corretas.
const perguntas = [
    {
      pergunta: "Faça sua pergunta aqui",
      alternativas: [
        { alternativa: "Alternativa 1", correta: false },
        { alternativa: "Alternativa 2", correta: true },
        { alternativa: "Alternativa 3", correta: false },
        { alternativa: "Alternativa 4", correta: false }
      ]
    },
    {
      pergunta: "Faça sua pergunta aqui 2",
      alternativas: [
        { alternativa: "Alternativa 1", correta: false },
        { alternativa: "Alternativa 2", correta: true },
        { alternativa: "Alternativa 3", correta: false },
        { alternativa: "Alternativa 4", correta: false }
      ]
    },
    // Adicione mais perguntas aqui
  ];

    
  let indiceDaPergunta = 0;
  let pontuacao = 0;


//Exibir o resultado final com a pontuação alcançada.
function apresentarResultado() {
    conteudoDasQuestoes.classList.add("desativado"); // aluno
    conteudoDasRespostas.classList.remove("desativado"); // aluno
    textoDoResultado.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`; // aluno
    textoPontuação.innerText = `Pontuação: ${pontuacao}`; // aluno
}

// Implementar a lógica para verificar se a resposta selecionada está correta.
function selecionarAlternativaCorreta(e) {
    // console.log('selecionando minha altenativa') //aluno
    const laternativaCerta = e.target.dataset.correta // aluno
    const indiceDaUltimaPergunta = perguntas.length - 1
    // console.log(laternativaCerta) // pré definida
        // console.log(indiceDaUltimaPergunta) // aluno
        if (laternativaCerta) {
            // console.log('alternativa correta, mais um ponto') // aluno
            pontuacao++
            // console.log( pontuacao) // aluno

        }

        // console.log(indiceDaPergunta) // aluno
        if (indiceDaPergunta === indiceDaUltimaPergunta) {
            console.log('mostrar pontuação') // aluno
            apresentarResultado() // aluno
            
        } else {
            console.log('ir para proxima pergunta') // aluno
            indiceDaPergunta++// aluno
            setTimeout(carregarPergunta, 1000);// aluno
        }
        
}

//Adicionar uma função para exibir as opções de resposta.
  function exibirPergunta(perguntaAtual){
    // console.log('perguntaAtual:',perguntaAtual.pergunta)

    // pergunta.innerText = 'minha questão' // aluno fazer
    pergunta.innerText = perguntaAtual.pergunta // aluno 

    perguntaAtual.alternativas.forEach(questao => { // pré definido
        const botao = document.createElement("button");// pré definido
            botao.classList.add("btn"); // pré definido
            // console.log(botao) // pré definido

        if (questao.correta) {// pré definido
            botao.dataset.correta = questao.correta; // aluno
            // console.log(alternativa.correta)// aluno
        }
       botao.addEventListener('click', selecionarAlternativaCorreta)// pré definido

        botoes.appendChild(botao); // aluno

        // botao.innerText = 'texto no botão'; // pré  definido
        botao.innerText = questao.alternativa; // aluno
        // conteudoDasQuestoes.classList.remove("desativado"); // aluno
        
      
    });
}

  // Implementar uma função para carregar a pergunta atual.
  function carregarPergunta() {
    const perguntaAtual = perguntas[indiceDaPergunta] // aluno
    // console.log(perguntaAtual);
    resetarEstado(); // pré definido
    exibirPergunta(perguntaAtual); // aluno
}

// Reiniciar Game
 // 5° apresentar as repostas

 function startGame() {
    console.log('ok') // aluno
    indiceDaPergunta = 0; // aluno
    pontuacao = 0; // aluno
    conteudoDasQuestoes.classList.remove("desativado");
    conteudoDasRespostas.classList.add("desativado");
    carregarPergunta()
  }
   
botaoReiniciar.addEventListener("click", startGame);
    
carregarPergunta()


// bloco pré definido
function resetarEstado() {
    limparClasses(document.body);
    while (botoes.firstChild) {
      botoes.removeChild(botoes.firstChild);
    }
}
    
  function statusDasClasses(elemento, correta) {
    limparClasses(elemento);
    if (correta) {
      elemento.classList.add("correta");
    } else {
      elemento.classList.add("errada");
    }
}
  
  function limparClasses(elemento) {
    elemento.classList.remove("correto");
    elemento.classList.remove("errada");
}
// fechando bloco pré definido