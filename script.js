title = "Simulação - AXOR 3344 6x4 ";

document.getElementById("calcular").addEventListener("click", function () {
  var horimetro = parseFloat(document.getElementById("horimetro").value);
  var peso = parseFloat(document.getElementById("peso").value);

  if (!isNaN(horimetro) && !isNaN(peso)) {
    varPorKm = kmAge(horimetro); // Exemplo de cálculo de variação por quilômetro
    varPorPeso = variationByWeight(peso) * 100; // Exemplo de cálculo de variação por peso
    console.log((varPorKm < 0));
    console.log((varPorPeso < 0));
    
    console.log("varPorPeso - Positivo:", (Number(varPorKm) < 0) ? 'Subtrai' : 'Soma');
    const SEED = 14.5;
    let route_average = 2.18;
    route = SEED * route_average;

    document.getElementById("ideal_average").innerText = Number(2.4);
    document.getElementById("discount").innerHTML = Number(
      /* (route + (Number(varPorPeso)) + Number(varPorKm)) */ Math.abs(route + varPorPeso + varPorKm)
    );
    document.getElementById("tot_variation").innerHTML = Number(
      2.4 * (1 * (Math.abs(Number((route + varPorPeso + varPorKm))))/100)
    );

    document.getElementById("varPorKm").innerText =
      "Variação por Km: " + varPorKm;
    document.getElementById("varPorPeso").innerText =
      "Variação por Peso: " + varPorPeso;
    document.getElementById("route").innerText = `Rota${route.toFixed(2)}%`;
  } else {
    alert("Por favor, preencha os campos corretamente.");
  }
  document.getElementById("horimetro").value = "";
  document.getElementById("peso").value = "";
})