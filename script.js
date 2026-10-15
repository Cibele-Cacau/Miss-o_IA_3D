const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Olhando para o seu futuro pós-ensino médio" , 
        alternativas: [
            {
                texto: "Se eu tivesse que escolher duas faculdades para o futuro, qual seria?",
                afirmacao:[
                    "Psicologia",
                    "Biomedicina",
                ],
            },
            {
                texto: "",
                afirmacao: [
                     "afirmacao"
                ]
                    
            }           
            
        ]
    },
    {
        enunciado: "Quando se trata da nossa alimentacao nas proximas decadas, qual caminho voce escolheria?:" [
            {
                texto:"Consumir majoritariamente alimentos organicos cultivados em hortas comunitarias locais"
                afirmacao:"afirmacao"
            },
            {
                texto: "Adotar alimentos inovadores produzidos em laboratorio com alta eficiencia e zero desmatamento",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Como voce prefere que a humanidade proteja as grandes florestas?:"[
            {
                texto:"Criando reservas totalmente intocadas onde a presenca humana e proibida para garantir o descanso da natureza.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Abrindo espacos controlados para ecoturismo e imersao para que as pessoas valorizem a fauna e a flora de perto",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Qual sera a sua maior despesa no futuro?:" [
            {
                texto:"A manutencao do seu robo mordomo que vive julgando as suas escolhas de vida",
                afirmacao:"afirmacao"
            },
            {
                texto:"O cafe gelado gourmet que custara o equivalente a meio salario minimo",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Qual ambiente sonoro voce escolheria para a sua rotina no futuro?",
        alternativas: [
            {
                texto: "O som constante do vento nas arvores e o canto dos passaros em um bairro arborizado",
                afirmacao:"afirmacao"
            },
            {
                texto: "O silencio absoluto de uma casa inteligente integrada a um ecossistema interno sustentavel e climatizado",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();