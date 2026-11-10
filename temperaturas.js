function convertir() {
  // 1. Obtener los datos
  const campo = document.getElementById("temperatura");
  const tipo = document.getElementById("tipo").value;
  const resultado = document.getElementById("resultado");

  // 2. Validar que no esté vacío
  if (campo.value === "") {
    alert("Por favor ingresa una temperatura.");
    return; // detiene la función
  }

  const temperatura = parseFloat(campo.value);
  let convertida, textoTipo, unidadOrigen, unidadDestino;

  // 3. Operación según el tipo
  if (tipo === "cf") {
    convertida = (temperatura * 9) / 5 + 32;
    textoTipo = "Celsius a Fahrenheit";
    unidadOrigen = "°C";
    unidadDestino = "°F";
  } else {
    convertida = ((temperatura - 32) * 5) / 9;
    textoTipo = "Fahrenheit a Celsius";
    unidadOrigen = "°F";
    unidadDestino = "°C";
  }

  // Redondear a 2 decimales (86.00 se muestra como 86)
  convertida = Number(convertida.toFixed(2));

  // 4. Mostrar en la página
  resultado.innerHTML = `
    <p>Temperatura ingresada: ${temperatura} ${unidadOrigen}</p>
    <p>Tipo de conversión: ${textoTipo}</p>
    <p><strong>Resultado: ${convertida} ${unidadDestino}</strong></p>
  `;
}

// Evento: al hacer clic en el botón se ejecuta convertir()
document.getElementById("btnConvertir").addEventListener("click", convertir);
