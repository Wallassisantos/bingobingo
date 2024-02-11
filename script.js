let numerosSorteados = [];

function sortearNumero() {
  if (numerosSorteados.length === 80) {
    alert("Todos os números já foram sorteados!");
    return;
  }

  let numeroSorteado;
  do {
    numeroSorteado = Math.floor(Math.random() * 80) + 1;
  } while (numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);
  exibirNumero(numeroSorteado);
}

function exibirNumero(numero) {
  let numerosDiv = document.getElementById("numeros");
  numerosDiv.innerHTML += `${numero} `;
}

function recomecarJogo() {
  numerosSorteados = [];
  document.getElementById("numeros").innerHTML = "";
}
