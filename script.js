const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual cenário você prefere para as cidades do futuro?:" [
            {
                texto: "Prédios totalmente integrados com plantas, hortas nas coberturas e ruas tomadas por árvores",
                afirmacao: "afirmacao"
            },
            {
                texto: "Arquitetura futurista minimalista com grandes áreas de parques tecnológicos isolados",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Quando se trata da nossa alimentação nas próximas décadas, qual caminho você escolheria?:" [
            {
                texto:"Consumir majoritariamente alimentos orgânicos cultivados em hortas comunitárias locais:"afirmacao"
            },
            {
                texto: "Adotar alimentos inovadores produzidos em laboratório com alta eficiência e zero desmatamento:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Como você prefere que a humanidade proteja as grandes florestas?:"[
            {
                texto:"Criando reservas totalmente intocadas onde a presença humana é proibida para garantir o descanso da natureza.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Abrindo espaços controlados para ecoturismo e imersão para que as pessoas valorizem a fauna e a flora de perto",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Qual será a sua maior despesa no futuro?:" [
            {
                texto:"A manutenção do seu robô mordomo que vive julgando as suas escolhas de vida",
                afirmacao:"afirmacao"
            },
            {
                texto:"O café gelado gourmet que custará o equivalente a meio salário mínimo",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Qual ambiente sonoro você escolheria para a sua rotina no futuro?",
        alternativas: [
            {
                texto: "O som constante do vento nas árvores e o canto dos pássaros em um bairro arborizado",
                afirmacao:"afirmacao"
            },
            {
                texto: "O silêncio absoluto de uma casa inteligente integrada a um ecossistema interno sustentável e climatizado",
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