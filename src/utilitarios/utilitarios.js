var title = "Atualize a variavel title c/ tilulo atual";

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
  "Darf",
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

// Chama a função para criar o select
var select = criarSelect(opcoes);

var modelos = criarSelect(my_modelo);

// Adiciona o select ao elemento com id "container" (altere conforme necessário)
document.body.appendChild(select);
document.body.appendChild(modelos);
