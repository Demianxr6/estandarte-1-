document.getElementById('inversionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const creditos = parseInt(document.getElementById('creditos').value);

  const COSTO_POR_CREDITO = 50;
  const COSTO_MATRICULA = 250;

  const montoCreditos = creditos * COSTO_POR_CREDITO;
  let montoMatricula = 0;
  let mensajeMatricula = "";

  if (creditos > 12) {
    montoMatricula = 0;
    mensajeMatricula = "(Exonerado por más de 12 créditos)";
  } else {
    montoMatricula = COSTO_MATRICULA;
    mensajeMatricula = "";
  }

  const inversionTotal = montoCreditos + montoMatricula;

  document.getElementById('resCantCreditos').textContent = creditos;
  document.getElementById('resMontoCreditos').textContent = montoCreditos.toFixed(2);
  document.getElementById('resMatricula').textContent = montoMatricula.toFixed(2);
  document.getElementById('resEstadoMatricula').textContent = mensajeMatricula;
  document.getElementById('resTotal').textContent = inversionTotal.toFixed(2);

  document.getElementById('resultado').classList.remove('hidden');
});