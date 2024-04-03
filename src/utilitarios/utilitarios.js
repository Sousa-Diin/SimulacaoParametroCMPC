var title = "Atualize a variavel title c/ tilulo atual";

var varPorKm = undefined;
var varPorPeso = null;
var route = 0;

// Vetor com as opções
var opcoes = [
  "aracruz",
  "bracell",
  "cmpc",
  "jacarei",
  "limeira",
  "mmi",
  "sete lagoas",
  "tres lagoas",
  
];
var my_modelo = [
  "Mercedes",
  "Scania",
  "Volvo",
  "Daf",
];

function criarSelect(opcoes) {
  // Cria o elemento select
  var select = document.createElement("select");
  select.id = "_select";

  // Adiciona as opções ao select
  for (var i = 0; i < opcoes.length; i++) {
    var option = document.createElement("option");
    option.value = opcoes[i];
    option.text = opcoes[i].toUpperCase();
    select.appendChild(option);
  }

  return select;
}

function criarTitle( title){
  var descricao = document.createElement("h2");
  descricao.id = "box-title";;
  return descricao.innerText = title;

}
// Chama a função para criar o select
var select = criarSelect(opcoes);

var modelos = criarSelect(my_modelo);

// Adiciona o select ao elemento com id "container" (altere conforme necessário)
document.getElementById("container").appendChild(modelos);
document.getElementById("container").appendChild(select);


/* CODIGO RESPONSAVÉL POR GERAR UMA APRTOXIMAÇÃO DA ROTA  */

function gerarRota(parametro) {
  // Dados fornecidos
  var peso = -42;
  var km_rodado = -1;
  var mediaIdeal = 2.40;

  // Valor inicial para a rota
  var rotaInicial = 1; // Valor inicial para tentativa
  
  // Tolerância para a precisão da média da rota
  var tolerancia = 0.01;

  // Função para calcular a média da rota com um valor específico de rota
  function calcularMediaDaRota(rota) {
      // Cálculo do desconto (módulo da soma)
      var desconto = Math.abs(rota + peso + km_rodado);
      
      // Cálculo da variação total
      var totalVariacao = mediaIdeal * 1 * desconto;
      
      // Cálculo da média da rota
      var mediaDaRota = mediaIdeal - totalVariacao;
      
      return mediaDaRota;
  }

  // Inicia a busca pelo valor da rota
  var rota = rotaInicial;
  while (true) {
      var mediaDaRota = calcularMediaDaRota(rota);
      // Verifica se a média está dentro da tolerância do parâmetro
      if (Math.abs(mediaDaRota - parametro) <= tolerancia) {
          return rota; // Retorna o valor da rota
      }
      // Incrementa a rota para tentativa
      rota += 0.01; // Incremento de 0.01, ajuste conforme necessário
  }
}

// Exemplo de uso da função com o parâmetro da média desejada
var parametro = 2.18;
var valorDaRota = gerarRota(parametro);
console.log("Valor da rota:", valorDaRota.toFixed(5));
//console.log("Valor da rota:", valorDaRota.toFixed(2));


/////////////////////////////////////////////
function gerarRota(parametro) {
  // Dados fornecidos
  var peso = -42;
  var km_rodado = -1;
  var mediaIdeal = 2.40;

  // Inicializa a rota com um valor inicial (pode ser ajustado conforme necessário)
  var rota = 1;

  // Define um limite de iterações para evitar loops infinitos
  var limiteIteracoes = 10000;
  var iteracoes = 0;

  // Realiza iterações até encontrar a rota desejada ou atingir o limite
  while (true) {
      var desconto = Math.abs(rota + peso + km_rodado);
      var totalVariacao = (mediaIdeal * 1 * desconto);
      var mediaDaRota = (mediaIdeal - totalVariacao);
      console.log("desconto: ",desconto);
      console.log("total da variação: ", totalVariacao);
      console.log("média da Rota: ", mediaDaRota);

     /*  if ( (parametro - mediaDaRota) < 0.004 ){
        console.log("minha_rotta: ", rota);
        return;
      } */
      // Verifica se a média encontrada é suficientemente próxima do parâmetro desejado
      if (Math.abs(mediaDaRota - parametro) < 0.02) {
          return rota;
      }

      // Incrementa a rota para a próxima iteração
      rota += 0.05;

      // Verifica o limite de iterações
      if (iteracoes++ > limiteIteracoes) {
          console.error("Limite de iterações atingido. Não foi possível encontrar a rota desejada.");
          return null;
      }
  }
}

// Exemplo de uso da função com o parâmetro 2.18
var parametro = 2.18;
var rotaEncontrada = gerarRota(parametro);
console.log("Valor da rota para a média_da_rota =", parametro + ":", rotaEncontrada);
