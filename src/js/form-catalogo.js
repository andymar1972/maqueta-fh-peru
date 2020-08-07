const inputInversionCatalogo = document.getElementById(
  "form-catalogo-inversion"
);
const inputCantidadCatalogo = document.getElementById("form-catalogo-numero");
if (inputInversionCatalogo && inputCantidadCatalogo) {
  let monto = parseFloat(inputInversionCatalogo.textContent);
  let sumaCatalogo;
  let cantidadCatalogo;

  const procesoMultiplicacionPago = (evento) => {
    if (evento.target.value <= 0) {
      return false;
    } else {
      cantidadCatalogo = evento.target.value;
      sumaCatalogo = monto * cantidadCatalogo;
      inputInversionCatalogo.textContent = "" + sumaCatalogo;
    }
  };

  inputCantidadCatalogo.addEventListener("change", (e) => {
    procesoMultiplicacionPago(e);
  });
  inputCantidadCatalogo.addEventListener("input", (e) => {
    procesoMultiplicacionPago(e);
  });
}
