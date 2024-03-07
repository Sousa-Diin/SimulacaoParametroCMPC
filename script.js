
document.getElementById("box-title").textContent = title;

document.getElementById('calcular').addEventListener('click', function() {
    var horimetro = parseFloat(document.getElementById('horimetro').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (!isNaN(horimetro) && !isNaN(peso)) {
        var varPorKm = kmAge( horimetro ); // Exemplo de cálculo de variação por quilômetro
        var varPorPeso = variationByWeight ( peso ); // Exemplo de cálculo de variação por peso

        document.getElementById('varPorKm').innerText = "Variação por Km: " + varPorKm.toFixed(2);
        document.getElementById('varPorPeso').innerText = "Variação por Peso: " + varPorPeso.toFixed(2);
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
    document.getElementById('horimetro').value = "";
    document.getElementById('peso').value = "";
});

