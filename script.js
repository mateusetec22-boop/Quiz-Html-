const perguntas = [
  {
    texto: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correta: 2
  },
  {
    texto: "Qual linguagem é usada para estruturar páginas web?",
    opcoes: ["HTML", "Python", "SQL", "C++"],
    correta: 0
  },
  {
    texto: "Quanto é 7 x 8?",
    opcoes: ["54", "56", "64", "48"],
    correta: 1
  },
  {
    texto: "Qual é o maior planeta do Sistema Solar?",
    opcoes: ["Terra", "Marte", "Saturno", "Júpiter"],
    correta: 3
  },
  {
    texto: "Qual tag HTML cria um link?",
    opcoes: ["<img>", "<a>", "<p>", "<div>"],
    correta: 1
  }
];

let indice = 0;
let pontos = 0;
let respondeu = false;

const quizArea = document.getElementById("quiz-area");
const resultado = document.getElementById("resultado");
const progresso = document.getElementById("progresso");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const proximaBtn = document.getElementById("proxima");
const pontuacaoEl = document.getElementById("pontuacao");
const reiniciarBtn = document.getElementById("reiniciar");

function mostrarPergunta() {
  const p = perguntas[indice];
  respondeu = false;
  proximaBtn.disabled = true;
  proximaBtn.textContent = indice === perguntas.length - 1 ? "Ver resultado" : "Próxima";

  progresso.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  perguntaEl.textContent = p.texto;
  opcoesEl.innerHTML = "";

  p.opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = texto;
    botao.addEventListener("click", () => responder(i));
    opcoesEl.appendChild(botao);
  });
}

function responder(escolha) {
  if (respondeu) return;
  respondeu = true;

  const correta = perguntas[indice].correta;
  const botoes = opcoesEl.querySelectorAll(".opcao");

  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === correta) b.classList.add("certa");
  });

  if (escolha === correta) {
    pontos++;
  } else {
    botoes[escolha].classList.add("errada");
  }

  proximaBtn.disabled = false;
}

function proxima() {
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizArea.classList.add("hidden");
  resultado.classList.remove("hidden");
  pontuacaoEl.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
}

function reiniciar() {
  indice = 0;
  pontos = 0;
  resultado.classList.add("hidden");
  quizArea.classList.remove("hidden");
  mostrarPergunta();
}

proximaBtn.addEventListener("click", proxima);
reiniciarBtn.addEventListener("click", reiniciar);

mostrarPergunta();
